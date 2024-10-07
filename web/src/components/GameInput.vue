<script lang="ts">
import { defineComponent, SetupContext, ref} from 'vue';

export default defineComponent({
    emits: ['attemptUpdate'],
    name: 'GameInput',
    setup(_, { emit }: SetupContext) {
        const numbIn = ref<number | null>(null);

        const submitNumber = async () => {
            const numbInValue = numbIn.value;

            if(numbInValue !== null && numbInValue >= 1 && numbInValue <= 100){
                try{
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

                    const text = await response.text(); // TODO change to API-response - "guess":"low" /* low | high | correct
                    var result = -1;

                    switch(text){
                        case "winner": result = 0; break;
                        case "lower": result = 1; break;
                        case "higher": result = 2; break;
                        default: throw new Error("Failed parsing response"); break;
                    }
                    
                    emit("attemptUpdate", numbInValue, result);

                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                console.error('Invalid number');
            }
        }

        return { numbIn, submitNumber };
    },
});


</script>

<template>
    <div class="flex flex-col justify-center items-center w-full">
        <input v-model="numbIn" v-on:keyup.enter="submitNumber" id="numbIn" type="number" min="1" max="100" aria-label="Zahl 1-100" placeholder="Zahl 1-100" class="input input-bordered input-primary w-full max-w-xs" tabindex="0">
        <br><br>
        <button class="btn btn-primary" tabindex="0" @click="submitNumber">
            Senden
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
            </svg>
        </button>
    </div>
</template>