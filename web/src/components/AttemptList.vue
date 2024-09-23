<script lang="ts">
import { DefineComponent, SetupContext, ref, Ref, defineComponent, computed } from 'vue';

enum AttemptResult {
    Success,
    Lower,
    Higher
}

interface Attempt {
    attempt_number: number;
    value: number;
    result: AttemptResult;
}

export default defineComponent({
    name: 'AttemptList',
    setup() {
        var attempts:Ref<Attempt[]> = ref([]);  
        var attempt_amount = computed(() => attempts.value.length);   
        var max_attempts:Ref<number> = ref(5);

        const addAttempt = (value: number, result: AttemptResult) => {
            attempts.value.push({
                attempt_number: attempts.value.length+1,
                value,
                result
            });
        }

        const getResultString = (result: AttemptResult): string => {
            switch (result) {
                case AttemptResult.Success:
                    return 'Richtig!!!';
                case AttemptResult.Lower:
                    return 'Niedriger';
                case AttemptResult.Higher:
                    return 'Höher';
                default:
                    return 'Parsing Error';
            }
        }

        return {max_attempts, attempt_amount, attempts, AttemptResult, addAttempt, getResultString};
    }
});
</script>

<template>
    <div class="p-12">
        <p>Versuche: {{ attempt_amount }}/{{ max_attempts }}</p>
        <table class="table table-zebra">
            <thead>
                <tr>
                    <th>Versuch</th>
                    <th>Zahl</th>
                    <th>Resultat</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="attempt in attempts" :key="attempt.attempt_number">
                    <td>{{ attempt.attempt_number }}</td>
                    <td>{{ attempt.value }}</td>
                    <td class="flex flex-row gap-1"> 
                        <svg v-if="attempt.result==AttemptResult.Lower" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                        </svg>
                        <svg v-else-if="attempt.result==AttemptResult.Higher" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                        </svg>
                        {{ getResultString(attempt.result) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>