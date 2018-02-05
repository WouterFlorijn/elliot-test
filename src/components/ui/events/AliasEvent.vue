<template>
  <event name="Alias" @send="send">
    <div class="field">
      <label class="label">New User ID</label>
      <div class="control">
        <input type="text" class="input" v-model="userId">
      </div>
    </div>

    <div class="field">
      <label class="label">Old User ID (optional)</label>
      <div class="control">
        <input type="text" class="input" v-model="previousId">
      </div>
    </div>
  </event>
</template>

<script>
import Event from './Event'

export default {
  data () {
    return {
      userId: '',
      previousId: ''
    }
  },
  methods: {
    send () {
      const userId = this.userId || null
      window.tracker.alias(userId, this.previousId)
    }
  },
  components: {
    Event
  }
}
</script>
