import InlineInput from './InlineInput.vue'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'InlineInput',
  component: InlineInput,
  decorators: [
    () => ({
      template:
        '<div class="flex justify-center items-center h-screen w-screen"><div class="w-48"><story/></div></div>',
    }),
  ],
} as Meta

const Template: Story = (args) => ({
  components: { InlineInput },
  setup() {
    return { args }
  },
  template: `
    <InlineInput 
      v-bind="args" 
      @inline-input-changed="changed"
      @inline-input-is-editing="isEditing"
      @inline-input-stopped-editing="stoppedEditing"
      @inline-input-keydown-enter="keydownEnter"
      />
`,
  methods: {
    changed: action('inline-input-changed'),
    isEditing: action('inline-input-is-editing'),
    stoppedEditing: action('inline-input-stopped-editing'),
    keydownEnter: action('inline-input-keydown-enter'),
  },
})

export const Multiline = Template.bind({})
Multiline.args = {
  value: '',
  placeholder: 'Placeholder',
  maxLines: 5,
  maxlength: 144,
  multiline: true,
  editByInlineClick: true,
  focusOnMount: false,
}

export const Singleline = Template.bind({})
Singleline.args = {
  value: '',
  placeholder: 'Placeholder',
  multiline: false,
  editByInlineClick: true,
  focusOnMount: false,
}

export const EditByButtonClick = Template.bind({})
EditByButtonClick.args = {
  value: '',
  placeholder: 'Placeholder',
  multiline: false,
  editByInlineClick: false,
  focusOnMount: false,
}

export const FocusOnMount = Template.bind({})
FocusOnMount.args = {
  value: '',
  placeholder: 'Placeholder',
  multiline: false,
  editByInlineClick: true,
  focusOnMount: true,
}
