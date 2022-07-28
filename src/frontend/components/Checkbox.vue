<template>
  <input
    ref="checkboxRef"
    type="checkbox"
    class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-0 focus:ring-offset-0"
    @click="handleCheckboxCheckedChanged"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref, computed } from 'vue'

export const componentName = 'Checkbox'

export default defineComponent({
  name: componentName,
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['checkbox-checked-changed'],
  setup(props, { emit }) {
    const checkboxRef = ref<HTMLInputElement>()
    const computedChecked = computed(() => props.checked)
    const computedDisabled = computed(() => props.disabled)

    const handleCheckboxCheckedChanged = (event: Event) => {
      emit('checkbox-checked-changed', (event.target as HTMLInputElement).checked)
    }

    onMounted(() => {
      if (!checkboxRef.value) return
      checkboxRef.value.checked = computedChecked?.value
      checkboxRef.value.disabled = computedDisabled?.value
    })

    onUpdated(() => {
      if (!checkboxRef.value) return
      checkboxRef.value.checked = computedChecked?.value
    })

    return {
      componentName,
      checkboxRef,
      handleCheckboxCheckedChanged,
    }
  },
})
</script>
