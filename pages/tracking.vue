<template>
  <div class="container pt-40">
    <div v-if="isGazeCloudApiLoaded">
      <button @click="stopTracking">stop tracking</button>
    </div>
    <div id="gaze"
        style='position: absolute;display:none;width: 100px;height: 100px;border-radius: 50%;border: solid 2px  rgba(255, 255,255, .2);	box-shadow: 0 0 100px 3px rgba(125, 125,125, .5);	pointer-events: none;	z-index: 999999'>
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
    },
    plotGaze(GazeData) {
      /*
          GazeData.state // 0: valid gaze data; -1 : face tracking lost, 1 : gaze uncalibrated
          GazeData.docX // gaze x in document coordinates
          GazeData.docY // gaze y in document cordinates
          GazeData.time // timestamp
      */

      var docx = GazeData.docX;
      var docy = GazeData.docY;

      var gaze = document.getElementById("gaze");
      docx -= gaze.clientWidth / 2;
      docy -= gaze.clientHeight / 2;

      gaze.style.left = docx + "px";
      gaze.style.top = docy + "px";


      if (GazeData.state != 0) {
          if (gaze.style.display == 'block')
              gaze.style.display = 'none';
      }
      else {
          if (gaze.style.display == 'none')
              gaze.style.display = 'block';
      }
    }
  },
  watch: {
    isGazeCloudApiLoaded(value) {
      if(value) {
        window.GazeCloudAPI.StartEyeTracking();
        window.GazeCloudAPI.OnResult = this.plotGaze;
      }
    }
  }
}
</script>