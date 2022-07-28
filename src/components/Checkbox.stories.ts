import Checkbox from './Checkbox.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta

const Template: Story = (args) => ({
  components: { Checkbox },
  setup() {
    return { args }
  },
  template: `
    <Checkbox v-bind="args"/>
`,
})

export const Default = Template.bind({})
Default.args = { checked: false, disabled: false }

export const Checked = Template.bind({})
Checked.args = { checked: true, disabled: false }

export const Disabled = Template.bind({})
Disabled.args = { checked: false, disabled: true }

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = { checked: true, disabled: true }
