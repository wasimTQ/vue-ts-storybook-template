import{d as h,f as u,a as s,g as k,i as f,b as p,o as m}from"./vue.esm-bundler.792d3ed6.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const r="Checkbox",i=h({name:r,props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["checkbox-checked-changed"],setup(e,{emit:c}){const n=u(),o=s(()=>e.checked),a=s(()=>e.disabled),l=d=>{c("checkbox-checked-changed",d.target.checked)};return k(()=>{!n.value||(n.value.checked=o==null?void 0:o.value,n.value.disabled=a==null?void 0:a.value)}),f(()=>{!n.value||(n.value.checked=o==null?void 0:o.value)}),{componentName:r,checkboxRef:n,handleCheckboxCheckedChanged:l}}});function C(e,c,n,o,a,l){return m(),p("input",{ref:"checkboxRef",type:"checkbox",class:"h-6 w-6 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-0 focus:ring-offset-0",onClick:c[0]||(c[0]=(...d)=>e.handleCheckboxCheckedChanged&&e.handleCheckboxCheckedChanged(...d))},null,512)}const b=x(i,[["render",C]]);i.__docgenInfo={displayName:"Checkbox",exportName:"default",description:"",tags:{},props:[{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"checkbox-checked-changed"}]};const L={parameters:{storySource:{source:`import Checkbox from './Checkbox.vue'
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
  template: \`
    <Checkbox v-bind="args"/>
\`,
})

export const Default = Template.bind({})
Default.args = { checked: false, disabled: false }

export const Checked = Template.bind({})
Checked.args = { checked: true, disabled: false }

export const Disabled = Template.bind({})
Disabled.args = { checked: false, disabled: true }

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = { checked: true, disabled: true }
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:17},startBody:{col:24,line:9},endBody:{col:2,line:17}},checked:{startLoc:{col:24,line:9},endLoc:{col:2,line:17},startBody:{col:24,line:9},endBody:{col:2,line:17}},disabled:{startLoc:{col:24,line:9},endLoc:{col:2,line:17},startBody:{col:24,line:9},endBody:{col:2,line:17}},"checked-disabled":{startLoc:{col:24,line:9},endLoc:{col:2,line:17},startBody:{col:24,line:9},endBody:{col:2,line:17}}}}},title:"Checkbox",component:b},t=e=>({components:{Checkbox:b},setup(){return{args:e}},template:`
    <Checkbox v-bind="args"/>
`}),g=t.bind({});g.args={checked:!1,disabled:!1};const y=t.bind({});y.args={checked:!0,disabled:!1};const v=t.bind({});v.args={checked:!1,disabled:!0};const B=t.bind({});B.args={checked:!0,disabled:!0};const T=["Default","Checked","Disabled","CheckedDisabled"];export{y as Checked,B as CheckedDisabled,g as Default,v as Disabled,T as __namedExportsOrder,L as default};
//# sourceMappingURL=Checkbox.stories.ffd609e8.js.map
