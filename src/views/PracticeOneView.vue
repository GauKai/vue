<script>
import vueLogo from '@/assets/images/logo.svg';

export default {
  data() {
    return {
      vueLogo,
      num: 8,
      name: '高楷甯',
      food: '好吃的',
      color: '',
      switchType: 0,
    };
  },
  methods: {
    changeColor(type) {
      switch (type) {
        case 0: return this.color = '';
        case 1: return this.color = 'bg-blue-400';
        case 2: return this.color = 'bg-green-400';
        case 3: return this.color = 'bg-yellow-400';
        default: return this.color = 'bg-red-400';
      }
    }
  },
  active() {
    return 'bg-white text-black';
  }
};
</script>

<template>
  <div class="w-[700px] h-[50dvh]">
    <nav class="flex">
      <button type="button" class="nav-btn active" @click="changeColor(switchType=0)">Vue</button>
      <button type="button" class="nav-btn" @click="changeColor(switchType=1)">編號</button>
      <button type="button" class="nav-btn" @click="changeColor(switchType=2)">姓名</button>
      <button type="button" class="nav-btn" @click="changeColor(switchType=3)">喜歡的食物</button>
    </nav>
    <div class="content" :class="color" v-if="switchType === 0"><img :src="vueLogo" alt="Vue Logo" class="w-1/2 h-1/2"></div>
    <div class="content" :class="color" v-else-if="switchType === 1">{{ num }}</div>
    <div class="content" :class="color" v-else-if="switchType === 2">{{ name }}</div>
    <div class="content" :class="color" v-else-if="switchType === 3">{{ food }}</div>
    <!-- <div class="">
      <img :src="vueLogo" alt="Vue Logo" class="w-1/2 h-1/2">
    </div> -->
  </div>
</template>

<style scoped>
.nav-btn {
  @apply border-x-2 border-t-2 border-white rounded-t px-10 py-1 font-bold;
}

.active {
  @apply bg-white text-black;
}

.content {
  @apply flex items-center justify-center h-full border-2 border-white rounded-b rounded-tr;
}
</style>
