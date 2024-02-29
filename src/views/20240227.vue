<script>
export default {
  data() {
    return {
      num: 10,
      arr: [1, 2, 3],
      myObj: {
        c: '123',
        a: 'a',
        b: 'b'
      },
      arr1: [1, 2, 3],
      peo: [
        {
          num: 1,
          name: 'p1',
          pas: '123',
          gender: '女',
          tel: '012135468',
        },
        {
          num: 2,
          name: 'p2',
          pas: '234',
          gender: '女',
          tel: '012135468',
        },
        {
          num: 3,
          name: 'p3',
          pas: '345',
          gender: '男',
          tel: '012135468',
        },
        {
          num: 4,
          name: 'p4',
          pas: '456',
          gender: '女',
          tel: '012135468',
        },
      ],
      selectTab: '',
    };
  },
  // 監聽變數 當有變化時進行更換 computed 一定要 return
  // 篩選好用!!!
  computed: {
    getDoubleNum() {
      return num * 2;
    },
    // 篩選使用者資料
    filterUserData() {
      if(!this.selectTab) return this.peo;
      return this.peo.filter(item => item.gender === this.selectTab);
    }
  },
  // 進入網頁時 直接進行 可付值 呼叫function
  mounted: {

  },
  methods: {
    addArr() {
      // const num = this.arr1[this.arr1.length - 1];
      // || 判斷 true false ?? 判斷 undefined
      const num = this.arr1.at(-1) ?? 0;
      this.arr1.push(num + 1);
    },
    delArr() {
      this.arr1.pop();
    },
    del(index) {
      this.peo.splice(index, 1);
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-1 w-[800px]">
    <!-- computed 變數 -->
    {{ getDoubleNum }}
    <!-- 迴圈 :key="index" 作為div 的唯一值 進行新增刪除修改時才不會被影響 -->
    <div v-for="(item, index) in arr" :key="index" class="text-[16px]">
      索引值: {{ index }}, 資料為: {{ item }}
    </div>
    <div v-for="(item, index) in 5" :key="index" class="text-[16px]">
      {{ item }}
    </div>
    <div v-for="(value, key, index) in myObj" :key="index" class="text-[16px]">
      {{ key }}-{{ value }}
    </div>
    <button class="btn" type="button" @click="addArr()">新增</button>
    <button class="btn" type="button" @click="delArr()">刪除</button>
    <div v-for="(item, index) in arr1" :key="index" class="text-[16px]">
      {{ item }}
    </div>
    <nav class="flex gap-1">
      <!-- click 未完待改 -->
      <!-- <button class="btn" type="button" @click="selectTab = ''">全部</button>
      <button class="btn" type="button" @click="selectTab = '男'">男</button>
      <button class="btn" type="button" @click="selectTab = '女'">女</button> -->
    </nav>
    <table class="border-2">
      <thead class="border-2">
        <tr>
          <th class="border-2">編號</th>
          <th class="border-2">姓名</th>
          <th class="border-2">身分證字號</th>
          <th class="border-2">性別</th>
          <th class="border-2">電話</th>
          <th class="border-2">功能</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in peo" :key="index">
          <th class="border-2">{{item.num}}</th>
          <th class="border-2">{{item.name}}</th>
          <th class="border-2">{{item.pas}}</th>
          <th class="border-2">{{item.gender}}</th>
          <th class="border-2">{{item.tel}}</th>
          <th class="border-2"><button class="btn" type="button" @click="del(index)">刪除</button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.btn {
  @apply bg-red-700 text-white w-[150px];
}
</style>
