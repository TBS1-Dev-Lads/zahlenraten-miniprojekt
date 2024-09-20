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

        return {max_attempts, attempt_amount, attempts, addAttempt, getResultString};
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
                    <td>{{ getResultString(attempt.result) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>