<template>
  <elliot-button :color="adapter.config.enabled ? 'success' : 'danger'" @click.native="toggle">
    <slot></slot>
  </elliot-button>
</template>

<script>
import ElliotButton from './ElliotButton'

export default {
  props: {
    adapter: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle () {
      if (this.adapter.config.enabled) {
        this.adapter.disable()
      } else {
        this.adapter.enable()
      }
    }
  },
  components: {
    ElliotButton
  }
}
</script>
