import Settings from "./components/Settings.vue";
export default defineComponent({
    components: { Settings },
    setup() {
        var showSettings = ref(false);
        // check if data storage was allowed and if check for localstorage settings
        if (localStorage.getItem("allow-data-storage") !== null) {
            if (localStorage.getItem("theme") !== null) {
                document.documentElement.setAttribute('data-theme', localStorage.getItem("theme") ?? "dark");
            }
            if (localStorage.getItem("audio-feedback") !== null) {
                if (localStorage.getItem("audio-feedback") === "true") {
                    document.documentElement.setAttribute('data-audio-feedback', "true");
                }
                else {
                    document.documentElement.setAttribute('data-audio-feedback', "false");
                }
            }
        }
        else {
            // if data collection isn't allowed set the default values
            document.documentElement.setAttribute('data-audio-feedback', "true");
            document.documentElement.setAttribute('data-theme', "dark");
        }
        var debugInputs = [
            { logText: "httpAttr: theme", logValue: document.documentElement.getAttribute('data-theme') },
            { logText: "httpAttr: data-audio-feedback", logValue: document.documentElement.getAttribute('data-audio-feedback') },
            { logText: "storage: allow-data-storage", logValue: localStorage.getItem("allow-data-storage") },
            { logText: "storage: data-audio-feedback", logValue: localStorage.getItem('data-audio-feedback') },
            { logText: "storage theme", logValue: localStorage.getItem("theme") },
        ];
        DebugLog(debugInputs);
        const toggleSettings = () => {
            showSettings.value = !showSettings.value;
        };
        return { showSettings, toggleSettings };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Settings },
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleSettings) }, ...{ class: ("btn btn-primary round") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), height: ("24px"), viewBox: ("0 -960 960 960"), width: ("24px"), fill: ("#e8eaed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"), });
    if (__VLS_ctx.showSettings) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Settings;
        /** @type { [typeof __VLS_components.Settings, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, }));
        const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onClose: (__VLS_ctx.toggleSettings)
        };
        let __VLS_3;
        let __VLS_4;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleSettings) }, ...{ class: ("btn btn-primary round") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), height: ("24px"), viewBox: ("0 -960 960 960"), width: ("24px"), fill: ("#e8eaed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"), });
    if (__VLS_ctx.showSettings) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Settings;
        /** @type { [typeof __VLS_components.Settings, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, }));
        const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onClose: (__VLS_ctx.toggleSettings)
        };
        let __VLS_3;
        let __VLS_4;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['round'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=App.vue.js.map