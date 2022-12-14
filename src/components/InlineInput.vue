<template>
  <textarea
    v-if="editing && multiline"
    ref="inputEl"
    class="h-full w-full resize-none border-0 bg-transparent p-0 focus:outline-none focus:ring-0 focus-visible:outline-none"
    :class="[$attrs.class, componentName]"
    type="textarea"
    wrap="hard"
    :maxlength="maxlength"
    :value="computedValue"
    :placeholder="computedPlaceholder"
    rows="1"
    @keydown.enter.stop="handleKeyDownEnter"
    @blur="handleInputChanged"
    @input="resizeTextArea($event.target)"
  />
  <input
    v-if="editing && !multiline"
    ref="inputEl"
    class="m-0 w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0 focus-visible:outline-none"
    :class="[$attrs.class, componentName]"
    type="text"
    :value="computedValue"
    :placeholder="computedPlaceholder"
    :maxlength="maxlength"
    @keydown.enter.stop="handleKeyDownEnter"
    @blur="handleInputChanged"
  />
  <div
    v-if="!editing"
    ref="labelEl"
    class="hyphens-auto w-full overflow-hidden break-words hover:cursor-text hover:text-gray-600"
    :class="[
      $attrs.class,
      multiline ? 'line-clamp-' + maxLines : 'truncate',
      componentName,
    ]"
    @click="editByInlineClick ? toggle() : null"
  >
    {{ computedLabel }}
  </div>
  <span
    v-if="!editByInlineClick"
    class="inline-block w-fit text-secondary-content underline"
    :class="$attrs.class"
    @click.stop="toggle"
  >
    {{ actionTitle }}
  </span>
</template>

<script lang="ts">
import {
  computed,
  nextTick,
  ref,
  onMounted,
  onUpdated,
  watch,
  defineComponent,
} from 'vue'

const componentName = 'InlineInput'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    maxLines: {
      type: Number,
      default: () => 5,
    },
    maxlength: {
      type: Number,
      default: () => 144,
    },
    multiline: {
      type: Boolean,
      default: true,
    },
    editByInlineClick: {
      type: Boolean,
      default: true,
    },
    focusOnMount: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'inline-input-changed',
    'inline-input-is-editing',
    'inline-input-stopped-editing',
    'inline-input-keydown-enter',
  ],
  setup(props, { emit }) {
    const editing = ref(false)
    const labelEl = ref<HTMLLabelElement>()
    const inputEl = ref<HTMLInputElement>()

    const actionTitle = ref('edit')

    watch(editing, async () => {
      actionTitle.value = editing.value === false ? 'edit' : 'save'
    })

    const toggle = async () => {
      editing.value = !editing.value

      if (editing.value) {
        emit('inline-input-is-editing', {
          componentName: componentName,
          isEditing: editing.value,
          value: inputEl?.value?.value ?? '',
        })

        await nextTick(() => {
          if (props.multiline) {
            resizeTextArea(inputEl.value!)
          }

          inputEl?.value?.focus()
          inputEl?.value?.select()
        })
      }

      if (!editing.value) {
        emit('inline-input-stopped-editing', {
          componentName: componentName,
          isEditing: editing.value,
          value: inputEl?.value?.value ?? '',
        })
      }
    }

    const handleKeyDownEnter = (event: Event) => {
      event.preventDefault()
      inputEl?.value?.blur()
      emit('inline-input-keydown-enter', event)
    }

    const handleInputChanged = (event: Event) => {
      if (props.editByInlineClick === true) {
        toggle()
      }

      if ((event.target as HTMLInputElement).value !== computedValue.value) {
        emit('inline-input-changed', {
          componentName: componentName,
          event: event,
        })
      }
    }

    const computedLabel = computed(() => {
      return props.value === '' ? props.placeholder : props.value
    })

    const computedValue = computed(() => props.value)

    const computedPlaceholder = computed(() => props.placeholder)

    const resizeTextArea = (element?: EventTarget | null) => {
      if (!element || !(element instanceof HTMLElement)) {
        return
      }
      element.style.height = 'auto'
      element.style.height = `${element.scrollHeight}px`
    }

    onMounted(() => {
      if (props.focusOnMount && editing.value === false) {
        toggle()
        //resizeTextArea(inputEl?.value)
      }
    })

    onUpdated(() => {
      if (props.focusOnMount && editing.value === false) {
        toggle()
        //resizeTextArea(inputEl?.value)
      }
    })

    return {
      componentName,
      resizeTextArea,
      labelEl,
      inputEl,
      computedLabel,
      editing,
      computedValue,
      computedPlaceholder,
      handleInputChanged,
      handleKeyDownEnter,
      toggle,
      actionTitle,
    }
  },
})
</script>
