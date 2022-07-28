import{d as $,f as d,w as N,a as y,g as K,i as D,j as F,b as u,n as r,k as M,l as c,t as E,m as h,F as z,o as s}from"./vue.esm-bundler.792d3ed6.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as p}from"./index.3254e40d.js";import"./iframe.1a32c125.js";import"./make-decorator.39878a99.js";const m="InlineInput",O=$({props:{value:{type:String,default:()=>""},placeholder:{type:String,default:()=>""},maxLines:{type:Number,default:()=>5},maxlength:{type:Number,default:()=>144},multiline:{type:Boolean,default:!0},editByInlineClick:{type:Boolean,default:!0},focusOnMount:{type:Boolean,default:!1}},emits:["inline-input-changed","inline-input-is-editing","inline-input-stopped-editing","inline-input-keydown-enter"],setup(e,{emit:n}){const a=d(!1),v=d(),t=d(),g=d("edit");N(a,async()=>{g.value=a.value===!1?"edit":"save"});const l=async()=>{var i,o,B,b;a.value=!a.value,a.value&&(n("inline-input-is-editing",{componentName:m,isEditing:a.value,value:(o=(i=t==null?void 0:t.value)==null?void 0:i.value)!=null?o:""}),await F(()=>{var w,C;e.multiline&&k(t.value),(w=t==null?void 0:t.value)==null||w.focus(),(C=t==null?void 0:t.value)==null||C.select()})),a.value||n("inline-input-stopped-editing",{componentName:m,isEditing:a.value,value:(b=(B=t==null?void 0:t.value)==null?void 0:B.value)!=null?b:""})},T=i=>{var o;i.preventDefault(),(o=t==null?void 0:t.value)==null||o.blur(),n("inline-input-keydown-enter",i)},P=i=>{e.editByInlineClick===!0&&l(),i.target.value!==I.value&&n("inline-input-changed",{componentName:m,event:i})},V=y(()=>e.value===""?e.placeholder:e.value),I=y(()=>e.value),S=y(()=>e.placeholder),k=i=>{!i||!(i instanceof HTMLElement)||(i.style.height="auto",i.style.height=`${i.scrollHeight}px`)};return K(()=>{e.focusOnMount&&a.value===!1&&l()}),D(()=>{e.focusOnMount&&a.value===!1&&l()}),{componentName:m,resizeTextArea:k,labelEl:v,inputEl:t,computedLabel:V,editing:a,computedValue:I,computedPlaceholder:S,handleInputChanged:P,handleKeyDownEnter:T,toggle:l,actionTitle:g}}}),A=["maxlength","value","placeholder"],H=["value","placeholder","maxlength"];function x(e,n,a,v,t,g){return s(),u(z,null,[e.editing&&e.multiline?(s(),u("textarea",{key:0,ref:"inputEl",class:r(["h-full w-full resize-none border-0 bg-transparent p-0 focus:outline-none focus:ring-0 focus-visible:outline-none",[e.$attrs.class,e.componentName]]),type:"textarea",wrap:"hard",maxlength:e.maxlength,value:e.computedValue,placeholder:e.computedPlaceholder,rows:"1",onKeydown:n[0]||(n[0]=M(h((...l)=>e.handleKeyDownEnter&&e.handleKeyDownEnter(...l),["stop"]),["enter"])),onBlur:n[1]||(n[1]=(...l)=>e.handleInputChanged&&e.handleInputChanged(...l)),onInput:n[2]||(n[2]=l=>e.resizeTextArea(l.target))},null,42,A)):c("",!0),e.editing&&!e.multiline?(s(),u("input",{key:1,ref:"inputEl",class:r(["m-0 w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0 focus-visible:outline-none",[e.$attrs.class,e.componentName]]),type:"text",value:e.computedValue,placeholder:e.computedPlaceholder,maxlength:e.maxlength,onKeydown:n[3]||(n[3]=M(h((...l)=>e.handleKeyDownEnter&&e.handleKeyDownEnter(...l),["stop"]),["enter"])),onBlur:n[4]||(n[4]=(...l)=>e.handleInputChanged&&e.handleInputChanged(...l))},null,42,H)):c("",!0),e.editing?c("",!0):(s(),u("div",{key:2,ref:"labelEl",class:r(["hyphens-auto w-full overflow-hidden break-words hover:cursor-text hover:text-gray-600",[e.$attrs.class,e.multiline?"line-clamp-"+e.maxLines:"truncate",e.componentName]]),onClick:n[5]||(n[5]=l=>e.editByInlineClick?e.toggle():null)},E(e.computedLabel),3)),e.editByInlineClick?c("",!0):(s(),u("span",{key:3,class:r(["inline-block w-fit text-secondary-content underline",e.$attrs.class]),onClick:n[6]||(n[6]=h((...l)=>e.toggle&&e.toggle(...l),["stop"]))},E(e.actionTitle),3))],64)}const L=j(O,[["render",x]]);O.__docgenInfo={exportName:"default",displayName:"InlineInput",description:"",tags:{},props:[{name:"value",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"maxLines",type:{name:"number"},defaultValue:{func:!0,value:"() => 5"}},{name:"maxlength",type:{name:"number"},defaultValue:{func:!0,value:"() => 144"}},{name:"multiline",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"editByInlineClick",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"focusOnMount",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"inline-input-changed"},{name:"inline-input-is-editing"},{name:"inline-input-stopped-editing"},{name:"inline-input-keydown-enter"}]};const Z={parameters:{storySource:{source:`import InlineInput from './InlineInput.vue'
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
  template: \`
    <InlineInput 
      v-bind="args" 
      @inline-input-changed="changed"
      @inline-input-is-editing="isEditing"
      @inline-input-stopped-editing="stoppedEditing"
      @inline-input-keydown-enter="keydownEnter"
      />
\`,
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
`,locationsMap:{multiline:{startLoc:{col:24,line:16},endLoc:{col:2,line:36},startBody:{col:24,line:16},endBody:{col:2,line:36}},singleline:{startLoc:{col:24,line:16},endLoc:{col:2,line:36},startBody:{col:24,line:16},endBody:{col:2,line:36}},"edit-by-button-click":{startLoc:{col:24,line:16},endLoc:{col:2,line:36},startBody:{col:24,line:16},endBody:{col:2,line:36}},"focus-on-mount":{startLoc:{col:24,line:16},endLoc:{col:2,line:36},startBody:{col:24,line:16},endBody:{col:2,line:36}}}}},title:"InlineInput",component:L,decorators:[()=>({template:'<div class="flex justify-center items-center h-screen w-screen"><div class="w-48"><story/></div></div>'})]},f=e=>({components:{InlineInput:L},setup(){return{args:e}},template:`
    <InlineInput 
      v-bind="args" 
      @inline-input-changed="changed"
      @inline-input-is-editing="isEditing"
      @inline-input-stopped-editing="stoppedEditing"
      @inline-input-keydown-enter="keydownEnter"
      />
`,methods:{changed:p("inline-input-changed"),isEditing:p("inline-input-is-editing"),stoppedEditing:p("inline-input-stopped-editing"),keydownEnter:p("inline-input-keydown-enter")}}),U=f.bind({});U.args={value:"",placeholder:"Placeholder",maxLines:5,maxlength:144,multiline:!0,editByInlineClick:!0,focusOnMount:!1};const q=f.bind({});q.args={value:"",placeholder:"Placeholder",multiline:!1,editByInlineClick:!0,focusOnMount:!1};const G=f.bind({});G.args={value:"",placeholder:"Placeholder",multiline:!1,editByInlineClick:!1,focusOnMount:!1};const J=f.bind({});J.args={value:"",placeholder:"Placeholder",multiline:!1,editByInlineClick:!0,focusOnMount:!0};const _=["Multiline","Singleline","EditByButtonClick","FocusOnMount"];export{G as EditByButtonClick,J as FocusOnMount,U as Multiline,q as Singleline,_ as __namedExportsOrder,Z as default};
//# sourceMappingURL=InlineInput.stories.44069a20.js.map
