<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="block">
          <h1 class="title">
            Elliot Analytics
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="block">
        <h3 class="title is-size-4">Toggle adapters</h3>

        <div class="buttons">
          <adapter-button v-for="(adapter, key) in adapters" :key="key" :adapter="adapter">{{ key }}</adapter-button>
        </div>

        <hr>

        <h3 class="title is-size-4">Test events</h3>

        <identify-event></identify-event>
        <track-event></track-event>
        <page-event></page-event>
        <alias-event></alias-event>
        <group-event></group-event>
        <search-event></search-event>
        <goal-event></goal-event>
      </div>
    </section>
  </div>
</template>

<script>
import AdapterButton from './ui/AdapterButton'
import IdentifyEvent from './ui/events/IdentifyEvent'
import TrackEvent from './ui/events/TrackEvent'
import PageEvent from './ui/events/PageEvent'
import AliasEvent from './ui/events/AliasEvent'
import GroupEvent from './ui/events/GroupEvent'
import SearchEvent from './ui/events/SearchEvent'
import GoalEvent from './ui/events/GoalEvent'

export default {
  data () {
    return {
      adapters: []
    }
  },
  mounted () {
    this.adapters = window.tracker.adapters
  },
  components: {
    AdapterButton,
    IdentifyEvent,
    TrackEvent,
    PageEvent,
    AliasEvent,
    GroupEvent,
    SearchEvent,
    GoalEvent
  }
}
</script>

<style>
  .block {
    margin: auto;
    width: 480px;
    max-width: 100%;
  }
</style>
