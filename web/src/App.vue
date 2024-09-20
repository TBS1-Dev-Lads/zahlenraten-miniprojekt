<script lang="ts">
import {defineComponent, Ref, ref, SetupContext} from 'vue';
import Settings from "./components/Settings.vue";
import GameInput from "./components/GameInput.vue";
import AttemptList from './components/AttemptList.vue';

export default defineComponent({
  components: {Settings, GameInput, AttemptList},
  setup() {
    var showSettings:Ref<boolean> = ref(false);

    // check if data storage was allowed and if check for localstorage settings
    if (localStorage.getItem("allow-data-storage") !== null) {

      if (localStorage.getItem("theme") !== null) {
        document.documentElement.setAttribute('data-theme', localStorage.getItem("theme")!);
      }

      if (localStorage.getItem("audio-feedback") !== null) {
        if (localStorage.getItem("audio-feedback") === "true") {
          document.documentElement.setAttribute('data-audio-feedback', 'true');
        } else {
          document.documentElement.setAttribute('data-audio-feedback', 'false');
        }
      }

    } else {
      // if data collection isn't allowed set the default values
      document.documentElement.setAttribute('data-audio-feedback', 'true');
      document.documentElement.setAttribute('data-theme', "dark");
    }

    
    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    }



    const attemptList = ref<InstanceType<typeof AttemptList> | null>(null);

    return { showSettings, toggleSettings, attemptList };
  },
});
</script>

<template>


  <div class="container">
    <button class="btn btn-primary round" style="float: right" @click="toggleSettings">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
      </svg>
    </button>
    <Settings v-if="showSettings" @close="toggleSettings"/>
  </div>
  <GameInput @attemptUpdate="attemptList?.addAttempt"></GameInput>
  <AttemptList ref="attemptList"/>
</template>

<style scoped>
  .container {
    margin: 10%;
  }
</style>
