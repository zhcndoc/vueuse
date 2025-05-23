import type { Plugin } from 'vite'
import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { format } from 'prettier'
import ts from 'typescript'
import { packages } from '../../../meta/packages'
import { version as currentVersion } from '../../../package.json'
import { functionNames, getFunction } from '../../../packages/metadata/metadata'
import { getTypeDefinition, replacer } from '../../../scripts/utils'

export function MarkdownTransform(): Plugin {
  const DIR_TYPES = resolve(__dirname, '../../../types/packages')
  const hasTypes = existsSync(DIR_TYPES)

  if (!hasTypes)
    console.warn('No types dist found, run `npm run build:types` first.')

  return {
    name: 'vueuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      // linkify function names
      code = code.replace(
        new RegExp(`\`({${functionNames.join('|')}})\`(.)`, 'g'),
        (_, name, ending) => {
          if (ending === ']') // already a link
            return _
          const fn = getFunction(name)!
          return `[\`${fn.name}\`](${fn.docs})${ending}`
        },
      )
      // convert links to relative
      code = code.replace(/https?:\/\/vueuse\.org\//g, '/')

      const [pkg, _name, i] = id.split('/').slice(-3)

      const name = functionNames.find(n => n.toLowerCase() === _name.toLowerCase()) || _name

      if (functionNames.includes(name) && i === 'index.md') {
        const frontmatterEnds = code.indexOf('---\n\n')
        const firstHeader = code.search(/\n#{2,6}\s.+/)
        const sliceIndex = firstHeader < 0 ? frontmatterEnds < 0 ? 0 : frontmatterEnds + 4 : firstHeader

        // Insert JS/TS code blocks
        code = await replaceAsync(code, /\n```ts( [^\n]+)?\n(.+?)\n```\n/gs, async (_, meta = '', snippet = '') => {
          const formattedTS = (await format(snippet.replace(/\n+/g, '\n'), { semi: false, singleQuote: true, parser: 'typescript' })).trim()
          const js = ts.transpileModule(formattedTS, {
            compilerOptions: { target: 99 },
          })
          const formattedJS = (await format(js.outputText, { semi: false, singleQuote: true, parser: 'typescript' }))
            .trim()
          if (formattedJS === formattedTS)
            return _
          return `
<CodeToggle>
<div class="code-block-ts">

\`\`\`ts ${meta}
${snippet}
\`\`\`

</div>
<div class="code-block-js">

\`\`\`js
${formattedJS}
\`\`\`

</div>
</CodeToggle>\n`
        })

        const { footer, header } = await getFunctionMarkdown(pkg, name)

        if (hasTypes)
          code = replacer(code, footer, 'FOOTER', 'tail')
        if (header)
          code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex)

        code = code
          .replace(/(# \w+)\n/, `$1\n\n<FunctionInfo fn="${name}"/>\n`)
          .replace(/## (Components?(?:\sUsage)?)/i, '## $1\n<LearnMoreComponents />\n\n')
          .replace(/## (Directives?(?:\sUsage)?)/i, '## $1\n<LearnMoreDirectives />\n\n')
      }

      return code
    },
  }
}

const DIR_SRC = resolve(__dirname, '../..')
const GITHUB_BLOB_URL = 'https://github.com/vueuse/vueuse/blob/main/packages'

export async function getFunctionMarkdown(pkg: string, name: string) {
  const URL = `${GITHUB_BLOB_URL}/${pkg}/${name}`

  const dirname = join(DIR_SRC, pkg, name)
  const demoPath = ['demo.vue', 'demo.client.vue'].find(i => existsSync(join(dirname, i)))
  const types = await getTypeDefinition(pkg, name)

  if (!types)
    console.warn(`No types found for ${pkg}/${name}`)

  let typingSection = ''

  if (types) {
    const code = `\`\`\`typescript\n${types.trim()}\n\`\`\``
    typingSection = types.length > 1000
      ? `
## 类型声明

<details>
<summary op50 italic cursor-pointer select-none>显示类型声明</summary>

${code}

</details>
`
      : `\n## 类型声明\n\n${code}`
  }

  const links = ([
    ['源码', `${URL}/index.ts`],
    demoPath ? ['演示', `${URL}/${demoPath}`] : undefined,
    ['文档', `${URL}/index.md`],
  ])
    .filter(i => i)
    .map(i => `[${i![0]}](${i![1]})`)
    .join(' • ')

  const sourceSection = `## 源码\n\n${links}\n`
  const ContributorsSection = `
## 贡献者

<Contributors fn="${name}" />
  `
  const changelogSection = `
## 更新日志

<Changelog fn="${name}" />
`

  const demoSection = demoPath
    ? demoPath.endsWith('.client.vue')
      ? `
<script setup>
import { defineAsyncComponent } from 'vue'
const Demo = defineAsyncComponent(() => import('./${demoPath}'))
import DemoRaw from \'./${demoPath}\?raw'
import { useStore } from '@vue/repl'

const store = useStore({
  template: {
    value: {
        welcomeSFC: DemoRaw
    }
  }
})

const serialized = store.serialize()
</script>

## Demo

<DemoContainer>
<p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a><a :href="\`https://playground.vueuse.org/?vueuse=${currentVersion}\${serialized}\`" target="_blank">playground (beta)</a></p>
<ClientOnly>
  <Suspense>
    <Demo/>
    <template #fallback>
      Loading demo...
    </template>
  </Suspense>
</ClientOnly>
</DemoContainer>
`
      : `
<script setup>
import Demo from \'./${demoPath}\'
import DemoRaw from \'./${demoPath}\?raw'
import { useStore } from '@vue/repl'

const store = useStore({
  template: {
    value: {
        welcomeSFC: DemoRaw
    }
  }
})

const serialized = store.serialize()
</script>

## 示例

<DemoContainer>
<p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">源码</a><a :href="\`https://playground.vueuse.org/?vueuse=${currentVersion}\${serialized}\`" target="_blank">playground (beta)</a></p>
<Demo/>
</DemoContainer>
`
    : ''
  const packageNote = packages.find(p => p.name === pkg)!.addon
    ? `Available in the <a href="/${pkg}/README">@vueuse/${pkg}</a> add-on.\n`
    : ''

  const footer = `${typingSection}\n\n${sourceSection}\n${ContributorsSection}\n${changelogSection}\n`

  const header = demoSection + packageNote

  return {
    footer,
    header,
  }
}

function replaceAsync(str: string, match: RegExp, replacer: (substring: string, ...args: any[]) => Promise<string>) {
  const promises: Promise<string>[] = []
  str.replace(match, (...args) => {
    promises.push(replacer(...args))
    return ''
  })
  return Promise.all(promises).then(replacements => str.replace(match, () => replacements.shift()!))
}
