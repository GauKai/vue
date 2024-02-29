<script>
export default {
  // data function 放變數
  data() {
    // return 物件
    return {
      // 宣告 name 變數 付值 '123'
      name: '123',
      arr: [1, 2, 3],
      count: 1,
      className: 'a123 text-blue-500 text-3xl w-[200px] text-center',
      inputType: 'text',
      color: 'bg-blue-500',
      passwordType: 'password',
      switchPasswordType: true,
      textValue: '',
      newTextVal: '',
      textValue1: '',
      numberVaule: '',
      checkboxValue: '',
      mixCheckboxValue: [],
      radioValue: ',',
      fileData: '',
      mulFileData: null,
      show: false,
      rule: '老師',
    };
  },
  // 新增 function
  methods: {
    addCount() {
      this.count += 2;
    },
    // 更換顏色
    changeColor() {
      this.color = 'bg-yellow-500';
      // console.log(this.color);
    },
    changePasswordType() {
      this.switchPasswordType === true ? this.passwordType = 'text' : this.passwordType = 'password';
      this.switchPasswordType = !this.switchPasswordType;
    },
    getInputValue(e) {
      this.textValue = e.target.value;
    },
    getDouble() {
      this.addNum(1);
    },
    addNum(num) {
      return num += 1;
    },
    getMapJoinStr() {
      return this.mixCheckboxValue.map(item => item * 2).join();
    },
    uploadFile(e) {
      // 防呆
      if (e.target.files.length === '0') {
        console.error('沒有東西');
        return;
      }

      const file = e.target.files[0];
      if (file.type.includes('image/')) {
        this.fileData = file.name;
        const img = URL.createObjectURL(file);
        this.fileData = img;
      }
      // console.log(e.target.files);
    },
    uploaMuldFile(e) {
      let file = e.target.files;
      console.log(file);
      this.mulFileData = file.map(item => item.name).join();
    },

  },
};
</script>

<!-- 字是白色 -->
<template>
  <div class="flex flex-col gap-5 w-3/5">
    <!--  {{}} 內可直接寫 javascript -->
    <h1 class="text-xl font-bold">Hello Vite + Vue! {{ name }}</h1>
    <h4>Hello Vite + Vue! {{ arr[0] + 'aaa' }}</h4>
    <div class="flex gap-2 flex-wrap">
      <!-- v on 事件 (盡量放最後) -->
      <button class="btn" type="button" v-on:click="count++">button + 1</button>
      <!-- 同上寫法 -->
      <button class="btn" type="button" @click="addCount()">button + 2</button>
      <button class="btn" type="button" @click="count = 0">button = 0</button>
      <h4>{{ count }}</h4>
    </div>

    <!-- v-bind 關聯 css-->
    <div class="flex gap-2 flex-wrap">
      <div v-bind:class="className">a123</div>
      <input v-bind:type="inputType">
      <!-- 同上寫法 -->
      <div :class="className">a123</div>

      <button class="btn" type="button" @click="color = 'bg-red-500'">按我變紅色</button>
      <button class="btn" type="button" @click="color = 'bg-blue-500'">按我變藍色</button>
      <button class="btn" type="button" @click="changeColor()">按我變黃色</button>
      <div class="w-[200px]" :class="color">
        {{ color === 'bg-blue-500' ? '我是藍色' : '我變了' }}
      </div>

      <button class="btn" type="button" @click="changePasswordType()">顯示/關閉 密碼</button>
      <input :type="passwordType">

      <input type="text" @input="(e) => getInputValue(e)">
      <!-- 預設傳 event (不傳其他) -->
      <!-- <input type="text" @change="getInputValue"> -->
      <div>{{ textValue }}</div>
    </div>

    <!-- v-module 雙向綁定 -->
    <div class="flex gap-2 flex-wrap">
      <input type="text" v-model="newTextVal">
      <div>{{ newTextVal }}</div>
      <div>{{ getDouble() }}</div>

      <input v-model="textValue1" type="text">
      <input v-model="numberVaule" type="number">
      <input v-model="checkboxValue" type="checkbox" :true-value="1" :false-value="0">
    </div>

    <!-- v-model 多重勾選 string 改 number (運用 v-bind)-->
    <input v-model="mixCheckboxValue" type="checkbox" :value="1">
    <input v-model="mixCheckboxValue" type="checkbox" :value="2">
    <input v-model="mixCheckboxValue" type="checkbox" :value="3">
    <div>{{ mixCheckboxValue.join() }}</div>
    <div>{{ getMapJoinStr() }}</div>


    <!-- v-model radio -->
    <label>
      A <input v-model="radioValue" type="radio" value="A">
    </label>
    <label>
      B <input v-model="radioValue" type="radio" value="B">
    </label>
    <label>
      C <input v-model="radioValue" type="radio" value="C">
    </label>
    <div>{{ radioValue }}</div>

    <!-- file 不能用 v-model -->
    <div class="flex gap-2 flex-wrap">
      <input type="file" accept=".jpg, .png" @change="uploadFile">
      <img :src="fileData" alt="" class="w-[300px] h-[200px]">
      <!-- <div>{{ fileData }}</div> -->

      <input type="file" @change="uploaMuldFile" multiple>
      <!-- ?. 可選串連 如果沒有就顯示'' -->
      <div>{{ mulFileData?.name }}</div>

      <!-- v-show true 則顯示 (display: none) -->
      <div v-show="show">123</div>
      <!-- 選單 tag 變色 可以用show 的 true/fales 進行 class 物件新增{key: value} -->
      <div class="w-[100px] h-[100px] bg-red-500" :class="{ 'text-yellow-200': true, 'text-3xl': rule === '老師' }">123
      </div>
      <!-- v-if 完全隱藏 (html 不顯示) 登入權限顯示 -->
      <div v-if="rule === '老師'">老師</div>
      <div v-else-if="rule === '學生'">學生</div>
      <div v-else>訪客</div>
    </div>
  </div>
</template>

<!-- css -->
<style scoped>
.btn {
  @apply bg-red-700 w-[150px];
}

.a123 {
  background-color: aqua;
}

input {
  width: 300px;
  color: black;
}
</style>

<!-- option api 寫法 -->
<!-- converstion 寫法 (vue3) -->
<!-- google 擴充 Vue.js devtools F12 工具列 多 vue 選項 可觀看修改參數 -->
<!-- input 常用監聽 input(輸入時即觸發,適用搜尋時推薦字)/change(focus 取消時才進行監聽)  -->