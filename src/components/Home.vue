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
        <h3 class="title is-size-4">Toggle integrations</h3>

        <div class="buttons">
          <integration-button v-for="(integration, key) in integrations" :key="key" :integration="integration">{{ key }}</integration-button>
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
import IntegrationButton from './ui/IntegrationButton'
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
      integrations: {}
    }
  },
  mounted () {
    this.integrations = window.tracker.integrations
  },
  components: {
    IntegrationButton,
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
