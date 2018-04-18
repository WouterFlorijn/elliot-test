<template>
  <event name="Track" @send="send">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input type="text" class="input" v-model="name">
      </div>
    </div>

    <div class="field">
      <label class="label">Properties</label>
      <div class="control">
        <textarea class="input is-json" rows="4" v-model="properties"></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">User ID (optional)</label>
      <div class="control">
        <input type="text" class="input" v-model="userId">
      </div>
    </div>
  </event>
</template>

<script>
import Event from './Event'

export default {
  data () {
    return {
      name: '',
      properties: '{ "success": true }',
      userId: ''
    }
  },
  methods: {
    send () {
      const properties = JSON.parse(this.properties) || {}
      const userId = this.userId || null
      window.tracker.track(this.name, properties, userId)
    }
  },
  components: {
    Event
  }
}
</script>
