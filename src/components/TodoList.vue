<script setup lang="ts">
  import TodoListItem from './TodoListItem.vue'
  import { reactive, ref, computed, nextTick, watch } from 'vue'
  // import * as fundebug from "fundebug-javascript";
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
  let inputData:any = ref({value:'',color:''})
  let todoData:any = ref([
    {
      name: '短期',
      value: 'short'
    },{
      name: '中期',
      value: 'medium'
    },{
      name: '长期',
      value: 'long'
    }
  ])
  let checkedState:any = ref([false,false,false])
  let bgColor:any = {
    '0': 'green',
    '1': 'yellow',
    '2': 'red'
  }
  function num() {
    state.count++
  }
  // reactive响应式数组写法
  // function add() {
  //   if(!inputData) {
  //     return
  //   }
  //   console.log('数据', inputData);
  //   res.push(inputData)
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
    console.log('add');
    // fundebug.test() // fundebug日志监控
    if(!inputData.value) {
      alert('请输入数据')
      return
    }
    resValue.value.push(JSON.parse(JSON.stringify(inputData.value)))
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
  function chcekRadio(this: any, index: string | number) {
    console.log('index',index);
    this.checkedState.forEach((ele: any,i: string | number) => {
      if(index == i) {
        this.checkedState[index] = !ele
      } else {
        this.checkedState[i] = false
      }
    });
    for(let item in bgColor) {
      console.log(item);
      if(String(index) === item) {
        inputData.value.color = bgColor[item]
      }
    }
    console.log('this.checkedState',this.checkedState);
    console.log(inputData.value.color);
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
    <input type="text" v-model="inputData.value"><br>
    <div v-for="(item,index) in todoData" :key="index" >
      <div @click="chcekRadio(index)">
        <input type="radio" :value=item.value  :checked="checkedState[index]"><label>{{ item.name }}</label>
      </div>
    </div>
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
      <div class='todo-item' :class="item.color">{{ item.value }}</div>
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
