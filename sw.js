const packageNames = [
	["/core/onclickoutside/", {
		"url": "/core/onClickOutside/",
		"hash": "onClickOutside"
	}],
	["/core/onelementremoval/", {
		"url": "/core/onElementRemoval/",
		"hash": "onElementRemoval"
	}],
	["/core/onlongpress/", {
		"url": "/core/onLongPress/",
		"hash": "onLongPress"
	}],
	["/core/onstarttyping/", {
		"url": "/core/onStartTyping/",
		"hash": "onStartTyping"
	}],
	["/core/usebattery/", {
		"url": "/core/useBattery/",
		"hash": "useBattery"
	}],
	["/core/usemagickeys/", {
		"url": "/core/useMagicKeys/",
		"hash": "useMagicKeys"
	}],
	["/core/useactiveelement/", {
		"url": "/core/useActiveElement/",
		"hash": "useActiveElement"
	}],
	["/shared/usetimeout/", {
		"url": "/shared/useTimeout/",
		"hash": "useTimeout"
	}],
	["/core/usecountdown/", {
		"url": "/core/useCountdown/",
		"hash": "useCountdown"
	}],
	["/core/usebluetooth/", {
		"url": "/core/useBluetooth/",
		"hash": "useBluetooth"
	}],
	["/core/computedinject/", {
		"url": "/core/computedInject/",
		"hash": "computedInject"
	}],
	["/core/createtemplatepromise/", {
		"url": "/core/createTemplatePromise/",
		"hash": "createTemplatePromise"
	}],
	["/core/unrefelement/", {
		"url": "/core/unrefElement/",
		"hash": "unrefElement"
	}],
	["/shared/createglobalstate/", {
		"url": "/shared/createGlobalState/",
		"hash": "createGlobalState"
	}],
	["/shared/createinjectionstate/", {
		"url": "/shared/createInjectionState/",
		"hash": "createInjectionState"
	}],
	["/shared/createsharedcomposable/", {
		"url": "/shared/createSharedComposable/",
		"hash": "createSharedComposable"
	}],
	["/shared/injectlocal/", {
		"url": "/shared/injectLocal/",
		"hash": "injectLocal"
	}],
	["/shared/providelocal/", {
		"url": "/shared/provideLocal/",
		"hash": "provideLocal"
	}],
	["/core/useasyncstate/", {
		"url": "/core/useAsyncState/",
		"hash": "useAsyncState"
	}],
	["/core/usedebouncedrefhistory/", {
		"url": "/core/useDebouncedRefHistory/",
		"hash": "useDebouncedRefHistory"
	}],
	["/shared/uselastchanged/", {
		"url": "/shared/useLastChanged/",
		"hash": "useLastChanged"
	}],
	["/core/uselocalstorage/", {
		"url": "/core/useLocalStorage/",
		"hash": "useLocalStorage"
	}],
	["/core/usemanualrefhistory/", {
		"url": "/core/useManualRefHistory/",
		"hash": "useManualRefHistory"
	}],
	["/core/userefhistory/", {
		"url": "/core/useRefHistory/",
		"hash": "useRefHistory"
	}],
	["/core/usesessionstorage/", {
		"url": "/core/useSessionStorage/",
		"hash": "useSessionStorage"
	}],
	["/core/usestorage/", {
		"url": "/core/useStorage/",
		"hash": "useStorage"
	}],
	["/core/usestorageasync/", {
		"url": "/core/useStorageAsync/",
		"hash": "useStorageAsync"
	}],
	["/core/usethrottledrefhistory/", {
		"url": "/core/useThrottledRefHistory/",
		"hash": "useThrottledRefHistory"
	}],
	["/core/usedocumentvisibility/", {
		"url": "/core/useDocumentVisibility/",
		"hash": "useDocumentVisibility"
	}],
	["/core/usedraggable/", {
		"url": "/core/useDraggable/",
		"hash": "useDraggable"
	}],
	["/core/usedropzone/", {
		"url": "/core/useDropZone/",
		"hash": "useDropZone"
	}],
	["/core/useelementbounding/", {
		"url": "/core/useElementBounding/",
		"hash": "useElementBounding"
	}],
	["/core/useelementsize/", {
		"url": "/core/useElementSize/",
		"hash": "useElementSize"
	}],
	["/core/useelementvisibility/", {
		"url": "/core/useElementVisibility/",
		"hash": "useElementVisibility"
	}],
	["/core/useintersectionobserver/", {
		"url": "/core/useIntersectionObserver/",
		"hash": "useIntersectionObserver"
	}],
	["/core/usemouseinelement/", {
		"url": "/core/useMouseInElement/",
		"hash": "useMouseInElement"
	}],
	["/core/usemutationobserver/", {
		"url": "/core/useMutationObserver/",
		"hash": "useMutationObserver"
	}],
	["/core/useparentelement/", {
		"url": "/core/useParentElement/",
		"hash": "useParentElement"
	}],
	["/core/useresizeobserver/", {
		"url": "/core/useResizeObserver/",
		"hash": "useResizeObserver"
	}],
	["/core/usewindowfocus/", {
		"url": "/core/useWindowFocus/",
		"hash": "useWindowFocus"
	}],
	["/core/usewindowscroll/", {
		"url": "/core/useWindowScroll/",
		"hash": "useWindowScroll"
	}],
	["/core/usewindowsize/", {
		"url": "/core/useWindowSize/",
		"hash": "useWindowSize"
	}],
	["/core/usebreakpoints/", {
		"url": "/core/useBreakpoints/",
		"hash": "useBreakpoints"
	}],
	["/core/usebroadcastchannel/", {
		"url": "/core/useBroadcastChannel/",
		"hash": "useBroadcastChannel"
	}],
	["/core/usebrowserlocation/", {
		"url": "/core/useBrowserLocation/",
		"hash": "useBrowserLocation"
	}],
	["/core/useclipboard/", {
		"url": "/core/useClipboard/",
		"hash": "useClipboard"
	}],
	["/core/useclipboarditems/", {
		"url": "/core/useClipboardItems/",
		"hash": "useClipboardItems"
	}],
	["/core/usecolormode/", {
		"url": "/core/useColorMode/",
		"hash": "useColorMode"
	}],
	["/core/usecssvar/", {
		"url": "/core/useCssVar/",
		"hash": "useCssVar"
	}],
	["/core/usedark/", {
		"url": "/core/useDark/",
		"hash": "useDark"
	}],
	["/core/useeventlistener/", {
		"url": "/core/useEventListener/",
		"hash": "useEventListener"
	}],
	["/core/useeyedropper/", {
		"url": "/core/useEyeDropper/",
		"hash": "useEyeDropper"
	}],
	["/core/usefavicon/", {
		"url": "/core/useFavicon/",
		"hash": "useFavicon"
	}],
	["/core/usefiledialog/", {
		"url": "/core/useFileDialog/",
		"hash": "useFileDialog"
	}],
	["/core/usefilesystemaccess/", {
		"url": "/core/useFileSystemAccess/",
		"hash": "useFileSystemAccess"
	}],
	["/core/usefullscreen/", {
		"url": "/core/useFullscreen/",
		"hash": "useFullscreen"
	}],
	["/core/usegamepad/", {
		"url": "/core/useGamepad/",
		"hash": "useGamepad"
	}],
	["/core/useimage/", {
		"url": "/core/useImage/",
		"hash": "useImage"
	}],
	["/core/usemediacontrols/", {
		"url": "/core/useMediaControls/",
		"hash": "useMediaControls"
	}],
	["/core/usemediaquery/", {
		"url": "/core/useMediaQuery/",
		"hash": "useMediaQuery"
	}],
	["/core/usememory/", {
		"url": "/core/useMemory/",
		"hash": "useMemory"
	}],
	["/core/useobjecturl/", {
		"url": "/core/useObjectUrl/",
		"hash": "useObjectUrl"
	}],
	["/core/useperformanceobserver/", {
		"url": "/core/usePerformanceObserver/",
		"hash": "usePerformanceObserver"
	}],
	["/core/usepermission/", {
		"url": "/core/usePermission/",
		"hash": "usePermission"
	}],
	["/core/usepreferredcolorscheme/", {
		"url": "/core/usePreferredColorScheme/",
		"hash": "usePreferredColorScheme"
	}],
	["/core/usepreferredcontrast/", {
		"url": "/core/usePreferredContrast/",
		"hash": "usePreferredContrast"
	}],
	["/core/usepreferreddark/", {
		"url": "/core/usePreferredDark/",
		"hash": "usePreferredDark"
	}],
	["/core/usepreferredlanguages/", {
		"url": "/core/usePreferredLanguages/",
		"hash": "usePreferredLanguages"
	}],
	["/core/usepreferredreducedmotion/", {
		"url": "/core/usePreferredReducedMotion/",
		"hash": "usePreferredReducedMotion"
	}],
	["/core/usepreferredreducedtransparency/", {
		"url": "/core/usePreferredReducedTransparency/",
		"hash": "usePreferredReducedTransparency"
	}],
	["/core/usescreenorientation/", {
		"url": "/core/useScreenOrientation/",
		"hash": "useScreenOrientation"
	}],
	["/core/usescreensafearea/", {
		"url": "/core/useScreenSafeArea/",
		"hash": "useScreenSafeArea"
	}],
	["/core/usescripttag/", {
		"url": "/core/useScriptTag/",
		"hash": "useScriptTag"
	}],
	["/core/useshare/", {
		"url": "/core/useShare/",
		"hash": "useShare"
	}],
	["/core/usessrwidth/", {
		"url": "/core/useSSRWidth/",
		"hash": "useSSRWidth"
	}],
	["/core/usestyletag/", {
		"url": "/core/useStyleTag/",
		"hash": "useStyleTag"
	}],
	["/core/usetextareaautosize/", {
		"url": "/core/useTextareaAutosize/",
		"hash": "useTextareaAutosize"
	}],
	["/core/usetextdirection/", {
		"url": "/core/useTextDirection/",
		"hash": "useTextDirection"
	}],
	["/core/usetitle/", {
		"url": "/core/useTitle/",
		"hash": "useTitle"
	}],
	["/core/useurlsearchparams/", {
		"url": "/core/useUrlSearchParams/",
		"hash": "useUrlSearchParams"
	}],
	["/core/usevibrate/", {
		"url": "/core/useVibrate/",
		"hash": "useVibrate"
	}],
	["/core/usewakelock/", {
		"url": "/core/useWakeLock/",
		"hash": "useWakeLock"
	}],
	["/core/usewebnotification/", {
		"url": "/core/useWebNotification/",
		"hash": "useWebNotification"
	}],
	["/core/usewebworker/", {
		"url": "/core/useWebWorker/",
		"hash": "useWebWorker"
	}],
	["/core/usewebworkerfn/", {
		"url": "/core/useWebWorkerFn/",
		"hash": "useWebWorkerFn"
	}],
	["/core/onkeystroke/", {
		"url": "/core/onKeyStroke/",
		"hash": "onKeyStroke"
	}],
	["/core/usedevicemotion/", {
		"url": "/core/useDeviceMotion/",
		"hash": "useDeviceMotion"
	}],
	["/core/usedeviceorientation/", {
		"url": "/core/useDeviceOrientation/",
		"hash": "useDeviceOrientation"
	}],
	["/core/usedevicepixelratio/", {
		"url": "/core/useDevicePixelRatio/",
		"hash": "useDevicePixelRatio"
	}],
	["/core/usedeviceslist/", {
		"url": "/core/useDevicesList/",
		"hash": "useDevicesList"
	}],
	["/core/usedisplaymedia/", {
		"url": "/core/useDisplayMedia/",
		"hash": "useDisplayMedia"
	}],
	["/core/useelementbypoint/", {
		"url": "/core/useElementByPoint/",
		"hash": "useElementByPoint"
	}],
	["/core/useelementhover/", {
		"url": "/core/useElementHover/",
		"hash": "useElementHover"
	}],
	["/core/usefocus/", {
		"url": "/core/useFocus/",
		"hash": "useFocus"
	}],
	["/core/usefocuswithin/", {
		"url": "/core/useFocusWithin/",
		"hash": "useFocusWithin"
	}],
	["/core/usefps/", {
		"url": "/core/useFps/",
		"hash": "useFps"
	}],
	["/core/usegeolocation/", {
		"url": "/core/useGeolocation/",
		"hash": "useGeolocation"
	}],
	["/core/useidle/", {
		"url": "/core/useIdle/",
		"hash": "useIdle"
	}],
	["/core/useinfinitescroll/", {
		"url": "/core/useInfiniteScroll/",
		"hash": "useInfiniteScroll"
	}],
	["/core/usekeymodifier/", {
		"url": "/core/useKeyModifier/",
		"hash": "useKeyModifier"
	}],
	["/core/usemouse/", {
		"url": "/core/useMouse/",
		"hash": "useMouse"
	}],
	["/core/usemousepressed/", {
		"url": "/core/useMousePressed/",
		"hash": "useMousePressed"
	}],
	["/core/usenavigatorlanguage/", {
		"url": "/core/useNavigatorLanguage/",
		"hash": "useNavigatorLanguage"
	}],
	["/core/usenetwork/", {
		"url": "/core/useNetwork/",
		"hash": "useNetwork"
	}],
	["/core/useonline/", {
		"url": "/core/useOnline/",
		"hash": "useOnline"
	}],
	["/core/usepageleave/", {
		"url": "/core/usePageLeave/",
		"hash": "usePageLeave"
	}],
	["/core/useparallax/", {
		"url": "/core/useParallax/",
		"hash": "useParallax"
	}],
	["/core/usepointer/", {
		"url": "/core/usePointer/",
		"hash": "usePointer"
	}],
	["/core/usepointerlock/", {
		"url": "/core/usePointerLock/",
		"hash": "usePointerLock"
	}],
	["/core/usepointerswipe/", {
		"url": "/core/usePointerSwipe/",
		"hash": "usePointerSwipe"
	}],
	["/core/usescroll/", {
		"url": "/core/useScroll/",
		"hash": "useScroll"
	}],
	["/core/usescrolllock/", {
		"url": "/core/useScrollLock/",
		"hash": "useScrollLock"
	}],
	["/core/usespeechrecognition/", {
		"url": "/core/useSpeechRecognition/",
		"hash": "useSpeechRecognition"
	}],
	["/core/usespeechsynthesis/", {
		"url": "/core/useSpeechSynthesis/",
		"hash": "useSpeechSynthesis"
	}],
	["/core/useswipe/", {
		"url": "/core/useSwipe/",
		"hash": "useSwipe"
	}],
	["/core/usetextselection/", {
		"url": "/core/useTextSelection/",
		"hash": "useTextSelection"
	}],
	["/core/useusermedia/", {
		"url": "/core/useUserMedia/",
		"hash": "useUserMedia"
	}],
	["/core/useeventsource/", {
		"url": "/core/useEventSource/",
		"hash": "useEventSource"
	}],
	["/core/usefetch/", {
		"url": "/core/useFetch/",
		"hash": "useFetch"
	}],
	["/core/usewebsocket/", {
		"url": "/core/useWebSocket/",
		"hash": "useWebSocket"
	}],
	["/core/useanimate/", {
		"url": "/core/useAnimate/",
		"hash": "useAnimate"
	}],
	["/shared/useinterval/", {
		"url": "/shared/useInterval/",
		"hash": "useInterval"
	}],
	["/shared/useintervalfn/", {
		"url": "/shared/useIntervalFn/",
		"hash": "useIntervalFn"
	}],
	["/core/usenow/", {
		"url": "/core/useNow/",
		"hash": "useNow"
	}],
	["/core/useraffn/", {
		"url": "/core/useRafFn/",
		"hash": "useRafFn"
	}],
	["/shared/usetimeoutfn/", {
		"url": "/shared/useTimeoutFn/",
		"hash": "useTimeoutFn"
	}],
	["/core/usetimestamp/", {
		"url": "/core/useTimestamp/",
		"hash": "useTimestamp"
	}],
	["/core/usetransition/", {
		"url": "/core/useTransition/",
		"hash": "useTransition"
	}],
	["/core/createreusabletemplate/", {
		"url": "/core/createReusableTemplate/",
		"hash": "createReusableTemplate"
	}],
	["/core/templateref/", {
		"url": "/core/templateRef/",
		"hash": "templateRef"
	}],
	["/shared/tryonbeforemount/", {
		"url": "/shared/tryOnBeforeMount/",
		"hash": "tryOnBeforeMount"
	}],
	["/shared/tryonbeforeunmount/", {
		"url": "/shared/tryOnBeforeUnmount/",
		"hash": "tryOnBeforeUnmount"
	}],
	["/shared/tryonmounted/", {
		"url": "/shared/tryOnMounted/",
		"hash": "tryOnMounted"
	}],
	["/shared/tryonscopedispose/", {
		"url": "/shared/tryOnScopeDispose/",
		"hash": "tryOnScopeDispose"
	}],
	["/shared/tryonunmounted/", {
		"url": "/shared/tryOnUnmounted/",
		"hash": "tryOnUnmounted"
	}],
	["/core/usecurrentelement/", {
		"url": "/core/useCurrentElement/",
		"hash": "useCurrentElement"
	}],
	["/core/usemounted/", {
		"url": "/core/useMounted/",
		"hash": "useMounted"
	}],
	["/core/usetemplaterefslist/", {
		"url": "/core/useTemplateRefsList/",
		"hash": "useTemplateRefsList"
	}],
	["/core/usevirtuallist/", {
		"url": "/core/useVirtualList/",
		"hash": "useVirtualList"
	}],
	["/core/usevmodel/", {
		"url": "/core/useVModel/",
		"hash": "useVModel"
	}],
	["/core/usevmodels/", {
		"url": "/core/useVModels/",
		"hash": "useVModels"
	}],
	["/shared/until/", {
		"url": "/shared/until/",
		"hash": "until"
	}],
	["/shared/watcharray/", {
		"url": "/shared/watchArray/",
		"hash": "watchArray"
	}],
	["/shared/watchatmost/", {
		"url": "/shared/watchAtMost/",
		"hash": "watchAtMost"
	}],
	["/shared/watchdebounced/", {
		"url": "/shared/watchDebounced/",
		"hash": "watchDebounced"
	}],
	["/shared/watchdeep/", {
		"url": "/shared/watchDeep/",
		"hash": "watchDeep"
	}],
	["/shared/watchignorable/", {
		"url": "/shared/watchIgnorable/",
		"hash": "watchIgnorable"
	}],
	["/shared/watchimmediate/", {
		"url": "/shared/watchImmediate/",
		"hash": "watchImmediate"
	}],
	["/shared/watchonce/", {
		"url": "/shared/watchOnce/",
		"hash": "watchOnce"
	}],
	["/shared/watchpausable/", {
		"url": "/shared/watchPausable/",
		"hash": "watchPausable"
	}],
	["/shared/watchthrottled/", {
		"url": "/shared/watchThrottled/",
		"hash": "watchThrottled"
	}],
	["/shared/watchtriggerable/", {
		"url": "/shared/watchTriggerable/",
		"hash": "watchTriggerable"
	}],
	["/shared/watchwithfilter/", {
		"url": "/shared/watchWithFilter/",
		"hash": "watchWithFilter"
	}],
	["/shared/whenever/", {
		"url": "/shared/whenever/",
		"hash": "whenever"
	}],
	["/core/computedasync/", {
		"url": "/core/computedAsync/",
		"hash": "computedAsync"
	}],
	["/shared/computedeager/", {
		"url": "/shared/computedEager/",
		"hash": "computedEager"
	}],
	["/shared/computedwithcontrol/", {
		"url": "/shared/computedWithControl/",
		"hash": "computedWithControl"
	}],
	["/shared/createref/", {
		"url": "/shared/createRef/",
		"hash": "createRef"
	}],
	["/shared/extendref/", {
		"url": "/shared/extendRef/",
		"hash": "extendRef"
	}],
	["/shared/reactify/", {
		"url": "/shared/reactify/",
		"hash": "reactify"
	}],
	["/shared/reactifyobject/", {
		"url": "/shared/reactifyObject/",
		"hash": "reactifyObject"
	}],
	["/shared/reactivecomputed/", {
		"url": "/shared/reactiveComputed/",
		"hash": "reactiveComputed"
	}],
	["/shared/reactiveomit/", {
		"url": "/shared/reactiveOmit/",
		"hash": "reactiveOmit"
	}],
	["/shared/reactivepick/", {
		"url": "/shared/reactivePick/",
		"hash": "reactivePick"
	}],
	["/shared/refautoreset/", {
		"url": "/shared/refAutoReset/",
		"hash": "refAutoReset"
	}],
	["/shared/refdebounced/", {
		"url": "/shared/refDebounced/",
		"hash": "refDebounced"
	}],
	["/shared/refdefault/", {
		"url": "/shared/refDefault/",
		"hash": "refDefault"
	}],
	["/shared/refmanualreset/", {
		"url": "/shared/refManualReset/",
		"hash": "refManualReset"
	}],
	["/shared/refthrottled/", {
		"url": "/shared/refThrottled/",
		"hash": "refThrottled"
	}],
	["/shared/refwithcontrol/", {
		"url": "/shared/refWithControl/",
		"hash": "refWithControl"
	}],
	["/shared/syncref/", {
		"url": "/shared/syncRef/",
		"hash": "syncRef"
	}],
	["/shared/syncrefs/", {
		"url": "/shared/syncRefs/",
		"hash": "syncRefs"
	}],
	["/shared/toreactive/", {
		"url": "/shared/toReactive/",
		"hash": "toReactive"
	}],
	["/shared/toref/", {
		"url": "/shared/toRef/",
		"hash": "toRef"
	}],
	["/shared/torefs/", {
		"url": "/shared/toRefs/",
		"hash": "toRefs"
	}],
	["/shared/usearraydifference/", {
		"url": "/shared/useArrayDifference/",
		"hash": "useArrayDifference"
	}],
	["/shared/usearrayevery/", {
		"url": "/shared/useArrayEvery/",
		"hash": "useArrayEvery"
	}],
	["/shared/usearrayfilter/", {
		"url": "/shared/useArrayFilter/",
		"hash": "useArrayFilter"
	}],
	["/shared/usearrayfind/", {
		"url": "/shared/useArrayFind/",
		"hash": "useArrayFind"
	}],
	["/shared/usearrayfindindex/", {
		"url": "/shared/useArrayFindIndex/",
		"hash": "useArrayFindIndex"
	}],
	["/shared/usearrayfindlast/", {
		"url": "/shared/useArrayFindLast/",
		"hash": "useArrayFindLast"
	}],
	["/shared/usearrayincludes/", {
		"url": "/shared/useArrayIncludes/",
		"hash": "useArrayIncludes"
	}],
	["/shared/usearrayjoin/", {
		"url": "/shared/useArrayJoin/",
		"hash": "useArrayJoin"
	}],
	["/shared/usearraymap/", {
		"url": "/shared/useArrayMap/",
		"hash": "useArrayMap"
	}],
	["/shared/usearrayreduce/", {
		"url": "/shared/useArrayReduce/",
		"hash": "useArrayReduce"
	}],
	["/shared/usearraysome/", {
		"url": "/shared/useArraySome/",
		"hash": "useArraySome"
	}],
	["/shared/usearrayunique/", {
		"url": "/shared/useArrayUnique/",
		"hash": "useArrayUnique"
	}],
	["/core/usesorted/", {
		"url": "/core/useSorted/",
		"hash": "useSorted"
	}],
	["/shared/usedateformat/", {
		"url": "/shared/useDateFormat/",
		"hash": "useDateFormat"
	}],
	["/core/usetimeago/", {
		"url": "/core/useTimeAgo/",
		"hash": "useTimeAgo"
	}],
	["/core/usetimeagointl/", {
		"url": "/core/useTimeAgoIntl/",
		"hash": "useTimeAgoIntl"
	}],
	["/shared/createeventhook/", {
		"url": "/shared/createEventHook/",
		"hash": "createEventHook"
	}],
	["/core/createunreffn/", {
		"url": "/core/createUnrefFn/",
		"hash": "createUnrefFn"
	}],
	["/shared/get/", {
		"url": "/shared/get/",
		"hash": "get"
	}],
	["/shared/isdefined/", {
		"url": "/shared/isDefined/",
		"hash": "isDefined"
	}],
	["/shared/makedestructurable/", {
		"url": "/shared/makeDestructurable/",
		"hash": "makeDestructurable"
	}],
	["/shared/set/", {
		"url": "/shared/set/",
		"hash": "set"
	}],
	["/core/useasyncqueue/", {
		"url": "/core/useAsyncQueue/",
		"hash": "useAsyncQueue"
	}],
	["/core/usebase64/", {
		"url": "/core/useBase64/",
		"hash": "useBase64"
	}],
	["/core/usecached/", {
		"url": "/core/useCached/",
		"hash": "useCached"
	}],
	["/core/usecloned/", {
		"url": "/core/useCloned/",
		"hash": "useCloned"
	}],
	["/core/useconfirmdialog/", {
		"url": "/core/useConfirmDialog/",
		"hash": "useConfirmDialog"
	}],
	["/shared/usecounter/", {
		"url": "/shared/useCounter/",
		"hash": "useCounter"
	}],
	["/core/usecyclelist/", {
		"url": "/core/useCycleList/",
		"hash": "useCycleList"
	}],
	["/shared/usedebouncefn/", {
		"url": "/shared/useDebounceFn/",
		"hash": "useDebounceFn"
	}],
	["/core/useeventbus/", {
		"url": "/core/useEventBus/",
		"hash": "useEventBus"
	}],
	["/core/usememoize/", {
		"url": "/core/useMemoize/",
		"hash": "useMemoize"
	}],
	["/core/useoffsetpagination/", {
		"url": "/core/useOffsetPagination/",
		"hash": "useOffsetPagination"
	}],
	["/core/useprevious/", {
		"url": "/core/usePrevious/",
		"hash": "usePrevious"
	}],
	["/core/usestepper/", {
		"url": "/core/useStepper/",
		"hash": "useStepper"
	}],
	["/core/usesupported/", {
		"url": "/core/useSupported/",
		"hash": "useSupported"
	}],
	["/shared/usethrottlefn/", {
		"url": "/shared/useThrottleFn/",
		"hash": "useThrottleFn"
	}],
	["/core/usetimeoutpoll/", {
		"url": "/core/useTimeoutPoll/",
		"hash": "useTimeoutPoll"
	}],
	["/shared/usetoggle/", {
		"url": "/shared/useToggle/",
		"hash": "useToggle"
	}],
	["/shared/usetonumber/", {
		"url": "/shared/useToNumber/",
		"hash": "useToNumber"
	}],
	["/shared/usetostring/", {
		"url": "/shared/useToString/",
		"hash": "useToString"
	}],
	["/electron/useipcrenderer/", {
		"url": "/electron/useIpcRenderer/",
		"hash": "useIpcRenderer"
	}],
	["/electron/useipcrendererinvoke/", {
		"url": "/electron/useIpcRendererInvoke/",
		"hash": "useIpcRendererInvoke"
	}],
	["/electron/useipcrendereron/", {
		"url": "/electron/useIpcRendererOn/",
		"hash": "useIpcRendererOn"
	}],
	["/electron/usezoomfactor/", {
		"url": "/electron/useZoomFactor/",
		"hash": "useZoomFactor"
	}],
	["/electron/usezoomlevel/", {
		"url": "/electron/useZoomLevel/",
		"hash": "useZoomLevel"
	}],
	["/firebase/useauth/", {
		"url": "/firebase/useAuth/",
		"hash": "useAuth"
	}],
	["/firebase/usefirestore/", {
		"url": "/firebase/useFirestore/",
		"hash": "useFirestore"
	}],
	["/firebase/usertdb/", {
		"url": "/firebase/useRTDB/",
		"hash": "useRTDB"
	}],
	["/integrations/useasyncvalidator/", {
		"url": "/integrations/useAsyncValidator/",
		"hash": "useAsyncValidator"
	}],
	["/integrations/useaxios/", {
		"url": "/integrations/useAxios/",
		"hash": "useAxios"
	}],
	["/integrations/usechangecase/", {
		"url": "/integrations/useChangeCase/",
		"hash": "useChangeCase"
	}],
	["/integrations/usecookies/", {
		"url": "/integrations/useCookies/",
		"hash": "useCookies"
	}],
	["/integrations/usedrauu/", {
		"url": "/integrations/useDrauu/",
		"hash": "useDrauu"
	}],
	["/integrations/usefocustrap/", {
		"url": "/integrations/useFocusTrap/",
		"hash": "useFocusTrap"
	}],
	["/integrations/usefuse/", {
		"url": "/integrations/useFuse/",
		"hash": "useFuse"
	}],
	["/integrations/useidbkeyval/", {
		"url": "/integrations/useIDBKeyval/",
		"hash": "useIDBKeyval"
	}],
	["/integrations/usejwt/", {
		"url": "/integrations/useJwt/",
		"hash": "useJwt"
	}],
	["/integrations/usenprogress/", {
		"url": "/integrations/useNProgress/",
		"hash": "useNProgress"
	}],
	["/integrations/useqrcode/", {
		"url": "/integrations/useQRCode/",
		"hash": "useQRCode"
	}],
	["/integrations/usesortable/", {
		"url": "/integrations/useSortable/",
		"hash": "useSortable"
	}],
	["/math/creategenericprojection/", {
		"url": "/math/createGenericProjection/",
		"hash": "createGenericProjection"
	}],
	["/math/createprojection/", {
		"url": "/math/createProjection/",
		"hash": "createProjection"
	}],
	["/math/logicand/", {
		"url": "/math/logicAnd/",
		"hash": "logicAnd"
	}],
	["/math/logicnot/", {
		"url": "/math/logicNot/",
		"hash": "logicNot"
	}],
	["/math/logicor/", {
		"url": "/math/logicOr/",
		"hash": "logicOr"
	}],
	["/math/useabs/", {
		"url": "/math/useAbs/",
		"hash": "useAbs"
	}],
	["/math/useaverage/", {
		"url": "/math/useAverage/",
		"hash": "useAverage"
	}],
	["/math/useceil/", {
		"url": "/math/useCeil/",
		"hash": "useCeil"
	}],
	["/math/useclamp/", {
		"url": "/math/useClamp/",
		"hash": "useClamp"
	}],
	["/math/usefloor/", {
		"url": "/math/useFloor/",
		"hash": "useFloor"
	}],
	["/math/usemath/", {
		"url": "/math/useMath/",
		"hash": "useMath"
	}],
	["/math/usemax/", {
		"url": "/math/useMax/",
		"hash": "useMax"
	}],
	["/math/usemin/", {
		"url": "/math/useMin/",
		"hash": "useMin"
	}],
	["/math/useprecision/", {
		"url": "/math/usePrecision/",
		"hash": "usePrecision"
	}],
	["/math/useprojection/", {
		"url": "/math/useProjection/",
		"hash": "useProjection"
	}],
	["/math/useround/", {
		"url": "/math/useRound/",
		"hash": "useRound"
	}],
	["/math/usesum/", {
		"url": "/math/useSum/",
		"hash": "useSum"
	}],
	["/math/usetrunc/", {
		"url": "/math/useTrunc/",
		"hash": "useTrunc"
	}],
	["/router/useroutehash/", {
		"url": "/router/useRouteHash/",
		"hash": "useRouteHash"
	}],
	["/router/userouteparams/", {
		"url": "/router/useRouteParams/",
		"hash": "useRouteParams"
	}],
	["/router/useroutequery/", {
		"url": "/router/useRouteQuery/",
		"hash": "useRouteQuery"
	}],
	["/rxjs/from/", {
		"url": "/rxjs/from/",
		"hash": "from"
	}],
	["/rxjs/toobserver/", {
		"url": "/rxjs/toObserver/",
		"hash": "toObserver"
	}],
	["/rxjs/useextractedobservable/", {
		"url": "/rxjs/useExtractedObservable/",
		"hash": "useExtractedObservable"
	}],
	["/rxjs/useobservable/", {
		"url": "/rxjs/useObservable/",
		"hash": "useObservable"
	}],
	["/rxjs/usesubject/", {
		"url": "/rxjs/useSubject/",
		"hash": "useSubject"
	}],
	["/rxjs/usesubscription/", {
		"url": "/rxjs/useSubscription/",
		"hash": "useSubscription"
	}],
	["/rxjs/watchextractedobservable/", {
		"url": "/rxjs/watchExtractedObservable/",
		"hash": "watchExtractedObservable"
	}]
];
try {
	self["workbox:core:7.0.0"] && _();
} catch (e) {}
var fallback = (code, ...args) => {
	let msg = code;
	if (args.length > 0) msg += ` :: ${JSON.stringify(args)}`;
	return msg;
};
const messageGenerator = fallback;
var WorkboxError = class extends Error {
	constructor(errorCode, details) {
		const message = messageGenerator(errorCode, details);
		super(message);
		this.name = errorCode;
		this.details = details;
	}
};
var getFriendlyURL = (url) => {
	return new URL(String(url), location.href).href.replace(/* @__PURE__ */ new RegExp(`^${location.origin}`), "");
};
try {
	self["workbox:cacheable-response:7.0.0"] && _();
} catch (e) {}
var CacheableResponse = class {
	constructor(config = {}) {
		this._statuses = config.statuses;
		this._headers = config.headers;
	}
	isResponseCacheable(response) {
		let cacheable = true;
		if (this._statuses) cacheable = this._statuses.includes(response.status);
		if (this._headers && cacheable) cacheable = Object.keys(this._headers).some((headerName) => {
			return response.headers.get(headerName) === this._headers[headerName];
		});
		return cacheable;
	}
};
var CacheableResponsePlugin = class {
	constructor(config) {
		this.cacheWillUpdate = async ({ response }) => {
			if (this._cacheableResponse.isResponseCacheable(response)) return response;
			return null;
		};
		this._cacheableResponse = new CacheableResponse(config);
	}
};
function dontWaitFor(promise) {
	promise.then(() => {});
}
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
	return idbProxyableTypes || (idbProxyableTypes = [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	]);
}
function getCursorAdvanceMethods() {
	return cursorAdvanceMethods || (cursorAdvanceMethods = [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	]);
}
var cursorRequestMap = /* @__PURE__ */ new WeakMap();
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
	const promise = new Promise((resolve, reject) => {
		const unlisten = () => {
			request.removeEventListener("success", success);
			request.removeEventListener("error", error);
		};
		const success = () => {
			resolve(wrap(request.result));
			unlisten();
		};
		const error = () => {
			reject(request.error);
			unlisten();
		};
		request.addEventListener("success", success);
		request.addEventListener("error", error);
	});
	promise.then((value) => {
		if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
	}).catch(() => {});
	reverseTransformCache.set(promise, request);
	return promise;
}
function cacheDonePromiseForTransaction(tx) {
	if (transactionDoneMap.has(tx)) return;
	const done = new Promise((resolve, reject) => {
		const unlisten = () => {
			tx.removeEventListener("complete", complete);
			tx.removeEventListener("error", error);
			tx.removeEventListener("abort", error);
		};
		const complete = () => {
			resolve();
			unlisten();
		};
		const error = () => {
			reject(tx.error || new DOMException("AbortError", "AbortError"));
			unlisten();
		};
		tx.addEventListener("complete", complete);
		tx.addEventListener("error", error);
		tx.addEventListener("abort", error);
	});
	transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
	get(target, prop, receiver) {
		if (target instanceof IDBTransaction) {
			if (prop === "done") return transactionDoneMap.get(target);
			if (prop === "objectStoreNames") return target.objectStoreNames || transactionStoreNamesMap.get(target);
			if (prop === "store") return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
		}
		return wrap(target[prop]);
	},
	set(target, prop, value) {
		target[prop] = value;
		return true;
	},
	has(target, prop) {
		if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
		return prop in target;
	}
};
function replaceTraps(callback) {
	idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
	if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
		const tx = func.call(unwrap(this), storeNames, ...args);
		transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
		return wrap(tx);
	};
	if (getCursorAdvanceMethods().includes(func)) return function(...args) {
		func.apply(unwrap(this), args);
		return wrap(cursorRequestMap.get(this));
	};
	return function(...args) {
		return wrap(func.apply(unwrap(this), args));
	};
}
function transformCachableValue(value) {
	if (typeof value === "function") return wrapFunction(value);
	if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
	if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
	return value;
}
function wrap(value) {
	if (value instanceof IDBRequest) return promisifyRequest(value);
	if (transformCache.has(value)) return transformCache.get(value);
	const newValue = transformCachableValue(value);
	if (newValue !== value) {
		transformCache.set(value, newValue);
		reverseTransformCache.set(newValue, value);
	}
	return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
	const request = indexedDB.open(name, version);
	const openPromise = wrap(request);
	if (upgrade) request.addEventListener("upgradeneeded", (event) => {
		upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
	});
	if (blocked) request.addEventListener("blocked", (event) => blocked(event.oldVersion, event.newVersion, event));
	openPromise.then((db) => {
		if (terminated) db.addEventListener("close", () => terminated());
		if (blocking) db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
	}).catch(() => {});
	return openPromise;
}
function deleteDB(name, { blocked } = {}) {
	const request = indexedDB.deleteDatabase(name);
	if (blocked) request.addEventListener("blocked", (event) => blocked(event.oldVersion, event));
	return wrap(request).then(() => void 0);
}
var readMethods = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
];
var writeMethods = [
	"put",
	"add",
	"delete",
	"clear"
];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
	if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
	if (cachedMethods.get(prop)) return cachedMethods.get(prop);
	const targetFuncName = prop.replace(/FromIndex$/, "");
	const useIndex = prop !== targetFuncName;
	const isWrite = writeMethods.includes(targetFuncName);
	if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
	const method = async function(storeName, ...args) {
		const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
		let target$1 = tx.store;
		if (useIndex) target$1 = target$1.index(args.shift());
		return (await Promise.all([target$1[targetFuncName](...args), isWrite && tx.done]))[0];
	};
	cachedMethods.set(prop, method);
	return method;
}
replaceTraps((oldTraps) => ({
	...oldTraps,
	get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
	has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
try {
	self["workbox:expiration:7.0.0"] && _();
} catch (e) {}
var DB_NAME = "workbox-expiration";
var CACHE_OBJECT_STORE = "cache-entries";
var normalizeURL = (unNormalizedUrl) => {
	const url = new URL(unNormalizedUrl, location.href);
	url.hash = "";
	return url.href;
};
var CacheTimestampsModel = class {
	constructor(cacheName) {
		this._db = null;
		this._cacheName = cacheName;
	}
	_upgradeDb(db) {
		const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
		objStore.createIndex("cacheName", "cacheName", { unique: false });
		objStore.createIndex("timestamp", "timestamp", { unique: false });
	}
	_upgradeDbAndDeleteOldDbs(db) {
		this._upgradeDb(db);
		if (this._cacheName) deleteDB(this._cacheName);
	}
	async setTimestamp(url, timestamp) {
		url = normalizeURL(url);
		const entry = {
			url,
			timestamp,
			cacheName: this._cacheName,
			id: this._getId(url)
		};
		const tx = (await this.getDb()).transaction(CACHE_OBJECT_STORE, "readwrite", { durability: "relaxed" });
		await tx.store.put(entry);
		await tx.done;
	}
	async getTimestamp(url) {
		const entry = await (await this.getDb()).get(CACHE_OBJECT_STORE, this._getId(url));
		return entry === null || entry === void 0 ? void 0 : entry.timestamp;
	}
	async expireEntries(minTimestamp, maxCount) {
		const db = await this.getDb();
		let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
		const entriesToDelete = [];
		let entriesNotDeletedCount = 0;
		while (cursor) {
			const result = cursor.value;
			if (result.cacheName === this._cacheName) if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) entriesToDelete.push(cursor.value);
			else entriesNotDeletedCount++;
			cursor = await cursor.continue();
		}
		const urlsDeleted = [];
		for (const entry of entriesToDelete) {
			await db.delete(CACHE_OBJECT_STORE, entry.id);
			urlsDeleted.push(entry.url);
		}
		return urlsDeleted;
	}
	_getId(url) {
		return this._cacheName + "|" + normalizeURL(url);
	}
	async getDb() {
		if (!this._db) this._db = await openDB(DB_NAME, 1, { upgrade: this._upgradeDbAndDeleteOldDbs.bind(this) });
		return this._db;
	}
};
var CacheExpiration = class {
	constructor(cacheName, config = {}) {
		this._isRunning = false;
		this._rerunRequested = false;
		this._maxEntries = config.maxEntries;
		this._maxAgeSeconds = config.maxAgeSeconds;
		this._matchOptions = config.matchOptions;
		this._cacheName = cacheName;
		this._timestampModel = new CacheTimestampsModel(cacheName);
	}
	async expireEntries() {
		if (this._isRunning) {
			this._rerunRequested = true;
			return;
		}
		this._isRunning = true;
		const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
		const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
		const cache = await self.caches.open(this._cacheName);
		for (const url of urlsExpired) await cache.delete(url, this._matchOptions);
		this._isRunning = false;
		if (this._rerunRequested) {
			this._rerunRequested = false;
			dontWaitFor(this.expireEntries());
		}
	}
	async updateTimestamp(url) {
		await this._timestampModel.setTimestamp(url, Date.now());
	}
	async isURLExpired(url) {
		if (!this._maxAgeSeconds) return false;
		else {
			const timestamp = await this._timestampModel.getTimestamp(url);
			const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
			return timestamp !== void 0 ? timestamp < expireOlderThan : true;
		}
	}
	async delete() {
		this._rerunRequested = false;
		await this._timestampModel.expireEntries(Infinity);
	}
};
var _cacheNameDetails = {
	googleAnalytics: "googleAnalytics",
	precache: "precache-v2",
	prefix: "workbox",
	runtime: "runtime",
	suffix: typeof registration !== "undefined" ? registration.scope : ""
};
var _createCacheName = (cacheName) => {
	return [
		_cacheNameDetails.prefix,
		cacheName,
		_cacheNameDetails.suffix
	].filter((value) => value && value.length > 0).join("-");
};
var eachCacheNameDetail = (fn) => {
	for (const key of Object.keys(_cacheNameDetails)) fn(key);
};
const cacheNames = {
	updateDetails: (details) => {
		eachCacheNameDetail((key) => {
			if (typeof details[key] === "string") _cacheNameDetails[key] = details[key];
		});
	},
	getGoogleAnalyticsName: (userCacheName) => {
		return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
	},
	getPrecacheName: (userCacheName) => {
		return userCacheName || _createCacheName(_cacheNameDetails.precache);
	},
	getPrefix: () => {
		return _cacheNameDetails.prefix;
	},
	getRuntimeName: (userCacheName) => {
		return userCacheName || _createCacheName(_cacheNameDetails.runtime);
	},
	getSuffix: () => {
		return _cacheNameDetails.suffix;
	}
};
var quotaErrorCallbacks = /* @__PURE__ */ new Set();
function registerQuotaErrorCallback(callback) {
	quotaErrorCallbacks.add(callback);
}
var ExpirationPlugin = class {
	constructor(config = {}) {
		this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
			if (!cachedResponse) return null;
			const isFresh = this._isResponseDateFresh(cachedResponse);
			const cacheExpiration = this._getCacheExpiration(cacheName);
			dontWaitFor(cacheExpiration.expireEntries());
			const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
			if (event) try {
				event.waitUntil(updateTimestampDone);
			} catch (error) {}
			return isFresh ? cachedResponse : null;
		};
		this.cacheDidUpdate = async ({ cacheName, request }) => {
			const cacheExpiration = this._getCacheExpiration(cacheName);
			await cacheExpiration.updateTimestamp(request.url);
			await cacheExpiration.expireEntries();
		};
		this._config = config;
		this._maxAgeSeconds = config.maxAgeSeconds;
		this._cacheExpirations = /* @__PURE__ */ new Map();
		if (config.purgeOnQuotaError) registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
	}
	_getCacheExpiration(cacheName) {
		if (cacheName === cacheNames.getRuntimeName()) throw new WorkboxError("expire-custom-caches-only");
		let cacheExpiration = this._cacheExpirations.get(cacheName);
		if (!cacheExpiration) {
			cacheExpiration = new CacheExpiration(cacheName, this._config);
			this._cacheExpirations.set(cacheName, cacheExpiration);
		}
		return cacheExpiration;
	}
	_isResponseDateFresh(cachedResponse) {
		if (!this._maxAgeSeconds) return true;
		const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
		if (dateHeaderTimestamp === null) return true;
		return dateHeaderTimestamp >= Date.now() - this._maxAgeSeconds * 1e3;
	}
	_getDateHeaderTimestamp(cachedResponse) {
		if (!cachedResponse.headers.has("date")) return null;
		const dateHeader = cachedResponse.headers.get("date");
		const headerTime = new Date(dateHeader).getTime();
		if (isNaN(headerTime)) return null;
		return headerTime;
	}
	async deleteCacheAndMetadata() {
		for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
			await self.caches.delete(cacheName);
			await cacheExpiration.delete();
		}
		this._cacheExpirations = /* @__PURE__ */ new Map();
	}
};
function waitUntil(event, asyncFn) {
	const returnPromise = asyncFn();
	event.waitUntil(returnPromise);
	return returnPromise;
}
try {
	self["workbox:precaching:7.0.0"] && _();
} catch (e) {}
var REVISION_SEARCH_PARAM = "__WB_REVISION__";
function createCacheKey(entry) {
	if (!entry) throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
	if (typeof entry === "string") {
		const urlObject = new URL(entry, location.href);
		return {
			cacheKey: urlObject.href,
			url: urlObject.href
		};
	}
	const { revision, url } = entry;
	if (!url) throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
	if (!revision) {
		const urlObject = new URL(url, location.href);
		return {
			cacheKey: urlObject.href,
			url: urlObject.href
		};
	}
	const cacheKeyURL = new URL(url, location.href);
	const originalURL = new URL(url, location.href);
	cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
	return {
		cacheKey: cacheKeyURL.href,
		url: originalURL.href
	};
}
var PrecacheInstallReportPlugin = class {
	constructor() {
		this.updatedURLs = [];
		this.notUpdatedURLs = [];
		this.handlerWillStart = async ({ request, state }) => {
			if (state) state.originalRequest = request;
		};
		this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
			if (event.type === "install") {
				if (state && state.originalRequest && state.originalRequest instanceof Request) {
					const url = state.originalRequest.url;
					if (cachedResponse) this.notUpdatedURLs.push(url);
					else this.updatedURLs.push(url);
				}
			}
			return cachedResponse;
		};
	}
};
var PrecacheCacheKeyPlugin = class {
	constructor({ precacheController: precacheController$1 }) {
		this.cacheKeyWillBeUsed = async ({ request, params }) => {
			const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
			return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
		};
		this._precacheController = precacheController$1;
	}
};
var supportStatus;
function canConstructResponseFromBodyStream() {
	if (supportStatus === void 0) {
		const testResponse = new Response("");
		if ("body" in testResponse) try {
			new Response(testResponse.body);
			supportStatus = true;
		} catch (error) {
			supportStatus = false;
		}
		supportStatus = false;
	}
	return supportStatus;
}
async function copyResponse(response, modifier) {
	let origin = null;
	if (response.url) origin = new URL(response.url).origin;
	if (origin !== self.location.origin) throw new WorkboxError("cross-origin-copy-response", { origin });
	const clonedResponse = response.clone();
	const responseInit = {
		headers: new Headers(clonedResponse.headers),
		status: clonedResponse.status,
		statusText: clonedResponse.statusText
	};
	const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
	const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
	return new Response(body, modifiedResponseInit);
}
function stripParams(fullURL, ignoreParams) {
	const strippedURL = new URL(fullURL);
	for (const param of ignoreParams) strippedURL.searchParams.delete(param);
	return strippedURL.href;
}
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
	const strippedRequestURL = stripParams(request.url, ignoreParams);
	if (request.url === strippedRequestURL) return cache.match(request, matchOptions);
	const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
	const cacheKeys = await cache.keys(request, keysOptions);
	for (const cacheKey of cacheKeys) if (strippedRequestURL === stripParams(cacheKey.url, ignoreParams)) return cache.match(cacheKey, matchOptions);
}
var Deferred = class {
	constructor() {
		this.promise = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
	}
};
async function executeQuotaErrorCallbacks() {
	for (const callback of quotaErrorCallbacks) await callback();
}
function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
try {
	self["workbox:strategies:7.0.0"] && _();
} catch (e) {}
function toRequest(input) {
	return typeof input === "string" ? new Request(input) : input;
}
var StrategyHandler = class {
	constructor(strategy, options) {
		this._cacheKeys = {};
		Object.assign(this, options);
		this.event = options.event;
		this._strategy = strategy;
		this._handlerDeferred = new Deferred();
		this._extendLifetimePromises = [];
		this._plugins = [...strategy.plugins];
		this._pluginStateMap = /* @__PURE__ */ new Map();
		for (const plugin of this._plugins) this._pluginStateMap.set(plugin, {});
		this.event.waitUntil(this._handlerDeferred.promise);
	}
	async fetch(input) {
		const { event } = this;
		let request = toRequest(input);
		if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
			const possiblePreloadResponse = await event.preloadResponse;
			if (possiblePreloadResponse) return possiblePreloadResponse;
		}
		const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
		try {
			for (const cb of this.iterateCallbacks("requestWillFetch")) request = await cb({
				request: request.clone(),
				event
			});
		} catch (err) {
			if (err instanceof Error) throw new WorkboxError("plugin-error-request-will-fetch", { thrownErrorMessage: err.message });
		}
		const pluginFilteredRequest = request.clone();
		try {
			let fetchResponse;
			fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
			for (const callback of this.iterateCallbacks("fetchDidSucceed")) fetchResponse = await callback({
				event,
				request: pluginFilteredRequest,
				response: fetchResponse
			});
			return fetchResponse;
		} catch (error) {
			if (originalRequest) await this.runCallbacks("fetchDidFail", {
				error,
				event,
				originalRequest: originalRequest.clone(),
				request: pluginFilteredRequest.clone()
			});
			throw error;
		}
	}
	async fetchAndCachePut(input) {
		const response = await this.fetch(input);
		const responseClone = response.clone();
		this.waitUntil(this.cachePut(input, responseClone));
		return response;
	}
	async cacheMatch(key) {
		const request = toRequest(key);
		let cachedResponse;
		const { cacheName, matchOptions } = this._strategy;
		const effectiveRequest = await this.getCacheKey(request, "read");
		const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
		cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
		for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) cachedResponse = await callback({
			cacheName,
			matchOptions,
			cachedResponse,
			request: effectiveRequest,
			event: this.event
		}) || void 0;
		return cachedResponse;
	}
	async cachePut(key, response) {
		const request = toRequest(key);
		await timeout(0);
		const effectiveRequest = await this.getCacheKey(request, "write");
		if (!response) throw new WorkboxError("cache-put-with-no-response", { url: getFriendlyURL(effectiveRequest.url) });
		const responseToCache = await this._ensureResponseSafeToCache(response);
		if (!responseToCache) return false;
		const { cacheName, matchOptions } = this._strategy;
		const cache = await self.caches.open(cacheName);
		const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
		const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(cache, effectiveRequest.clone(), ["__WB_REVISION__"], matchOptions) : null;
		try {
			await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
		} catch (error) {
			if (error instanceof Error) {
				if (error.name === "QuotaExceededError") await executeQuotaErrorCallbacks();
				throw error;
			}
		}
		for (const callback of this.iterateCallbacks("cacheDidUpdate")) await callback({
			cacheName,
			oldResponse,
			newResponse: responseToCache.clone(),
			request: effectiveRequest,
			event: this.event
		});
		return true;
	}
	async getCacheKey(request, mode) {
		const key = `${request.url} | ${mode}`;
		if (!this._cacheKeys[key]) {
			let effectiveRequest = request;
			for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) effectiveRequest = toRequest(await callback({
				mode,
				request: effectiveRequest,
				event: this.event,
				params: this.params
			}));
			this._cacheKeys[key] = effectiveRequest;
		}
		return this._cacheKeys[key];
	}
	hasCallback(name) {
		for (const plugin of this._strategy.plugins) if (name in plugin) return true;
		return false;
	}
	async runCallbacks(name, param) {
		for (const callback of this.iterateCallbacks(name)) await callback(param);
	}
	*iterateCallbacks(name) {
		for (const plugin of this._strategy.plugins) if (typeof plugin[name] === "function") {
			const state = this._pluginStateMap.get(plugin);
			const statefulCallback = (param) => {
				const statefulParam = Object.assign(Object.assign({}, param), { state });
				return plugin[name](statefulParam);
			};
			yield statefulCallback;
		}
	}
	waitUntil(promise) {
		this._extendLifetimePromises.push(promise);
		return promise;
	}
	async doneWaiting() {
		let promise;
		while (promise = this._extendLifetimePromises.shift()) await promise;
	}
	destroy() {
		this._handlerDeferred.resolve(null);
	}
	async _ensureResponseSafeToCache(response) {
		let responseToCache = response;
		let pluginsUsed = false;
		for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
			responseToCache = await callback({
				request: this.request,
				response: responseToCache,
				event: this.event
			}) || void 0;
			pluginsUsed = true;
			if (!responseToCache) break;
		}
		if (!pluginsUsed) {
			if (responseToCache && responseToCache.status !== 200) responseToCache = void 0;
		}
		return responseToCache;
	}
};
var Strategy = class {
	constructor(options = {}) {
		this.cacheName = cacheNames.getRuntimeName(options.cacheName);
		this.plugins = options.plugins || [];
		this.fetchOptions = options.fetchOptions;
		this.matchOptions = options.matchOptions;
	}
	handle(options) {
		const [responseDone] = this.handleAll(options);
		return responseDone;
	}
	handleAll(options) {
		if (options instanceof FetchEvent) options = {
			event: options,
			request: options.request
		};
		const event = options.event;
		const request = typeof options.request === "string" ? new Request(options.request) : options.request;
		const params = "params" in options ? options.params : void 0;
		const handler = new StrategyHandler(this, {
			event,
			request,
			params
		});
		const responseDone = this._getResponse(handler, request, event);
		return [responseDone, this._awaitComplete(responseDone, handler, request, event)];
	}
	async _getResponse(handler, request, event) {
		await handler.runCallbacks("handlerWillStart", {
			event,
			request
		});
		let response = void 0;
		try {
			response = await this._handle(request, handler);
			if (!response || response.type === "error") throw new WorkboxError("no-response", { url: request.url });
		} catch (error) {
			if (error instanceof Error) for (const callback of handler.iterateCallbacks("handlerDidError")) {
				response = await callback({
					error,
					event,
					request
				});
				if (response) break;
			}
			if (!response) throw error;
		}
		for (const callback of handler.iterateCallbacks("handlerWillRespond")) response = await callback({
			event,
			request,
			response
		});
		return response;
	}
	async _awaitComplete(responseDone, handler, request, event) {
		let response;
		let error;
		try {
			response = await responseDone;
		} catch (error$1) {}
		try {
			await handler.runCallbacks("handlerDidRespond", {
				event,
				request,
				response
			});
			await handler.doneWaiting();
		} catch (waitUntilError) {
			if (waitUntilError instanceof Error) error = waitUntilError;
		}
		await handler.runCallbacks("handlerDidComplete", {
			event,
			request,
			response,
			error
		});
		handler.destroy();
		if (error) throw error;
	}
};
var PrecacheStrategy = class PrecacheStrategy extends Strategy {
	constructor(options = {}) {
		options.cacheName = cacheNames.getPrecacheName(options.cacheName);
		super(options);
		this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
		this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
	}
	async _handle(request, handler) {
		const response = await handler.cacheMatch(request);
		if (response) return response;
		if (handler.event && handler.event.type === "install") return await this._handleInstall(request, handler);
		return await this._handleFetch(request, handler);
	}
	async _handleFetch(request, handler) {
		let response;
		const params = handler.params || {};
		if (this._fallbackToNetwork) {
			const integrityInManifest = params.integrity;
			const integrityInRequest = request.integrity;
			const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
			response = await handler.fetch(new Request(request, { integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0 }));
			if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
				this._useDefaultCacheabilityPluginIfNeeded();
				await handler.cachePut(request, response.clone());
			}
		} else throw new WorkboxError("missing-precache-entry", {
			cacheName: this.cacheName,
			url: request.url
		});
		return response;
	}
	async _handleInstall(request, handler) {
		this._useDefaultCacheabilityPluginIfNeeded();
		const response = await handler.fetch(request);
		if (!await handler.cachePut(request, response.clone())) throw new WorkboxError("bad-precaching-response", {
			url: request.url,
			status: response.status
		});
		return response;
	}
	_useDefaultCacheabilityPluginIfNeeded() {
		let defaultPluginIndex = null;
		let cacheWillUpdatePluginCount = 0;
		for (const [index, plugin] of this.plugins.entries()) {
			if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) continue;
			if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) defaultPluginIndex = index;
			if (plugin.cacheWillUpdate) cacheWillUpdatePluginCount++;
		}
		if (cacheWillUpdatePluginCount === 0) this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
		else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) this.plugins.splice(defaultPluginIndex, 1);
	}
};
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = { async cacheWillUpdate({ response }) {
	if (!response || response.status >= 400) return null;
	return response;
} };
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = { async cacheWillUpdate({ response }) {
	return response.redirected ? await copyResponse(response) : response;
} };
var PrecacheController = class {
	constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
		this._urlsToCacheKeys = /* @__PURE__ */ new Map();
		this._urlsToCacheModes = /* @__PURE__ */ new Map();
		this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
		this._strategy = new PrecacheStrategy({
			cacheName: cacheNames.getPrecacheName(cacheName),
			plugins: [...plugins, new PrecacheCacheKeyPlugin({ precacheController: this })],
			fallbackToNetwork
		});
		this.install = this.install.bind(this);
		this.activate = this.activate.bind(this);
	}
	get strategy() {
		return this._strategy;
	}
	precache(entries$1) {
		this.addToCacheList(entries$1);
		if (!this._installAndActiveListenersAdded) {
			self.addEventListener("install", this.install);
			self.addEventListener("activate", this.activate);
			this._installAndActiveListenersAdded = true;
		}
	}
	addToCacheList(entries$1) {
		const urlsToWarnAbout = [];
		for (const entry of entries$1) {
			if (typeof entry === "string") urlsToWarnAbout.push(entry);
			else if (entry && entry.revision === void 0) urlsToWarnAbout.push(entry.url);
			const { cacheKey, url } = createCacheKey(entry);
			const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
			if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) throw new WorkboxError("add-to-cache-list-conflicting-entries", {
				firstEntry: this._urlsToCacheKeys.get(url),
				secondEntry: cacheKey
			});
			if (typeof entry !== "string" && entry.integrity) {
				if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) throw new WorkboxError("add-to-cache-list-conflicting-integrities", { url });
				this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
			}
			this._urlsToCacheKeys.set(url, cacheKey);
			this._urlsToCacheModes.set(url, cacheMode);
			if (urlsToWarnAbout.length > 0) {
				const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
				console.warn(warningMessage);
			}
		}
	}
	install(event) {
		return waitUntil(event, async () => {
			const installReportPlugin = new PrecacheInstallReportPlugin();
			this.strategy.plugins.push(installReportPlugin);
			for (const [url, cacheKey] of this._urlsToCacheKeys) {
				const integrity = this._cacheKeysToIntegrities.get(cacheKey);
				const cacheMode = this._urlsToCacheModes.get(url);
				const request = new Request(url, {
					integrity,
					cache: cacheMode,
					credentials: "same-origin"
				});
				await Promise.all(this.strategy.handleAll({
					params: { cacheKey },
					request,
					event
				}));
			}
			const { updatedURLs, notUpdatedURLs } = installReportPlugin;
			return {
				updatedURLs,
				notUpdatedURLs
			};
		});
	}
	activate(event) {
		return waitUntil(event, async () => {
			const cache = await self.caches.open(this.strategy.cacheName);
			const currentlyCachedRequests = await cache.keys();
			const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
			const deletedURLs = [];
			for (const request of currentlyCachedRequests) if (!expectedCacheKeys.has(request.url)) {
				await cache.delete(request);
				deletedURLs.push(request.url);
			}
			return { deletedURLs };
		});
	}
	getURLsToCacheKeys() {
		return this._urlsToCacheKeys;
	}
	getCachedURLs() {
		return [...this._urlsToCacheKeys.keys()];
	}
	getCacheKeyForURL(url) {
		const urlObject = new URL(url, location.href);
		return this._urlsToCacheKeys.get(urlObject.href);
	}
	getIntegrityForCacheKey(cacheKey) {
		return this._cacheKeysToIntegrities.get(cacheKey);
	}
	async matchPrecache(request) {
		const url = request instanceof Request ? request.url : request;
		const cacheKey = this.getCacheKeyForURL(url);
		if (cacheKey) return (await self.caches.open(this.strategy.cacheName)).match(cacheKey);
	}
	createHandlerBoundToURL(url) {
		const cacheKey = this.getCacheKeyForURL(url);
		if (!cacheKey) throw new WorkboxError("non-precached-url", { url });
		return (options) => {
			options.request = new Request(url);
			options.params = Object.assign({ cacheKey }, options.params);
			return this.strategy.handle(options);
		};
	}
};
var precacheController;
const getOrCreatePrecacheController = () => {
	if (!precacheController) precacheController = new PrecacheController();
	return precacheController;
};
try {
	self["workbox:routing:7.0.0"] && _();
} catch (e) {}
const normalizeHandler = (handler) => {
	if (handler && typeof handler === "object") return handler;
	else return { handle: handler };
};
var Route = class {
	constructor(match, handler, method = "GET") {
		this.handler = normalizeHandler(handler);
		this.match = match;
		this.method = method;
	}
	setCatchHandler(handler) {
		this.catchHandler = normalizeHandler(handler);
	}
};
var RegExpRoute = class extends Route {
	constructor(regExp, handler, method) {
		const match = ({ url }) => {
			const result = regExp.exec(url.href);
			if (!result) return;
			if (url.origin !== location.origin && result.index !== 0) return;
			return result.slice(1);
		};
		super(match, handler, method);
	}
};
var Router = class {
	constructor() {
		this._routes = /* @__PURE__ */ new Map();
		this._defaultHandlerMap = /* @__PURE__ */ new Map();
	}
	get routes() {
		return this._routes;
	}
	addFetchListener() {
		self.addEventListener("fetch", ((event) => {
			const { request } = event;
			const responsePromise = this.handleRequest({
				request,
				event
			});
			if (responsePromise) event.respondWith(responsePromise);
		}));
	}
	addCacheListener() {
		self.addEventListener("message", ((event) => {
			if (event.data && event.data.type === "CACHE_URLS") {
				const { payload } = event.data;
				const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
					if (typeof entry === "string") entry = [entry];
					const request = new Request(...entry);
					return this.handleRequest({
						request,
						event
					});
				}));
				event.waitUntil(requestPromises);
				if (event.ports && event.ports[0]) requestPromises.then(() => event.ports[0].postMessage(true));
			}
		}));
	}
	handleRequest({ request, event }) {
		const url = new URL(request.url, location.href);
		if (!url.protocol.startsWith("http")) return;
		const sameOrigin = url.origin === location.origin;
		const { params, route } = this.findMatchingRoute({
			event,
			request,
			sameOrigin,
			url
		});
		let handler = route && route.handler;
		const method = request.method;
		if (!handler && this._defaultHandlerMap.has(method)) handler = this._defaultHandlerMap.get(method);
		if (!handler) return;
		let responsePromise;
		try {
			responsePromise = handler.handle({
				url,
				request,
				event,
				params
			});
		} catch (err) {
			responsePromise = Promise.reject(err);
		}
		const catchHandler = route && route.catchHandler;
		if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) responsePromise = responsePromise.catch(async (err) => {
			if (catchHandler) try {
				return await catchHandler.handle({
					url,
					request,
					event,
					params
				});
			} catch (catchErr) {
				if (catchErr instanceof Error) err = catchErr;
			}
			if (this._catchHandler) return this._catchHandler.handle({
				url,
				request,
				event
			});
			throw err;
		});
		return responsePromise;
	}
	findMatchingRoute({ url, sameOrigin, request, event }) {
		const routes = this._routes.get(request.method) || [];
		for (const route of routes) {
			let params;
			const matchResult = route.match({
				url,
				sameOrigin,
				request,
				event
			});
			if (matchResult) {
				params = matchResult;
				if (Array.isArray(params) && params.length === 0) params = void 0;
				else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) params = void 0;
				else if (typeof matchResult === "boolean") params = void 0;
				return {
					route,
					params
				};
			}
		}
		return {};
	}
	setDefaultHandler(handler, method = "GET") {
		this._defaultHandlerMap.set(method, normalizeHandler(handler));
	}
	setCatchHandler(handler) {
		this._catchHandler = normalizeHandler(handler);
	}
	registerRoute(route) {
		if (!this._routes.has(route.method)) this._routes.set(route.method, []);
		this._routes.get(route.method).push(route);
	}
	unregisterRoute(route) {
		if (!this._routes.has(route.method)) throw new WorkboxError("unregister-route-but-not-found-with-method", { method: route.method });
		const routeIndex = this._routes.get(route.method).indexOf(route);
		if (routeIndex > -1) this._routes.get(route.method).splice(routeIndex, 1);
		else throw new WorkboxError("unregister-route-route-not-registered");
	}
};
var defaultRouter;
const getOrCreateDefaultRouter = () => {
	if (!defaultRouter) {
		defaultRouter = new Router();
		defaultRouter.addFetchListener();
		defaultRouter.addCacheListener();
	}
	return defaultRouter;
};
function registerRoute(capture, handler, method) {
	let route;
	if (typeof capture === "string") {
		const captureUrl = new URL(capture, location.href);
		const matchCallback = ({ url }) => {
			return url.href === captureUrl.href;
		};
		route = new Route(matchCallback, handler, method);
	} else if (capture instanceof RegExp) route = new RegExpRoute(capture, handler, method);
	else if (typeof capture === "function") route = new Route(capture, handler, method);
	else if (capture instanceof Route) route = capture;
	else throw new WorkboxError("unsupported-route-type", {
		moduleName: "workbox-routing",
		funcName: "registerRoute",
		paramName: "capture"
	});
	getOrCreateDefaultRouter().registerRoute(route);
	return route;
}
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
	for (const paramName of [...urlObject.searchParams.keys()]) if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) urlObject.searchParams.delete(paramName);
	return urlObject;
}
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
	const urlObject = new URL(url, location.href);
	urlObject.hash = "";
	yield urlObject.href;
	const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
	yield urlWithoutIgnoredParams.href;
	if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
		const directoryURL = new URL(urlWithoutIgnoredParams.href);
		directoryURL.pathname += directoryIndex;
		yield directoryURL.href;
	}
	if (cleanURLs) {
		const cleanURL = new URL(urlWithoutIgnoredParams.href);
		cleanURL.pathname += ".html";
		yield cleanURL.href;
	}
	if (urlManipulation) {
		const additionalURLs = urlManipulation({ url: urlObject });
		for (const urlToAttempt of additionalURLs) yield urlToAttempt.href;
	}
}
var PrecacheRoute = class extends Route {
	constructor(precacheController$1, options) {
		const match = ({ request }) => {
			const urlsToCacheKeys = precacheController$1.getURLsToCacheKeys();
			for (const possibleURL of generateURLVariations(request.url, options)) {
				const cacheKey = urlsToCacheKeys.get(possibleURL);
				if (cacheKey) return {
					cacheKey,
					integrity: precacheController$1.getIntegrityForCacheKey(cacheKey)
				};
			}
		};
		super(match, precacheController$1.strategy);
	}
};
function addRoute(options) {
	registerRoute(new PrecacheRoute(getOrCreatePrecacheController(), options));
}
var SUBSTRING_TO_FIND = "-precache-";
var deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
	const cacheNamesToDelete = (await self.caches.keys()).filter((cacheName) => {
		return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
	});
	await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
	return cacheNamesToDelete;
};
function cleanupOutdatedCaches() {
	self.addEventListener("activate", ((event) => {
		const cacheName = cacheNames.getPrecacheName();
		event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {}));
	}));
}
function createHandlerBoundToURL(url) {
	return getOrCreatePrecacheController().createHandlerBoundToURL(url);
}
function precache(entries$1) {
	getOrCreatePrecacheController().precache(entries$1);
}
function precacheAndRoute(entries$1, options) {
	precache(entries$1);
	addRoute(options);
}
var NavigationRoute = class extends Route {
	constructor(handler, { allowlist: allowlist$1 = [/./], denylist = [] } = {}) {
		super((options) => this._match(options), handler);
		this._allowlist = allowlist$1;
		this._denylist = denylist;
	}
	_match({ url, request }) {
		if (request && request.mode !== "navigate") return false;
		const pathnameAndSearch = url.pathname + url.search;
		for (const regExp of this._denylist) if (regExp.test(pathnameAndSearch)) return false;
		if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) return true;
		return false;
	}
};
const cacheOkAndOpaquePlugin = { cacheWillUpdate: async ({ response }) => {
	if (response.status === 200 || response.status === 0) return response;
	return null;
} };
var NetworkFirst = class extends Strategy {
	constructor(options = {}) {
		super(options);
		if (!this.plugins.some((p) => "cacheWillUpdate" in p)) this.plugins.unshift(cacheOkAndOpaquePlugin);
		this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
	}
	async _handle(request, handler) {
		const logs = [];
		const promises = [];
		let timeoutId;
		if (this._networkTimeoutSeconds) {
			const { id, promise } = this._getTimeoutPromise({
				request,
				logs,
				handler
			});
			timeoutId = id;
			promises.push(promise);
		}
		const networkPromise = this._getNetworkPromise({
			timeoutId,
			request,
			logs,
			handler
		});
		promises.push(networkPromise);
		const response = await handler.waitUntil((async () => {
			return await handler.waitUntil(Promise.race(promises)) || await networkPromise;
		})());
		if (!response) throw new WorkboxError("no-response", { url: request.url });
		return response;
	}
	_getTimeoutPromise({ request, logs, handler }) {
		let timeoutId;
		return {
			promise: new Promise((resolve) => {
				const onNetworkTimeout = async () => {
					resolve(await handler.cacheMatch(request));
				};
				timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
			}),
			id: timeoutId
		};
	}
	async _getNetworkPromise({ timeoutId, request, logs, handler }) {
		let error;
		let response;
		try {
			response = await handler.fetchAndCachePut(request);
		} catch (fetchError) {
			if (fetchError instanceof Error) error = fetchError;
		}
		if (timeoutId) clearTimeout(timeoutId);
		if (error || !response) response = await handler.cacheMatch(request);
		return response;
	}
};
var NetworkOnly = class extends Strategy {
	constructor(options = {}) {
		super(options);
		this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
	}
	async _handle(request, handler) {
		let error = void 0;
		let response;
		try {
			const promises = [handler.fetch(request)];
			if (this._networkTimeoutSeconds) {
				const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
				promises.push(timeoutPromise);
			}
			response = await Promise.race(promises);
			if (!response) throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
		} catch (err) {
			if (err instanceof Error) error = err;
		}
		if (!response) throw new WorkboxError("no-response", {
			url: request.url,
			error
		});
		return response;
	}
};
var StaleWhileRevalidate = class extends Strategy {
	constructor(options = {}) {
		super(options);
		if (!this.plugins.some((p) => "cacheWillUpdate" in p)) this.plugins.unshift(cacheOkAndOpaquePlugin);
	}
	async _handle(request, handler) {
		const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {});
		handler.waitUntil(fetchAndCachePromise);
		let response = await handler.cacheMatch(request);
		let error;
		if (response) {} else try {
			response = await fetchAndCachePromise;
		} catch (err) {
			if (err instanceof Error) error = err;
		}
		if (!response) throw new WorkboxError("no-response", {
			url: request.url,
			error
		});
		return response;
	}
};
var entries = [{"revision":"b0ab92229f0a3f2da0a4d0480623cb12","url":"404.html"},{"revision":"30c13b6e0429fb6f0059838285745b99","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.gGkmRLGi.js"},{"revision":null,"url":"assets/add-ons.md.gGkmRLGi.lean.js"},{"revision":null,"url":"assets/app.1pT5jED3.js"},{"revision":null,"url":"assets/chunks/@localSearchIndexroot.gOEu_gCS.js"},{"revision":null,"url":"assets/chunks/axios.LTtflM28.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.CL5Nbvae.js"},{"revision":null,"url":"assets/chunks/browser.Dvv_YeiO.js"},{"revision":null,"url":"assets/chunks/CodeToggle.Z6LNmoUF.js"},{"revision":null,"url":"assets/chunks/computedAsync.D4x9ZNoT.js"},{"revision":null,"url":"assets/chunks/configurable.CHIFr4yg.js"},{"revision":null,"url":"assets/chunks/Contributors.Dlm9_EGG.js"},{"revision":null,"url":"assets/chunks/CourseLink.CxWtxz0z.js"},{"revision":null,"url":"assets/chunks/createEventHook.CZiZk_fv.js"},{"revision":null,"url":"assets/chunks/demo.client.CGbI0jog.js"},{"revision":null,"url":"assets/chunks/demo.client.CH8ryGIF.js"},{"revision":null,"url":"assets/chunks/demo.client.CR-cSXXD.js"},{"revision":null,"url":"assets/chunks/demo.client.D2MM_h2I.js"},{"revision":null,"url":"assets/chunks/demo.client.JuxqX_Ys.js"},{"revision":null,"url":"assets/chunks/DemoContainer.D7eaOENU.js"},{"revision":null,"url":"assets/chunks/filters.FeueHqze.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.D07iGzEz.js"},{"revision":null,"url":"assets/chunks/fuse.DAlui34T.js"},{"revision":null,"url":"assets/chunks/general.BbmBTXVB.js"},{"revision":null,"url":"assets/chunks/injectLocal.BRgk9it-.js"},{"revision":null,"url":"assets/chunks/is.CbRwWVeh.js"},{"revision":null,"url":"assets/chunks/metadata.vXSMZI70.js"},{"revision":null,"url":"assets/chunks/Note.B_CcS266.js"},{"revision":null,"url":"assets/chunks/onClickOutside.DI9Revbs.js"},{"revision":null,"url":"assets/chunks/onElementRemoval.DwybeVsC.js"},{"revision":null,"url":"assets/chunks/onKeyStroke.CNf_HLS3.js"},{"revision":null,"url":"assets/chunks/onStartTyping.ZZZJj_8O.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.Dhv-ahtx.js"},{"revision":null,"url":"assets/chunks/resolve-element.DvOzTP1u.js"},{"revision":null,"url":"assets/chunks/rolldown-runtime.vMyk0wDB.js"},{"revision":null,"url":"assets/chunks/Scrubber.ByoltvSW.js"},{"revision":null,"url":"assets/chunks/syncRef.DMNk8SYO.js"},{"revision":null,"url":"assets/chunks/toRef.YonFBqrF.js"},{"revision":null,"url":"assets/chunks/toRefs.DDZFhd20.js"},{"revision":null,"url":"assets/chunks/tryOnMounted.6dxedOfE.js"},{"revision":null,"url":"assets/chunks/tryOnScopeDispose.C50xVOZe.js"},{"revision":null,"url":"assets/chunks/tryOnUnmounted.kSIYAXe6.js"},{"revision":null,"url":"assets/chunks/unrefElement.BXTXpAEN.js"},{"revision":null,"url":"assets/chunks/until.9tXURh-t.js"},{"revision":null,"url":"assets/chunks/useActiveElement.DBkuF6yr.js"},{"revision":null,"url":"assets/chunks/useAsyncState.CTFacX88.js"},{"revision":null,"url":"assets/chunks/useClamp.DfJZZqYk.js"},{"revision":null,"url":"assets/chunks/useCloned.CeRQwYTr.js"},{"revision":null,"url":"assets/chunks/useColorMode.DLuxl4Vy.js"},{"revision":null,"url":"assets/chunks/useCounter.JI36DxrD.js"},{"revision":null,"url":"assets/chunks/useCssVar.8WIyGp12.js"},{"revision":null,"url":"assets/chunks/useCurrentElement.Cp8YOmYE.js"},{"revision":null,"url":"assets/chunks/useCycleList.DhSY9fAY.js"},{"revision":null,"url":"assets/chunks/useDark.DZKQ6cGw.js"},{"revision":null,"url":"assets/chunks/useDateFormat.DzENVLpX.js"},{"revision":null,"url":"assets/chunks/useDebounceFn.N90Jsgmj.js"},{"revision":null,"url":"assets/chunks/useDeviceOrientation.ltekPv7w.js"},{"revision":null,"url":"assets/chunks/useDevicesList.la4I-Idp.js"},{"revision":null,"url":"assets/chunks/useDocumentVisibility.CCRgYAyM.js"},{"revision":null,"url":"assets/chunks/useElementBounding.DNUh4GNi.js"},{"revision":null,"url":"assets/chunks/useElementByPoint.A_0QCJdY.js"},{"revision":null,"url":"assets/chunks/useElementSize.lxx5FEFN.js"},{"revision":null,"url":"assets/chunks/useElementVisibility.MKG0MK26.js"},{"revision":null,"url":"assets/chunks/useEventListener.c80kvxRv.js"},{"revision":null,"url":"assets/chunks/useFocusTrap.DhzzF0VW.js"},{"revision":null,"url":"assets/chunks/useIntersectionObserver.BjPl2R9Y.js"},{"revision":null,"url":"assets/chunks/useManualRefHistory.1siV1ND1.js"},{"revision":null,"url":"assets/chunks/useMediaQuery.DV1FpnDS.js"},{"revision":null,"url":"assets/chunks/useMounted.C2aBVv6T.js"},{"revision":null,"url":"assets/chunks/useMouse.BhmPYfVY.js"},{"revision":null,"url":"assets/chunks/useMouseInElement.C2DmrsJk.js"},{"revision":null,"url":"assets/chunks/useMutationObserver.CiK1TvV4.js"},{"revision":null,"url":"assets/chunks/useNavigatorLanguage.DwXPI0BJ.js"},{"revision":null,"url":"assets/chunks/useNetwork.in1iVI_U.js"},{"revision":null,"url":"assets/chunks/useParentElement.BAI6BzP2.js"},{"revision":null,"url":"assets/chunks/usePermission.BTadhBq-.js"},{"revision":null,"url":"assets/chunks/usePreferredDark.CYFUCfac.js"},{"revision":null,"url":"assets/chunks/useRafFn.sH_0wwhz.js"},{"revision":null,"url":"assets/chunks/useRefHistory.ByWYmFHk.js"},{"revision":null,"url":"assets/chunks/useResizeObserver.DK_mYc6H.js"},{"revision":null,"url":"assets/chunks/useScreenOrientation.DZekCybh.js"},{"revision":null,"url":"assets/chunks/useScroll.UB9ukARy.js"},{"revision":null,"url":"assets/chunks/useScrollLock.DEU0AKSZ.js"},{"revision":null,"url":"assets/chunks/useStorage.1v99ycRt.js"},{"revision":null,"url":"assets/chunks/useSupported.wZzSDbHl.js"},{"revision":null,"url":"assets/chunks/useThrottleFn.BAkNQXKm.js"},{"revision":null,"url":"assets/chunks/useTimeoutFn.Cb_v33er.js"},{"revision":null,"url":"assets/chunks/useTimestamp.vSffU4CG.js"},{"revision":null,"url":"assets/chunks/useToggle.LyZR1cPo.js"},{"revision":null,"url":"assets/chunks/useUrlSearchParams.BrMku3Nn.js"},{"revision":null,"url":"assets/chunks/useWindowScroll.BnbAzBpe.js"},{"revision":null,"url":"assets/chunks/useWindowSize.Ba3u45pw.js"},{"revision":null,"url":"assets/chunks/utils.CeKs_kGW.js"},{"revision":null,"url":"assets/chunks/VPLocalSearchBox.sePSDMrw.js"},{"revision":null,"url":"assets/chunks/vue.CAJL2k56.js"},{"revision":null,"url":"assets/chunks/watchDebounced.CKAc6rQf.js"},{"revision":null,"url":"assets/chunks/watchIgnorable.BPNcCjE1.js"},{"revision":null,"url":"assets/chunks/watchPausable.CLZhH2ih.js"},{"revision":null,"url":"assets/chunks/watchWithFilter.DPQ9dII4.js"},{"revision":null,"url":"assets/components_README.md.IEBla0Ux.js"},{"revision":null,"url":"assets/components_README.md.IEBla0Ux.lean.js"},{"revision":null,"url":"assets/contributing.md.BaGly0pO.js"},{"revision":null,"url":"assets/contributing.md.BaGly0pO.lean.js"},{"revision":null,"url":"assets/core__template_index.md.COXkjPTD.js"},{"revision":null,"url":"assets/core__template_index.md.COXkjPTD.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.0A6pq6EE.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.0A6pq6EE.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.C_psrxL0.js"},{"revision":null,"url":"assets/core_computedInject_index.md.C_psrxL0.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md._EmTPFGc.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md._EmTPFGc.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.8DaceSX4.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.8DaceSX4.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.243PHEg1.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.243PHEg1.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.EV6ZczkR.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.EV6ZczkR.lean.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.DWaeExwW.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.DWaeExwW.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.BT9_CcH_.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.BT9_CcH_.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.C05XCVtZ.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.C05XCVtZ.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.BR0yMOub.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.BR0yMOub.lean.js"},{"revision":null,"url":"assets/core_README.md.26tZDv86.js"},{"revision":null,"url":"assets/core_README.md.26tZDv86.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.AJVE40oT.js"},{"revision":null,"url":"assets/core_templateRef_index.md.AJVE40oT.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.CjrIemg_.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.CjrIemg_.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.mu09fka5.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.mu09fka5.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.Cwy66T6o.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.Cwy66T6o.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.BW5le0wC.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.BW5le0wC.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.BztMr1y3.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.BztMr1y3.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.C2JW03lR.js"},{"revision":null,"url":"assets/core_useBase64_index.md.C2JW03lR.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.DL8weAIJ.js"},{"revision":null,"url":"assets/core_useBattery_index.md.DL8weAIJ.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.BCL_1Y9i.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.BCL_1Y9i.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.DShZRzDa.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.DShZRzDa.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.CkDDicl1.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.CkDDicl1.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.icrZNPIz.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.icrZNPIz.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.Bd2OiJTG.js"},{"revision":null,"url":"assets/core_useCached_index.md.Bd2OiJTG.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.D8r1NfCN.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.D8r1NfCN.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.CWAPnz3o.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.CWAPnz3o.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.CFQHg_ep.js"},{"revision":null,"url":"assets/core_useCloned_index.md.CFQHg_ep.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.BiZ1NA1r.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.BiZ1NA1r.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.DR8d8OKf.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.DR8d8OKf.lean.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.CCaLxKDR.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.CCaLxKDR.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.T9gAN3Ug.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.T9gAN3Ug.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.X6MpUa7T.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.X6MpUa7T.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.C8pG6vpF.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.C8pG6vpF.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.C4Bw3nE7.js"},{"revision":null,"url":"assets/core_useDark_index.md.C4Bw3nE7.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.DouDUKN6.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.DouDUKN6.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.BZnpB4F9.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.BZnpB4F9.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.cX1HVzZO.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.cX1HVzZO.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.eO5XIwBU.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.eO5XIwBU.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.Dixqzn1L.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.Dixqzn1L.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.SFe385_W.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.SFe385_W.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.DBMIs1yK.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.DBMIs1yK.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.CWtELXyu.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.CWtELXyu.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.CO092oPN.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.CO092oPN.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.DWoZn2sR.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.DWoZn2sR.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.DkskZ0c8.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.DkskZ0c8.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.Dp90fBt1.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.Dp90fBt1.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.TEveO5y9.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.TEveO5y9.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.B4kjX1JH.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.B4kjX1JH.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.Dg0EBIBb.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.Dg0EBIBb.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.GGCOGL19.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.GGCOGL19.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.DeG9j0xb.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.DeG9j0xb.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.mNBQp1n1.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.mNBQp1n1.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.Cqn2Q7Kh.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.Cqn2Q7Kh.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.ClqruTr2.js"},{"revision":null,"url":"assets/core_useFetch_index.md.ClqruTr2.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.BaDyhwXC.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.BaDyhwXC.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.Bxe-oioV.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.Bxe-oioV.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BsWmefmd.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BsWmefmd.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.CunR4VHf.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.CunR4VHf.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.DeeG6S0K.js"},{"revision":null,"url":"assets/core_useFps_index.md.DeeG6S0K.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.BBgGIN3Z.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.BBgGIN3Z.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.CvESEcCd.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.CvESEcCd.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.ChRON6Kn.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.ChRON6Kn.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.DtaH3P6G.js"},{"revision":null,"url":"assets/core_useIdle_index.md.DtaH3P6G.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.DLZHUlnZ.js"},{"revision":null,"url":"assets/core_useImage_index.md.DLZHUlnZ.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.CCoYt_v2.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.CCoYt_v2.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.BWAdKEUj.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.BWAdKEUj.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.DJRNnV-C.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.DJRNnV-C.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.Cgtnh_6Z.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.Cgtnh_6Z.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.GRvfifa0.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.GRvfifa0.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.BeucL-uP.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.BeucL-uP.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.5Wsc5p1F.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.5Wsc5p1F.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.NDwBWAZp.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.NDwBWAZp.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.un4sFanC.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.un4sFanC.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.Ctt6Cq9U.js"},{"revision":null,"url":"assets/core_useMemory_index.md.Ctt6Cq9U.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.AENuf-5y.js"},{"revision":null,"url":"assets/core_useMounted_index.md.AENuf-5y.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.Dss749j5.js"},{"revision":null,"url":"assets/core_useMouse_index.md.Dss749j5.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.BDgAQABP.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.BDgAQABP.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.BXcHeFo7.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.BXcHeFo7.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.gq5fVui9.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.gq5fVui9.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.B630B-Vh.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.B630B-Vh.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.DfQaa_A6.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.DfQaa_A6.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.CY_CAQYM.js"},{"revision":null,"url":"assets/core_useNow_index.md.CY_CAQYM.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.CeOc7Pqa.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.CeOc7Pqa.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.BUe6eQWq.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.BUe6eQWq.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.BXhlhoHE.js"},{"revision":null,"url":"assets/core_useOnline_index.md.BXhlhoHE.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.BYYAytUW.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.BYYAytUW.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.CNpQOjgG.js"},{"revision":null,"url":"assets/core_useParallax_index.md.CNpQOjgG.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.njSHR-wA.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.njSHR-wA.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.CYSx6aRn.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.CYSx6aRn.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.DHFNnxcx.js"},{"revision":null,"url":"assets/core_usePermission_index.md.DHFNnxcx.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.g6Kj9nfs.js"},{"revision":null,"url":"assets/core_usePointer_index.md.g6Kj9nfs.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.Czmj2kHO.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.Czmj2kHO.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.BVvEa3Uq.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.BVvEa3Uq.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.Cuw-zLzk.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.Cuw-zLzk.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.B-Ep5gFB.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.B-Ep5gFB.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.BqGlKl2B.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.BqGlKl2B.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.nC546VVn.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.nC546VVn.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md._z7pg-ws.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md._z7pg-ws.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.DvXoEGqs.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.DvXoEGqs.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.k55ZSapE.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.k55ZSapE.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.CUFerb5Y.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.CUFerb5Y.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.cTiZ9uAR.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.cTiZ9uAR.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.Banghjh2.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.Banghjh2.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.rkjP6bdX.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.rkjP6bdX.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.DDlMHhVn.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.DDlMHhVn.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.Bir7L_i9.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.Bir7L_i9.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.i2VcAEq7.js"},{"revision":null,"url":"assets/core_useScroll_index.md.i2VcAEq7.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.CNG0d_Mf.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.CNG0d_Mf.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.BfHUG_z8.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.BfHUG_z8.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.HVNUTHBP.js"},{"revision":null,"url":"assets/core_useShare_index.md.HVNUTHBP.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.DwwaNK0e.js"},{"revision":null,"url":"assets/core_useSorted_index.md.DwwaNK0e.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.DxjaryT-.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.DxjaryT-.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.NO298UVc.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.NO298UVc.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.AYQeJ_bM.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.AYQeJ_bM.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.coZtC-qZ.js"},{"revision":null,"url":"assets/core_useStepper_index.md.coZtC-qZ.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.DBTz1bR0.js"},{"revision":null,"url":"assets/core_useStorage_index.md.DBTz1bR0.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.CDV3UUKO.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.CDV3UUKO.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.BturcLU8.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.BturcLU8.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.GcPNkjld.js"},{"revision":null,"url":"assets/core_useSupported_index.md.GcPNkjld.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.fP9sp9_w.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.fP9sp9_w.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BAkzidmx.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BAkzidmx.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.D8_aN-Lo.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.D8_aN-Lo.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.ev5TaVUc.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.ev5TaVUc.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.BwBf0yXr.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.BwBf0yXr.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.B4vBdue9.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.B4vBdue9.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BpfpTJ-Q.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BpfpTJ-Q.lean.js"},{"revision":null,"url":"assets/core_useTimeAgoIntl_index.md.9MDDGdgq.js"},{"revision":null,"url":"assets/core_useTimeAgoIntl_index.md.9MDDGdgq.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.J9xYPDGb.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.J9xYPDGb.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DMM77p58.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DMM77p58.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.pkye8BDb.js"},{"revision":null,"url":"assets/core_useTitle_index.md.pkye8BDb.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.Cl9luvpI.js"},{"revision":null,"url":"assets/core_useTransition_index.md.Cl9luvpI.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.XsDOpoXh.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.XsDOpoXh.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.CNONpGQM.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.CNONpGQM.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.BzAYEu1u.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.BzAYEu1u.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CF7msrJc.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CF7msrJc.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.BJSZ8Po2.js"},{"revision":null,"url":"assets/core_useVModel_index.md.BJSZ8Po2.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.Buh0ocSa.js"},{"revision":null,"url":"assets/core_useVModels_index.md.Buh0ocSa.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.ByjR9axW.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.ByjR9axW.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.Cyy9Xcuz.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.Cyy9Xcuz.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.C-4XbSvt.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.C-4XbSvt.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.C034sebS.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.C034sebS.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.CKqrpS0u.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.CKqrpS0u.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.svYa4Tlr.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.svYa4Tlr.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.DCJLEHIs.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.DCJLEHIs.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.D_CsR-sH.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.D_CsR-sH.lean.js"},{"revision":null,"url":"assets/ecosystem.md.IEB9Pcij.js"},{"revision":null,"url":"assets/ecosystem.md.IEB9Pcij.lean.js"},{"revision":null,"url":"assets/electron_README.md.Dg1SYW3n.js"},{"revision":null,"url":"assets/electron_README.md.Dg1SYW3n.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.emT-4Y4L.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.emT-4Y4L.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.DBQOLygB.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.DBQOLygB.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.zQp11_P1.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.zQp11_P1.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.Cwioq5l4.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.Cwioq5l4.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.DrS6RTei.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.DrS6RTei.lean.js"},{"revision":null,"url":"assets/export-size.md.CeLBjh4_.js"},{"revision":null,"url":"assets/export-size.md.CeLBjh4_.lean.js"},{"revision":null,"url":"assets/firebase_README.md.CCMtxY6o.js"},{"revision":null,"url":"assets/firebase_README.md.CCMtxY6o.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.CrECvvvm.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.CrECvvvm.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.DZZK5mVM.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.DZZK5mVM.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.Cde7QJki.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.Cde7QJki.lean.js"},{"revision":null,"url":"assets/functions.md.BU0F5Vgz.js"},{"revision":null,"url":"assets/functions.md.BU0F5Vgz.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.B7dgQnMk.js"},{"revision":null,"url":"assets/guide_best-practice.md.B7dgQnMk.lean.js"},{"revision":null,"url":"assets/guide_components.md.D7JIonF7.js"},{"revision":null,"url":"assets/guide_components.md.D7JIonF7.lean.js"},{"revision":null,"url":"assets/guide_config.md.DMOdjhCq.js"},{"revision":null,"url":"assets/guide_config.md.DMOdjhCq.lean.js"},{"revision":null,"url":"assets/guide_index.md.BIEeirk-.js"},{"revision":null,"url":"assets/guide_index.md.BIEeirk-.lean.js"},{"revision":null,"url":"assets/guide_work-with-ai.md.BvA19wIc.js"},{"revision":null,"url":"assets/guide_work-with-ai.md.BvA19wIc.lean.js"},{"revision":null,"url":"assets/guidelines.md.DNiqGjUt.js"},{"revision":null,"url":"assets/guidelines.md.DNiqGjUt.lean.js"},{"revision":null,"url":"assets/index.md.Dwb8C4Vw.js"},{"revision":null,"url":"assets/index.md.Dwb8C4Vw.lean.js"},{"revision":null,"url":"assets/integrations_README.md.BgH1F1cf.js"},{"revision":null,"url":"assets/integrations_README.md.BgH1F1cf.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.FI6gpZn4.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.FI6gpZn4.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.CHaoJ8Tb.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.CHaoJ8Tb.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.3P7uZKw_.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.3P7uZKw_.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.ihdAPNpd.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.ihdAPNpd.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.wVzn-Mco.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.wVzn-Mco.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.B1wnMq4T.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.B1wnMq4T.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.B2pGpSU-.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.B2pGpSU-.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.VJfdbqFq.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.VJfdbqFq.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.Cc235y28.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.Cc235y28.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.DJOFc70F.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.DJOFc70F.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.DYLtlg8G.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.DYLtlg8G.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CUe6Jdvx.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CUe6Jdvx.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.Bp5JLpcl.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.Bp5JLpcl.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.BCVugFMW.js"},{"revision":null,"url":"assets/math_createProjection_index.md.BCVugFMW.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.C3u1mFRG.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.C3u1mFRG.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.BKXMbM51.js"},{"revision":null,"url":"assets/math_logicNot_index.md.BKXMbM51.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.4VbpKmnx.js"},{"revision":null,"url":"assets/math_logicOr_index.md.4VbpKmnx.lean.js"},{"revision":null,"url":"assets/math_README.md.DgXuSNmc.js"},{"revision":null,"url":"assets/math_README.md.DgXuSNmc.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.DB3ZsdUb.js"},{"revision":null,"url":"assets/math_useAbs_index.md.DB3ZsdUb.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.CJtffnGy.js"},{"revision":null,"url":"assets/math_useAverage_index.md.CJtffnGy.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.DqSIJu2x.js"},{"revision":null,"url":"assets/math_useCeil_index.md.DqSIJu2x.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DyxYsRKF.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DyxYsRKF.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.CJ2MTBAL.js"},{"revision":null,"url":"assets/math_useFloor_index.md.CJ2MTBAL.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.C05cFl5o.js"},{"revision":null,"url":"assets/math_useMath_index.md.C05cFl5o.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.BqCZO4Cp.js"},{"revision":null,"url":"assets/math_useMax_index.md.BqCZO4Cp.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.BqCGB3To.js"},{"revision":null,"url":"assets/math_useMin_index.md.BqCGB3To.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.CKsE4Fp_.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.CKsE4Fp_.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.CiRQGgQT.js"},{"revision":null,"url":"assets/math_useProjection_index.md.CiRQGgQT.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.BID0DE-6.js"},{"revision":null,"url":"assets/math_useRound_index.md.BID0DE-6.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.BETSFWuy.js"},{"revision":null,"url":"assets/math_useSum_index.md.BETSFWuy.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.Da_DqY2M.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.Da_DqY2M.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.Cm0yNXQr.js"},{"revision":null,"url":"assets/nuxt_README.md.Cm0yNXQr.lean.js"},{"revision":null,"url":"assets/router_README.md.cAdqqkPS.js"},{"revision":null,"url":"assets/router_README.md.cAdqqkPS.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.Dk110uOh.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.Dk110uOh.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.wrkXoS0I.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.wrkXoS0I.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.6msEcaPV.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.6msEcaPV.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.CNX_j9ZK.js"},{"revision":null,"url":"assets/rxjs_from_index.md.CNX_j9ZK.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.Fl_9Eu-C.js"},{"revision":null,"url":"assets/rxjs_README.md.Fl_9Eu-C.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.Cl-fbxrJ.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.Cl-fbxrJ.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.Bcrjkl2t.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.Bcrjkl2t.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.B1wsagEU.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.B1wsagEU.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.O3MyNRvs.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.O3MyNRvs.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.BKh7-CCF.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.BKh7-CCF.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.Bsf8IHJF.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.Bsf8IHJF.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.BwGPZZhG.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.BwGPZZhG.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.D2O3zIWI.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.D2O3zIWI.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.CZ3lz9pU.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.CZ3lz9pU.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.Bs-PcwRJ.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.Bs-PcwRJ.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.DKEFpQ1U.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.DKEFpQ1U.lean.js"},{"revision":null,"url":"assets/shared_createRef_index.md.BT7OGVAR.js"},{"revision":null,"url":"assets/shared_createRef_index.md.BT7OGVAR.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.CcLyc4NC.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.CcLyc4NC.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.B_EIAXDn.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.B_EIAXDn.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.CqIUM9C6.js"},{"revision":null,"url":"assets/shared_get_index.md.CqIUM9C6.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.BCWq9zyN.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.BCWq9zyN.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.CMbiNd5y.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.CMbiNd5y.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.Chh4O63p.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.Chh4O63p.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.cYj17SJX.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.cYj17SJX.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.CVtAB3XS.js"},{"revision":null,"url":"assets/shared_reactify_index.md.CVtAB3XS.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.BZYdJX1-.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.BZYdJX1-.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.BH_HQnYA.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.BH_HQnYA.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.BhZZAJpY.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.BhZZAJpY.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.DFEWsl0r.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.DFEWsl0r.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.BS4pzO9X.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.BS4pzO9X.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.Cr1trh9o.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.Cr1trh9o.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.DJAHjVWC.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.DJAHjVWC.lean.js"},{"revision":null,"url":"assets/shared_refManualReset_index.md.9CTDCg2a.js"},{"revision":null,"url":"assets/shared_refManualReset_index.md.9CTDCg2a.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.BAKbJwsP.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.BAKbJwsP.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.CTba_dzA.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.CTba_dzA.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.Cyt7rFUj.js"},{"revision":null,"url":"assets/shared_set_index.md.Cyt7rFUj.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.eG7NGBxJ.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.eG7NGBxJ.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.wJh3R8mF.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.wJh3R8mF.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.BFo-UHm6.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.BFo-UHm6.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.iurNp6sP.js"},{"revision":null,"url":"assets/shared_toRef_index.md.iurNp6sP.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.DPlhAL2_.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.DPlhAL2_.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.BfMxR0n7.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.BfMxR0n7.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.BoARnoVH.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.BoARnoVH.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.Dyep5vDC.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.Dyep5vDC.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.D5Lf2KHd.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.D5Lf2KHd.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.CW5PG6NC.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.CW5PG6NC.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.69v4MtCm.js"},{"revision":null,"url":"assets/shared_until_index.md.69v4MtCm.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.OE4RvzP6.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.OE4RvzP6.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.rtDL474Z.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.rtDL474Z.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.B_orcpCO.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.B_orcpCO.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.LJk04pty.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.LJk04pty.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.C8hUzK5f.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.C8hUzK5f.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.eVtJ8mse.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.eVtJ8mse.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.DZe61ZUo.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.DZe61ZUo.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.DAZW-gN2.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.DAZW-gN2.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.BCj144oV.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.BCj144oV.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.BnLyFvAD.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.BnLyFvAD.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.BVkFSHnQ.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.BVkFSHnQ.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.D7GUks4z.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.D7GUks4z.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.Bo_aIemH.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.Bo_aIemH.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.Dcx4Z6JF.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.Dcx4Z6JF.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.CjLJ4UB0.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.CjLJ4UB0.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.DCk2WHED.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.DCk2WHED.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.mc0h2pbt.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.mc0h2pbt.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.BNde4aqk.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.BNde4aqk.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.CGD7gFJF.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.CGD7gFJF.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.OFgE4bUK.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.OFgE4bUK.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.CUwWvsQZ.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.CUwWvsQZ.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.uSpHCqzB.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.uSpHCqzB.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.DV8vvPJx.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.DV8vvPJx.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.BN9satS8.js"},{"revision":null,"url":"assets/shared_useToString_index.md.BN9satS8.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Oy57q-g8.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Oy57q-g8.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.CruCc2E0.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.CruCc2E0.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.DZSesCcr.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.DZSesCcr.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.D5B7QY3V.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.D5B7QY3V.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.P6YVwCBE.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.P6YVwCBE.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.dYSG6Sr9.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.dYSG6Sr9.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.DHXTu_gV.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.DHXTu_gV.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.DJLIG99z.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.DJLIG99z.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.D5TyOY3C.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.D5TyOY3C.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.DM7O93kd.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.DM7O93kd.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.BSNILZ10.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.BSNILZ10.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.D0jwUm3P.js"},{"revision":null,"url":"assets/shared_whenever_index.md.D0jwUm3P.lean.js"},{"revision":null,"url":"assets/style.k4j-pqhn.css"},{"revision":null,"url":"assets/team.md.CzZa19lL.js"},{"revision":null,"url":"assets/team.md.CzZa19lL.lean.js"},{"revision":null,"url":"assets/why-no-translations.md.DUvsWU-r.js"},{"revision":null,"url":"assets/why-no-translations.md.DUvsWU-r.lean.js"},{"revision":"683c1aeac94d03c11965dd72904ac6be","url":"badge-function-count.svg"},{"revision":"7c7fddcda9fe7ef8d6a7a7adabc4a1b6","url":"components/README.html"},{"revision":"14cff398605b0c4a4d461803cd2f8b16","url":"contributing.html"},{"revision":"55c256eb41422016d41ccddca2e4b043","url":"core/_template/index.html"},{"revision":"45df5ee520195b99f8489534b16b6da2","url":"core/computedAsync/index.html"},{"revision":"bdc26fad11c4fe77e5e3889cad6b9ac4","url":"core/computedInject/index.html"},{"revision":"31870e7521119877fc18b9b0c2e439a7","url":"core/createReusableTemplate/index.html"},{"revision":"706e142b26edb1d5ff090960c99effc1","url":"core/createTemplatePromise/index.html"},{"revision":"93c4bae20fa09c2cbb146152810f877a","url":"core/createUnrefFn/index.html"},{"revision":"53d9b73796e096523c5c44b5de768c58","url":"core/onClickOutside/index.html"},{"revision":"58ddffa37240be25e208c7e4a93585a2","url":"core/onElementRemoval/index.html"},{"revision":"5e0d4f105d14854bbc64713c9a47e442","url":"core/onKeyStroke/index.html"},{"revision":"bbc303b208d98def8c4d851244194ab5","url":"core/onLongPress/index.html"},{"revision":"cb3962cf0f60cfdb2b2ec7e337f6b99f","url":"core/onStartTyping/index.html"},{"revision":"f4b2985863a31dc549fa3fc6f2deb5e3","url":"core/README.html"},{"revision":"59bcbadbec518ea01dd32e6c19892385","url":"core/templateRef/index.html"},{"revision":"ca026d4ece67adadfa42932663f8bc53","url":"core/unrefElement/index.html"},{"revision":"3439f4cea2e5c6b6e0384767ac0c134d","url":"core/useActiveElement/index.html"},{"revision":"3fd5452f4e69ad6a041fff6bf6238bf7","url":"core/useAnimate/index.html"},{"revision":"45aa634c39505ec021c427d19928c5f0","url":"core/useAsyncQueue/index.html"},{"revision":"d56282ce692a1d4cc0af00acea17737e","url":"core/useAsyncState/index.html"},{"revision":"6aa1acfe97c12701f26408accffbb561","url":"core/useBase64/index.html"},{"revision":"2ca3e2aa3f92d6c658bd7e2726f9a2a5","url":"core/useBattery/index.html"},{"revision":"411d8f2bd4ee838584069bfaf3324671","url":"core/useBluetooth/index.html"},{"revision":"6945d86459a7794a4821e1c9474c9509","url":"core/useBreakpoints/index.html"},{"revision":"3846cf63f069920a1565b78febb6247b","url":"core/useBroadcastChannel/index.html"},{"revision":"47924407558162cfb2f94bd30c882015","url":"core/useBrowserLocation/index.html"},{"revision":"9b87c9d006ce484ada5ffe17fb4cc96e","url":"core/useCached/index.html"},{"revision":"27ebed39c9ca866b415ff61c68038274","url":"core/useClipboard/index.html"},{"revision":"1044b9b6af7c21ee57978011e58ab428","url":"core/useClipboardItems/index.html"},{"revision":"1f8e38d13b8ffb86ffe52dbe616a881a","url":"core/useCloned/index.html"},{"revision":"f4afa0ad125086fe4444afc6a92e1572","url":"core/useColorMode/index.html"},{"revision":"0a47c99c366538c87dec0ae2aee7846c","url":"core/useConfirmDialog/index.html"},{"revision":"8524d5423c5d68d368df8a0d4e1244e2","url":"core/useCountdown/index.html"},{"revision":"46fd405d7b7698385b19a040b9909b90","url":"core/useCssVar/index.html"},{"revision":"c126aa598e1bba6a06600ce988682458","url":"core/useCurrentElement/index.html"},{"revision":"ec506c34672743241f8d5d4333d77d18","url":"core/useCycleList/index.html"},{"revision":"7716e9d412a56194634e70fdbde155f3","url":"core/useDark/index.html"},{"revision":"a06cbbd0241bf9ba2859e3a7503ad6b6","url":"core/useDebouncedRefHistory/index.html"},{"revision":"2cd5fcf589cfc3983383fa987f32e188","url":"core/useDeviceMotion/index.html"},{"revision":"70b8fd635dc270ecf5d134082faaca2c","url":"core/useDeviceOrientation/index.html"},{"revision":"48ac0f00fca7191d8119bd196a8b19b2","url":"core/useDevicePixelRatio/index.html"},{"revision":"513ff5ce52025357e21cf96ab098453c","url":"core/useDevicesList/index.html"},{"revision":"a5b5fb0d91e536e8ec0b6fbc342dc1f9","url":"core/useDisplayMedia/index.html"},{"revision":"1cff6a120e8eb34c2db65384546414fb","url":"core/useDocumentVisibility/index.html"},{"revision":"136da14cccea4ce3f930df0eb10e4902","url":"core/useDraggable/index.html"},{"revision":"e9619d860080a7e2410ec4de3e644fd5","url":"core/useDropZone/index.html"},{"revision":"1641f428a981a46f63c36df8ffb2c605","url":"core/useElementBounding/index.html"},{"revision":"7bea8769e97e062dd92d8da0a8968fa5","url":"core/useElementByPoint/index.html"},{"revision":"5a4124314c5f36f62f3415773047a1bf","url":"core/useElementHover/index.html"},{"revision":"9278bb18229e34e65c75ad31af9f1e56","url":"core/useElementSize/index.html"},{"revision":"977e14e3f99d0fe8e3eae2d86fe5963f","url":"core/useElementVisibility/index.html"},{"revision":"6af301c427e30935c26606cb0d8d9eea","url":"core/useEventBus/index.html"},{"revision":"b2f0f01f7ee49af2140e3ce76440cc22","url":"core/useEventListener/index.html"},{"revision":"b08491afa17bdf1b9bdec23a657ed4f4","url":"core/useEventSource/index.html"},{"revision":"21977249a38c357d79be6534facbee2c","url":"core/useEyeDropper/index.html"},{"revision":"eefe40602052543920a17fe208f190de","url":"core/useFavicon/index.html"},{"revision":"ae5e2a8c597a53498eb12cb7d767dc45","url":"core/useFetch/index.html"},{"revision":"7ff408d68e0795f42d8e69ad5360659a","url":"core/useFileDialog/index.html"},{"revision":"9c9e906a42d2cb4d478624d7855c721a","url":"core/useFileSystemAccess/index.html"},{"revision":"fe83f05e89228b9c846f9e58c2346315","url":"core/useFocus/index.html"},{"revision":"494a91d277479c8c7dfe72efb1886439","url":"core/useFocusWithin/index.html"},{"revision":"1d5b77ec6fb070aebc225b65a95e4dac","url":"core/useFps/index.html"},{"revision":"5bbf835dd5f64f804b8cccf11629034b","url":"core/useFullscreen/index.html"},{"revision":"836ff0020a95ac8c0267501926480d42","url":"core/useGamepad/index.html"},{"revision":"4f2a01fd793072261967f6d554b0c5a0","url":"core/useGeolocation/index.html"},{"revision":"7c7af185f8929f1a5625286f193e3aff","url":"core/useIdle/index.html"},{"revision":"61ff552310e9101d824f171c16773f41","url":"core/useImage/index.html"},{"revision":"977f1043a3cbda3ff2eaa55320d61624","url":"core/useInfiniteScroll/index.html"},{"revision":"39ae630353a8baf6eb3c09137791976c","url":"core/useIntersectionObserver/index.html"},{"revision":"53689ed6c1006eebe6f793faa8e72547","url":"core/useKeyModifier/index.html"},{"revision":"e17a844af12da7cc433733162334645e","url":"core/useLocalStorage/index.html"},{"revision":"d0428eece44b38d865d1e9f33607c490","url":"core/useMagicKeys/index.html"},{"revision":"fa803e826b38a27de0a1d623154e64a1","url":"core/useManualRefHistory/index.html"},{"revision":"c21cb64c3a63bd8e369fbbf996c17f3f","url":"core/useMediaControls/index.html"},{"revision":"afef4ca0deadc77849364bff174cd3e0","url":"core/useMediaQuery/index.html"},{"revision":"eab2a45867fdf64937e3b0447ebd006e","url":"core/useMemoize/index.html"},{"revision":"368f07272fc4bf6acf7913851111217b","url":"core/useMemory/index.html"},{"revision":"429f6206e3cfcc920baf66124522c089","url":"core/useMounted/index.html"},{"revision":"1aedcbefa385bc46ce14e2ff02857517","url":"core/useMouse/index.html"},{"revision":"2890e25309b761be527eb4022ad5add3","url":"core/useMouseInElement/index.html"},{"revision":"732ad9d6ba2110ebc060303462e7a3e5","url":"core/useMousePressed/index.html"},{"revision":"b8f128e63f52d7e614bc7604c0e694d4","url":"core/useMutationObserver/index.html"},{"revision":"df79e25d06d48a3983f8ea275bba1a1a","url":"core/useNavigatorLanguage/index.html"},{"revision":"3cd401239c1c622373dba0d74cf480fe","url":"core/useNetwork/index.html"},{"revision":"3ccfafe1042fadfe625e301482fd9c26","url":"core/useNow/index.html"},{"revision":"2724de2d238174b33dc02cc5888c1d70","url":"core/useObjectUrl/index.html"},{"revision":"dd900ecc78e564094a0d9c443d57b85b","url":"core/useOffsetPagination/index.html"},{"revision":"aabdbf0fe69d6908e25c0718a6e182e3","url":"core/useOnline/index.html"},{"revision":"44fd487067a90a41bbdf7709a439c844","url":"core/usePageLeave/index.html"},{"revision":"f8f6f50e2df6945144b277d070d0ad03","url":"core/useParallax/index.html"},{"revision":"62301081d013698e6ec40cef2d50dc54","url":"core/useParentElement/index.html"},{"revision":"c98da216cb28d55647da368f9865be1b","url":"core/usePerformanceObserver/index.html"},{"revision":"221aabfaf4800dfa97312b9125bb5d1b","url":"core/usePermission/index.html"},{"revision":"203885409fe441a8669f0c81a993d8b5","url":"core/usePointer/index.html"},{"revision":"6391696d582fdee1791f71dbc89945a7","url":"core/usePointerLock/index.html"},{"revision":"b9f9c8a0a76caf4281d45d221231215a","url":"core/usePointerSwipe/index.html"},{"revision":"71d917d9580089a0ffe667386ccce4d8","url":"core/usePreferredColorScheme/index.html"},{"revision":"2150f3e86b4b23a7b354861379ff4454","url":"core/usePreferredContrast/index.html"},{"revision":"6f855369637240c808aa52cef8b3c361","url":"core/usePreferredDark/index.html"},{"revision":"900ea3ba3008349c7660fbd7612f0435","url":"core/usePreferredLanguages/index.html"},{"revision":"312aee9b93097970ad9a2a0d062f7cc1","url":"core/usePreferredReducedMotion/index.html"},{"revision":"73fbe7cc34920e5bbbbe67794e31685c","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"133b8f5b8737467370d54619f27790e4","url":"core/usePrevious/index.html"},{"revision":"e00f44fc089a7f6f64d19b6de93b0f7d","url":"core/useRafFn/index.html"},{"revision":"2fd1a8db961c301a1c959f02132a124a","url":"core/useRefHistory/index.html"},{"revision":"bfe708919e291feceac9e79e589552e6","url":"core/useResizeObserver/index.html"},{"revision":"59ecabc3be9ad0d005b4e1749658242b","url":"core/useScreenOrientation/index.html"},{"revision":"616fe9e83a91061a28feead46a97f8d9","url":"core/useScreenSafeArea/index.html"},{"revision":"327e41e1c2db770c9ee218ae761205f7","url":"core/useScriptTag/index.html"},{"revision":"d64c0ac1d3d8f5eb23b4799f83330133","url":"core/useScroll/index.html"},{"revision":"66335cc597bb41730249a402fa1441c6","url":"core/useScrollLock/index.html"},{"revision":"dd3707bdc5b82263dca7b1b65660745e","url":"core/useSessionStorage/index.html"},{"revision":"93765a0290234c4531a8f351ef8a22f4","url":"core/useShare/index.html"},{"revision":"52122b957692c54fed785f8227d3145d","url":"core/useSorted/index.html"},{"revision":"c1b83b25e714780fa4f970e499e4b9d3","url":"core/useSpeechRecognition/index.html"},{"revision":"fa3cb91b8d3ac1cbfe3bd87bbefaeded","url":"core/useSpeechSynthesis/index.html"},{"revision":"fd2227f56e4346840de6675fb1974817","url":"core/useSSRWidth/index.html"},{"revision":"ec408c3c4227cf9d544b41de009bb346","url":"core/useStepper/index.html"},{"revision":"17f4343972e2b962956a9fac3b52b321","url":"core/useStorage/index.html"},{"revision":"e088588e5d3379cf512c2215e0bc1f6c","url":"core/useStorageAsync/index.html"},{"revision":"d7b33f23ce0d541a12d30eafd90cb37b","url":"core/useStyleTag/index.html"},{"revision":"22ea0608b76f78b552d1105554766162","url":"core/useSupported/index.html"},{"revision":"432d83298bd13f31fcaaf40a150a040b","url":"core/useSwipe/index.html"},{"revision":"ae6bdca05599088b987f3136d16c2373","url":"core/useTemplateRefsList/index.html"},{"revision":"82df37ccbb03e36daffae52ab3623a74","url":"core/useTextareaAutosize/index.html"},{"revision":"f856799a8c25baa9b1e4441432529e2e","url":"core/useTextDirection/index.html"},{"revision":"b27fca7fa25fffdb2ec3287ea8d0430f","url":"core/useTextSelection/index.html"},{"revision":"b995689ec018001bed0fbde74506b1fe","url":"core/useThrottledRefHistory/index.html"},{"revision":"b5f9c7de0fc083faa33bf26721d48d05","url":"core/useTimeAgo/index.html"},{"revision":"b5f8c0329b8fbd8fc13fa3283c2ac0f9","url":"core/useTimeAgoIntl/index.html"},{"revision":"d4635827375553040013b49172cf0067","url":"core/useTimeoutPoll/index.html"},{"revision":"4bc380ea6ca9d109b782ac333ab5e924","url":"core/useTimestamp/index.html"},{"revision":"297c65b8f6df9e94c4d6b2a9cea89c41","url":"core/useTitle/index.html"},{"revision":"2adb961e92cb1c3b67511589cd333be9","url":"core/useTransition/index.html"},{"revision":"5c39a13dbcba63a318920aca36b85f1f","url":"core/useUrlSearchParams/index.html"},{"revision":"5a41443b162385074530d4e02ed3c227","url":"core/useUserMedia/index.html"},{"revision":"111616bb8b9cd5ff1d387cf111abb2bd","url":"core/useVibrate/index.html"},{"revision":"64cda2b2a802fba9515d525e38075c72","url":"core/useVirtualList/index.html"},{"revision":"bf5c702a6b2f327684f87d1b026b0a86","url":"core/useVModel/index.html"},{"revision":"08d43b7f1eb47663ee07a3095e8ff109","url":"core/useVModels/index.html"},{"revision":"7b8417a2d11bc0cea13355a53ef12a8a","url":"core/useWakeLock/index.html"},{"revision":"2fbf6fb139513627247e6ef3523b4b53","url":"core/useWebNotification/index.html"},{"revision":"91fd36951bcc7a7479139d9071eb86b5","url":"core/useWebSocket/index.html"},{"revision":"7b5afe9cdfd33b15c53ae226d2e8ed5e","url":"core/useWebWorker/index.html"},{"revision":"6dc5eab27b0a4c58a9931c4dd69ab393","url":"core/useWebWorkerFn/index.html"},{"revision":"e5d80d3a4b43ae98435a1c3b8c6cfd9f","url":"core/useWindowFocus/index.html"},{"revision":"cf2d919fc9f2c18750ccf97bcd6e4356","url":"core/useWindowScroll/index.html"},{"revision":"47c01ac02da51eea63fa0d229c7b8761","url":"core/useWindowSize/index.html"},{"revision":"e5e9792d7115265753931f7b005ecf5d","url":"ecosystem.html"},{"revision":"d03503bf5f8960e621c3d32bae940b40","url":"electron/README.html"},{"revision":"34c1797c269f70ad9909db45d8650939","url":"electron/useIpcRenderer/index.html"},{"revision":"2590eb5464ff13d7aa9b15716bd717c5","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"97b62b03a29e1222d7220d8e0401afbe","url":"electron/useIpcRendererOn/index.html"},{"revision":"1dcd24e9cc7121adffaf8b4dd2253fb0","url":"electron/useZoomFactor/index.html"},{"revision":"e6b656db30f26c07e56d7c381aa502af","url":"electron/useZoomLevel/index.html"},{"revision":"2b30beef51aee75e92f967c56597eb34","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"b378e589435aad2ec20296020dca29ee","url":"firebase/README.html"},{"revision":"85445e90106751f02397c6d0df80c155","url":"firebase/useAuth/index.html"},{"revision":"5744ae4a7423590d4cdf3272a7fcb07c","url":"firebase/useFirestore/index.html"},{"revision":"478413c9ab78e672e297a2e9aaeec075","url":"firebase/useRTDB/index.html"},{"revision":"b821713e1b51e735eff8aa86cc01792e","url":"functions.html"},{"revision":"152ae5452c9bb7a30c3bec2629a9aef9","url":"guide/best-practice.html"},{"revision":"d2b1fcd63252327c8922c1a6466992a2","url":"guide/components.html"},{"revision":"5136d05132371e32b21d857715ff31fa","url":"guide/config.html"},{"revision":"f9d508b373006307b129dd21d5a7a597","url":"guide/index.html"},{"revision":"d7b2312050e620851011071852c94581","url":"guide/work-with-ai.html"},{"revision":"f710d60bb03e2ba30d5b8195eefb570d","url":"guidelines.html"},{"revision":"7a60fd15fdacbc8344301348718647f4","url":"index.html"},{"revision":"66c2793e266da5de9075e384a0dbaf55","url":"integrations/README.html"},{"revision":"41fa2f87a4ef9a83b6407ab5d9ec5d6d","url":"integrations/useAsyncValidator/index.html"},{"revision":"c5156fac60f27b0648449076a3888fa6","url":"integrations/useAxios/index.html"},{"revision":"64c8bb0ea89f8f969fc75ca8b0c5df5d","url":"integrations/useChangeCase/index.html"},{"revision":"c8dbb84e333ce58ebf1919d8601aaff6","url":"integrations/useCookies/index.html"},{"revision":"27d5d073478a579876d7009c273e60de","url":"integrations/useDrauu/index.html"},{"revision":"9fe5732bf7592974314c14784f46a91e","url":"integrations/useFocusTrap/index.html"},{"revision":"2288c4557dc98434d85e541280659b89","url":"integrations/useFuse/index.html"},{"revision":"9ea4c3137ab98b0be93e303e59b567b2","url":"integrations/useIDBKeyval/index.html"},{"revision":"f73bfcc12b3eb7ec832124fbc4f6325d","url":"integrations/useJwt/index.html"},{"revision":"b1f1e535203e635dc815099ab483debf","url":"integrations/useNProgress/index.html"},{"revision":"2dbb2f584f2009dc1028d2b9fc25e9d1","url":"integrations/useQRCode/index.html"},{"revision":"bf5ddfde3c200676dbab8b12f07e1962","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"1f6b4ec4a0dccbf80a61bc3e4668cb1b","url":"math/createGenericProjection/index.html"},{"revision":"3239dcffc158c96fd7fbe3498b0bd311","url":"math/createProjection/index.html"},{"revision":"37ed9936b087a188d71798b3b1e5e5dc","url":"math/logicAnd/index.html"},{"revision":"8e3509205a3de7bfa39e797ae3ddaeac","url":"math/logicNot/index.html"},{"revision":"704cee88c6edc621ede149e2bd99a882","url":"math/logicOr/index.html"},{"revision":"38678810154d2f10b06a9052423fd659","url":"math/README.html"},{"revision":"10aca577cdf373d56b2fc7267693108e","url":"math/useAbs/index.html"},{"revision":"5b1bdb276ca73e466a4121aad1af144e","url":"math/useAverage/index.html"},{"revision":"26ef18fefddcc9458ac643184c59d4fa","url":"math/useCeil/index.html"},{"revision":"b588cb4e01be60ed230c0b7464c493ca","url":"math/useClamp/index.html"},{"revision":"56dc7513c1b0f84e14a8c32c8ccf97f3","url":"math/useFloor/index.html"},{"revision":"e7708db4f75bbff57a3441e6d20f6c8a","url":"math/useMath/index.html"},{"revision":"8b50f89f3fed1111f39c3f6e19687c52","url":"math/useMax/index.html"},{"revision":"6f237eeffc43e3eca7165ae2b574a7de","url":"math/useMin/index.html"},{"revision":"69fb4487dc9dd7faa097d081cf1dc86f","url":"math/usePrecision/index.html"},{"revision":"0adb1679e2f300e34dd24dfabacac3e3","url":"math/useProjection/index.html"},{"revision":"463e0ac6d395b7537cdf99779f5d11b3","url":"math/useRound/index.html"},{"revision":"b47b001b3cd21f7ba3c1bcfee7d3e7d2","url":"math/useSum/index.html"},{"revision":"01524c6e4b1f18fdbd99a42c2698ccff","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"deea66d22ceeeabe5ba3b023fd4d36e7","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"02926a20c3e7e323819ad256ddbcaded","url":"router/README.html"},{"revision":"cff5e2e750a08911c5f598c49af2ca0c","url":"router/useRouteHash/index.html"},{"revision":"012588464a326b75a9b8838820b4ab70","url":"router/useRouteParams/index.html"},{"revision":"8078aed240af7fc7407d442ea7796318","url":"router/useRouteQuery/index.html"},{"revision":"ca356a16609017010a82226aa553b704","url":"rxjs/from/index.html"},{"revision":"07e7922511029717e39120dca56760e9","url":"rxjs/README.html"},{"revision":"b1c4e9c11105e56d7f6f979d3d71c3a6","url":"rxjs/toObserver/index.html"},{"revision":"afa98b1d3c984f446a0f93aca99030ae","url":"rxjs/useExtractedObservable/index.html"},{"revision":"caeddd106a61eeb75f7ddad158edecbc","url":"rxjs/useObservable/index.html"},{"revision":"e64ea0c33ad52bb1698cb95dd4ac26b0","url":"rxjs/useSubject/index.html"},{"revision":"5c40a5e8b4eae9cf0f0c829444a98c1f","url":"rxjs/useSubscription/index.html"},{"revision":"9d35c64e77adab7aca2ceca9d1f10839","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"cb7729a5e84b40310a9d44711b5c8937","url":"shared/computedEager/index.html"},{"revision":"43515de1267473bdb92c0896ec7ae998","url":"shared/computedWithControl/index.html"},{"revision":"220dc94329ac79b0d139ca0961793b56","url":"shared/createEventHook/index.html"},{"revision":"6d9ea7adc27c5c4b93a31da1f29774a1","url":"shared/createGlobalState/index.html"},{"revision":"b05cd66190924ef109f646e80bc66f08","url":"shared/createInjectionState/index.html"},{"revision":"18959ad202857ea060447daa54bed424","url":"shared/createRef/index.html"},{"revision":"7100aaf535bd3d83d7d526ac30341af9","url":"shared/createSharedComposable/index.html"},{"revision":"abd8c72f3d639c73a36d16e235ec50a8","url":"shared/extendRef/index.html"},{"revision":"22fe6fe99790045a297838577e309f8b","url":"shared/get/index.html"},{"revision":"abf6d4daa7bdcba0c9a21a2451ae4339","url":"shared/injectLocal/index.html"},{"revision":"0be903ce377a34dc94650f19dd23cf32","url":"shared/isDefined/index.html"},{"revision":"03e92d80d146256d743e1dd8da752374","url":"shared/makeDestructurable/index.html"},{"revision":"378fbce26fb8c179cf295cc3298e098b","url":"shared/provideLocal/index.html"},{"revision":"b45111d379c54457ed96fc3173d75496","url":"shared/reactify/index.html"},{"revision":"ea1de3bf617df06e7df6ac4407b5e05a","url":"shared/reactifyObject/index.html"},{"revision":"c2aa2659395b84e41b9cd557773639af","url":"shared/reactiveComputed/index.html"},{"revision":"8d40c39a58325c32ca787372c1644526","url":"shared/reactiveOmit/index.html"},{"revision":"125f99215e2e3a24e24a0e11ee8089ef","url":"shared/reactivePick/index.html"},{"revision":"c9827e9da2daf7d3e610fc4da8730da6","url":"shared/refAutoReset/index.html"},{"revision":"38b9b1f9c69d514b01fea742c57f85ef","url":"shared/refDebounced/index.html"},{"revision":"d2d21d0373c39d466033c04dbdfc9291","url":"shared/refDefault/index.html"},{"revision":"c6641b8a76c733b79740fc8ceca6d2ee","url":"shared/refManualReset/index.html"},{"revision":"65e8fd59d523a11be76f933f80b6130f","url":"shared/refThrottled/index.html"},{"revision":"17960ff9fa21f157b5eeb05fad2ade6d","url":"shared/refWithControl/index.html"},{"revision":"d6c6b2ff97388f090f81274f69aa5ea6","url":"shared/set/index.html"},{"revision":"f941a9f9d0c301b08dd265e89267dd26","url":"shared/syncRef/index.html"},{"revision":"851c187a35f29995b67840baee4cea66","url":"shared/syncRefs/index.html"},{"revision":"9c4793532d6b063b5dd285c3cd2988a7","url":"shared/toReactive/index.html"},{"revision":"3c86cd7c166751bc5bc910fe6088e24b","url":"shared/toRef/index.html"},{"revision":"d5262279d643594ae625dd449a2eddce","url":"shared/toRefs/index.html"},{"revision":"7d1ecce4b5c9e9e0238bb906a8a1e72a","url":"shared/tryOnBeforeMount/index.html"},{"revision":"80ba13ce336b1cca98b484398ac95f4e","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"304eed22a5a870ec7f71991ddbd89f24","url":"shared/tryOnMounted/index.html"},{"revision":"29a7b0e140327b853c9190d4f5bae296","url":"shared/tryOnScopeDispose/index.html"},{"revision":"98386f0a4948d0d195214c639ed06959","url":"shared/tryOnUnmounted/index.html"},{"revision":"e4cede8acff7118691a53d31d7c63db7","url":"shared/until/index.html"},{"revision":"8740fa4ad7ea0ecdcddcc2f80381890f","url":"shared/useArrayDifference/index.html"},{"revision":"e4192cd929294d126ed810466e6a87d8","url":"shared/useArrayEvery/index.html"},{"revision":"c26e49857125f8180e65834c44709463","url":"shared/useArrayFilter/index.html"},{"revision":"3f669cfcf7a3a7ba7e3ace55ab3746cc","url":"shared/useArrayFind/index.html"},{"revision":"11d304942fd624db54ec2478ebbaa47c","url":"shared/useArrayFindIndex/index.html"},{"revision":"184a99c1dae0bacabbe24eb590a68b3c","url":"shared/useArrayFindLast/index.html"},{"revision":"32aee9457626042fd14b15385ef4a071","url":"shared/useArrayIncludes/index.html"},{"revision":"08cde5047dac18150d1aeb0c4fc1d1c3","url":"shared/useArrayJoin/index.html"},{"revision":"d18ba31e74d57ac726006984fc22cd4d","url":"shared/useArrayMap/index.html"},{"revision":"aa408ec7713c4d51797b352ceecac692","url":"shared/useArrayReduce/index.html"},{"revision":"6bbb365037f1391de1f0fb1e134b7fa5","url":"shared/useArraySome/index.html"},{"revision":"53a1d4270d210c19ec45a04e32db40ec","url":"shared/useArrayUnique/index.html"},{"revision":"fdfa889a67e2bce34a0e8df3acab388c","url":"shared/useCounter/index.html"},{"revision":"2a4b0f4116c7e383a8db1d685c20a3d5","url":"shared/useDateFormat/index.html"},{"revision":"ba533cab5e83a6c9e0be56206b4568e2","url":"shared/useDebounceFn/index.html"},{"revision":"66330565a0dbac0e6cbfd02db7f369db","url":"shared/useInterval/index.html"},{"revision":"8cf125373338ca7a9dbc96e0d2056006","url":"shared/useIntervalFn/index.html"},{"revision":"523cb12ac747dbe8a813d6cf6cc626da","url":"shared/useLastChanged/index.html"},{"revision":"789a6be146aefdd653370dc4c45f5bf3","url":"shared/useThrottleFn/index.html"},{"revision":"a54d00c863d3f4c7420876f92447829d","url":"shared/useTimeout/index.html"},{"revision":"d5eacb7661bb198c6617826cccc5783d","url":"shared/useTimeoutFn/index.html"},{"revision":"388f544c992695563b73fa3d81e56b16","url":"shared/useToggle/index.html"},{"revision":"0caa324f378276f6103539d6013248f0","url":"shared/useToNumber/index.html"},{"revision":"2895b372f51dac26e260753e05e527cd","url":"shared/useToString/index.html"},{"revision":"8c0356564cea825bdb4fadca475e6f47","url":"shared/watchArray/index.html"},{"revision":"f93ef596bab9cf29c0c27d9f4177fce2","url":"shared/watchAtMost/index.html"},{"revision":"8d45080a9ee1c7343b81edb94bbcb7e7","url":"shared/watchDebounced/index.html"},{"revision":"7340c728eb27a4e0374e7fa283c0ef26","url":"shared/watchDeep/index.html"},{"revision":"101f2f80588c83bed49831ceb1f02fec","url":"shared/watchIgnorable/index.html"},{"revision":"c9999766f943211f87e802a225420111","url":"shared/watchImmediate/index.html"},{"revision":"26527829498ed0b88f55d43809d70c5e","url":"shared/watchOnce/index.html"},{"revision":"8f2da7282576e463fcc9468c93dd2f9c","url":"shared/watchPausable/index.html"},{"revision":"d3c5841be510543f545ac4e867913a39","url":"shared/watchThrottled/index.html"},{"revision":"7951126c52c0ab6ab5128abfab2ff016","url":"shared/watchTriggerable/index.html"},{"revision":"4d3f4567ea4443224322129c1875c228","url":"shared/watchWithFilter/index.html"},{"revision":"8e61f4212f0663859150741ba3a1b59f","url":"shared/whenever/index.html"},{"revision":"7e3f87e5c4fcbe5f2f4cce0859c5e423","url":"team.html"},{"revision":"8f201e25fdbebd0b52e4b54e0dd6a92d","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"dc4b23fbeab894b32b2b2861739c6806","url":"why-no-translations.html"},{"revision":"2964ceb6df55e5f8e6b229e67ea3f656","url":"hashmap.json"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"24c269155de349f2951fbd035d5849f4","url":"manifest.webmanifest"}];
var normalizedPaths = new Map(packageNames);
var assetMatcher = /^\/assets\/([a-zA-Z]+)_([a-zA-Z]+)_index\.md\.[\w-]+\.(?:lean\.)?js$/;
var selfHostname = self.location.hostname;
precacheAndRoute(entries, { urlManipulation({ url }) {
	const urls = [];
	if (url.hostname !== selfHostname || url.pathname.includes(".html")) return urls;
	const pathname = url.pathname;
	let entry = normalizedPaths.get(pathname);
	if (!entry) {
		const match = pathname.match(assetMatcher);
		if (match) {
			const [full, pkg, name] = match;
			entry = normalizedPaths.get(`/${pkg}/${name}/`.toLowerCase());
			if (entry) {
				const newURL$1 = new URL(url.href);
				newURL$1.pathname = full.replace(`${pkg}_${name}`, `${entry.url.slice(1).replace(/\/$/, "").replace("/", "_")}`);
				urls.push(newURL$1);
			}
		}
		return urls;
	}
	const newURL = new URL(url.href);
	if (newURL.hash) newURL.hash = entry.hash;
	newURL.pathname = `${entry.url}index.html`;
	urls.push(newURL);
	return urls;
} });
cleanupOutdatedCaches();
var allowlist;
{
	const swPath = self.location.pathname.lastIndexOf("/");
	const base = swPath === 0 ? "/" : self.location.pathname.slice(0, swPath + 1);
	function escapeStringRegexp(value) {
		return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
	}
	allowlist = entries.filter((page) => {
		return typeof page === "string" ? page.endsWith(".html") : page.url.endsWith(".html");
	}).map((page) => {
		const url = typeof page === "string" ? page : page.url;
		const regex = url === "index.html" ? escapeStringRegexp(base) : escapeStringRegexp(`${base}${url.replace(/\.html$/, "")}`);
		return /* @__PURE__ */ new RegExp(`^${regex}(\\.html)?$`);
	});
	registerRoute(({ request, sameOrigin }) => {
		return sameOrigin && request.mode === "navigate";
	}, new NetworkOnly({ plugins: [{
		handlerDidError: async () => Response.redirect("404", 302),
		cacheWillUpdate: async () => null
	}] }), "GET");
	registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new NetworkFirst({
		cacheName: "google-fonts-cache",
		plugins: [new CacheableResponsePlugin({ statuses: [0, 200] }), new ExpirationPlugin({
			maxEntries: 10,
			maxAgeSeconds: 3600 * 24 * 365
		})]
	}));
	registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new StaleWhileRevalidate({
		cacheName: "google-fonts-cache",
		plugins: [new CacheableResponsePlugin({ statuses: [0, 200] }), new ExpirationPlugin({
			maxEntries: 10,
			maxAgeSeconds: 3600 * 24 * 365
		})]
	}));
	registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i, new NetworkFirst({
		cacheName: "jsdelivr-images-cache",
		plugins: [new CacheableResponsePlugin({ statuses: [0, 200] }), new ExpirationPlugin({
			maxEntries: 10,
			maxAgeSeconds: 3600 * 24 * 7
		})]
	}));
}
registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist }));
self.addEventListener("activate", async () => {
	(await self.clients.matchAll({ type: "window" })).forEach((client) => {
		client.navigate(client.url);
	});
});
self.skipWaiting();
