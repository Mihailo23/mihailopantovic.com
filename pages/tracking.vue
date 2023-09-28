<template>
  <div class="container pt-24">
    <div v-if="isGazeCloudApiLoaded">
      <button @click="stopTracking">stop tracking</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isGazeCloudApiLoaded: false
    }
  },
  head () {
    return {
      script: [
        {
          hid: 'gaze',
          src: 'https://api.gazerecorder.com/GazeCloudAPI.js',
          defer: true,
          // Changed after script load
          callback: () => { this.isGazeCloudApiLoaded = true } 
        }
      ]
    }
  },
  methods: {
    stopTracking() {
      window.GazeCloudAPI.StopEyeTracking()
    }
  },
  watch: {
    isGazeCloudApiLoaded(value) {
      if(value) {
        window.GazeCloudAPI.StartEyeTracking();
      }
    }
  }
}
</script>