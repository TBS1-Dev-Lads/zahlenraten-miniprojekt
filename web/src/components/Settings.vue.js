import { defineComponent, ref } from 'vue';
export default defineComponent({
    emits: ['close'],
    name: 'settings',
    setup(_, { emit }) {
        var isAudioFeedbackEnabled = ref(false);
        if (localStorage.getItem("allow-data-storage") == "true" && localStorage.getItem("audio-feedback") != null) {
            isAudioFeedbackEnabled.value = localStorage.getItem("audio-feedback") == "true";
        }
        console.log(isAudioFeedbackEnabled.value);
        const changeTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            if (localStorage.getItem("allow-data-storage") == "true") {
                localStorage.setItem("theme", theme);
            }
        };
        const toggleAudioFeedback = () => {
            if (localStorage.getItem("allow-data-storage") == "true") {
                if (localStorage.getItem("audio-feedback") == "true") {
                    localStorage.setItem("audio-feedback", "false");
                    isAudioFeedbackEnabled.value = false;
                    document.documentElement.setAttribute('data-audio-feedback', false);
                }
                else {
                    localStorage.setItem("audio-feedback", "true");
                    isAudioFeedbackEnabled.value = true;
                    document.documentElement.setAttribute('data-audio-feedback', true);
                }
            }
        };
        const close = () => {
            emit("close"); // Event "close" wird emittiert
        };
        return { close, changeTheme, toggleAudioFeedback, isAudioFeedbackEnabled };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card bg-base-100 w-full shadow-xl settings-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("card-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.close();
            } }, ...{ class: ("btn btn-error close round") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), height: ("24px"), viewBox: ("0 -960 960 960"), width: ("24px"), fill: ("#e8eaed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown dropdown-bottom") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ tabindex: ("0"), role: ("button"), ...{ class: ("btn m-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ tabindex: ("0"), ...{ class: ("dropdown-content menu bg-base-100 rounded-box z-[1] w-fill p-2 shadow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeTheme('dark');
            } }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeTheme('light');
            } }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown dropdown-bottom") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ tabindex: ("0"), role: ("button"), ...{ class: ("btn m-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ tabindex: ("0"), ...{ class: ("dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label cursor-pointer w-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.toggleAudioFeedback) }, type: ("checkbox"), ...{ class: ("toggle toggle-success") }, checked: ((__VLS_ctx.isAudioFeedbackEnabled)), });
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['bg-base-100'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['shadow-xl'];
    __VLS_styleScopedClasses['settings-container'];
    __VLS_styleScopedClasses['card-body'];
    __VLS_styleScopedClasses['card-title'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-error'];
    __VLS_styleScopedClasses['close'];
    __VLS_styleScopedClasses['round'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['dropdown-bottom'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['m-1'];
    __VLS_styleScopedClasses['dropdown-content'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['bg-base-100'];
    __VLS_styleScopedClasses['rounded-box'];
    __VLS_styleScopedClasses['z-[1]'];
    __VLS_styleScopedClasses['w-fill'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['dropdown-bottom'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['m-1'];
    __VLS_styleScopedClasses['dropdown-content'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['bg-base-100'];
    __VLS_styleScopedClasses['rounded-box'];
    __VLS_styleScopedClasses['z-[1]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-auto'];
    __VLS_styleScopedClasses['toggle'];
    __VLS_styleScopedClasses['toggle-success'];
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
//# sourceMappingURL=Settings.vue.js.map