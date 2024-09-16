<script setup lang="ts">
import { ref } from 'vue'

defineProps<{}>()

const numbIn = ref<number | null>(null);

async function submitNumber() {
    const numbInValue = numbIn.value;

    if (numbInValue !== null && numbInValue >= 1 && numbInValue <= 100) {
        try {
            const response = await fetch('/game/guess', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ numbIn: numbInValue }),
            });

            if (!response.ok) {
                throw new Error('Failure');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        console.error('Invalid number');
    }
}

</script>

<template>
    <input v-model="numbIn" id="numbIn" type="number" min="1" max="100" aria-label="Zahl 1-100" placeholder="Zahl 1-100" class="input input-ghost w-full max-w-xs" style="border: 1px solid white;" tabindex="0">
    <br><br>
    <button class="btn btn-success" tabindex="0" @click="submitNumber">
        Senden
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg>
    </button>
</template>