<template>
  <div 
    :class="alertClasses"
    role="alert"
  >
    <component
      v-if="content.icon"
      :is="content.icon"
      class="absolute left-4 top-4 h-4 w-4 text-foreground"
    />
    
    <div :class="contentWrapperClasses">
      <h5 v-if="content.title" :class="titleClasses">
        {{ content.title }}
      </h5>
      
      <div v-if="content.description" :class="descriptionClasses">
        {{ content.description }}
      </div>
      
      <div v-if="content.htmlContent" v-html="content.htmlContent" />
      
      <slot />
    </div>
    
    <button
      v-if="content.dismissible"
      @click="handleDismiss"
      :class="dismissButtonClasses"
      type="button"
      aria-label="Dismiss"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebAlert',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        variant: 'default',
        title: '',
        description: '',
        htmlContent: '',
        icon: null,
        dismissible: false,
        customClasses: ''
      })
    }
  },
  emits: ['dismiss'],
  setup(props, { emit }) {
    const alertVariants = {
      base: "relative w-full rounded-lg border p-4",
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
          success: "border-green-500/50 text-green-700 dark:border-green-500 [&>svg]:text-green-600",
          warning: "border-yellow-500/50 text-yellow-700 dark:border-yellow-500 [&>svg]:text-yellow-600",
          info: "border-blue-500/50 text-blue-700 dark:border-blue-500 [&>svg]:text-blue-600"
        }
      }
    }

    const alertClasses = computed(() => cn(
      alertVariants.base,
      alertVariants.variants.variant[props.content.variant] || alertVariants.variants.variant.default,
      {
        "pr-10": props.content.dismissible,
        "[&>svg~*]:pl-7": props.content.icon,
        "[&>svg+div]:translate-y-[-3px]": props.content.icon
      },
      props.content.customClasses
    ))

    const contentWrapperClasses = computed(() => cn(
      props.content.icon ? "pl-7" : ""
    ))

    const titleClasses = computed(() => cn(
      "mb-1 font-medium leading-none tracking-tight"
    ))

    const descriptionClasses = computed(() => cn(
      "text-sm [&_p]:leading-relaxed"
    ))

    const dismissButtonClasses = computed(() => cn(
      "absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    ))

    const handleDismiss = (event) => {
      emit('dismiss', event)
      
      // Execute Weweb workflow if defined
      if (props.content.dismissWorkflowId && typeof wwLib !== 'undefined') {
        wwLib.executeWorkflow(props.content.dismissWorkflowId)
      }
    }

    return {
      alertClasses,
      contentWrapperClasses,
      titleClasses,
      descriptionClasses,
      dismissButtonClasses,
      handleDismiss
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 