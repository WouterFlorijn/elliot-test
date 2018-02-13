<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import config from './config/elliot.json'
import { Tracker } from 'elliot-analytics/dist/elliot'

export default {
  name: 'App',
  created () {
    window.tracker = new Tracker(config)
  }
}
</script>
