<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import config from './config/elliot.json'

export default {
  name: 'App',
  created () {
    window.tracker = new window.elliot.Tracker(config)
  }
}
</script>
