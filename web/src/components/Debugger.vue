<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  emits: ['close'],
  name: 'settings',
  setup(_, { emit }: SetupContext) {
    // Verwende die emit-Funktion direkt
    const close = () => {
      console.log("close");
      emit("close");  // Event "close" wird emittiert
    };

    return { close };
  },
});
</script>


<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Debug Info:</h2>
        <slot name="debugInfo"></slot>
    </div>
  </div>
</template>

<style scoped>
  .btn.close {
    position: absolute;
    right: 30px;
    top: 30px;
    margin: 0;
    height: 55px;
    width: auto;
    font-size: 12pt;
    border-radius: 100%;
  }
</style>