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
	["/core/usecsssupports/", {
		"url": "/core/useCssSupports/",
		"hash": "useCssSupports"
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
	return new URL(String(url), location.href).href.replace(new RegExp(`^${location.origin}`), "");
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
		let target = tx.store;
		if (useIndex) target = target.index(args.shift());
		return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
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
	constructor({ precacheController }) {
		this.cacheKeyWillBeUsed = async ({ request, params }) => {
			const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
			return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
		};
		this._precacheController = precacheController;
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
		} catch (error) {}
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
	precache(entries) {
		this.addToCacheList(entries);
		if (!this._installAndActiveListenersAdded) {
			self.addEventListener("install", this.install);
			self.addEventListener("activate", this.activate);
			this._installAndActiveListenersAdded = true;
		}
	}
	addToCacheList(entries) {
		const urlsToWarnAbout = [];
		for (const entry of entries) {
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
	constructor(precacheController, options) {
		const match = ({ request }) => {
			const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
			for (const possibleURL of generateURLVariations(request.url, options)) {
				const cacheKey = urlsToCacheKeys.get(possibleURL);
				if (cacheKey) return {
					cacheKey,
					integrity: precacheController.getIntegrityForCacheKey(cacheKey)
				};
			}
		};
		super(match, precacheController.strategy);
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
function precache(entries) {
	getOrCreatePrecacheController().precache(entries);
}
function precacheAndRoute(entries, options) {
	precache(entries);
	addRoute(options);
}
var NavigationRoute = class extends Route {
	constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
		super((options) => this._match(options), handler);
		this._allowlist = allowlist;
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
var entries = [{"revision":"4366dfe4db9ff783d5194991f6c9fcc5","url":"404.html"},{"revision":"966d843ef06fbd4c8673f06e1c27c30d","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.DCOimTrA.js"},{"revision":null,"url":"assets/add-ons.md.DCOimTrA.lean.js"},{"revision":null,"url":"assets/app.C9nlKlis.js"},{"revision":null,"url":"assets/chunks/@localSearchIndexroot.Cs0-cdUd.js"},{"revision":null,"url":"assets/chunks/axios.CCFCMnNv.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.CIVObf04.js"},{"revision":null,"url":"assets/chunks/browser.CL6_UXEa.js"},{"revision":null,"url":"assets/chunks/CodeToggle.CKsmGdeS.js"},{"revision":null,"url":"assets/chunks/computedAsync.BYn2yT0A.js"},{"revision":null,"url":"assets/chunks/configurable.BN1b0qB7.js"},{"revision":null,"url":"assets/chunks/Contributors.Bb4iKYLR.js"},{"revision":null,"url":"assets/chunks/CourseLink.CfV3LNrU.js"},{"revision":null,"url":"assets/chunks/createEventHook.CDzfci3O.js"},{"revision":null,"url":"assets/chunks/demo.client.-ZuoWTQY.js"},{"revision":null,"url":"assets/chunks/demo.client.5sVPR-w2.js"},{"revision":null,"url":"assets/chunks/demo.client.B-LBV9J1.js"},{"revision":null,"url":"assets/chunks/demo.client.CqyUzFCV.js"},{"revision":null,"url":"assets/chunks/demo.client.DalLluSC.js"},{"revision":null,"url":"assets/chunks/DemoContainer.DUsDADoi.js"},{"revision":null,"url":"assets/chunks/filters.noXIDFKG.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.CF0aR1hr.js"},{"revision":null,"url":"assets/chunks/fuse.d2ursj1N.js"},{"revision":null,"url":"assets/chunks/general.CC96wCuQ.js"},{"revision":null,"url":"assets/chunks/injectLocal.hcZZ7n4L.js"},{"revision":null,"url":"assets/chunks/is.C0sLC7sY.js"},{"revision":null,"url":"assets/chunks/metadata.BCZcNL9q.js"},{"revision":null,"url":"assets/chunks/Note.ymLQ0zYs.js"},{"revision":null,"url":"assets/chunks/onClickOutside.BvosFyFq.js"},{"revision":null,"url":"assets/chunks/onElementRemoval.CuI8Ughs.js"},{"revision":null,"url":"assets/chunks/onKeyStroke.1ymeTTfN.js"},{"revision":null,"url":"assets/chunks/onStartTyping.Dyh-W0ey.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.tvx4b2PG.js"},{"revision":null,"url":"assets/chunks/resolve-element.h9d0R2ib.js"},{"revision":null,"url":"assets/chunks/rolldown-runtime.BgHTj443.js"},{"revision":null,"url":"assets/chunks/Scrubber.23kPq94K.js"},{"revision":null,"url":"assets/chunks/syncRef.CujyfXFi.js"},{"revision":null,"url":"assets/chunks/toRef.CrfycXS4.js"},{"revision":null,"url":"assets/chunks/toRefs.u5_dPP0a.js"},{"revision":null,"url":"assets/chunks/tryOnMounted.13bBNfnj.js"},{"revision":null,"url":"assets/chunks/tryOnScopeDispose.CNOW_fjz.js"},{"revision":null,"url":"assets/chunks/tryOnUnmounted.CDgIDijj.js"},{"revision":null,"url":"assets/chunks/unrefElement.GcfcbUy3.js"},{"revision":null,"url":"assets/chunks/until.BuVVvH1e.js"},{"revision":null,"url":"assets/chunks/useActiveElement.H0tuVxS0.js"},{"revision":null,"url":"assets/chunks/useAsyncState.NLu1xhii.js"},{"revision":null,"url":"assets/chunks/useClamp.DBbA6x_T.js"},{"revision":null,"url":"assets/chunks/useCloned.DjM_DzYV.js"},{"revision":null,"url":"assets/chunks/useColorMode.lcSPG2iO.js"},{"revision":null,"url":"assets/chunks/useCounter.m-EnHg20.js"},{"revision":null,"url":"assets/chunks/useCssVar.B6VPXZJu.js"},{"revision":null,"url":"assets/chunks/useCurrentElement.CEwoUnu-.js"},{"revision":null,"url":"assets/chunks/useCycleList.DMuh-GQm.js"},{"revision":null,"url":"assets/chunks/useDark.BSboDfPC.js"},{"revision":null,"url":"assets/chunks/useDateFormat.BCuEDlst.js"},{"revision":null,"url":"assets/chunks/useDebounceFn.Dx4-txx-.js"},{"revision":null,"url":"assets/chunks/useDeviceOrientation.Cc_slRK_.js"},{"revision":null,"url":"assets/chunks/useDevicesList.D3Z9Bojq.js"},{"revision":null,"url":"assets/chunks/useDocumentVisibility.OUnxQDW2.js"},{"revision":null,"url":"assets/chunks/useElementBounding.CyBHFKHG.js"},{"revision":null,"url":"assets/chunks/useElementByPoint.Bn_ws2jV.js"},{"revision":null,"url":"assets/chunks/useElementSize.DbM0snpC.js"},{"revision":null,"url":"assets/chunks/useElementVisibility.M6OPHszG.js"},{"revision":null,"url":"assets/chunks/useEventListener.DfXcFEgx.js"},{"revision":null,"url":"assets/chunks/useFocusTrap.D_L8TOGe.js"},{"revision":null,"url":"assets/chunks/useIntersectionObserver.DaVetFNp.js"},{"revision":null,"url":"assets/chunks/useManualRefHistory.CzDYA4qi.js"},{"revision":null,"url":"assets/chunks/useMediaQuery.Dm4eWJIk.js"},{"revision":null,"url":"assets/chunks/useMounted.D4NEyAt3.js"},{"revision":null,"url":"assets/chunks/useMouse.BRYbVoqg.js"},{"revision":null,"url":"assets/chunks/useMouseInElement.mIlBJPwJ.js"},{"revision":null,"url":"assets/chunks/useMutationObserver.ClOPeMWe.js"},{"revision":null,"url":"assets/chunks/useNavigatorLanguage.BXekxqFc.js"},{"revision":null,"url":"assets/chunks/useNetwork.DLhiPmdV.js"},{"revision":null,"url":"assets/chunks/useParentElement.BgtiyvQh.js"},{"revision":null,"url":"assets/chunks/usePermission.rCeOeicL.js"},{"revision":null,"url":"assets/chunks/usePreferredDark.3TVJh-cJ.js"},{"revision":null,"url":"assets/chunks/useRafFn.BRjkn1-l.js"},{"revision":null,"url":"assets/chunks/useRefHistory.Cmuzvh8g.js"},{"revision":null,"url":"assets/chunks/useResizeObserver.BfXTl2Uj.js"},{"revision":null,"url":"assets/chunks/useScreenOrientation.C9QV1Hwf.js"},{"revision":null,"url":"assets/chunks/useScroll.Besuur_P.js"},{"revision":null,"url":"assets/chunks/useScrollLock.CTjCBlMw.js"},{"revision":null,"url":"assets/chunks/useStorage.DvxrbJbV.js"},{"revision":null,"url":"assets/chunks/useSupported.Kpu_oPoE.js"},{"revision":null,"url":"assets/chunks/useThrottleFn.CkvwE2MD.js"},{"revision":null,"url":"assets/chunks/useTimeoutFn.B6C6kFLj.js"},{"revision":null,"url":"assets/chunks/useTimestamp.BcRiYw8W.js"},{"revision":null,"url":"assets/chunks/useToggle.CVnOFrAu.js"},{"revision":null,"url":"assets/chunks/useUrlSearchParams.k7SWLtx2.js"},{"revision":null,"url":"assets/chunks/useWindowScroll.C8_PVqms.js"},{"revision":null,"url":"assets/chunks/useWindowSize.HnVYSc9r.js"},{"revision":null,"url":"assets/chunks/utils.DyMATCw6.js"},{"revision":null,"url":"assets/chunks/VPLocalSearchBox.BSbq8TBg.js"},{"revision":null,"url":"assets/chunks/vue.BaB2p0KY.js"},{"revision":null,"url":"assets/chunks/watchDebounced.Bk8y94aq.js"},{"revision":null,"url":"assets/chunks/watchIgnorable.D8gpAKe3.js"},{"revision":null,"url":"assets/chunks/watchPausable.CzaLHX2T.js"},{"revision":null,"url":"assets/chunks/watchWithFilter.DgtBKAO3.js"},{"revision":null,"url":"assets/components_README.md.xRjNCmrg.js"},{"revision":null,"url":"assets/components_README.md.xRjNCmrg.lean.js"},{"revision":null,"url":"assets/contributing.md.Bd_8tPoK.js"},{"revision":null,"url":"assets/contributing.md.Bd_8tPoK.lean.js"},{"revision":null,"url":"assets/core__template_index.md.Df3_pUMU.js"},{"revision":null,"url":"assets/core__template_index.md.Df3_pUMU.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.CxIQjZki.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.CxIQjZki.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.DrfsQoWM.js"},{"revision":null,"url":"assets/core_computedInject_index.md.DrfsQoWM.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.wBM5_9K8.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.wBM5_9K8.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.DvMtzceG.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.DvMtzceG.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.CUyE-29M.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.CUyE-29M.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.BEDJ1raG.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.BEDJ1raG.lean.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.DK-8tKNN.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.DK-8tKNN.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.D2njjeea.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.D2njjeea.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.CxPHMM6l.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.CxPHMM6l.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.DuTrS9sR.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.DuTrS9sR.lean.js"},{"revision":null,"url":"assets/core_README.md.Bz-dDyZM.js"},{"revision":null,"url":"assets/core_README.md.Bz-dDyZM.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.Daz5jqVB.js"},{"revision":null,"url":"assets/core_templateRef_index.md.Daz5jqVB.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.3tfIP4gU.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.3tfIP4gU.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.Cc-18L3a.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.Cc-18L3a.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.quuiVnwx.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.quuiVnwx.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.xYqfq-9J.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.xYqfq-9J.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.DY7N4XC5.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.DY7N4XC5.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.C9Y9irhL.js"},{"revision":null,"url":"assets/core_useBase64_index.md.C9Y9irhL.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.C8liKe43.js"},{"revision":null,"url":"assets/core_useBattery_index.md.C8liKe43.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.YSHG66AW.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.YSHG66AW.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.DG7EPh67.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.DG7EPh67.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.C3BLwENa.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.C3BLwENa.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.DNg2OIaf.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.DNg2OIaf.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.Buufp91i.js"},{"revision":null,"url":"assets/core_useCached_index.md.Buufp91i.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.D5UHwjyW.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.D5UHwjyW.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.B8PTnzpt.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.B8PTnzpt.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.CLWFOt0b.js"},{"revision":null,"url":"assets/core_useCloned_index.md.CLWFOt0b.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.DxH9UmGL.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.DxH9UmGL.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.D65RvS3h.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.D65RvS3h.lean.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.BMYmnkwm.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.BMYmnkwm.lean.js"},{"revision":null,"url":"assets/core_useCssSupports_index.md.C6oDDq5k.js"},{"revision":null,"url":"assets/core_useCssSupports_index.md.C6oDDq5k.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.B6Bq0ECf.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.B6Bq0ECf.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.CFUeWxy6.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.CFUeWxy6.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.DG2CSfot.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.DG2CSfot.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.C09mrPg2.js"},{"revision":null,"url":"assets/core_useDark_index.md.C09mrPg2.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.Ks7keR-e.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.Ks7keR-e.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.7GAgK7WT.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.7GAgK7WT.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.Dy9KGgPb.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.Dy9KGgPb.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.BFwdh7EG.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.BFwdh7EG.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.DrPSbevX.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.DrPSbevX.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.BHN2Osrv.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.BHN2Osrv.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.DuqMOs3P.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.DuqMOs3P.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.DiH9RClm.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.DiH9RClm.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.CrmML23W.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.CrmML23W.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.D7XaRKhQ.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.D7XaRKhQ.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.CFnr7NRj.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.CFnr7NRj.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.CWdzJR0r.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.CWdzJR0r.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.ETP21s6W.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.ETP21s6W.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.CUJSJC4c.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.CUJSJC4c.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.DIiPOoAh.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.DIiPOoAh.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.IoRwrqDm.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.IoRwrqDm.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.h74IlsBg.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.h74IlsBg.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.mvQrpZcO.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.mvQrpZcO.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.CquDRh1c.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.CquDRh1c.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.BfvWQhFU.js"},{"revision":null,"url":"assets/core_useFetch_index.md.BfvWQhFU.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.DHyduKoM.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.DHyduKoM.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.asA5thf2.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.asA5thf2.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BTT66b5R.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BTT66b5R.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.DhJsdvtp.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.DhJsdvtp.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.C8sZlrqM.js"},{"revision":null,"url":"assets/core_useFps_index.md.C8sZlrqM.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.G1LnFbdI.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.G1LnFbdI.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.XcPn16Gz.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.XcPn16Gz.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.yXZrIMjG.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.yXZrIMjG.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.Cub4XHVR.js"},{"revision":null,"url":"assets/core_useIdle_index.md.Cub4XHVR.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.CK1y70sg.js"},{"revision":null,"url":"assets/core_useImage_index.md.CK1y70sg.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.DUXLU9mU.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.DUXLU9mU.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.B3bnhBad.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.B3bnhBad.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.DeLasm-U.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.DeLasm-U.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.BAd5s7Yi.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.BAd5s7Yi.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.B5ukym12.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.B5ukym12.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.CtdU0LzT.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.CtdU0LzT.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.BlCQCq1G.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.BlCQCq1G.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.BcBA59Pz.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.BcBA59Pz.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.Dk9rmk8w.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.Dk9rmk8w.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.BSAIw9qu.js"},{"revision":null,"url":"assets/core_useMemory_index.md.BSAIw9qu.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.D7g-4wzt.js"},{"revision":null,"url":"assets/core_useMounted_index.md.D7g-4wzt.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.DMZbugea.js"},{"revision":null,"url":"assets/core_useMouse_index.md.DMZbugea.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.DR_vjUAo.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.DR_vjUAo.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.tNq-aKuH.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.tNq-aKuH.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.RQ5m2aCL.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.RQ5m2aCL.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.BRMNLQ9b.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.BRMNLQ9b.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.JZbqxZGv.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.JZbqxZGv.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.BXsszx3U.js"},{"revision":null,"url":"assets/core_useNow_index.md.BXsszx3U.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.DbC06qY-.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.DbC06qY-.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.Ct9aAP-e.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.Ct9aAP-e.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.CkLwC9l0.js"},{"revision":null,"url":"assets/core_useOnline_index.md.CkLwC9l0.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.D4rW6LYK.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.D4rW6LYK.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.MIYvQFe7.js"},{"revision":null,"url":"assets/core_useParallax_index.md.MIYvQFe7.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.A-Xl4r84.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.A-Xl4r84.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.B1nT3hO2.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.B1nT3hO2.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.DHgduHXZ.js"},{"revision":null,"url":"assets/core_usePermission_index.md.DHgduHXZ.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.CZ7qn37i.js"},{"revision":null,"url":"assets/core_usePointer_index.md.CZ7qn37i.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.CkfK-C6o.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.CkfK-C6o.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.CNlvmCnF.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.CNlvmCnF.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.BmsKWjEz.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.BmsKWjEz.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.Dbux6Rmx.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.Dbux6Rmx.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.mm54RjYx.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.mm54RjYx.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.DUZM7s5k.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.DUZM7s5k.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.BEjsTjhZ.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.BEjsTjhZ.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.BNSLl2-F.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.BNSLl2-F.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.jOqiEWUB.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.jOqiEWUB.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.BtydqCQA.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.BtydqCQA.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.BGTBqjbt.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.BGTBqjbt.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.DfhUXUpi.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.DfhUXUpi.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.B2bwcwJy.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.B2bwcwJy.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.Cx05Fk0t.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.Cx05Fk0t.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.B1nyPY_A.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.B1nyPY_A.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.C2wTW-iE.js"},{"revision":null,"url":"assets/core_useScroll_index.md.C2wTW-iE.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.CYFrPzZ0.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.CYFrPzZ0.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.D6-lQN-A.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.D6-lQN-A.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.Cv7nau1Y.js"},{"revision":null,"url":"assets/core_useShare_index.md.Cv7nau1Y.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.-LGrRw3i.js"},{"revision":null,"url":"assets/core_useSorted_index.md.-LGrRw3i.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.QVyawy4C.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.QVyawy4C.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.D_mAJFyJ.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.D_mAJFyJ.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.CkrTSAfU.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.CkrTSAfU.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.D2MSEu96.js"},{"revision":null,"url":"assets/core_useStepper_index.md.D2MSEu96.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.aeuT-V-D.js"},{"revision":null,"url":"assets/core_useStorage_index.md.aeuT-V-D.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.CTtLmWdX.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.CTtLmWdX.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.COvBg1KS.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.COvBg1KS.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.BlzcZrGX.js"},{"revision":null,"url":"assets/core_useSupported_index.md.BlzcZrGX.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.CUm-VVZi.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.CUm-VVZi.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BENerHgl.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BENerHgl.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Cch8Tjea.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Cch8Tjea.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.D3bm-9rC.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.D3bm-9rC.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.gJEgWHjs.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.gJEgWHjs.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.9Eotci3e.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.9Eotci3e.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BFMUemzE.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BFMUemzE.lean.js"},{"revision":null,"url":"assets/core_useTimeAgoIntl_index.md.D0StIdal.js"},{"revision":null,"url":"assets/core_useTimeAgoIntl_index.md.D0StIdal.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.B2929Onw.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.B2929Onw.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DqS_ticC.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DqS_ticC.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.CMuRHpE4.js"},{"revision":null,"url":"assets/core_useTitle_index.md.CMuRHpE4.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.4SnY12Bh.js"},{"revision":null,"url":"assets/core_useTransition_index.md.4SnY12Bh.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.BvsF5ihx.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.BvsF5ihx.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.C3__m1Fx.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.C3__m1Fx.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.C3a7qa0z.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.C3a7qa0z.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.D3GeD2ba.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.D3GeD2ba.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.DQ7Bpxr3.js"},{"revision":null,"url":"assets/core_useVModel_index.md.DQ7Bpxr3.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.QXuxTlbP.js"},{"revision":null,"url":"assets/core_useVModels_index.md.QXuxTlbP.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.tEHQL58c.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.tEHQL58c.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.BKKTS80Q.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.BKKTS80Q.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DWfiEk-7.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DWfiEk-7.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.CILkv4uP.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.CILkv4uP.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.BPk8qRL1.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.BPk8qRL1.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.34AROrbL.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.34AROrbL.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.Ch0mvA1f.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.Ch0mvA1f.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.DjctnkEp.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.DjctnkEp.lean.js"},{"revision":null,"url":"assets/ecosystem.md.rP98NUN-.js"},{"revision":null,"url":"assets/ecosystem.md.rP98NUN-.lean.js"},{"revision":null,"url":"assets/electron_README.md.t14yN6jj.js"},{"revision":null,"url":"assets/electron_README.md.t14yN6jj.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.DaDl-JLO.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.DaDl-JLO.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.CGVrXMV2.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.CGVrXMV2.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.CUOnffBy.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.CUOnffBy.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.cH8xLeNu.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.cH8xLeNu.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.BGe5jqGd.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.BGe5jqGd.lean.js"},{"revision":null,"url":"assets/export-size.md.BA2FqmIR.js"},{"revision":null,"url":"assets/export-size.md.BA2FqmIR.lean.js"},{"revision":null,"url":"assets/firebase_README.md.DXDFyQMd.js"},{"revision":null,"url":"assets/firebase_README.md.DXDFyQMd.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.DSzuFTmq.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.DSzuFTmq.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.C1PpeKKA.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.C1PpeKKA.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.CobodLYl.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.CobodLYl.lean.js"},{"revision":null,"url":"assets/functions.md.De2fMhYN.js"},{"revision":null,"url":"assets/functions.md.De2fMhYN.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.YMkPTv3M.js"},{"revision":null,"url":"assets/guide_best-practice.md.YMkPTv3M.lean.js"},{"revision":null,"url":"assets/guide_components.md.CJYf7RZ9.js"},{"revision":null,"url":"assets/guide_components.md.CJYf7RZ9.lean.js"},{"revision":null,"url":"assets/guide_config.md.DY1ojb5r.js"},{"revision":null,"url":"assets/guide_config.md.DY1ojb5r.lean.js"},{"revision":null,"url":"assets/guide_index.md.D2OH_jHF.js"},{"revision":null,"url":"assets/guide_index.md.D2OH_jHF.lean.js"},{"revision":null,"url":"assets/guide_work-with-ai.md.qUJoq27O.js"},{"revision":null,"url":"assets/guide_work-with-ai.md.qUJoq27O.lean.js"},{"revision":null,"url":"assets/guidelines.md.Btcfoiau.js"},{"revision":null,"url":"assets/guidelines.md.Btcfoiau.lean.js"},{"revision":null,"url":"assets/index.md.CTFAHRWc.js"},{"revision":null,"url":"assets/index.md.CTFAHRWc.lean.js"},{"revision":null,"url":"assets/integrations_README.md.Dpgiq1mH.js"},{"revision":null,"url":"assets/integrations_README.md.Dpgiq1mH.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.BYCueO2D.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.BYCueO2D.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.BXlPOewQ.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.BXlPOewQ.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.Co_gBClq.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.Co_gBClq.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.DYsbHewD.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.DYsbHewD.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.rhKMo_pf.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.rhKMo_pf.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.Bnzyg8wY.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.Bnzyg8wY.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.4GjdzkAm.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.4GjdzkAm.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.Dmuj9V1l.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.Dmuj9V1l.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.BNeasAQI.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.BNeasAQI.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.BHXIW1gZ.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.BHXIW1gZ.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.D0oMf4nR.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.D0oMf4nR.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CO8sU5Tx.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CO8sU5Tx.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.BAbTsGhG.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.BAbTsGhG.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.BF79Tkq5.js"},{"revision":null,"url":"assets/math_createProjection_index.md.BF79Tkq5.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.DH8ChNh_.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.DH8ChNh_.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.DBaV8ZkH.js"},{"revision":null,"url":"assets/math_logicNot_index.md.DBaV8ZkH.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.I4DTKV4c.js"},{"revision":null,"url":"assets/math_logicOr_index.md.I4DTKV4c.lean.js"},{"revision":null,"url":"assets/math_README.md.DeueODnf.js"},{"revision":null,"url":"assets/math_README.md.DeueODnf.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.DKeKOYNM.js"},{"revision":null,"url":"assets/math_useAbs_index.md.DKeKOYNM.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.oBsigr2C.js"},{"revision":null,"url":"assets/math_useAverage_index.md.oBsigr2C.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.N5zZ6MgD.js"},{"revision":null,"url":"assets/math_useCeil_index.md.N5zZ6MgD.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.BoROy77o.js"},{"revision":null,"url":"assets/math_useClamp_index.md.BoROy77o.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.DvmjogHn.js"},{"revision":null,"url":"assets/math_useFloor_index.md.DvmjogHn.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.RiR7Cwsv.js"},{"revision":null,"url":"assets/math_useMath_index.md.RiR7Cwsv.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.DO0aqfPR.js"},{"revision":null,"url":"assets/math_useMax_index.md.DO0aqfPR.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.B-O6tx0V.js"},{"revision":null,"url":"assets/math_useMin_index.md.B-O6tx0V.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.DVhvlbCK.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.DVhvlbCK.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.CYuPTOTZ.js"},{"revision":null,"url":"assets/math_useProjection_index.md.CYuPTOTZ.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.CfS5KBUm.js"},{"revision":null,"url":"assets/math_useRound_index.md.CfS5KBUm.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.CvhHDXQd.js"},{"revision":null,"url":"assets/math_useSum_index.md.CvhHDXQd.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.C_YOzde_.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.C_YOzde_.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.ZdocXcMw.js"},{"revision":null,"url":"assets/nuxt_README.md.ZdocXcMw.lean.js"},{"revision":null,"url":"assets/router_README.md.C4_Q9f5M.js"},{"revision":null,"url":"assets/router_README.md.C4_Q9f5M.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.CD0c38JQ.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.CD0c38JQ.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.Dl22jYde.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.Dl22jYde.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.949omtJ6.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.949omtJ6.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.D7pWRmSW.js"},{"revision":null,"url":"assets/rxjs_from_index.md.D7pWRmSW.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.BHOGydkI.js"},{"revision":null,"url":"assets/rxjs_README.md.BHOGydkI.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.nPoPptW5.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.nPoPptW5.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.CwpLPRKk.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.CwpLPRKk.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.C8Wy5YQ1.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.C8Wy5YQ1.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.B5-nSXgu.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.B5-nSXgu.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.ZNdgAYX3.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.ZNdgAYX3.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.C58zLERW.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.C58zLERW.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.C16jIeTj.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.C16jIeTj.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.D8DeKyi_.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.D8DeKyi_.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.BeAUrjSm.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.BeAUrjSm.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.C6d0vErY.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.C6d0vErY.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.D8zYzq4U.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.D8zYzq4U.lean.js"},{"revision":null,"url":"assets/shared_createRef_index.md.CGenzxvr.js"},{"revision":null,"url":"assets/shared_createRef_index.md.CGenzxvr.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.CCSCXBZD.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.CCSCXBZD.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.B_OXkZTW.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.B_OXkZTW.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.Bmsq82_Y.js"},{"revision":null,"url":"assets/shared_get_index.md.Bmsq82_Y.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.j6-O5MI5.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.j6-O5MI5.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BHrhGf1E.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BHrhGf1E.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.C60UsxOq.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.C60UsxOq.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.CIOqcA3M.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.CIOqcA3M.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.CePkVgSh.js"},{"revision":null,"url":"assets/shared_reactify_index.md.CePkVgSh.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.BcFHn9DW.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.BcFHn9DW.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.FNE82FIO.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.FNE82FIO.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.d9R4tADM.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.d9R4tADM.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.avImERve.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.avImERve.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.DbgZ4Eii.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.DbgZ4Eii.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.CzEnlxL1.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.CzEnlxL1.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.BT1-Ci0O.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.BT1-Ci0O.lean.js"},{"revision":null,"url":"assets/shared_refManualReset_index.md.Dfk2IO0Y.js"},{"revision":null,"url":"assets/shared_refManualReset_index.md.Dfk2IO0Y.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.CGOd8-tS.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.CGOd8-tS.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.Suo1ld1E.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.Suo1ld1E.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.BI2iTywc.js"},{"revision":null,"url":"assets/shared_set_index.md.BI2iTywc.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.n3cIPYap.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.n3cIPYap.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.mHiR6ZbD.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.mHiR6ZbD.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.khyF1YQ7.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.khyF1YQ7.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.MyIHH_gY.js"},{"revision":null,"url":"assets/shared_toRef_index.md.MyIHH_gY.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.HEFJ4K4H.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.HEFJ4K4H.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.DPWgHjFw.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.DPWgHjFw.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.Vo7-MkB0.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.Vo7-MkB0.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.CFJP-qjZ.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.CFJP-qjZ.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.C9uxrXVQ.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.C9uxrXVQ.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.DUVB2oA9.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.DUVB2oA9.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.CoQWp1eR.js"},{"revision":null,"url":"assets/shared_until_index.md.CoQWp1eR.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.Bs1AgoUH.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.Bs1AgoUH.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.ZEdB_dhe.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.ZEdB_dhe.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.Dy-N1KKv.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.Dy-N1KKv.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.wUFKNwsf.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.wUFKNwsf.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.DSQVv3ep.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.DSQVv3ep.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.D_Wky8S3.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.D_Wky8S3.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.CZ2FkAx_.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.CZ2FkAx_.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.BMwl9Ro-.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.BMwl9Ro-.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.C_rxDVkY.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.C_rxDVkY.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.CmwxgXPz.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.CmwxgXPz.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.D4qUV1li.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.D4qUV1li.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.BiOgMm_G.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.BiOgMm_G.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.7ZeBPFm1.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.7ZeBPFm1.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.DPsig71c.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.DPsig71c.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.DuJ4FHWt.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.DuJ4FHWt.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.CKoabX4p.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.CKoabX4p.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.Cpb67fXh.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.Cpb67fXh.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.Bbh8Q5sW.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.Bbh8Q5sW.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.sW8wNP5z.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.sW8wNP5z.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.Bx6AYCYU.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.Bx6AYCYU.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.I34CnPn7.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.I34CnPn7.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.Bk2SE5bH.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.Bk2SE5bH.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.J1hozExm.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.J1hozExm.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.DqmhzCJA.js"},{"revision":null,"url":"assets/shared_useToString_index.md.DqmhzCJA.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.DgOnALXc.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.DgOnALXc.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.aiADkI8w.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.aiADkI8w.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.Ckdu_O8i.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.Ckdu_O8i.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.DlO56yNQ.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.DlO56yNQ.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.OJK927Da.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.OJK927Da.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.pw-ShTCA.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.pw-ShTCA.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.BTAXL0wc.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.BTAXL0wc.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.CraO-VXB.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.CraO-VXB.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.DbyVvMLn.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.DbyVvMLn.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.BEzaEYh6.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.BEzaEYh6.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.jwxwdgRT.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.jwxwdgRT.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.q68_SrMP.js"},{"revision":null,"url":"assets/shared_whenever_index.md.q68_SrMP.lean.js"},{"revision":null,"url":"assets/skills_README.md.DSmP9qqw.js"},{"revision":null,"url":"assets/skills_README.md.DSmP9qqw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedAsync.md.Cxs7nNQd.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedAsync.md.Cxs7nNQd.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedEager.md.CAfNE30C.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedEager.md.CAfNE30C.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedInject.md.Dwzx6xfA.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedInject.md.Dwzx6xfA.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedWithControl.md.Bk8OQUot.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_computedWithControl.md.Bk8OQUot.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createEventHook.md.Bdlp7C8j.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createEventHook.md.Bdlp7C8j.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createGenericProjection.md.B8ZYQywV.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createGenericProjection.md.B8ZYQywV.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createGlobalState.md.C5YZzqm-.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createGlobalState.md.C5YZzqm-.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createInjectionState.md.BfmIid6k.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createInjectionState.md.BfmIid6k.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createProjection.md.B7iv3btj.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createProjection.md.B7iv3btj.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createRef.md.B8I7E5L7.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createRef.md.B8I7E5L7.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createReusableTemplate.md.VV6NMI1q.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createReusableTemplate.md.VV6NMI1q.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createSharedComposable.md.CnH188QY.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createSharedComposable.md.CnH188QY.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createTemplatePromise.md.vBQ0ObOo.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createTemplatePromise.md.vBQ0ObOo.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createUnrefFn.md.CqNAH3r2.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_createUnrefFn.md.CqNAH3r2.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_extendRef.md.DQXuppXG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_extendRef.md.DQXuppXG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_from.md.iU6Iy6qv.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_from.md.iU6Iy6qv.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_get.md.BydN5Wi8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_get.md.BydN5Wi8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_injectLocal.md.BIMYBcVK.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_injectLocal.md.BIMYBcVK.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_isDefined.md.mHsctKU_.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_isDefined.md.mHsctKU_.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_logicAnd.md.vYEfcwBz.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_logicAnd.md.vYEfcwBz.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_logicNot.md.Ca0xtD7h.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_logicNot.md.Ca0xtD7h.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_logicOr.md.CVtM3IQH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_logicOr.md.CVtM3IQH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_makeDestructurable.md.DVJOfUQ_.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_makeDestructurable.md.DVJOfUQ_.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onClickOutside.md.Dp6mkOn3.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onClickOutside.md.Dp6mkOn3.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onElementRemoval.md.BnwRYaSf.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onElementRemoval.md.BnwRYaSf.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onKeyStroke.md.BDvHU8V1.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onKeyStroke.md.BDvHU8V1.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onLongPress.md.DNS1RzuV.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onLongPress.md.DNS1RzuV.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onStartTyping.md.DcBohDBv.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_onStartTyping.md.DcBohDBv.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_provideLocal.md.Cu3-h6TL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_provideLocal.md.Cu3-h6TL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactify.md.y5cx0VFA.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactify.md.y5cx0VFA.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactifyObject.md.CF_4RKHV.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactifyObject.md.CF_4RKHV.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactiveComputed.md.BlwK4eEx.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactiveComputed.md.BlwK4eEx.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactiveOmit.md.CsYtH2Ks.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactiveOmit.md.CsYtH2Ks.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactivePick.md.CaESpLuc.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_reactivePick.md.CaESpLuc.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refAutoReset.md.Bt9VRlaG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refAutoReset.md.Bt9VRlaG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refDebounced.md.iBxo7meu.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refDebounced.md.iBxo7meu.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refDefault.md.ELI0_xs4.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refDefault.md.ELI0_xs4.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refManualReset.md.DEeuwLUP.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refManualReset.md.DEeuwLUP.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refThrottled.md.jeLxLldS.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refThrottled.md.jeLxLldS.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refWithControl.md.DeX9TRcq.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_refWithControl.md.DeX9TRcq.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_set.md.Dzo0WwUq.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_set.md.Dzo0WwUq.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_syncRef.md.DnZgCY0e.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_syncRef.md.DnZgCY0e.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_syncRefs.md.B_AJ9oUg.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_syncRefs.md.B_AJ9oUg.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_templateRef.md.s3vb_L91.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_templateRef.md.s3vb_L91.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toObserver.md.D8WwBPJf.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toObserver.md.D8WwBPJf.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toReactive.md.CGnE8whj.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toReactive.md.CGnE8whj.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toRef.md.DsEIPx1b.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toRef.md.DsEIPx1b.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toRefs.md.oT0TUgTX.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_toRefs.md.oT0TUgTX.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnBeforeMount.md.BhZMYKlg.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnBeforeMount.md.BhZMYKlg.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnBeforeUnmount.md.BcayuUOL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnBeforeUnmount.md.BcayuUOL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnMounted.md.CV2mMTMG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnMounted.md.CV2mMTMG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnScopeDispose.md.BOPXeyak.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnScopeDispose.md.BOPXeyak.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnUnmounted.md.CV0UuT1l.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_tryOnUnmounted.md.CV0UuT1l.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_unrefElement.md.aSC32GHA.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_unrefElement.md.aSC32GHA.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_until.md.BjjUqJCA.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_until.md.BjjUqJCA.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAbs.md.Bc6FurZU.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAbs.md.Bc6FurZU.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useActiveElement.md.DNXnzTpd.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useActiveElement.md.DNXnzTpd.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAnimate.md.psXHhTTp.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAnimate.md.psXHhTTp.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayDifference.md.DLibhTG1.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayDifference.md.DLibhTG1.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayEvery.md.BuCUvXwn.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayEvery.md.BuCUvXwn.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFilter.md.CptNg6Rw.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFilter.md.CptNg6Rw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFind.md.Dmrt5iKz.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFind.md.Dmrt5iKz.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFindIndex.md.CCzt-yD4.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFindIndex.md.CCzt-yD4.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFindLast.md._v7mP4hH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayFindLast.md._v7mP4hH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayIncludes.md.5fTtucws.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayIncludes.md.5fTtucws.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayJoin.md.BoqE11u3.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayJoin.md.BoqE11u3.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayMap.md.k5aTaja9.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayMap.md.k5aTaja9.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayReduce.md.B1MfjCym.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayReduce.md.B1MfjCym.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArraySome.md.BNUshNXZ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArraySome.md.BNUshNXZ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayUnique.md.utaUNHWr.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useArrayUnique.md.utaUNHWr.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAsyncQueue.md.DVhGv0ng.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAsyncQueue.md.DVhGv0ng.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAsyncState.md.Ep1khWRW.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAsyncState.md.Ep1khWRW.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAsyncValidator.md.CzefCA34.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAsyncValidator.md.CzefCA34.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAuth.md.j8rmPoXJ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAuth.md.j8rmPoXJ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAverage.md.BPHX4RW2.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAverage.md.BPHX4RW2.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAxios.md.Dqru6iOL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useAxios.md.Dqru6iOL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBase64.md.Dm1YYuCy.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBase64.md.Dm1YYuCy.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBattery.md.WszfuWlz.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBattery.md.WszfuWlz.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBluetooth.md.BYO0tAV9.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBluetooth.md.BYO0tAV9.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBreakpoints.md.CIBCk2oi.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBreakpoints.md.CIBCk2oi.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBroadcastChannel.md.C0Cm2GzH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBroadcastChannel.md.C0Cm2GzH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBrowserLocation.md.C5dktbkv.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useBrowserLocation.md.C5dktbkv.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCached.md.n5AIO2LH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCached.md.n5AIO2LH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCeil.md.dIqGNylG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCeil.md.dIqGNylG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useChangeCase.md.B0syZFar.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useChangeCase.md.B0syZFar.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useClamp.md.Bpuikodh.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useClamp.md.Bpuikodh.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useClipboard.md.OSQXLggK.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useClipboard.md.OSQXLggK.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useClipboardItems.md.B3AyoRd5.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useClipboardItems.md.B3AyoRd5.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCloned.md.hAchDzjs.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCloned.md.hAchDzjs.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useColorMode.md.B1g6kWbS.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useColorMode.md.B1g6kWbS.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useConfirmDialog.md.DiYCtlW8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useConfirmDialog.md.DiYCtlW8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCookies.md.BDW3FUiZ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCookies.md.BDW3FUiZ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCountdown.md.CQxIhjL2.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCountdown.md.CQxIhjL2.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCounter.md.DUgdqh6V.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCounter.md.DUgdqh6V.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCssSupports.md.DtryzK8U.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCssSupports.md.DtryzK8U.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCssVar.md.CBB_N8Lq.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCssVar.md.CBB_N8Lq.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCurrentElement.md.VLnSXh8a.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCurrentElement.md.VLnSXh8a.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCycleList.md.3zm_pT5I.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useCycleList.md.3zm_pT5I.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDark.md.BBoGqVon.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDark.md.BBoGqVon.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDateFormat.md.BuTFaHNS.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDateFormat.md.BuTFaHNS.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDebouncedRefHistory.md.Cq3ULZsj.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDebouncedRefHistory.md.Cq3ULZsj.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDebounceFn.md.D7z04Rp8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDebounceFn.md.D7z04Rp8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDeviceMotion.md.CUhkeFk1.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDeviceMotion.md.CUhkeFk1.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDeviceOrientation.md.Cqf23tSw.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDeviceOrientation.md.Cqf23tSw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDevicePixelRatio.md.DVmLtThM.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDevicePixelRatio.md.DVmLtThM.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDevicesList.md.BlqykhHE.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDevicesList.md.BlqykhHE.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDisplayMedia.md.DDo8yEOs.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDisplayMedia.md.DDo8yEOs.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDocumentVisibility.md.BZPfLK7w.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDocumentVisibility.md.BZPfLK7w.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDraggable.md.By4TEau_.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDraggable.md.By4TEau_.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDrauu.md.DqUIX0Y8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDrauu.md.DqUIX0Y8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDropZone.md.ihuqLOWw.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useDropZone.md.ihuqLOWw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementBounding.md.C7nURzSa.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementBounding.md.C7nURzSa.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementByPoint.md.BabbJ5_t.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementByPoint.md.BabbJ5_t.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementHover.md.CO7Uktqq.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementHover.md.CO7Uktqq.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementSize.md.C_fMUbKC.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementSize.md.C_fMUbKC.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementVisibility.md.Blxb72Ml.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useElementVisibility.md.Blxb72Ml.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEventBus.md.yNj0OMdh.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEventBus.md.yNj0OMdh.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEventListener.md.Ce6ALsEt.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEventListener.md.Ce6ALsEt.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEventSource.md.mZVLc8Qf.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEventSource.md.mZVLc8Qf.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useExtractedObservable.md.0dLzobLa.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useExtractedObservable.md.0dLzobLa.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEyeDropper.md.2uQYv2Sw.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useEyeDropper.md.2uQYv2Sw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFavicon.md.DECizq4E.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFavicon.md.DECizq4E.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFetch.md.BB5WUTEo.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFetch.md.BB5WUTEo.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFileDialog.md.pzE_Pk0J.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFileDialog.md.pzE_Pk0J.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFileSystemAccess.md.BYCS51WE.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFileSystemAccess.md.BYCS51WE.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFirestore.md.BfTkLqu3.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFirestore.md.BfTkLqu3.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFloor.md.CRImh8u6.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFloor.md.CRImh8u6.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFocus.md.mDQXbqjJ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFocus.md.mDQXbqjJ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFocusTrap.md.zBG1VXYT.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFocusTrap.md.zBG1VXYT.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFocusWithin.md.Dhbpkp5I.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFocusWithin.md.Dhbpkp5I.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFps.md.D3Z0qGkJ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFps.md.D3Z0qGkJ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFullscreen.md.BZKF6NoC.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFullscreen.md.BZKF6NoC.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFuse.md.DEOpOOsP.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useFuse.md.DEOpOOsP.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useGamepad.md.vmUFaW8q.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useGamepad.md.vmUFaW8q.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useGeolocation.md.DHCRq-Gf.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useGeolocation.md.DHCRq-Gf.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIDBKeyval.md.DksJkHMd.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIDBKeyval.md.DksJkHMd.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIdle.md.BglU079K.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIdle.md.BglU079K.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useImage.md.DLvfKFCW.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useImage.md.DLvfKFCW.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useInfiniteScroll.md.B_U0yeTr.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useInfiniteScroll.md.B_U0yeTr.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIntersectionObserver.md.hTAD4OqG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIntersectionObserver.md.hTAD4OqG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useInterval.md.BpaY2tV7.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useInterval.md.BpaY2tV7.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIntervalFn.md.Dkz20Oji.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIntervalFn.md.Dkz20Oji.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIpcRenderer.md.BxXojKL0.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIpcRenderer.md.BxXojKL0.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIpcRendererInvoke.md.DgikYdpj.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIpcRendererInvoke.md.DgikYdpj.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIpcRendererOn.md.D__M-Q8_.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useIpcRendererOn.md.D__M-Q8_.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useJwt.md.JA0agPxm.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useJwt.md.JA0agPxm.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useKeyModifier.md.Dxd_sSZ8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useKeyModifier.md.Dxd_sSZ8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useLastChanged.md.-k4U-VoF.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useLastChanged.md.-k4U-VoF.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useLocalStorage.md.BVnDKDE3.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useLocalStorage.md.BVnDKDE3.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMagicKeys.md.BA8o9CQF.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMagicKeys.md.BA8o9CQF.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useManualRefHistory.md.BMO25u0w.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useManualRefHistory.md.BMO25u0w.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMath.md.CZknrjmN.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMath.md.CZknrjmN.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMax.md.Bt_7-in0.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMax.md.Bt_7-in0.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMediaControls.md.BQmSN3j5.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMediaControls.md.BQmSN3j5.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMediaQuery.md.BZ63eMLc.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMediaQuery.md.BZ63eMLc.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMemoize.md.DuzlKvR0.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMemoize.md.DuzlKvR0.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMemory.md.BQ4TfGsP.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMemory.md.BQ4TfGsP.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMin.md.ORxztEjw.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMin.md.ORxztEjw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMounted.md.DGv1Gbzt.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMounted.md.DGv1Gbzt.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMouse.md.DtC13rOv.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMouse.md.DtC13rOv.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMouseInElement.md.kXPg2AJs.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMouseInElement.md.kXPg2AJs.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMousePressed.md.ChlV1i4X.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMousePressed.md.ChlV1i4X.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMutationObserver.md.Bh22jWBd.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useMutationObserver.md.Bh22jWBd.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNavigatorLanguage.md.BXw1RrhY.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNavigatorLanguage.md.BXw1RrhY.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNetwork.md.BFBn2HX0.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNetwork.md.BFBn2HX0.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNow.md.8nEBSBpH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNow.md.8nEBSBpH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNProgress.md.Bi7YX37b.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useNProgress.md.Bi7YX37b.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useObjectUrl.md.f0pF2CAu.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useObjectUrl.md.f0pF2CAu.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useObservable.md.Crt5S80O.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useObservable.md.Crt5S80O.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useOffsetPagination.md.B8Os1DHN.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useOffsetPagination.md.B8Os1DHN.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useOnline.md.BImW_xYo.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useOnline.md.BImW_xYo.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePageLeave.md.cDOcaMpA.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePageLeave.md.cDOcaMpA.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useParallax.md.CYzVMx_8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useParallax.md.CYzVMx_8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useParentElement.md.Bo4Jktsf.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useParentElement.md.Bo4Jktsf.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePerformanceObserver.md.C78jm_Qn.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePerformanceObserver.md.C78jm_Qn.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePermission.md.-iz1-JoL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePermission.md.-iz1-JoL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePointer.md.sbt1-ugv.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePointer.md.sbt1-ugv.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePointerLock.md.Bsy8OWwK.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePointerLock.md.Bsy8OWwK.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePointerSwipe.md.BwtrEdGl.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePointerSwipe.md.BwtrEdGl.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePrecision.md.CJt-jZA3.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePrecision.md.CJt-jZA3.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredColorScheme.md.CHg9UKGL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredColorScheme.md.CHg9UKGL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredContrast.md.7_wlYX9l.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredContrast.md.7_wlYX9l.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredDark.md.DEWGqhAn.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredDark.md.DEWGqhAn.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredLanguages.md.QftwR0QS.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredLanguages.md.QftwR0QS.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredReducedMotion.md.B8ya8iRU.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredReducedMotion.md.B8ya8iRU.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredReducedTransparency.md.DQkmSX7O.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePreferredReducedTransparency.md.DQkmSX7O.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePrevious.md.CbZ9DnRr.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_usePrevious.md.CbZ9DnRr.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useProjection.md.BPGJ8McH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useProjection.md.BPGJ8McH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useQRCode.md.CtAswQGa.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useQRCode.md.CtAswQGa.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRafFn.md.CRC5eyXN.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRafFn.md.CRC5eyXN.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRefHistory.md.DvEHlZ4h.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRefHistory.md.DvEHlZ4h.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useResizeObserver.md.CTcdhCpd.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useResizeObserver.md.CTcdhCpd.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRound.md.DKocOaPG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRound.md.DKocOaPG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRouteHash.md.B0whhlcG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRouteHash.md.B0whhlcG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRouteParams.md.BOSGjs1l.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRouteParams.md.BOSGjs1l.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRouteQuery.md.D3mCi-YT.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRouteQuery.md.D3mCi-YT.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRTDB.md.BE3XeP4f.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useRTDB.md.BE3XeP4f.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScreenOrientation.md.Bc0f5sc5.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScreenOrientation.md.Bc0f5sc5.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScreenSafeArea.md.rdmue5O8.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScreenSafeArea.md.rdmue5O8.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScriptTag.md.Bl4uRBUn.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScriptTag.md.Bl4uRBUn.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScroll.md.D3KIYdXJ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScroll.md.D3KIYdXJ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScrollLock.md.DJnezsdO.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useScrollLock.md.DJnezsdO.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSessionStorage.md.DdSTpP8V.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSessionStorage.md.DdSTpP8V.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useShare.md.DSD6G3d_.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useShare.md.DSD6G3d_.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSortable.md.EiWh-7iL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSortable.md.EiWh-7iL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSorted.md.DrXQ71wS.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSorted.md.DrXQ71wS.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSpeechRecognition.md.Q8aN075H.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSpeechRecognition.md.Q8aN075H.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSpeechSynthesis.md.COSiYkaY.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSpeechSynthesis.md.COSiYkaY.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSSRWidth.md.JUm77FbP.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSSRWidth.md.JUm77FbP.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStepper.md.BEbHKPXO.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStepper.md.BEbHKPXO.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStorage.md.a4DAFMsZ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStorage.md.a4DAFMsZ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStorageAsync.md.BKC5G_pT.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStorageAsync.md.BKC5G_pT.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStyleTag.md.iGm0At65.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useStyleTag.md.iGm0At65.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSubject.md.BdiR6flF.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSubject.md.BdiR6flF.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSubscription.md.DqZqG4bX.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSubscription.md.DqZqG4bX.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSum.md.Dg95N4Gt.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSum.md.Dg95N4Gt.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSupported.md.IkyGEOQ2.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSupported.md.IkyGEOQ2.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSwipe.md.BbuDZtKD.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useSwipe.md.BbuDZtKD.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTemplateRefsList.md.DQENrX_-.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTemplateRefsList.md.DQENrX_-.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTextareaAutosize.md.CWZKb-ki.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTextareaAutosize.md.CWZKb-ki.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTextDirection.md.l_jMK0PB.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTextDirection.md.l_jMK0PB.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTextSelection.md.C8N54K-9.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTextSelection.md.C8N54K-9.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useThrottledRefHistory.md.D6o-cs1u.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useThrottledRefHistory.md.D6o-cs1u.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useThrottleFn.md.B19YMQwY.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useThrottleFn.md.B19YMQwY.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeAgo.md.Ct3E1pCJ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeAgo.md.Ct3E1pCJ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeAgoIntl.md.DE9Mttt4.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeAgoIntl.md.DE9Mttt4.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeout.md.C0PoUp0e.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeout.md.C0PoUp0e.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeoutFn.md.CMt4KoLZ.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeoutFn.md.CMt4KoLZ.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeoutPoll.md.Dze2R_Uu.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimeoutPoll.md.Dze2R_Uu.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimestamp.md.CkW17E_q.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTimestamp.md.CkW17E_q.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTitle.md.B8M5MUZt.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTitle.md.B8M5MUZt.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useToggle.md.8Qyo04GH.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useToggle.md.8Qyo04GH.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useToNumber.md.C8A_wA1B.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useToNumber.md.C8A_wA1B.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useToString.md.D_4iJ3Vg.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useToString.md.D_4iJ3Vg.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTransition.md.B1WyBAEw.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTransition.md.B1WyBAEw.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTrunc.md.CCh0LvPC.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useTrunc.md.CCh0LvPC.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useUrlSearchParams.md.CPPpVWha.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useUrlSearchParams.md.CPPpVWha.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useUserMedia.md.BdjAmcFp.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useUserMedia.md.BdjAmcFp.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVibrate.md.DGmjZbzc.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVibrate.md.DGmjZbzc.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVirtualList.md.D70d6SsI.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVirtualList.md.D70d6SsI.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVModel.md.DrhyERhn.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVModel.md.DrhyERhn.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVModels.md.NcVCWftC.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useVModels.md.NcVCWftC.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWakeLock.md.DY1ttN1o.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWakeLock.md.DY1ttN1o.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebNotification.md.BqjjNEHl.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebNotification.md.BqjjNEHl.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebSocket.md.6UTddJW3.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebSocket.md.6UTddJW3.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebWorker.md.PSnLPYYN.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebWorker.md.PSnLPYYN.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebWorkerFn.md.CXLVwwFi.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWebWorkerFn.md.CXLVwwFi.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWindowFocus.md.CKBtaGI2.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWindowFocus.md.CKBtaGI2.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWindowScroll.md.CpM81sQz.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWindowScroll.md.CpM81sQz.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWindowSize.md.CeuFrrJT.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useWindowSize.md.CeuFrrJT.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useZoomFactor.md.D6MoYFMo.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useZoomFactor.md.D6MoYFMo.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useZoomLevel.md.C1kMSOSn.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_useZoomLevel.md.C1kMSOSn.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchArray.md.CbmVyYOG.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchArray.md.CbmVyYOG.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchAtMost.md.D_rAd2jL.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchAtMost.md.D_rAd2jL.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchDebounced.md.2Kbu1oaM.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchDebounced.md.2Kbu1oaM.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchDeep.md.DlyJibrY.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchDeep.md.DlyJibrY.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchExtractedObservable.md.CpLD5ZRS.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchExtractedObservable.md.CpLD5ZRS.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchIgnorable.md.DXhJhbho.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchIgnorable.md.DXhJhbho.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchImmediate.md.5B0ZpIUj.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchImmediate.md.5B0ZpIUj.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchOnce.md.Cn5rY6xp.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchOnce.md.Cn5rY6xp.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchPausable.md.BEPqgTlb.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchPausable.md.BEPqgTlb.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchThrottled.md.CddkNkyV.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchThrottled.md.CddkNkyV.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchTriggerable.md.Dv7E_i6n.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchTriggerable.md.Dv7E_i6n.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchWithFilter.md.BFhASxWd.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_watchWithFilter.md.BFhASxWd.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_whenever.md.BV9UHSvr.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_references_whenever.md.BV9UHSvr.lean.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_SKILL.md.BYYpc1t_.js"},{"revision":null,"url":"assets/skills_skills_vueuse-functions_SKILL.md.BYYpc1t_.lean.js"},{"revision":null,"url":"assets/skills_templates_vueuse-functions-skills.md.BMESJ8v4.js"},{"revision":null,"url":"assets/skills_templates_vueuse-functions-skills.md.BMESJ8v4.lean.js"},{"revision":null,"url":"assets/style.BO7_nKOf.css"},{"revision":null,"url":"assets/team.md.xbymzFFI.js"},{"revision":null,"url":"assets/team.md.xbymzFFI.lean.js"},{"revision":null,"url":"assets/why-no-translations.md.Cp2YffX1.js"},{"revision":null,"url":"assets/why-no-translations.md.Cp2YffX1.lean.js"},{"revision":"c7fc555e8434102c0da1ea3bb2458f6a","url":"badge-function-count.svg"},{"revision":"155e48d16f7dcff090967cf513866bc7","url":"components/README.html"},{"revision":"958ae7ac9110a70737da5579293ca96f","url":"contributing.html"},{"revision":"f4a1e6a74b999ec5e0d7c3552440edb0","url":"core/_template/index.html"},{"revision":"e333ac4518b0b868a19bd95fd5e0e74a","url":"core/computedAsync/index.html"},{"revision":"369e06a1e5b286f44eb127a5025dfda9","url":"core/computedInject/index.html"},{"revision":"5cdf5723432ed9b98efffb55eb2baf6a","url":"core/createReusableTemplate/index.html"},{"revision":"835c49c228e4802e273ecd170be6a595","url":"core/createTemplatePromise/index.html"},{"revision":"270e82293bae044a58b28093b3f1f775","url":"core/createUnrefFn/index.html"},{"revision":"5b792b5c3459e6f338b7d127e5580063","url":"core/onClickOutside/index.html"},{"revision":"8cb145906a239ca155292fada4c92f1d","url":"core/onElementRemoval/index.html"},{"revision":"f6a3fb598e9d1ec46751ed85f6abb481","url":"core/onKeyStroke/index.html"},{"revision":"9876e51fa3e97e9060be811128e34732","url":"core/onLongPress/index.html"},{"revision":"780efacc6612e5a51a2d45dd68cba106","url":"core/onStartTyping/index.html"},{"revision":"b65a155017698d606e5f7ab6190e1073","url":"core/README.html"},{"revision":"ba67ff927665fd5ff3e2a856e01990b8","url":"core/templateRef/index.html"},{"revision":"49b53ba7cdc08f3c08573ae90f66c662","url":"core/unrefElement/index.html"},{"revision":"6412931d54a16376bb33e23addb9e3b4","url":"core/useActiveElement/index.html"},{"revision":"2d42ff71a9bca2fd7bfa107274d35caa","url":"core/useAnimate/index.html"},{"revision":"29d483af8dac99b3ece7a7bbe8826efd","url":"core/useAsyncQueue/index.html"},{"revision":"f0e5b3787bf18e8904a0c9d8840e35be","url":"core/useAsyncState/index.html"},{"revision":"f266a10d20dd051fa4e0ae71bd46da5b","url":"core/useBase64/index.html"},{"revision":"16ee895cfeeaa29d7bbd76f1492179e2","url":"core/useBattery/index.html"},{"revision":"9b813706b2099db4032b372ec02b120a","url":"core/useBluetooth/index.html"},{"revision":"ab2eca31537962e647a54638af517326","url":"core/useBreakpoints/index.html"},{"revision":"ec9810b8505e1869b252c584c09cf63b","url":"core/useBroadcastChannel/index.html"},{"revision":"230291c3d88c8cbefd5608b9ac2e4c3a","url":"core/useBrowserLocation/index.html"},{"revision":"354a408678c5b1f50ce195b0cfe4cfa9","url":"core/useCached/index.html"},{"revision":"1823f9552928bde95c8393ae154096d3","url":"core/useClipboard/index.html"},{"revision":"abfcc615ab7b57b1f5193e9f053ee0ca","url":"core/useClipboardItems/index.html"},{"revision":"a1aa6f20532467a7f9be8fe3edc39184","url":"core/useCloned/index.html"},{"revision":"a25461534fbd3be3460198fbb68e3a0e","url":"core/useColorMode/index.html"},{"revision":"03c8d71ee5e4d9dfa300ab2133ddaab0","url":"core/useConfirmDialog/index.html"},{"revision":"8a08bdfd82ec574ccaf5bf91481c1790","url":"core/useCountdown/index.html"},{"revision":"90c4f390ddbc94152e9df62910a69aa9","url":"core/useCssSupports/index.html"},{"revision":"05553c1fb1c436774224b4ba750c2e48","url":"core/useCssVar/index.html"},{"revision":"3e49e4912abbe0df4b6fd598264ba68f","url":"core/useCurrentElement/index.html"},{"revision":"4359d80bd26456289ade397953b3b753","url":"core/useCycleList/index.html"},{"revision":"d4920061a9a30a5d16a4322d03ec6fb4","url":"core/useDark/index.html"},{"revision":"382aa7f37d6b7b09181c88c851880e39","url":"core/useDebouncedRefHistory/index.html"},{"revision":"36fed34d11b351b032f3b40e2657d540","url":"core/useDeviceMotion/index.html"},{"revision":"1f6347db009f783348dae5ecec1b8820","url":"core/useDeviceOrientation/index.html"},{"revision":"4277173aa5beb4afb99b9ab97c3948a8","url":"core/useDevicePixelRatio/index.html"},{"revision":"736d06092dfa6877e215976fafbc3f81","url":"core/useDevicesList/index.html"},{"revision":"8a23743485d94571b95573f166c9eb27","url":"core/useDisplayMedia/index.html"},{"revision":"f55bf972d009d9b51add6900383a6efe","url":"core/useDocumentVisibility/index.html"},{"revision":"29f782b46cde22315578f8cd641e141d","url":"core/useDraggable/index.html"},{"revision":"3e9cb044b133e7f6bbc92a1f5799d354","url":"core/useDropZone/index.html"},{"revision":"c4800c4d79f89e6e9a02ad861c7c25e0","url":"core/useElementBounding/index.html"},{"revision":"e5d99d15d19edb4db0d2b17bc07e469e","url":"core/useElementByPoint/index.html"},{"revision":"3a801f1c336de5de716c330c14fc680b","url":"core/useElementHover/index.html"},{"revision":"0ffe49aca0b91772abed558ae682dff8","url":"core/useElementSize/index.html"},{"revision":"c502249030c53a227889a9cb10321e58","url":"core/useElementVisibility/index.html"},{"revision":"80eae280dd82fdee6dab9eebc37cb932","url":"core/useEventBus/index.html"},{"revision":"fb1412bb2a55f95da75ddaa79ced73b0","url":"core/useEventListener/index.html"},{"revision":"41134412699807b0df572ebd71f92977","url":"core/useEventSource/index.html"},{"revision":"c92bcf998f642788e79c3dcd30201278","url":"core/useEyeDropper/index.html"},{"revision":"070e7b940d20316bbfe14deef4c0affe","url":"core/useFavicon/index.html"},{"revision":"cdf30b7fc26eb36861e39cf7f3a0b8bd","url":"core/useFetch/index.html"},{"revision":"c967cc0204e6a3eb3609080bcf2dabb9","url":"core/useFileDialog/index.html"},{"revision":"f3b17f4421667a40837cd312c9552892","url":"core/useFileSystemAccess/index.html"},{"revision":"e3883c4cc9f3178396b5e2ddf1a39312","url":"core/useFocus/index.html"},{"revision":"235befcc8baf80aa9b749c2d8bb58f6a","url":"core/useFocusWithin/index.html"},{"revision":"00798c8bc7fad373b46cf10b6bf110da","url":"core/useFps/index.html"},{"revision":"7c8a22b9a5eb74d056e8e545bd12af51","url":"core/useFullscreen/index.html"},{"revision":"3245f5912f3874c35a71f3c5a2d979dc","url":"core/useGamepad/index.html"},{"revision":"bb2f33c12d7fd249f99d5f81b0d4077c","url":"core/useGeolocation/index.html"},{"revision":"c52792cd4c92dc14cfae7a8d561f7771","url":"core/useIdle/index.html"},{"revision":"49df6afae7497283b19fe68d0556b0a5","url":"core/useImage/index.html"},{"revision":"b0ec2e9253ff58e9331c90aa0605d179","url":"core/useInfiniteScroll/index.html"},{"revision":"dc67eda4653348c950d2a3ff629aed5e","url":"core/useIntersectionObserver/index.html"},{"revision":"4e2967077e5683b73bebb967180184c4","url":"core/useKeyModifier/index.html"},{"revision":"645441d407546612f093ec9ce70e06cb","url":"core/useLocalStorage/index.html"},{"revision":"4ff497c4e258627a9811277ff3ecf823","url":"core/useMagicKeys/index.html"},{"revision":"f3c32da40867d44e3c5f4a4f2a4b0860","url":"core/useManualRefHistory/index.html"},{"revision":"fc773b395c4340841fe82cf4918b5aa4","url":"core/useMediaControls/index.html"},{"revision":"0cb3a97a38b6e1ad0b01c7e9b8fa232f","url":"core/useMediaQuery/index.html"},{"revision":"89949f8d6c72f811204ea1b4d818f466","url":"core/useMemoize/index.html"},{"revision":"a7d8ca021526703ce27b9ef6a5448454","url":"core/useMemory/index.html"},{"revision":"16d32be81c6b028daff96b20cf8a5a15","url":"core/useMounted/index.html"},{"revision":"ec1b94e53d1e64a65a39b5fbaaeee97c","url":"core/useMouse/index.html"},{"revision":"588c1c8adead05c142d0f9fad158e9e5","url":"core/useMouseInElement/index.html"},{"revision":"51b8f2d156b3e19a2748971119472bef","url":"core/useMousePressed/index.html"},{"revision":"2c52a7def13da7c1494ed6e48acaab83","url":"core/useMutationObserver/index.html"},{"revision":"9a772ad1329da47c25f28fe0a892da7b","url":"core/useNavigatorLanguage/index.html"},{"revision":"3ea71f9459928b36c97485efad0bb4b8","url":"core/useNetwork/index.html"},{"revision":"441af71125179d42757f85784820e70b","url":"core/useNow/index.html"},{"revision":"d04a8cc16bb0603749c56dda72bcb866","url":"core/useObjectUrl/index.html"},{"revision":"e37a8cc0507cddf3a2c77a6b0882fd31","url":"core/useOffsetPagination/index.html"},{"revision":"4ca599b3d869ab6c5a65d1dbb79ef80a","url":"core/useOnline/index.html"},{"revision":"27f0029fecbf7d813816ff6617b6881e","url":"core/usePageLeave/index.html"},{"revision":"4b235cdd982be0c56d451314896468d5","url":"core/useParallax/index.html"},{"revision":"591580cc94f6bb2abeb1637d30f7edd1","url":"core/useParentElement/index.html"},{"revision":"b8ced61eb146bab7885e129d3553d7a1","url":"core/usePerformanceObserver/index.html"},{"revision":"f4a7ad26bdf680e75747bd89c2e6633f","url":"core/usePermission/index.html"},{"revision":"3226df02debd5a19d18fe8b3491436c2","url":"core/usePointer/index.html"},{"revision":"c94cd72d1fec9faa4158d5dce70c3037","url":"core/usePointerLock/index.html"},{"revision":"5298f2a1be3e9fb123bbfc6aedea95a2","url":"core/usePointerSwipe/index.html"},{"revision":"f22470b29191e807304dd3a5396a39dd","url":"core/usePreferredColorScheme/index.html"},{"revision":"8c1d90246d92e83e92bd0da21ce153c1","url":"core/usePreferredContrast/index.html"},{"revision":"c3761147e3dacaedb18c594c951f6488","url":"core/usePreferredDark/index.html"},{"revision":"fe4fb81a69b34db760dc868802fa8ca2","url":"core/usePreferredLanguages/index.html"},{"revision":"6cfc12648b4798bc6ebc66bfad6ff4f4","url":"core/usePreferredReducedMotion/index.html"},{"revision":"ae722a6c61505f1284c3b612a966c798","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"f6a19f48dfc450028e39ac97c9445988","url":"core/usePrevious/index.html"},{"revision":"5d08ed6fef699b8a4d30a84947fc2853","url":"core/useRafFn/index.html"},{"revision":"addb15675b59dd4825bd1b4164cde8ad","url":"core/useRefHistory/index.html"},{"revision":"cc5ae448b25b4a613cb5da9528b25ae0","url":"core/useResizeObserver/index.html"},{"revision":"790b9348d2d1e7375d1cd92559d4bf28","url":"core/useScreenOrientation/index.html"},{"revision":"e1431dc2fbb1a36988a260f1b2f270fe","url":"core/useScreenSafeArea/index.html"},{"revision":"b91774567708f304ee0d261c4e3e4346","url":"core/useScriptTag/index.html"},{"revision":"eebd55582c3ac250e387c53f6085c34f","url":"core/useScroll/index.html"},{"revision":"91e9a2a8875f1ad3908aa5ddb309aa55","url":"core/useScrollLock/index.html"},{"revision":"2a2e591f2afd7a73565c24ddeff0e148","url":"core/useSessionStorage/index.html"},{"revision":"596055a863041d5f339a955e23bc19f2","url":"core/useShare/index.html"},{"revision":"5a97be6aa499df0492bf88bb0e960946","url":"core/useSorted/index.html"},{"revision":"ac3a28b8c06bf1562890686e2dd05619","url":"core/useSpeechRecognition/index.html"},{"revision":"41dcd2235e32467b2ac17f81365898be","url":"core/useSpeechSynthesis/index.html"},{"revision":"f08662ca1b41fc8ea9d346c84fbd1662","url":"core/useSSRWidth/index.html"},{"revision":"63d27cdab16c1a82cde581227880b76f","url":"core/useStepper/index.html"},{"revision":"9ed8df14345a82f63424b47b180ca5c2","url":"core/useStorage/index.html"},{"revision":"ec3a3caa84b17c721bc8720d0794b69b","url":"core/useStorageAsync/index.html"},{"revision":"74c9d73e7d58d685d86c2020f741ddfa","url":"core/useStyleTag/index.html"},{"revision":"420746bcbca316722ccbd28e8886a5c2","url":"core/useSupported/index.html"},{"revision":"f8e416ed6064649e0d3f570819af7940","url":"core/useSwipe/index.html"},{"revision":"122f7ba3c0d227fa2cedf73085c16e1e","url":"core/useTemplateRefsList/index.html"},{"revision":"d0d3ee56bd6da80301b7a4d5fb198bb4","url":"core/useTextareaAutosize/index.html"},{"revision":"7c6254b5311a7a603aac6b0dee1edbe4","url":"core/useTextDirection/index.html"},{"revision":"41c1bf59a05f62b4edb337f70c134756","url":"core/useTextSelection/index.html"},{"revision":"770cd59252b6276c382e060f77cb534b","url":"core/useThrottledRefHistory/index.html"},{"revision":"87644fdeb5372e04a9083f1f743e3f5f","url":"core/useTimeAgo/index.html"},{"revision":"3c7076bfd14c673c628b664aefe24b7b","url":"core/useTimeAgoIntl/index.html"},{"revision":"32bd41ea3a73b9a155f457cbccc7f5ec","url":"core/useTimeoutPoll/index.html"},{"revision":"3ef5d383a6f470414e2fc4f2d926787e","url":"core/useTimestamp/index.html"},{"revision":"73267699964c56ec834465b63be39fe8","url":"core/useTitle/index.html"},{"revision":"2c20377a6d59bd48a7f3ce6d6cc5663e","url":"core/useTransition/index.html"},{"revision":"ccc3df030f92536ad9dcbb37197595e5","url":"core/useUrlSearchParams/index.html"},{"revision":"c34c7c60f5017662e195d0812c317ea8","url":"core/useUserMedia/index.html"},{"revision":"9f93f7034d3cff266fa1df6b0c205aa5","url":"core/useVibrate/index.html"},{"revision":"92f88d92059c3a80943cb48b3e6cc353","url":"core/useVirtualList/index.html"},{"revision":"5371c19c9400ee12ece9c07ba892d17b","url":"core/useVModel/index.html"},{"revision":"376d9bc80478e60431c541662c9c59dd","url":"core/useVModels/index.html"},{"revision":"f1b794706b8cb2f0f0833ccff7e1bd23","url":"core/useWakeLock/index.html"},{"revision":"c45dfbb0dbe8a7bdf5e370701ab31383","url":"core/useWebNotification/index.html"},{"revision":"bad98c1d35b2353559d75c744aa0660c","url":"core/useWebSocket/index.html"},{"revision":"cd9b1198552a35790b268bba8a6d593e","url":"core/useWebWorker/index.html"},{"revision":"7099e71f9ba3f024f8ded3116e1129a6","url":"core/useWebWorkerFn/index.html"},{"revision":"06cf348aa4efdce7f40906885a76d55c","url":"core/useWindowFocus/index.html"},{"revision":"b8d02e1dfdbcbff5002057f0217accf5","url":"core/useWindowScroll/index.html"},{"revision":"2faa2cc63c71f3487a9aeddb5785ab1d","url":"core/useWindowSize/index.html"},{"revision":"a72830b7dd29e982c93e5b9ac04de7aa","url":"ecosystem.html"},{"revision":"ac9ce68bdefa6f830a45ab641ccdd581","url":"electron/README.html"},{"revision":"a5a16154f215ecc0d7efa138dd03d416","url":"electron/useIpcRenderer/index.html"},{"revision":"92341aacff67eaa6badc941b76e86e06","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"4b6c5f8656583b10a9021038ff437757","url":"electron/useIpcRendererOn/index.html"},{"revision":"845af67e0f65ab2a1d0906840dbc28e2","url":"electron/useZoomFactor/index.html"},{"revision":"40299b8bea7a3d27bb2d4f1aa2f57b49","url":"electron/useZoomLevel/index.html"},{"revision":"db20fef082733491aa567a21e9499b58","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"b51f3176b6d4bad86dc419cd92275a96","url":"firebase/README.html"},{"revision":"50ca8920c742cfd2bf2b7dece5c351e0","url":"firebase/useAuth/index.html"},{"revision":"8ead652a7e416a435661c04a29dd9c56","url":"firebase/useFirestore/index.html"},{"revision":"1a5c8e030abcde1ec1220a7a79692071","url":"firebase/useRTDB/index.html"},{"revision":"32821f8956a32df49026b62263d78a8a","url":"functions.html"},{"revision":"b463b0349f08a90cddc8571aa75facca","url":"guide/best-practice.html"},{"revision":"8450edfbeb1c01a1031ea7c6a9ef8382","url":"guide/components.html"},{"revision":"5ebb5e2b19af82e3836c12d9f601026f","url":"guide/config.html"},{"revision":"c161f36fce1a6ca44cea88f3953a0392","url":"guide/index.html"},{"revision":"e65b31940066c7001ca1a7f0abf25351","url":"guide/work-with-ai.html"},{"revision":"f78fa1e65a94d01319ebabbc23c068cb","url":"guidelines.html"},{"revision":"58bd6e4ddffd1ec208c6fe3718cb5c5f","url":"index.html"},{"revision":"9990c6c5b354804d9b8853b3afce9fa8","url":"integrations/README.html"},{"revision":"245d997c4559aad207902a99f51b88db","url":"integrations/useAsyncValidator/index.html"},{"revision":"8f74e20486071fe6ced2c9fde62c129b","url":"integrations/useAxios/index.html"},{"revision":"c25ab376d1ba5d200ff4e98329e3e6fe","url":"integrations/useChangeCase/index.html"},{"revision":"7fc5c19e14d88d18d75b9e819f8d65f1","url":"integrations/useCookies/index.html"},{"revision":"de85845806900e4037ac75812c64176e","url":"integrations/useDrauu/index.html"},{"revision":"dae8714c79b16b5d518715207310efd0","url":"integrations/useFocusTrap/index.html"},{"revision":"5c2843860ce18285ebf8fec4d85e8313","url":"integrations/useFuse/index.html"},{"revision":"69efcbb66af0bdd88f71d4d314797871","url":"integrations/useIDBKeyval/index.html"},{"revision":"98e50fe32785778253cc1a74ae5bd2fe","url":"integrations/useJwt/index.html"},{"revision":"a58f803d82510bc3aeb195937d532432","url":"integrations/useNProgress/index.html"},{"revision":"60d97bb1af35c51f4ae254007817bba5","url":"integrations/useQRCode/index.html"},{"revision":"30b1daa56b5a94b0a791de903fab5136","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"29f5e54e573982744019eac49ee17f40","url":"math/createGenericProjection/index.html"},{"revision":"bdc2980b5eb84b77e3a6be33a99f4126","url":"math/createProjection/index.html"},{"revision":"650aebe610a8983a2fb59effe468fd74","url":"math/logicAnd/index.html"},{"revision":"c87464c26ba43a42d2ca08c5406a99a2","url":"math/logicNot/index.html"},{"revision":"19e4ef379483e41488c9b45d906de69e","url":"math/logicOr/index.html"},{"revision":"8e3723dc58bbec0f83476dcb4421c31f","url":"math/README.html"},{"revision":"8b7e21c87a96933c513b4cbc796fb87f","url":"math/useAbs/index.html"},{"revision":"43a2d045e64b4ca4891a351e8e0951d6","url":"math/useAverage/index.html"},{"revision":"cd678325bf73890ec0511c632fbed41e","url":"math/useCeil/index.html"},{"revision":"00ed30a81d47a1aa4a7b1165a2f11726","url":"math/useClamp/index.html"},{"revision":"854976ec89067bf77f08d26a7a9f968c","url":"math/useFloor/index.html"},{"revision":"180481bcec675cc97477b172bd4d4628","url":"math/useMath/index.html"},{"revision":"cec213da8bbec0cafe0a8725d9c72a4a","url":"math/useMax/index.html"},{"revision":"ed664cd36ff31db91bbedbd94eb5c96a","url":"math/useMin/index.html"},{"revision":"6888012b04421a360a65ff00d469ceb7","url":"math/usePrecision/index.html"},{"revision":"50aab6b218e942befad1b4d9cafa0888","url":"math/useProjection/index.html"},{"revision":"83f6e79544dcfc5bbe22eb32199e72a3","url":"math/useRound/index.html"},{"revision":"f8c363e79ce7d9022c17791890882afd","url":"math/useSum/index.html"},{"revision":"ce6fef05514ee07e8441320f6432bf31","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"e2d6fb275b463c56b9b84acb6dbcc7d2","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"c8d266a68876a8f2dfd48ee7175bf399","url":"router/README.html"},{"revision":"f6d130d8d36a5f36e7e89518cfa4e0d7","url":"router/useRouteHash/index.html"},{"revision":"95b4bc3ed91d87a8009cf66337d8a591","url":"router/useRouteParams/index.html"},{"revision":"0e0329ae982128027b4205b4e1a764f2","url":"router/useRouteQuery/index.html"},{"revision":"82e5193bcac4deea43222a6892f9a9f1","url":"rxjs/from/index.html"},{"revision":"3e3593f1d465800afe235a9ab783223a","url":"rxjs/README.html"},{"revision":"ff03b07af7576684f8d6d95cb00682b0","url":"rxjs/toObserver/index.html"},{"revision":"7a3f2a3a18fe61ecdb8ef01a9828abdd","url":"rxjs/useExtractedObservable/index.html"},{"revision":"f1ca1bd5f6e336411fac9e6fcc09cff0","url":"rxjs/useObservable/index.html"},{"revision":"9253089c073d18364edc78447b124e1b","url":"rxjs/useSubject/index.html"},{"revision":"5ec46a6a1b5ad6cf2b84dfd138db761a","url":"rxjs/useSubscription/index.html"},{"revision":"1e7d0afb3a5672b140d1a5ceee136a3c","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"dfa1d60464849b40e7a713c4eae31777","url":"shared/computedEager/index.html"},{"revision":"ec19517fe110e9fb5763fc8fed48510b","url":"shared/computedWithControl/index.html"},{"revision":"9361904ea548e415d05b4ebeda85619c","url":"shared/createEventHook/index.html"},{"revision":"ac45975ef142737af0559fc413dcee3b","url":"shared/createGlobalState/index.html"},{"revision":"467b1f00bce4f3a8bfbe5a29dff75d0f","url":"shared/createInjectionState/index.html"},{"revision":"f456a45b39f6be8d30f6e0f8cae7cc8c","url":"shared/createRef/index.html"},{"revision":"ca9bbaa627e647752eefae9c30d36e03","url":"shared/createSharedComposable/index.html"},{"revision":"203a6773242e819ffe86e0984c81c92b","url":"shared/extendRef/index.html"},{"revision":"3f86d895785ade0859215808084ee43a","url":"shared/get/index.html"},{"revision":"b0345d03e68b10b90f248e0095bd9727","url":"shared/injectLocal/index.html"},{"revision":"71af175a43c5154b4868f9cc430a0c78","url":"shared/isDefined/index.html"},{"revision":"4f7679cfb058098871f2b971d5779cd5","url":"shared/makeDestructurable/index.html"},{"revision":"1d52deea7a2221c81d3fc5e43e99b4b4","url":"shared/provideLocal/index.html"},{"revision":"e69db8d54765c9ce1b6c6d3c58668950","url":"shared/reactify/index.html"},{"revision":"42e2af93241286de6fbb716d2408d320","url":"shared/reactifyObject/index.html"},{"revision":"30ae762a8ff5d1e0b1f23d0ceef65d48","url":"shared/reactiveComputed/index.html"},{"revision":"45660de206a2cf79d8e264bdb6769bd7","url":"shared/reactiveOmit/index.html"},{"revision":"28db64b3782444116d0e26e9081b623f","url":"shared/reactivePick/index.html"},{"revision":"895defbfac07c56c45bc70223bb23b20","url":"shared/refAutoReset/index.html"},{"revision":"81d73d75add17b7ee18c3cfd7ffb8dbb","url":"shared/refDebounced/index.html"},{"revision":"50ed6a5409650602fadfab9ea2d98038","url":"shared/refDefault/index.html"},{"revision":"af55c1dd10daefc4730256d956bb5a38","url":"shared/refManualReset/index.html"},{"revision":"f0085d7b37fdc07dad0951d1b3751b87","url":"shared/refThrottled/index.html"},{"revision":"3f82644bf75340ae7f3f2bb2059378e0","url":"shared/refWithControl/index.html"},{"revision":"ba3f9cfee9bd8da83c86b15b79809fac","url":"shared/set/index.html"},{"revision":"d2b891fb9c9c2d5ed6f7ec7fe6102ea1","url":"shared/syncRef/index.html"},{"revision":"cd451f2ad27f745c0784686fd0d96453","url":"shared/syncRefs/index.html"},{"revision":"c8df4bce2b885d8d052f4a9bfaf6c002","url":"shared/toReactive/index.html"},{"revision":"0c064f0595fff74f035c4fb1663fdc1e","url":"shared/toRef/index.html"},{"revision":"6985583080d1b7f5e6dd87a29ad18028","url":"shared/toRefs/index.html"},{"revision":"7aa817d9af422ef66c85827ac077db06","url":"shared/tryOnBeforeMount/index.html"},{"revision":"0db0ce75ef6ecda3d763261b2fcfc0c5","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"f3788be4bb3952a80fdbd80d5a3d2e85","url":"shared/tryOnMounted/index.html"},{"revision":"8eb7b3704f6116bd805d2b8c7ed4c849","url":"shared/tryOnScopeDispose/index.html"},{"revision":"2d401cdf7bc22463ff908f6e61473905","url":"shared/tryOnUnmounted/index.html"},{"revision":"ecbb9bfe3e7f33111ce7b5dcc0ad4aae","url":"shared/until/index.html"},{"revision":"ffa0b7de2500d94f99f77fe289a8f63b","url":"shared/useArrayDifference/index.html"},{"revision":"3196a29a9c2b04798b8ef095f90d0414","url":"shared/useArrayEvery/index.html"},{"revision":"f6b90dc6d29a44591ec4426278d43338","url":"shared/useArrayFilter/index.html"},{"revision":"ee189db6d19bd822681a76ee22972189","url":"shared/useArrayFind/index.html"},{"revision":"d11d5575c54049110de1daea0115e074","url":"shared/useArrayFindIndex/index.html"},{"revision":"6f3b782f977eb979d8e255bab9cc2eec","url":"shared/useArrayFindLast/index.html"},{"revision":"bb2239a281071e5ced510aaff1d92c50","url":"shared/useArrayIncludes/index.html"},{"revision":"7b0c0fd02ee6ab147a71e84cd38987ab","url":"shared/useArrayJoin/index.html"},{"revision":"2582f5f83cdb35ec9e087b66eed97c77","url":"shared/useArrayMap/index.html"},{"revision":"9e1b18deaf56e27a03093b186d9b9e9b","url":"shared/useArrayReduce/index.html"},{"revision":"f5a842b998f6d014d6f847444f93f2ca","url":"shared/useArraySome/index.html"},{"revision":"b48ecc716c3d12db07ead7b1006a7329","url":"shared/useArrayUnique/index.html"},{"revision":"e7ae6f0093993c1a4efd2809f53cc088","url":"shared/useCounter/index.html"},{"revision":"17327ca550bf20d17f7d95269aed2234","url":"shared/useDateFormat/index.html"},{"revision":"04aa3096e19c6e95b2b19960e68ef1e5","url":"shared/useDebounceFn/index.html"},{"revision":"4fbba7fe20b813a18a2efad87673fb40","url":"shared/useInterval/index.html"},{"revision":"e60cc20ba267266543b37a870aa9c48f","url":"shared/useIntervalFn/index.html"},{"revision":"533fdfab4e2ebb7a7b8515ccce3f07ba","url":"shared/useLastChanged/index.html"},{"revision":"e0681bcaac57f80a02213ba5f6a5b58d","url":"shared/useThrottleFn/index.html"},{"revision":"2974ae885b802c3c0565c6b630d06bcc","url":"shared/useTimeout/index.html"},{"revision":"e7cc300ac02a49aa63cc969506413cb3","url":"shared/useTimeoutFn/index.html"},{"revision":"7267ed59137850f487d679b957bb9417","url":"shared/useToggle/index.html"},{"revision":"df30dce15af1a534aaaa44d757cb43a1","url":"shared/useToNumber/index.html"},{"revision":"6de08cc9f4284e2d1aaee9db2aebc5eb","url":"shared/useToString/index.html"},{"revision":"fcf65f83216d5f1c94adf37ee5906581","url":"shared/watchArray/index.html"},{"revision":"b3e682db883a0e13c70dc46d7d6c3ed2","url":"shared/watchAtMost/index.html"},{"revision":"acc93b3e677031f6b50a90a93c23acd0","url":"shared/watchDebounced/index.html"},{"revision":"339fdef68af30a12d2183a52c8b14699","url":"shared/watchDeep/index.html"},{"revision":"ceabebd80033f91219f8305e749302cb","url":"shared/watchIgnorable/index.html"},{"revision":"c19641151c77f3b005096179f3e1be7e","url":"shared/watchImmediate/index.html"},{"revision":"f7893a095c9bf226c773d35b4fc294c0","url":"shared/watchOnce/index.html"},{"revision":"ac1665259cd34536420ea4125cd3c327","url":"shared/watchPausable/index.html"},{"revision":"640c9091d3a921e6f5925527515e5156","url":"shared/watchThrottled/index.html"},{"revision":"df03024786d41a945b08749a3c56a5fc","url":"shared/watchTriggerable/index.html"},{"revision":"d226d0725b1dc9a61cdaa97c62e5534e","url":"shared/watchWithFilter/index.html"},{"revision":"b8d6c8b8cb93119a94508f9f9dfc2436","url":"shared/whenever/index.html"},{"revision":"c74085f390cb2f575ec18a5299aafe80","url":"skills/README.html"},{"revision":"c646e75e350cb5e9c43ca880dce002b5","url":"skills/skills/vueuse-functions/references/computedAsync.html"},{"revision":"572e0d073e0588c4689db42ac395720b","url":"skills/skills/vueuse-functions/references/computedEager.html"},{"revision":"b896b84099af12bc278ae0f23c735c6e","url":"skills/skills/vueuse-functions/references/computedInject.html"},{"revision":"6d55e2cc97dec9dc4cb1b12fe1251b19","url":"skills/skills/vueuse-functions/references/computedWithControl.html"},{"revision":"8cb3d0777d57c5ac0974f23d40e58bda","url":"skills/skills/vueuse-functions/references/createEventHook.html"},{"revision":"3f0dbef45147c6608715d47cf4152da8","url":"skills/skills/vueuse-functions/references/createGenericProjection.html"},{"revision":"ca2e4f92fc5d497780f32118b6818df0","url":"skills/skills/vueuse-functions/references/createGlobalState.html"},{"revision":"ccdfb81f5c32539522b8fc5af7cc98ae","url":"skills/skills/vueuse-functions/references/createInjectionState.html"},{"revision":"e3ccc12a9bf6af27da36bcb8d25005e9","url":"skills/skills/vueuse-functions/references/createProjection.html"},{"revision":"fdc378002b6f8fdda556e02be440737c","url":"skills/skills/vueuse-functions/references/createRef.html"},{"revision":"ba7aaafbc852d4c128645dfc2b7e3eb9","url":"skills/skills/vueuse-functions/references/createReusableTemplate.html"},{"revision":"033904caf1144c4ded24d1533eb096d5","url":"skills/skills/vueuse-functions/references/createSharedComposable.html"},{"revision":"1d64de82eae13ddabb30fa33a93c923e","url":"skills/skills/vueuse-functions/references/createTemplatePromise.html"},{"revision":"eb8f88e3d804018d9965ef80fcea9ab0","url":"skills/skills/vueuse-functions/references/createUnrefFn.html"},{"revision":"b42c1343a05d5389cee01b3c6f29c9e3","url":"skills/skills/vueuse-functions/references/extendRef.html"},{"revision":"81c54ff98377103e4bfe05c857098348","url":"skills/skills/vueuse-functions/references/from.html"},{"revision":"632b24125d33e9811d5355e32c5aeff1","url":"skills/skills/vueuse-functions/references/get.html"},{"revision":"8d8f7571d44ee6643c86434f4625b6d2","url":"skills/skills/vueuse-functions/references/injectLocal.html"},{"revision":"e36114a38593c5138b43d5b0980d876f","url":"skills/skills/vueuse-functions/references/isDefined.html"},{"revision":"3b08d89aebf6a5eb79a4b77aeb93ede1","url":"skills/skills/vueuse-functions/references/logicAnd.html"},{"revision":"a96d2ab8b6a5d8c6c29764d9dac89992","url":"skills/skills/vueuse-functions/references/logicNot.html"},{"revision":"1d5cd138403e0fe77267fc6fc921473e","url":"skills/skills/vueuse-functions/references/logicOr.html"},{"revision":"8ae16515fa350fa18be42ce1656dea64","url":"skills/skills/vueuse-functions/references/makeDestructurable.html"},{"revision":"cb67b886591801abb4c1193c841e021a","url":"skills/skills/vueuse-functions/references/onClickOutside.html"},{"revision":"3280d4f485e71fbbe90bccadce8b1e01","url":"skills/skills/vueuse-functions/references/onElementRemoval.html"},{"revision":"8a48b870541b5d95da00efba3cfc8ac0","url":"skills/skills/vueuse-functions/references/onKeyStroke.html"},{"revision":"c8368df602bd2903b588d4784388572f","url":"skills/skills/vueuse-functions/references/onLongPress.html"},{"revision":"38d5a1fc2c32f942ed9ce31f9e2bbb19","url":"skills/skills/vueuse-functions/references/onStartTyping.html"},{"revision":"b24d568ef9c6f1aa9d261924968b69cc","url":"skills/skills/vueuse-functions/references/provideLocal.html"},{"revision":"7e7db2fd62be3294e221478d37320166","url":"skills/skills/vueuse-functions/references/reactify.html"},{"revision":"81f9efefaca2003b1f636abbac9c1b56","url":"skills/skills/vueuse-functions/references/reactifyObject.html"},{"revision":"4b80ec31f4a2aa6612d775d069a17b3d","url":"skills/skills/vueuse-functions/references/reactiveComputed.html"},{"revision":"85231a090ed1820d24970bd59c8224eb","url":"skills/skills/vueuse-functions/references/reactiveOmit.html"},{"revision":"8fdb19d63d6c3fa301540bf329871518","url":"skills/skills/vueuse-functions/references/reactivePick.html"},{"revision":"af1933b74e5875cbe74b42dd39aed6f6","url":"skills/skills/vueuse-functions/references/refAutoReset.html"},{"revision":"63134f9baaec1dc6374a259e21e53ddd","url":"skills/skills/vueuse-functions/references/refDebounced.html"},{"revision":"b9379b8b5b15963efcaec713ab528cbb","url":"skills/skills/vueuse-functions/references/refDefault.html"},{"revision":"9e63762636c236d0f739276db141e9a6","url":"skills/skills/vueuse-functions/references/refManualReset.html"},{"revision":"e7b38fe23950ae49d2c7e2935a171a28","url":"skills/skills/vueuse-functions/references/refThrottled.html"},{"revision":"6d226d55be0e929fa5b3609d11ccd746","url":"skills/skills/vueuse-functions/references/refWithControl.html"},{"revision":"bf56295e454fa09e81b4c92740b831e6","url":"skills/skills/vueuse-functions/references/set.html"},{"revision":"a0f015579a60f2401f3dd47a86b08f14","url":"skills/skills/vueuse-functions/references/syncRef.html"},{"revision":"ffd4bbab0999baa2f5d258d5d69c520c","url":"skills/skills/vueuse-functions/references/syncRefs.html"},{"revision":"1c9fe86ea6eb40db9ca545b8ca368424","url":"skills/skills/vueuse-functions/references/templateRef.html"},{"revision":"91785a194ae6d08242aa7eb788db6509","url":"skills/skills/vueuse-functions/references/toObserver.html"},{"revision":"543949d9dab8741ada273b0f2b7499ba","url":"skills/skills/vueuse-functions/references/toReactive.html"},{"revision":"5921b88c11794aca2ef3338129230801","url":"skills/skills/vueuse-functions/references/toRef.html"},{"revision":"590161e80f8153bf3ecb791213a3dc9f","url":"skills/skills/vueuse-functions/references/toRefs.html"},{"revision":"a50c44b0087016eaf7af02186deadf6a","url":"skills/skills/vueuse-functions/references/tryOnBeforeMount.html"},{"revision":"aa7b6e185f8064a2f1938d01f639689a","url":"skills/skills/vueuse-functions/references/tryOnBeforeUnmount.html"},{"revision":"1b514232bced16d4a234e1c8537831e8","url":"skills/skills/vueuse-functions/references/tryOnMounted.html"},{"revision":"7f73dd931806c41bf4272fecf274971e","url":"skills/skills/vueuse-functions/references/tryOnScopeDispose.html"},{"revision":"f4167e9a766c78c3e1c024efdd146fe2","url":"skills/skills/vueuse-functions/references/tryOnUnmounted.html"},{"revision":"4773981ef58aaed9d0678800b65185d0","url":"skills/skills/vueuse-functions/references/unrefElement.html"},{"revision":"8b4e9a3612b26451291f1164998e9571","url":"skills/skills/vueuse-functions/references/until.html"},{"revision":"fb2e415fee7e5494fbce83d6fd5468ad","url":"skills/skills/vueuse-functions/references/useAbs.html"},{"revision":"46d6b7b506b53d78342e7fd28087988b","url":"skills/skills/vueuse-functions/references/useActiveElement.html"},{"revision":"d06a8bac3992fd4b5e805a230691fa83","url":"skills/skills/vueuse-functions/references/useAnimate.html"},{"revision":"f87bc546d7f9395ab2124d7c3f2e9f79","url":"skills/skills/vueuse-functions/references/useArrayDifference.html"},{"revision":"180b308b706c5b0a2ab871cf0b113ee8","url":"skills/skills/vueuse-functions/references/useArrayEvery.html"},{"revision":"aecdc0cc1f0c769af444ac01a260907c","url":"skills/skills/vueuse-functions/references/useArrayFilter.html"},{"revision":"b5d78fc7d4d6ed9227fc5ef1f2aaa57a","url":"skills/skills/vueuse-functions/references/useArrayFind.html"},{"revision":"71f12fa9abf495a887792bb4bec3fcdd","url":"skills/skills/vueuse-functions/references/useArrayFindIndex.html"},{"revision":"f0a7a0653ccbc0a899b1ce4a4ea83e46","url":"skills/skills/vueuse-functions/references/useArrayFindLast.html"},{"revision":"0491ccd010f14b6b8e9053a697fb29bc","url":"skills/skills/vueuse-functions/references/useArrayIncludes.html"},{"revision":"96fc1f61fef60d178a72ddff6be9f937","url":"skills/skills/vueuse-functions/references/useArrayJoin.html"},{"revision":"236d2a3aab77ca377dcfee8f88b50846","url":"skills/skills/vueuse-functions/references/useArrayMap.html"},{"revision":"948b5c01fce1dfa67ab568ea47a41844","url":"skills/skills/vueuse-functions/references/useArrayReduce.html"},{"revision":"69fcd16012b318879bd026f13398e837","url":"skills/skills/vueuse-functions/references/useArraySome.html"},{"revision":"95d406aede4a44f0baef88d4aafc70ef","url":"skills/skills/vueuse-functions/references/useArrayUnique.html"},{"revision":"4a3a1d65ed046a16626c8c5ed60b901b","url":"skills/skills/vueuse-functions/references/useAsyncQueue.html"},{"revision":"94ce49d927ae9a3472e15cbcbb8335e8","url":"skills/skills/vueuse-functions/references/useAsyncState.html"},{"revision":"1f87978b76af3f213f2e94a2a70d87ec","url":"skills/skills/vueuse-functions/references/useAsyncValidator.html"},{"revision":"ba446e147130b1e266a6a09c9710bd26","url":"skills/skills/vueuse-functions/references/useAuth.html"},{"revision":"11a8cfedada6987308caff679895b7da","url":"skills/skills/vueuse-functions/references/useAverage.html"},{"revision":"dacd8a25d98181e7137e2a3d2671d666","url":"skills/skills/vueuse-functions/references/useAxios.html"},{"revision":"af1acb107b2b6276924614b2a3210c55","url":"skills/skills/vueuse-functions/references/useBase64.html"},{"revision":"de9e380080265f20250ea1d8d95a0840","url":"skills/skills/vueuse-functions/references/useBattery.html"},{"revision":"cf9319f4d4b5e7e17ac78d59c8fc0118","url":"skills/skills/vueuse-functions/references/useBluetooth.html"},{"revision":"d0e085ab3df5ef3d35b8c9b8d8d2463d","url":"skills/skills/vueuse-functions/references/useBreakpoints.html"},{"revision":"5ca596a63510d367aee4d47858d07a13","url":"skills/skills/vueuse-functions/references/useBroadcastChannel.html"},{"revision":"c13325fe7e89f094a8b9748e788a1658","url":"skills/skills/vueuse-functions/references/useBrowserLocation.html"},{"revision":"ab9962fdd50de903589d427144ce822a","url":"skills/skills/vueuse-functions/references/useCached.html"},{"revision":"5acfcd12275c84e91b8b516c9bd2c294","url":"skills/skills/vueuse-functions/references/useCeil.html"},{"revision":"32a2cdc5ce407de941cb4b61dc3a3e47","url":"skills/skills/vueuse-functions/references/useChangeCase.html"},{"revision":"ed55f559f5f1195b3d345a0c40424355","url":"skills/skills/vueuse-functions/references/useClamp.html"},{"revision":"509c41338748869c849c62434508a721","url":"skills/skills/vueuse-functions/references/useClipboard.html"},{"revision":"308ae479d4f61fbed5baa64be4bb6fac","url":"skills/skills/vueuse-functions/references/useClipboardItems.html"},{"revision":"fd9a4ecddea3b31bcd8cd978762c5362","url":"skills/skills/vueuse-functions/references/useCloned.html"},{"revision":"7e1d7b3512aacee2dc0c99120b702308","url":"skills/skills/vueuse-functions/references/useColorMode.html"},{"revision":"a0e15cc1bea1f55de4ced25007694bb4","url":"skills/skills/vueuse-functions/references/useConfirmDialog.html"},{"revision":"58159aa000b7da2e62d4eda64e599314","url":"skills/skills/vueuse-functions/references/useCookies.html"},{"revision":"5a1e809e09027cf6faa3db2e5c76f99c","url":"skills/skills/vueuse-functions/references/useCountdown.html"},{"revision":"1b38bbaecc4174e9648019582f630870","url":"skills/skills/vueuse-functions/references/useCounter.html"},{"revision":"fb622b3f94ae92bbd55e589d73835dfa","url":"skills/skills/vueuse-functions/references/useCssSupports.html"},{"revision":"00847f8e58c7f2ba7ad6498d0ada48a4","url":"skills/skills/vueuse-functions/references/useCssVar.html"},{"revision":"9d2718327a4ae6a0195eeecca71f27d0","url":"skills/skills/vueuse-functions/references/useCurrentElement.html"},{"revision":"da9db0065afd6617efe9bb358a70a074","url":"skills/skills/vueuse-functions/references/useCycleList.html"},{"revision":"aa3cdbd890e592906a653cc47e4aa1d9","url":"skills/skills/vueuse-functions/references/useDark.html"},{"revision":"17ccf249f9299dfb5f08fed1f5caaf42","url":"skills/skills/vueuse-functions/references/useDateFormat.html"},{"revision":"6701c3dc5896192e8b645a9dc6d77e94","url":"skills/skills/vueuse-functions/references/useDebouncedRefHistory.html"},{"revision":"f9a6d26515e92a938f1ae461161478ea","url":"skills/skills/vueuse-functions/references/useDebounceFn.html"},{"revision":"dc1efe0750264a8fc6a996f5357a450a","url":"skills/skills/vueuse-functions/references/useDeviceMotion.html"},{"revision":"f534f32c12612b58fedbebec7e67d52e","url":"skills/skills/vueuse-functions/references/useDeviceOrientation.html"},{"revision":"c8819f52e083f5556518aa8feaad2b49","url":"skills/skills/vueuse-functions/references/useDevicePixelRatio.html"},{"revision":"1f093af585ef7f934e11d76c29b7a7cb","url":"skills/skills/vueuse-functions/references/useDevicesList.html"},{"revision":"ff4fb88501d66a2660022eab4c6dce4d","url":"skills/skills/vueuse-functions/references/useDisplayMedia.html"},{"revision":"393729a92f852790771a9e020f5bbb83","url":"skills/skills/vueuse-functions/references/useDocumentVisibility.html"},{"revision":"24f329f1fa0f010930fe259521e34c5c","url":"skills/skills/vueuse-functions/references/useDraggable.html"},{"revision":"4786a5e984cd4c5ea5910016596667ce","url":"skills/skills/vueuse-functions/references/useDrauu.html"},{"revision":"3ac9e92c764858e547851ca0d173c7b6","url":"skills/skills/vueuse-functions/references/useDropZone.html"},{"revision":"130b2a7402729cd9f23481fe6a483f54","url":"skills/skills/vueuse-functions/references/useElementBounding.html"},{"revision":"3670537dc0939ce042bd91a4ac88edc2","url":"skills/skills/vueuse-functions/references/useElementByPoint.html"},{"revision":"b004d7c33bf9f65b469a79ba66a50c50","url":"skills/skills/vueuse-functions/references/useElementHover.html"},{"revision":"26db5cb60afe5c666ef061bc3c698e83","url":"skills/skills/vueuse-functions/references/useElementSize.html"},{"revision":"f54fa123e5cb118f788d1eb8c11cd722","url":"skills/skills/vueuse-functions/references/useElementVisibility.html"},{"revision":"4cb2bddf7e53d0613b330f954666d5ec","url":"skills/skills/vueuse-functions/references/useEventBus.html"},{"revision":"5b68b6673d9a90d8ed2440ba82616e96","url":"skills/skills/vueuse-functions/references/useEventListener.html"},{"revision":"632d72b4766f46da09c06c3f5ce51c36","url":"skills/skills/vueuse-functions/references/useEventSource.html"},{"revision":"cae6a0276a301310d1c6bf175affb68e","url":"skills/skills/vueuse-functions/references/useExtractedObservable.html"},{"revision":"ad5d6d6293b0faa432fc3b3ef57236c2","url":"skills/skills/vueuse-functions/references/useEyeDropper.html"},{"revision":"8c0d19cd71d0aaf1fa9fe7297428c743","url":"skills/skills/vueuse-functions/references/useFavicon.html"},{"revision":"2e3ad3addf53217cfec49263ab7f1648","url":"skills/skills/vueuse-functions/references/useFetch.html"},{"revision":"3c98248f866326a1b4425da4936ef0b1","url":"skills/skills/vueuse-functions/references/useFileDialog.html"},{"revision":"cf74bc03db5b8da0a0bd8554ba00c734","url":"skills/skills/vueuse-functions/references/useFileSystemAccess.html"},{"revision":"bf1fe3cf3e3ee92a8ba95a109321272a","url":"skills/skills/vueuse-functions/references/useFirestore.html"},{"revision":"aad9f0e933a84d110a32a560f388a345","url":"skills/skills/vueuse-functions/references/useFloor.html"},{"revision":"3fe42f577e4a8d9c8b63837e42066d44","url":"skills/skills/vueuse-functions/references/useFocus.html"},{"revision":"dd3406054f9bc61d0804976d19ae8aa8","url":"skills/skills/vueuse-functions/references/useFocusTrap.html"},{"revision":"147003bb8de8075df20d88ef6091c1f4","url":"skills/skills/vueuse-functions/references/useFocusWithin.html"},{"revision":"8732d6896f0b72c97fb8d58946460243","url":"skills/skills/vueuse-functions/references/useFps.html"},{"revision":"de0cdde59716e4d653a78f7d91b939f1","url":"skills/skills/vueuse-functions/references/useFullscreen.html"},{"revision":"5afd8f83ffc1750d390c4d030bd24148","url":"skills/skills/vueuse-functions/references/useFuse.html"},{"revision":"f967f21063eb02bff51d97cacc2ea2be","url":"skills/skills/vueuse-functions/references/useGamepad.html"},{"revision":"34bc77fa1ee66c63e58603a664bb5c7e","url":"skills/skills/vueuse-functions/references/useGeolocation.html"},{"revision":"3bc65a998194f48fdb46205d62c83ee0","url":"skills/skills/vueuse-functions/references/useIDBKeyval.html"},{"revision":"18a02eeeb95816b7d9778cb3dceb59d0","url":"skills/skills/vueuse-functions/references/useIdle.html"},{"revision":"9167650f1bbe0cf1fc7067a9d0b8d6e5","url":"skills/skills/vueuse-functions/references/useImage.html"},{"revision":"c81385b9e259aeaa7ee8f9e1edd14685","url":"skills/skills/vueuse-functions/references/useInfiniteScroll.html"},{"revision":"f6024abb5389cd9d15393f0e87d9e3db","url":"skills/skills/vueuse-functions/references/useIntersectionObserver.html"},{"revision":"e41e54f529fd727fc3e8a4761ff6e222","url":"skills/skills/vueuse-functions/references/useInterval.html"},{"revision":"3d6b8baf3ee4a88f3c1045c8bd81ebba","url":"skills/skills/vueuse-functions/references/useIntervalFn.html"},{"revision":"ebdaaf89348d040bdf6897b6e19fc800","url":"skills/skills/vueuse-functions/references/useIpcRenderer.html"},{"revision":"b2557c20d1315d6f1859612b388a94d8","url":"skills/skills/vueuse-functions/references/useIpcRendererInvoke.html"},{"revision":"ee9b2f9cc378f45b3e10240ccd367fb7","url":"skills/skills/vueuse-functions/references/useIpcRendererOn.html"},{"revision":"6d5749fa95ab0f85b817f9d0e7236564","url":"skills/skills/vueuse-functions/references/useJwt.html"},{"revision":"51122749b4e5e931dbf88a64b172b5bc","url":"skills/skills/vueuse-functions/references/useKeyModifier.html"},{"revision":"e38c594f8aae14252c81b0d5e5a4f7a0","url":"skills/skills/vueuse-functions/references/useLastChanged.html"},{"revision":"b3c7c8e2e774793a7bee9d7f9d6ab9c7","url":"skills/skills/vueuse-functions/references/useLocalStorage.html"},{"revision":"d11d51a8bfbf45a81457dd7e8da4d171","url":"skills/skills/vueuse-functions/references/useMagicKeys.html"},{"revision":"4406a762e507fd954085aefcb365379c","url":"skills/skills/vueuse-functions/references/useManualRefHistory.html"},{"revision":"418ee49343ff50e75111e2a62f6e72ad","url":"skills/skills/vueuse-functions/references/useMath.html"},{"revision":"00956beb924c7ae66fa22340babc4f1e","url":"skills/skills/vueuse-functions/references/useMax.html"},{"revision":"abedd07f37f07c39029579f74c33034f","url":"skills/skills/vueuse-functions/references/useMediaControls.html"},{"revision":"5ce01fbaf0b8e58a8fe142e2e1345f41","url":"skills/skills/vueuse-functions/references/useMediaQuery.html"},{"revision":"afd51e6bbd72491deac03f8346d93bae","url":"skills/skills/vueuse-functions/references/useMemoize.html"},{"revision":"7b3c2c781b2ecf622f53da69319150bb","url":"skills/skills/vueuse-functions/references/useMemory.html"},{"revision":"ded925f5ebb1ca660cf9d279216d25ea","url":"skills/skills/vueuse-functions/references/useMin.html"},{"revision":"513438e9c54bd6c7071c5749ca27d874","url":"skills/skills/vueuse-functions/references/useMounted.html"},{"revision":"6b87153893f663ea1a22a3d53fe11586","url":"skills/skills/vueuse-functions/references/useMouse.html"},{"revision":"205e73d659cb3cbca6b9bb27dda45be7","url":"skills/skills/vueuse-functions/references/useMouseInElement.html"},{"revision":"85374184453b65eba662831fdb676443","url":"skills/skills/vueuse-functions/references/useMousePressed.html"},{"revision":"5e7eb260b013862bbff90999a2575792","url":"skills/skills/vueuse-functions/references/useMutationObserver.html"},{"revision":"2acae9cebae631e224ee495112ebaf6c","url":"skills/skills/vueuse-functions/references/useNavigatorLanguage.html"},{"revision":"fc5c21aad60ce1b7fa25a1c33bd68066","url":"skills/skills/vueuse-functions/references/useNetwork.html"},{"revision":"8a79dbcace1954fb41ae9eb59c17e5af","url":"skills/skills/vueuse-functions/references/useNow.html"},{"revision":"2552fa312be2d77239a79632a134c221","url":"skills/skills/vueuse-functions/references/useNProgress.html"},{"revision":"bb479eff667532b99f267e8982d6bc53","url":"skills/skills/vueuse-functions/references/useObjectUrl.html"},{"revision":"6ea4e1de4af2256254c05570829ac7f6","url":"skills/skills/vueuse-functions/references/useObservable.html"},{"revision":"6df9c187b190a5adbeb4d5ec1c5552f5","url":"skills/skills/vueuse-functions/references/useOffsetPagination.html"},{"revision":"057ac1f5bf2bbeb59e1367816ccf6803","url":"skills/skills/vueuse-functions/references/useOnline.html"},{"revision":"7345f4daf7922a056f16952902f6b092","url":"skills/skills/vueuse-functions/references/usePageLeave.html"},{"revision":"e124fbd5270e94677d31ced89431e1ef","url":"skills/skills/vueuse-functions/references/useParallax.html"},{"revision":"fd29ef158a42f8a0f70ffdc79ec0f76e","url":"skills/skills/vueuse-functions/references/useParentElement.html"},{"revision":"87a26cc7b72fb7efd452c8b8da64d91e","url":"skills/skills/vueuse-functions/references/usePerformanceObserver.html"},{"revision":"67c5cea900ec6a62d7a3df6a6fac2519","url":"skills/skills/vueuse-functions/references/usePermission.html"},{"revision":"3b2cded9cfc50894d936cccd6b94b229","url":"skills/skills/vueuse-functions/references/usePointer.html"},{"revision":"6c11036b691e21694977a245b04d4f58","url":"skills/skills/vueuse-functions/references/usePointerLock.html"},{"revision":"52d7b87bcaee919251a6f577a014a818","url":"skills/skills/vueuse-functions/references/usePointerSwipe.html"},{"revision":"fb2587ed2a9dbc9d2197211f8db7ec2c","url":"skills/skills/vueuse-functions/references/usePrecision.html"},{"revision":"85362a4003f014b5d1767e6d731c2f1c","url":"skills/skills/vueuse-functions/references/usePreferredColorScheme.html"},{"revision":"6d57d13175ed95f84c52b6e375262ff0","url":"skills/skills/vueuse-functions/references/usePreferredContrast.html"},{"revision":"433d518624548efc526161ec585a70c8","url":"skills/skills/vueuse-functions/references/usePreferredDark.html"},{"revision":"c049cd1ba11c3e1ec97c6197686b7341","url":"skills/skills/vueuse-functions/references/usePreferredLanguages.html"},{"revision":"2f417b77dcc872a03385ff5146b17486","url":"skills/skills/vueuse-functions/references/usePreferredReducedMotion.html"},{"revision":"c66e22f04eb206ff4d34f0e56e205523","url":"skills/skills/vueuse-functions/references/usePreferredReducedTransparency.html"},{"revision":"f23075dbd56388c0d68129cc66c0d199","url":"skills/skills/vueuse-functions/references/usePrevious.html"},{"revision":"bb1137ac97f50ae21c24ec151b68d880","url":"skills/skills/vueuse-functions/references/useProjection.html"},{"revision":"b13beb8d4f49f6bfa55c45a9b4114b34","url":"skills/skills/vueuse-functions/references/useQRCode.html"},{"revision":"3e8181b82b3545d7fda2fbb6473c6b02","url":"skills/skills/vueuse-functions/references/useRafFn.html"},{"revision":"646513bec21fb25ad68ee329170c91cc","url":"skills/skills/vueuse-functions/references/useRefHistory.html"},{"revision":"bcbb21f9983ad6be2ca799c6f877acf3","url":"skills/skills/vueuse-functions/references/useResizeObserver.html"},{"revision":"6dc172af61daa2d0d7bb636d3e8aca53","url":"skills/skills/vueuse-functions/references/useRound.html"},{"revision":"d3e4d30afc718c92e08870decf1b1d0e","url":"skills/skills/vueuse-functions/references/useRouteHash.html"},{"revision":"bcbeb597cbfaed84ceabf3d8edfeea67","url":"skills/skills/vueuse-functions/references/useRouteParams.html"},{"revision":"7c8b033e96753a6c20e60d1fef666b3a","url":"skills/skills/vueuse-functions/references/useRouteQuery.html"},{"revision":"134756fc0aa20dcffeddb03b8390cb5a","url":"skills/skills/vueuse-functions/references/useRTDB.html"},{"revision":"da41b1e9ca74c3f6106270e8cf9c30e9","url":"skills/skills/vueuse-functions/references/useScreenOrientation.html"},{"revision":"7de4d3f82271cb108b5628e04418c1b7","url":"skills/skills/vueuse-functions/references/useScreenSafeArea.html"},{"revision":"a6fff8dd949371a2d738744745c3f665","url":"skills/skills/vueuse-functions/references/useScriptTag.html"},{"revision":"ee4b6c36137a1e3435c31e277f2b3cb0","url":"skills/skills/vueuse-functions/references/useScroll.html"},{"revision":"702cc48144ed9426bf7b913d02fe0e39","url":"skills/skills/vueuse-functions/references/useScrollLock.html"},{"revision":"85bae4d3e126360933cf57c9469e18c2","url":"skills/skills/vueuse-functions/references/useSessionStorage.html"},{"revision":"b7ab614aa8c2ef2929ca807c7b828be0","url":"skills/skills/vueuse-functions/references/useShare.html"},{"revision":"a835107e747cb8fa8bbd483363744bcb","url":"skills/skills/vueuse-functions/references/useSortable.html"},{"revision":"2bb82972e81bd0f6b199e5fe843c4dce","url":"skills/skills/vueuse-functions/references/useSorted.html"},{"revision":"774c793177cfe16144c899f04f6c5d1f","url":"skills/skills/vueuse-functions/references/useSpeechRecognition.html"},{"revision":"3b6b9c4b69cf9e192233656f0b5cf4e2","url":"skills/skills/vueuse-functions/references/useSpeechSynthesis.html"},{"revision":"f420a9e0ea2327628e9a6dec35a050e0","url":"skills/skills/vueuse-functions/references/useSSRWidth.html"},{"revision":"304571e466c6ba17c15de2a5263257c7","url":"skills/skills/vueuse-functions/references/useStepper.html"},{"revision":"9e3933a22594c863b676db57d2f6332f","url":"skills/skills/vueuse-functions/references/useStorage.html"},{"revision":"5211bb5fd5bce6b39e61a8cb09b4c84b","url":"skills/skills/vueuse-functions/references/useStorageAsync.html"},{"revision":"da8bf5e75d7d2d65926bc1977dd1da79","url":"skills/skills/vueuse-functions/references/useStyleTag.html"},{"revision":"bb6328acb3e82b7a3d71e3b87de3d40e","url":"skills/skills/vueuse-functions/references/useSubject.html"},{"revision":"5306308e1fa88d3c7d0211d03bc45153","url":"skills/skills/vueuse-functions/references/useSubscription.html"},{"revision":"7f7fcb5ce33f0f443227ce7315e9fc66","url":"skills/skills/vueuse-functions/references/useSum.html"},{"revision":"610ecc54c3ab9ef55b1e23ab6bfbb84e","url":"skills/skills/vueuse-functions/references/useSupported.html"},{"revision":"73bb3fd6ecd92fe334f02c85497ab5d6","url":"skills/skills/vueuse-functions/references/useSwipe.html"},{"revision":"df363d6e8e1e863d4bc38e9479447e59","url":"skills/skills/vueuse-functions/references/useTemplateRefsList.html"},{"revision":"5534d3ef97aab9aa92f1119ab3efb754","url":"skills/skills/vueuse-functions/references/useTextareaAutosize.html"},{"revision":"b970bf9e3363098085db59801334e325","url":"skills/skills/vueuse-functions/references/useTextDirection.html"},{"revision":"ec5f24c4761ff2bb036df4e1dc466d5b","url":"skills/skills/vueuse-functions/references/useTextSelection.html"},{"revision":"d30a5703324764d62d1b0346b9930395","url":"skills/skills/vueuse-functions/references/useThrottledRefHistory.html"},{"revision":"50eadfadaf33e611f893482f9fcb481f","url":"skills/skills/vueuse-functions/references/useThrottleFn.html"},{"revision":"a5cefa24d93991700a79b375925ed7cc","url":"skills/skills/vueuse-functions/references/useTimeAgo.html"},{"revision":"e43ee8de8fe92d9545ce4f7cd9a349f1","url":"skills/skills/vueuse-functions/references/useTimeAgoIntl.html"},{"revision":"e2d75a3d452bc1c85b447470083f8f18","url":"skills/skills/vueuse-functions/references/useTimeout.html"},{"revision":"d06607621b99b64d3a1eedfe976f7886","url":"skills/skills/vueuse-functions/references/useTimeoutFn.html"},{"revision":"18df761ef04a7b00cc558ce3142ba0ca","url":"skills/skills/vueuse-functions/references/useTimeoutPoll.html"},{"revision":"746832d4d0b5e4f143fb7bd2c2ba45e3","url":"skills/skills/vueuse-functions/references/useTimestamp.html"},{"revision":"47215c30ba84f061e553afc22883b1b5","url":"skills/skills/vueuse-functions/references/useTitle.html"},{"revision":"af77ea0291448c088be67af512ac1adf","url":"skills/skills/vueuse-functions/references/useToggle.html"},{"revision":"8e186b7d8697f3ca169c52ee9daf37b1","url":"skills/skills/vueuse-functions/references/useToNumber.html"},{"revision":"4e112a89e4a1a34f855452db46790ade","url":"skills/skills/vueuse-functions/references/useToString.html"},{"revision":"c396768a84828f6b1611b2b0ed1e5c01","url":"skills/skills/vueuse-functions/references/useTransition.html"},{"revision":"703f2e30b32092a495d9ad85c9be0731","url":"skills/skills/vueuse-functions/references/useTrunc.html"},{"revision":"8d2db6a7b55649518f990a18b2636369","url":"skills/skills/vueuse-functions/references/useUrlSearchParams.html"},{"revision":"dc9d5225395350f6aaa63e1a3b5925d3","url":"skills/skills/vueuse-functions/references/useUserMedia.html"},{"revision":"fa0ea882f579711513f9f83f4e802a6a","url":"skills/skills/vueuse-functions/references/useVibrate.html"},{"revision":"84a2c526d31216423381964470bbd2f3","url":"skills/skills/vueuse-functions/references/useVirtualList.html"},{"revision":"5feaa2d0f641f9bf52160cc44f89b968","url":"skills/skills/vueuse-functions/references/useVModel.html"},{"revision":"6ac0d380cf7916c9053edcc4ba9e6497","url":"skills/skills/vueuse-functions/references/useVModels.html"},{"revision":"a52e48bdcfb3db8c2370b394eb7898b6","url":"skills/skills/vueuse-functions/references/useWakeLock.html"},{"revision":"7375ad19680d0effdf1118e963eba7d0","url":"skills/skills/vueuse-functions/references/useWebNotification.html"},{"revision":"e1bf2b52ce9f4850d982111fcf21f696","url":"skills/skills/vueuse-functions/references/useWebSocket.html"},{"revision":"3546b675466dc358e06828f48191f5f6","url":"skills/skills/vueuse-functions/references/useWebWorker.html"},{"revision":"910c60d1c3296b3b49e7dc4a23ab4840","url":"skills/skills/vueuse-functions/references/useWebWorkerFn.html"},{"revision":"de70f9c678d540f10f00c52c015a6209","url":"skills/skills/vueuse-functions/references/useWindowFocus.html"},{"revision":"2bbb05e0310eab307f21f538719a46c6","url":"skills/skills/vueuse-functions/references/useWindowScroll.html"},{"revision":"cbebd448382a5468f4fd1b5c769a8986","url":"skills/skills/vueuse-functions/references/useWindowSize.html"},{"revision":"f2ebc4531f12a15627e0f9707be67b6f","url":"skills/skills/vueuse-functions/references/useZoomFactor.html"},{"revision":"65109bffc9beab5bc79c6d96315aa617","url":"skills/skills/vueuse-functions/references/useZoomLevel.html"},{"revision":"1ac67b5e636d964551f554e83341f0bd","url":"skills/skills/vueuse-functions/references/watchArray.html"},{"revision":"ec7d435105300561ecfb035b0f9c0f3d","url":"skills/skills/vueuse-functions/references/watchAtMost.html"},{"revision":"964160090820cd03c7a176683263613d","url":"skills/skills/vueuse-functions/references/watchDebounced.html"},{"revision":"4a26fe2772797c9529d037acb56ed79b","url":"skills/skills/vueuse-functions/references/watchDeep.html"},{"revision":"9f8b98e972f2868b1f6686548b1f6333","url":"skills/skills/vueuse-functions/references/watchExtractedObservable.html"},{"revision":"634393341131e16163348893ec504e73","url":"skills/skills/vueuse-functions/references/watchIgnorable.html"},{"revision":"b0688afd74be0c2fefb7c4be365a1893","url":"skills/skills/vueuse-functions/references/watchImmediate.html"},{"revision":"430df95a78637fb8081bcc81e9fbac02","url":"skills/skills/vueuse-functions/references/watchOnce.html"},{"revision":"25138a8adda1bb906fe1ce28192f93d6","url":"skills/skills/vueuse-functions/references/watchPausable.html"},{"revision":"e134a4936075f50003edad032dc65239","url":"skills/skills/vueuse-functions/references/watchThrottled.html"},{"revision":"34d22d08948eb69c917cb9ff00dc0785","url":"skills/skills/vueuse-functions/references/watchTriggerable.html"},{"revision":"1dcb8fcfaafbe70ee07a8d606892e48b","url":"skills/skills/vueuse-functions/references/watchWithFilter.html"},{"revision":"625f4e7a78d31f04d73911a625b5cf79","url":"skills/skills/vueuse-functions/references/whenever.html"},{"revision":"bce020375ca1e1a57a34937819ab0899","url":"skills/skills/vueuse-functions/SKILL.html"},{"revision":"1c68441262a33690c72df58203f15411","url":"skills/templates/vueuse-functions-skills.html"},{"revision":"296b414737f93df08c177eb8ff2fe911","url":"team.html"},{"revision":"8f201e25fdbebd0b52e4b54e0dd6a92d","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"2d6191c37ed42b71b05115fa834659bb","url":"why-no-translations.html"},{"revision":"acf0bf7f4e736337f1625a5e1ca8ab18","url":"hashmap.json"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"24c269155de349f2951fbd035d5849f4","url":"manifest.webmanifest"}];
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
				const newURL = new URL(url.href);
				newURL.pathname = full.replace(`${pkg}_${name}`, `${entry.url.slice(1).replace(/\/$/, "").replace("/", "_")}`);
				urls.push(newURL);
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
		return new RegExp(`^${regex}(\\.html)?$`);
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
