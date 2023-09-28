<template>
  <div class="container pt-24">
    <div v-if="isGazeRecorderApiLoaded">
      <button @click="stopTracking">stop tracking</button>
      <button @click="replay" v-if="SesionReplayData">replay</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isGazeRecorderApiLoaded: false,
      SesionReplayData: null
    }
  },
  head () {
    return {
      script: [
      {
          hid: 'gaze-recorder',
          src: 'https://app.gazerecorder.com/GazeRecorderAPI.js',
          // Changed after script load
          callback: () => { this.isGazeRecorderApiLoaded = true } 
        },
        {
          hid: 'gaze-replay',
          src: 'https://app.gazerecorder.com/GazePlayer.js',
        }
      ]
    }
  },
  methods: {
    stopTracking() {
      window.GazeRecorderAPI.Rec()
      this.SesionReplayData = window.GazeRecorderAPI.GetRecData();
    },
    replay() {
      window.GazePlayer.PlayResultsData(this.SesionReplayData );

    }
  },
  watch: {
    isGazeRecorderApiLoaded(value) {
      if(value) {
        window.GazeRecorderAPI.StopRec();
      }
    }
  }
}
</script>