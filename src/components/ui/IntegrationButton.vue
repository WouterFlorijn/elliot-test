<template>
  <elliot-button :color="integration.config.enabled ? 'success' : 'danger'" @click.native="toggle">
    <slot></slot>
  </elliot-button>
</template>

<script>
import ElliotButton from './ElliotButton'

export default {
  props: {
    integration: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle () {
      if (this.integration.config.enabled) {
        this.integration.disable()
      } else {
        this.integration.enable()
      }
    }
  },
  components: {
    ElliotButton
  }
}
</script>
