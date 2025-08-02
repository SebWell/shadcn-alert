<template>
  <div :class="alertClasses" role="alert">
    <div class="alert-content">
      <h4 v-if="content.title" class="alert-title">
        {{ content.title }}
      </h4>
      
      <div v-if="content.description" class="alert-description">
        {{ content.description }}
      </div>
      
      <slot v-else />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ShadcnAlert',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        title: 'Alert Title',
        description: 'This is an alert description that provides additional context.',
        variant: 'default',
        customClasses: ''
      })
    },
    wwEditorState: { type: Object, required: true }
  },
  emits: ["trigger-event"],
  setup(props, { emit }) {
    const alertClasses = computed(() => {
      const variant = props.content.variant || 'default'
      
      const classes = [
        'alert-base',
        `alert-variant-${variant}`
      ]
      
      if (props.content.customClasses) {
        classes.push(props.content.customClasses)
      }
      
      return classes.join(' ')
    })

    return {
      alertClasses
    }
  }
}
</script>

<style scoped>
/* Variables CSS Shadcn/UI */
:root {
  --border: hsl(214.3, 31.8%, 91.4%);
  --foreground: hsl(222.2, 84%, 4.9%);
  --primary: hsl(222.2, 47.4%, 11.2%);
  --destructive: hsl(0, 84.2%, 60.2%);
  --destructive-foreground: hsl(210, 40%, 98%);
  --warning: hsl(38, 92%, 50%);
  --warning-foreground: hsl(48, 96%, 89%);
}

/* Alert base styles */
.alert-base {
  display: flex;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
}

.alert-variant-default {
  background-color: hsl(0, 0%, 100%);
  border-color: var(--border);
  color: var(--foreground);
}

.alert-variant-destructive {
  background-color: hsl(0, 84.2%, 97%);
  border-color: var(--destructive);
  color: var(--destructive);
}

.alert-variant-warning {
  background-color: hsl(48, 96%, 95%);
  border-color: var(--warning);
  color: hsl(25, 95%, 30%);
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin: 0 0 4px 0;
  font-size: 14px;
}

.alert-description {
  font-size: 14px;
  opacity: 0.8;
  margin: 0;
}
</style>
