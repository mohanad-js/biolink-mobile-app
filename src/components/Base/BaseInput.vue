<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['label']);

const inputValue = ref('');
const emit = defineEmits(['update:modelValue']);
const emitInputValue = () => {
    emit('update:modelValue', inputValue.value);
};


watch(inputValue, (newValue) => {
    emit('update:modelValue', newValue);
    console.log(newValue);
});
</script>
<template>
    <div class="input-field-item">
        <p>{{ label }}</p>
        <div class="input-field">
            <input v-model="inputValue" @input="emitInputValue" type="text" class="" placeholder="First name">
        </div>
    </div>
</template>
