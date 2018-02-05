<template>
  <event name="Page" @send="send">
    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <input type="text" class="input" v-model="category">
      </div>
    </div>

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input type="text" class="input" v-model="name">
      </div>
    </div>

    <div class="field">
      <label class="label">Properties</label>
      <div class="control">
        <textarea class="input" rows="4" v-model="properties"></textarea>
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
      category: '',
      name: '',
      properties: '{ "referrer": "direct" }',
      userId: ''
    }
  },
  methods: {
    send () {
      const properties = JSON.parse(this.properties) || {}
      const userId = this.userId || null
      window.tracker.page(this.category, this.name, properties, userId)
    }
  },
  components: {
    Event
  }
}
</script>
