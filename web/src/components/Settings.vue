<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  emits: ['close'],
  name: 'settings',
  setup(_, { emit }: SetupContext) {

    const changeTheme = (theme:string) => {
          document.documentElement.setAttribute('data-theme', theme);
    }

    // Verwende die emit-Funktion direkt
    const close = () => {
      console.log("close");
      emit("close");  // Event "close" wird emittiert
    };

    return { close, changeTheme };
  },
});
</script>


<template>
  <div class="card bg-base-100 w-full shadow-xl settings-container">
    <div class="card-body">
      <h2 class="card-title">Settings</h2>
      <button class="btn btn-error close round" @click="close()">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </button>

      <div class="w-full">
        Theme:
        <div class="dropdown dropdown-bottom">
          <div tabindex="0" role="button" class="btn m-1">Click</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-fill p-2 shadow">
            <li @click="changeTheme('dark')"><a>Dark</a></li>
            <li @click="changeTheme('light')"><a>Light</a></li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        Mode for Colorblind:
        <div class="dropdown dropdown-bottom">
          <div tabindex="0" role="button" class="btn m-1">Click</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow">
            <li><a>Dark</a></li>
            <li><a>Light</a></li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
  .settings-container {
    /*background-color: #34495e; disabled for now */
  }
  .btn.close {
    position: absolute;
    right: 30px;
    top: 30px;
    margin: 0;
  }
  .btn.close:hover {
    background: #2c3e50;
    color: black;
  }
</style>