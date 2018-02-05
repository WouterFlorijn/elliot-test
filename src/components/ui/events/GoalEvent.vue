<template>
  <event name="Goal" @send="send">
    <div class="field">
      <label class="label">Goal Name</label>
      <div class="control">
        <input type="text" class="input" v-model="goalName">
      </div>
    </div>

    <div class="field">
      <label class="label">Goal ID</label>
      <div class="control">
        <input type="text" class="input" v-model="goalId">
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
      goalName: '',
      goalId: '',
      properties: '{ "revenue": 10000 }',
      userId: ''
    }
  },
  methods: {
    send () {
      const properties = JSON.parse(this.properties) || {}
      const userId = this.userId || null
      window.tracker.goal(this.goalName, this.goalId, properties, userId)
    }
  },
  components: {
    Event
  }
}
</script>
