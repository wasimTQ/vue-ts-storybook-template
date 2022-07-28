import{d as i,a as s,b as p,e as l,r as n,n as o,o as c}from"./vue.esm-bundler.792d3ed6.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";const a="BaseAppLayout",r=i({name:a,props:{canScroll:{type:Boolean,default:!1}},setup(e){return{overflowClass:s(()=>e.canScroll?"overflow-scroll":"overflow-hidden"),componentName:a}}});function f(e,v,b,y,x,h){return c(),p("div",{class:o(["relative flex w-screen flex-col md:h-screen",e.componentName])},[l("div",null,[n(e.$slots,"navigation")]),l("div",{class:o(["relative flex grow flex-col",[e.overflowClass]])},[n(e.$slots,"content")],2),n(e.$slots,"dialog")],2)}const t=d(r,[["render",f]]);r.__docgenInfo={displayName:"BaseAppLayout",exportName:"default",description:"",tags:{},props:[{name:"canScroll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"navigation"},{name:"content"},{name:"dialog"}]};const L={parameters:{storySource:{source:`import BaseAppLayout from './BaseAppLayout.vue'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'BaseAppLayout',
  component: BaseAppLayout,
} as Meta

export const Default: Story = (args) => ({
  components: { BaseAppLayout },
  setup() {
    return { args }
  },
  template: \`
    <BaseAppLayout v-bind="args" class="!w-full">
      <template #navigation>
        <div class="flex justify-center p-4 h-full w-full items-center bg-indigo-50 border-2 border-indigo-500">
          Navigation Section
        </div>
      </template>
      <template #content>
        <div class="flex justify-center h-full w-full items-center bg-green-50 border-2 border-green-500">
          Content Section
        </div>
      </template>
      <template #dialog>
        <div class="hidden absolute top-0 bottom-0 left-0 right-0 p-24 flex justify-center h-full w-full items-center">
          <div class="flex items-center justify-center bg-pink-50 border-1 border-2 border-pink-500 w-full h-full">
            Overlapping Dialog
          </div>
        </div>
      </template>
    </BaseAppLayout>\`,
})

Default.args = { canScroll: false }

export const ContentScrollable: Story = (args) => ({
  components: { BaseAppLayout },
  setup() {
    return { args }
  },
  template: \`
    <BaseAppLayout v-bind="args" class="!w-full">
      <template #navigation>
        <div class="flex justify-center p-4 h-full items-center bg-indigo-50 border-2 border-indigo-500">
          Navigation Section
        </div>
      </template>
      <template #content>
        <div class="flex px-2 flex-col justify-center w-full items-center bg-green-50 border-2 border-green-500">
          <div 
            v-for="item in [1, 2, 3, 5, 6]"
            :key="item"
            class="flex justify-center items-center h-[300px] w-full m-2 bg-red-100"
          >
            Item {{item}}
          </div>
        </div>
      </template>
      <template #dialog>
        <div class="hidden absolute top-0 bottom-0 left-0 right-0 p-24 flex justify-center h-full w-full items-center">
          <div class="flex items-center justify-center bg-pink-50 border-2 border-pink-500 w-full h-full">
            Overlapping Dialog
          </div>
        </div>
      </template>
    </BaseAppLayout>\`,
})

ContentScrollable.args = { canScroll: true }

export const DialogOpen: Story = (args) => ({
  components: { BaseAppLayout },
  setup() {
    return { args }
  },
  template: \`
    <BaseAppLayout v-bind="args" class="!w-full">
      <template #navigation>
        <div class="flex justify-center p-4 h-full items-center bg-indigo-50 border-2 border-indigo-500">
          Navigation Section
        </div>
      </template>
      <template #content>
        <div class="flex px-2 flex-col justify-center w-full h-full items-center bg-green-50 border-2 border-green-500">
          Content Section
        </div>
      </template>
      <template #dialog>
        <div class="absolute top-0 bottom-0 left-0 right-0 p-24 bg-white/50 backdrop-blur-[2px]">
          <div class="flex items-center justify-center bg-pink-50 border-2 border-pink-500 w-full h-full">
            Overlapping Dialog
          </div>
        </div>
      </template>
    </BaseAppLayout>\`,
})

DialogOpen.args = { canScroll: false }
`,locationsMap:{default:{startLoc:{col:30,line:9},endLoc:{col:2,line:34},startBody:{col:30,line:9},endBody:{col:2,line:34}},"content-scrollable":{startLoc:{col:40,line:38},endLoc:{col:2,line:69},startBody:{col:40,line:38},endBody:{col:2,line:69}},"dialog-open":{startLoc:{col:33,line:73},endLoc:{col:2,line:98},startBody:{col:33,line:73},endBody:{col:2,line:98}}}}},title:"BaseAppLayout",component:t},u=e=>({components:{BaseAppLayout:t},setup(){return{args:e}},template:`
    <BaseAppLayout v-bind="args" class="!w-full">
      <template #navigation>
        <div class="flex justify-center p-4 h-full w-full items-center bg-indigo-50 border-2 border-indigo-500">
          Navigation Section
        </div>
      </template>
      <template #content>
        <div class="flex justify-center h-full w-full items-center bg-green-50 border-2 border-green-500">
          Content Section
        </div>
      </template>
      <template #dialog>
        <div class="hidden absolute top-0 bottom-0 left-0 right-0 p-24 flex justify-center h-full w-full items-center">
          <div class="flex items-center justify-center bg-pink-50 border-1 border-2 border-pink-500 w-full h-full">
            Overlapping Dialog
          </div>
        </div>
      </template>
    </BaseAppLayout>`});u.args={canScroll:!1};const m=e=>({components:{BaseAppLayout:t},setup(){return{args:e}},template:`
    <BaseAppLayout v-bind="args" class="!w-full">
      <template #navigation>
        <div class="flex justify-center p-4 h-full items-center bg-indigo-50 border-2 border-indigo-500">
          Navigation Section
        </div>
      </template>
      <template #content>
        <div class="flex px-2 flex-col justify-center w-full items-center bg-green-50 border-2 border-green-500">
          <div 
            v-for="item in [1, 2, 3, 5, 6]"
            :key="item"
            class="flex justify-center items-center h-[300px] w-full m-2 bg-red-100"
          >
            Item {{item}}
          </div>
        </div>
      </template>
      <template #dialog>
        <div class="hidden absolute top-0 bottom-0 left-0 right-0 p-24 flex justify-center h-full w-full items-center">
          <div class="flex items-center justify-center bg-pink-50 border-2 border-pink-500 w-full h-full">
            Overlapping Dialog
          </div>
        </div>
      </template>
    </BaseAppLayout>`});m.args={canScroll:!0};const g=e=>({components:{BaseAppLayout:t},setup(){return{args:e}},template:`
    <BaseAppLayout v-bind="args" class="!w-full">
      <template #navigation>
        <div class="flex justify-center p-4 h-full items-center bg-indigo-50 border-2 border-indigo-500">
          Navigation Section
        </div>
      </template>
      <template #content>
        <div class="flex px-2 flex-col justify-center w-full h-full items-center bg-green-50 border-2 border-green-500">
          Content Section
        </div>
      </template>
      <template #dialog>
        <div class="absolute top-0 bottom-0 left-0 right-0 p-24 bg-white/50 backdrop-blur-[2px]">
          <div class="flex items-center justify-center bg-pink-50 border-2 border-pink-500 w-full h-full">
            Overlapping Dialog
          </div>
        </div>
      </template>
    </BaseAppLayout>`});g.args={canScroll:!1};const S=["Default","ContentScrollable","DialogOpen"];export{m as ContentScrollable,u as Default,g as DialogOpen,S as __namedExportsOrder,L as default};
//# sourceMappingURL=BaseAppLayout.stories.5912b5ff.js.map
