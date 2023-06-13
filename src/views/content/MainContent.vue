
<template>
  <div class="infinite-list-wrapper" style="overflow: auto" id="infiniteLisWrapper">
    <div
        v-infinite-scroll="load"
        class="list grid-container"
        :infinite-scroll-disabled="disabled"
        :infinite-scroll-distance="distance"
        :infinite-scroll-immediate="immediate"
        id="gridContainer"
    >

      <div class="grid-item" v-for="item in count" :key="item">
        <router-link :to="item.source_url">
          <div class="img-text">
            <img :src="item.image" alt="" class="image-cover">
          </div>
          <div class="copy-writing">
            <p class="video-title">{{item.video_title}}</p>
            <p class="publisher">{{item.publisher}}</p>
          </div>
        </router-link>
      </div>

    </div>
<!--    <p v-if="loading">Loading...</p>-->
<!--    <p v-if="noMore">No more</p>-->
  </div>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, onMounted, ref,} from 'vue'

const count = ref([
  {
    'image': '/public/cover1.jpg',
    'video_title': '教你用关键帧+画中画制作无限滚动视频效果，教程详细一看就会！',
    'publisher': '跟小筱学剪辑 · 4-5',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/neverLossLove/neverLossLove.m3u8'
      }
    },
  },
  {
    'image': '/public/cover2.jpg',
    'video_title': '一曲串烧带你回到华语乐坛恐怖如斯的那年【2003上】',
    'publisher': '吹拉弹唱慕星银',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/stringburning/stringburning.m3u8'
      }
    },
  },
  {
    'image': '/public/pyghlkncover3.jpg',
    'video_title': '【4K珍藏】李宗盛《漂洋过海来看你》！再听已是曲中人！',
    'publisher': '4K音乐馆',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/pyghlkn/pyghlkn.m3u8'
      }
    },
  },
  {
    'image': '/public/cover4.jpg',
    'video_title': '【4K60FPS】张学友《吻别》早期封神现场！人生必看的现场',
    'publisher': '4K音乐馆',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/kissGoodBye/kissGoodBye.m3u8'
      }
    },
  },
  {
    'image': '/public/cover5.jpg',
    'video_title': '【修复版】张学友《爱如潮水》，我再也不愿见你在深夜里买醉，不愿别的男人见识你的妩媚！',
    'publisher': 'TIME音乐',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/arcs/arcs.m3u8'
      }
    },
  },
  {
    'image': '/public/cover6.jpg',
    'video_title': '【4K60FPS】纵贯线《再见》大佬级神仙现场！祝昨天高考完的学生们顺风顺水！',
    'publisher': '影音清晰修复馆',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/goodbay/goodbay.m3u8'
      }
    },
  },
  {
    'image': '/public/cover7.jpg',
    'video_title': '【4K60FPS】李宗盛《寂寞的恋人啊》一名大叔坐在椅子上以过来人的经验 对着年轻人们倾诉着',
    'publisher': '影音清晰修复馆',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/jmdlra/jmdlra.m3u8'
      }
    },
  },
  {
    'image': '/public/cover10.jpeg',
    'video_title': '(G)I-DLE-퀸카 (Queencard)(蓝光)',
    'publisher': 'dsq',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/output/output.m3u8'
      }
    },
  },
  {
    'image': '/public/cover8.jpg',
    'video_title': '老王的自述',
    'publisher': 'dsq',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/oldwang/oldwang.m3u8'
      }
    },
  },
  {
    'image': '/public/cover9.jpg',
    'video_title': '生生',
    'publisher': 'dsq',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'http://upload.thylove.cn/key.m3u8'
      }
    },
  },
  {
    'image': '/public/cover10.jpg',
    'video_title': '【四级】翻译3',
    'publisher': 'dsq',
    'source_url': {
      path: '/video-play',
      query: {
        video_url: 'api/m3u8/hls/【四级】翻译3/【四级】翻译3.m3u8'
      }
    },
  },
])




const loading = ref(false)
const immediate = ref(false)
const distance = ref(100)
const noMore = computed(() => count.value >= 30)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {

    loading.value = false
  }, 1000)
}
let refs = null;
onMounted(() => {

  const infiniteLisWrapper = document.getElementById("infiniteLisWrapper")
  const gridContainer = document.getElementById("gridContainer")
  let infiniteLisWrapperWidth = infiniteLisWrapper.offsetWidth
  let infiniteLisWrapperHeight = infiniteLisWrapper.offsetHeight
  let gridItemtWidth = (infiniteLisWrapperWidth - 208) / 5
})

</script>

<style>
.infinite-list-wrapper {
  height: 100%;
  text-align: center;
  min-width: 800px;
  padding: 0 64px;
}
.infinite-list-wrapper .grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px 20px;
  width: 100%;
  overflow: overlay;

}
.infinite-list-wrapper .grid-container .grid-item {
  margin-top: 10px;
}
.infinite-list-wrapper .grid-container .grid-item .img-text {
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.infinite-list-wrapper .grid-container .grid-item .img-text .image-cover {
  width: 100%;

}
.copy-writing {
  display: inline-block;
  width: 100%;
}
.video-title {
  height: 48px;
  width: 100%;
  text-align: left;
  line-height: 24px;
  overflow: hidden;
  /*white-space: nowrap;*/
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-word!important;
  line-break: anywhere;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.publisher {
  text-align: left;
  display: block;
  width: 100%;
 }

</style>
