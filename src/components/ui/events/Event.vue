<template>
  <article class="message">
    <div class="message-header">
      {{ name }}
      <button class="button is-primary is-small" @click="send">Send</button>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    send () {
      this.$emit('send')
    }
  }
}
</script>
