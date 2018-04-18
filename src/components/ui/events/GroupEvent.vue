<template>
  <event name="Group" @send="send">
    <div class="field">
      <label class="label">Group ID</label>
      <div class="control">
        <input type="text" class="input" v-model="groupId">
      </div>
    </div>

    <div class="field">
      <label class="label">Traits</label>
      <div class="control">
        <textarea class="input is-json" rows="4" v-model="traits"></textarea>
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
      groupId: '',
      traits: '{ "name": "Test Group" }',
      userId: ''
    }
  },
  methods: {
    send () {
      const traits = JSON.parse(this.traits) || {}
      const userId = this.userId || null
      window.tracker.group(this.groupId, traits, userId)
    }
  },
  components: {
    Event
  }
}
</script>
