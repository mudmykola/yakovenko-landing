<script setup>
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  // eslint-disable-next-line vue/valid-define-props
  defineProps(),
  {
    type: 'default',
    disabled: false
  }
)

const buttonClass = `button-${props.type}`

const handleClick = () => {
  if (!props.disabled) {
    console.log('Button clicked!')
  }
}
</script>

<template>
  <button
    class="bg-c102 rounded-[0.938rem] font-normal text-[1.5rem] text-default py-[1.25rem] px-[3.125rem]"
    :class="buttonClass"
    @click="handleClick"
    :disabled="props.disabled">
    <slot></slot>
  </button>
</template>