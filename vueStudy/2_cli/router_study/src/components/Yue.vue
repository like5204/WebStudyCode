<template>
  <div class="audio-player">
    <audio ref="audioElement" :src="songUrl"></audio>
    <button @click="togglePlay">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      songUrl: "", // 替换为你的歌曲URL
      isPlaying: false,
    };
  },
  props:['id'],
  created()
  {
        // const userId = this.$route.params.id;
        const userId = this.id;
        console.log(userId);

        
        if(userId != 1)
        {
            this.songUrl = 'http://ws.stream.qqmusic.qq.com/C400004789cJ458PqC.m4a?guid=723303149&vkey=0DA6170139A670B06B237F0D5805B2FD9C44A5BD0932A08FC4F12AA4C4518F3B1D20F3AE2BB0F51370645C4F7C46539A7136C636D2C22CC7&uin=&fromtag=120032&src=C400003CifAd37spAI.m4a';
        }
        else
        {
            this.songUrl = 'http://music.163.com/song/media/outer/url?id=2134508204.mp3';
        }

  },
  methods: {
    togglePlay() {
      const audio = this.$refs.audioElement;
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    },
  },
};
</script>

<style>
.audio-player {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 14px;
}

button:hover {
  background-color: #0056b3;
}
</style>
