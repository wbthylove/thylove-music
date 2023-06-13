<template>
  <div class="video_play_wrapper">
    <div class="back">
      <el-icon @click="goBack"><Back /></el-icon>
    </div>
    <div class="video_center">
      <div class="video_con">
        <div class="video_box">
          <video controls class="video" ref="video"></video>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
let Hls = require('hls.js');
export default {
  data() {
    return {
      hls: null,
      // url: 'api/m3u8/hls/neverLossLove/neverLossLove.m3u8'
      url:  this.$route.query.video_url
    }
  },
  mounted() {
    let video_data = this.$route.query
    console.log(video_data.video_url)
    // this.url = video_data.video_url
    this.getStream(this.url)
  },
  methods: {
    getStream(source) {
      if (Hls.isSupported()) {
        console.log("支持")
        this.hls = new Hls();
        this.hls.loadSource(source);
        this.hls.attachMedia(this.$refs.video);

        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("加载成功");
          this.$refs.video.play();
        });
        this.hls.on(Hls.Events.ERROR, (event, data) => {
          // console.log(event, data);
          // 监听出错事件
          console.log("加载失败");
        });
      }
      else if (this.$refs.video.canPlayType('application/vnd.apple.mpegurl')) {
        this.$refs.video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
        this.$refs.video.addEventListener('loadedmetadata',function() {
          this.$refs.video.play();
        });
      }
    },
    // 停止流
    videoPause() {
      if (this.hls) {
        this.$refs.video.pause();
        this.hls.destroy();
        this.hls = null;
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.video_play_wrapper {
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  flex-direction: column;
}
.back {
  background-color: #f8f8f8;
  text-align: left;
  font-size: 30px;
  width: 100%;
}
.video_center {
  width: 80%;
}
.video_con {
  /*display: flex;*/
  width: 100%;
  /*justify-content: center;*/
  background-color: #f40;
  padding-bottom: 56.25%;
  position: relative;
}
.video_con .video_box {
  height: 100%;
  width: 100%;
  background-color: #ff00ff;
  position: absolute;
  display: flex;
}
.video_con .video {
  width: 100%;

}
</style>




<!--
<script type="text/javascript">
		var default_hls_address = 'statics/video/video.m3u8';
		var options = {
			width: 1280,
			height: 720,
			poster: "statics/video/video.jpg",
			autoplay: true,
			controls: true,
			loop: true,
			preload: 'auto',
			sourceOrder: true,
			sources: [{
				src: default_hls_address,
				type: 'application/x-mpegURL'
			}, {
				src: '',
				type: 'video/webm'
			}],
			techOrder: ['html5', 'flash'],
			flash: {
				swf: ''
			}
		}
		var video = videojs('myvideo', options);
			video.on(['loadstart', 'play', 'playing', 'firstplay', 'pause', 'ended', 'adplay', 'adplaying', 'adfirstplay', 'adpause', 'adended', 'contentplay', 'contentplaying', 'contentfirstplay', 'contentpause', 'contentended', 'contentupdate'], function(e) {

		});
		window.onbeforeunload=(e)=>{
			video.dispose();
		}
</script>
-->
