<template>
  <event name="Search" @send="send">
    <div class="field">
      <label class="label">Query</label>
      <div class="control">
        <input type="text" class="input" v-model="query">
      </div>
    </div>

    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <input type="text" class="input" v-model="category">
      </div>
    </div>

    <div class="field">
      <label class="label">Result Count</label>
      <div class="control">
        <input type="number" class="input" v-model="resultCount">
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
      query: '',
      category: '',
      resultCount: '',
      userId: ''
    }
  },
  methods: {
    send () {
      const userId = this.userId || null
      window.tracker.search(this.query, this.category, this.resultCount, userId)
    }
  },
  components: {
    Event
  }
}
</script>
