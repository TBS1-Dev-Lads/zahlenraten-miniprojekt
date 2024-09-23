<script lang="ts">
import {defineComponent, SetupContext, ref, Ref} from 'vue';
import GetLocalizedText from "../classes/language";

export default defineComponent({
  emits: ['close'],
  name: 'settings',
  setup(_, { emit }: SetupContext) {
    var isAudioFeedbackEnabled:Ref<boolean> = ref(false);
    var attributeTheme:Ref<string> = ref(document.documentElement.getAttribute("data-theme") ?? "dark")
    var attributeColorBlindMode:Ref<string> = ref(document.documentElement.getAttribute("data-theme") ?? "dark")
    var attributeLang:Ref<string> = ref(document.documentElement.getAttribute("data-language") ?? "english")

    // localized text
    var settingsThemeLocalized:Ref<string> = ref("");
    var settingsModeColorBlindLocalized:Ref<string> = ref("");
    var settingsLangLocalized:Ref<string> = ref("");
    async function getLocalization() {
      settingsThemeLocalized.value = await GetLocalizedText("theme")
      settingsModeColorBlindLocalized.value = await GetLocalizedText("mode_color_blindness")
      settingsLangLocalized.value = await GetLocalizedText("lang")
    }

    if (localStorage.getItem("allow-data-storage") == "true" && localStorage.getItem("audio-feedback") != null) {
      isAudioFeedbackEnabled.value = localStorage.getItem("audio-feedback") == "true";
    }


    console.log(isAudioFeedbackEnabled.value)

    const changeTheme = (theme:string) => {

          document.documentElement.setAttribute('data-theme', theme);
          if (localStorage.getItem("allow-data-storage") == "true") {
            localStorage.setItem("theme", theme)
          }

    }

    const changeLang = (lang:string) => {
      document.documentElement.setAttribute('data-language', lang);
      if (localStorage.getItem("allow-data-storage") == "true") {
        localStorage.setItem("lang", lang)
      }
    }

    const toggleAudioFeedback = () => {

      if (localStorage.getItem("allow-data-storage") == "true") {

        if (localStorage.getItem("audio-feedback") == "true") {
          localStorage.setItem("audio-feedback", "false")
          isAudioFeedbackEnabled.value = false;
          document.documentElement.setAttribute('data-audio-feedback', "false");
        } else {
          localStorage.setItem("audio-feedback", "true")
          isAudioFeedbackEnabled.value = true;
          document.documentElement.setAttribute('data-audio-feedback', "true");
        }

      }

    }
    getLocalization()
    const close = () => {
      emit("close");  // Event "close" wird emittiert
    };

    return { 
      close, 
      changeTheme, 
      changeLang,
      toggleAudioFeedback, 
      isAudioFeedbackEnabled, 
      settingsThemeLocalized, 
      settingsModeColorBlindLocalized, 
      settingsLangLocalized,
      attributeTheme, 
      attributeColorBlindMode,
      attributeLang
    };
  },
});
</script>


<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body">

      <h2 class="card-title">Settings</h2>

      <button class="btn btn-error close round" @click="close()">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </button>

      <div class="w-full">
        {{ settingsLangLocalized }}:
        <div class="dropdown dropdown-bottom">
          <div tabindex="0" role="button" class="btn m-1"> {{ attributeLang }}</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-fill p-2 shadow">
            <li @click="changeLang('ger')"><a>Deutsch</a></li>
            <li @click="changeLang('en')"><a>English</a></li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        {{ settingsThemeLocalized }}:
        <div class="dropdown dropdown-bottom">
          <div tabindex="0" role="button" class="btn m-1"> {{ attributeTheme }}</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-fill p-2 shadow">
            <li @click="changeTheme('dark')"><a>Dark</a></li>
            <li @click="changeTheme('light')"><a>Light</a></li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        {{ settingsLangLocalized }}
        <div class="dropdown dropdown-bottom">
          <div tabindex="0" role="button" class="btn m-1">{{ attributeColorBlindMode }}</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow">
            <li><a>Dark</a></li>
            <li><a>Light</a></li>
          </ul>
        </div>
      </div>

      <div class="form-control" style="width: 15%">
        <label class="label cursor-pointer w-auto">
          <span class="">Audio Feedback:</span>
          <input type="checkbox" class="toggle toggle-success" :checked="isAudioFeedbackEnabled" @change="toggleAudioFeedback"/>
        </label>
      </div>

    </div>

  </div>
</template>

<style scoped>
  .btn.close {
    position: absolute;
    right: 30px;
    top: 30px;
    margin: 0;
  }
</style>