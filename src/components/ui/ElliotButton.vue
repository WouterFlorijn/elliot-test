<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        'button',
        'is-' + this.color,
        {
          'is-block': this.block
        }
      ]
    }
  }
}
</script>
