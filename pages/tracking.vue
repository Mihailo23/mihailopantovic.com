
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
          src: '<https://api.gazerecorder.com/GazeCloudAPI.js>',
          defer: true,
          // Changed after script load
          callback: () => { this.isGazeCloudApiLoaded = true } 
        }
      ]
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