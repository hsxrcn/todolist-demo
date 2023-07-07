<script setup lang="ts">
  import TodoListItem from './TodoListItem.vue'
  import { reactive, ref, computed, nextTick } from 'vue'
// 响应式基础
  // const count = ref(0)
  // console.log(count);
  // const objectRef = ref({count:1})
  // console.log('objectRef',objectRef);
  // console.log(objectRef.value);
  
  // const count  = ref(0)
  // const stateOne = reactive({
  //   count
  // })
  // const stateTwo = reactive({
  //   count: 0
  // })
  // console.log('stateOne',stateOne);
  // console.log('stateOne.count',stateOne.count);
  // stateOne.count = 1
  // console.log('count.value',count.value);
  // console.log('------------');
  // console.log('stateTwo',stateTwo);
  // console.log('stateTwo.count',stateTwo.count);
  // stateTwo.count = 1
  // console.log('count.value',count.value);
// todolist
  const ob:any = { foo: ref(1)}
  const { foo } = ob
  const state:any = reactive({ count: 0 }) 
  // let res:any = reactive([])  // reactive响应式数组
  let resValue:any = ref([])  // ref响应式变量
  let data:any = ''
  let selectData:any = ref('')
  let selectType = ''
  function num() {
    state.count++
  }
  // reactive响应式数组写法
  // function add() {
  //   if(!data) {
  //     return
  //   }
  //   console.log('数据', data);
  //   res.push(data)
  //   console.log(res);
  // }
  // function min() {
  //   if(!res) {
  //     return
  //   }
  //   res.pop()
  // }
  // function clear() {
  //   res.length = 0
  //   console.log(res);
  // }
  // ref响应式变量写法
  function add() {
    if(!data) {
      alert('请输入数据')
      return
    }
    resValue.value.push(data)
  }
  function min() {
    if(!resValue) {
      return
    }
    resValue.value.pop()
  }
  function clear() {
    // resValue.value = []
    resValue.value.length = 0
  }
  function selectState(type) {
    console.log('type',type);
    selectType = type
  }
// 计算属性
  const author = reactive({
    name: 'John Doe',
    list: []
  })
  author.list = resValue
  const publishedTodolist = computed(() => {
    return author.list.length > 0 ? 'yes':'no' 
  })
  let colorList = []
  let color = {
    '0': 'red',
    '1': 'yellow',
    '2': 'green'
  }
  function bgcolor(indexType) {
    console.log('indexType',indexType);
    for(let i in color) {
      if(selectType === i ) {
        colorList[indexType] = color[i]
      }
    }
    console.log('colorList',colorList);
    return colorList[indexType]
  }
  

</script>
<template>
  <!-- {{ ob.foo + 1 }}
  {{ foo + 1 }} -->
  <div>
    <p>Have todolist:{{ publishedTodolist }}</p>
    <br>
    <!-- <button @click="num">
      {{ state.count }}
    </button> -->
    <br>
    <input type="text" v-model="data">
    <input type="checkbox"  @click="selectState('0')" id="default">短期
    <input type="checkbox"  @click="selectState('1')" id="common">中期
    <input type="checkbox"  @click="selectState('2')" id="waring">长期
    <br>
    <button @click="add()">
      增加
    </button>
    <button @click="min()">
      减少
    </button>
    <button @click="clear()">
      清除
    </button>

    <!-- <div class='todo' v-for="(item,index) in res">
      <div class='todo-item'>{{ item }}</div>
      <div>-----</div>
    </div> -->
    <div class='todo' v-for="(item,index) in resValue" :key="index">
      <div class='todo-item' :class="bgcolor(index)">{{ item }}</div>
    </div>
  </div>
  <!-- <TodoListItem>
  </TodoListItem> -->
</template>

<style scoped>
 .todo {
   height: 40px;
   width: 400px;
 }
 .todo-item {
  height: 100%;
  width: 100%;
  border: 1px solid black;
 }
 .red {
  background-color: crimson;
 }
 .yellow {
  background-color: yellow;
 }
 .green {
  background-color: green;
 }

</style>
