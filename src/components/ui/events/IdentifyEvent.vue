<template>
  <event name="Identify" @send="send">
    <div class="field">
      <label class="label">User ID</label>
      <div class="control">
        <input type="text" class="input" v-model="userId">
      </div>
    </div>

    <div class="field">
      <label class="label">User Properties</label>
      <div class="control">
        <textarea class="input" rows="4" v-model="userProperties"></textarea>
      </div>
    </div>
  </event>
</template>

<script>
import Event from './Event'

export default {
  data () {
    return {
      userId: 0,
      userProperties: '{ "email": "hello@example.com", "firstName": "Wouter", "lastName": "Florijn" }'
    }
  },
  methods: {
    send () {
      const userProperties = JSON.parse(this.userProperties) || {}
      window.tracker.identify(this.userId, userProperties)
    }
  },
  components: {
    Event
  }
}
</script>
