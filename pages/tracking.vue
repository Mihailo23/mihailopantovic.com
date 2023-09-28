<template>
  <div class="container pt-24">
    <button @click="startTracking">Start tracking</button>
    <button @click="stopTracking">Stop tracking</button>
    <button @click="replay" v-if="SesionReplayData">replay</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SesionReplayData: null
    }
  },
  head () {
    return {
      script: [
        {
          hid: 'gaze-recorder',
          src: 'https://app.gazerecorder.com/GazeRecorderAPI.js',
          defer: true,
        },
        {
          hid: 'gaze-replay',
          src: 'https://app.gazerecorder.com/GazePlayer.js',
          defer: true
        }
      ]
    }
  },
  methods: {
    startTracking() {
      window.GazeRecorderAPI.Rec();
      console.log('started');
    },
    stopTracking() {
      window.GazeRecorderAPI.StopRec();
      this.SesionReplayData = window.GazeRecorderAPI.GetRecData();
      console.log('stopped');
    },
    replay() {
      window.GazePlayer.PlayResultsData(this.SesionReplayData );
    }
  },
}
</script>