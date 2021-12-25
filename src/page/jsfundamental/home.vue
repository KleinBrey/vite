<template>
  <div>
    <div @click="clickButton">{{ msg }} {{message}}</div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <div>
      <el-form :inline="true" ref="form" :model="formFilter">
        <el-form-item label="微信名称" prop="name">
          <el-input v-model="formFilter.name" placeholder="微信名称"></el-input>
        </el-form-item>
        <el-select v-model="formFilter.value" placeholder="请选择">
          <el-option
            v-for="item in formFilter.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form>
    </div>
    <div>{{sdk()}}</div>
    <div class="a">
      <div class="b">55555555</div>
      <div style="width:3px;height:3px"></div>
    </div>
    <div @click.capture="father">
      老爸
      <div @click="son">
        儿子
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineEmits,
  watch,
  ref,
  useSlots,
  useAttrs,
  reactive,
  watchEffect,
  computed,
  onMounted
} from "vue";
import { useStore } from "vuex";
// useContext,defineEmit 都已经过时了
// useContext => useSlots, useAttrs
// defineEmit => defineEmits
const store = useStore();
let props = defineProps({
  msg: {
    type: String,
    default: ""
  }
});

const message = computed(() => store.state.name);
const formFilter = reactive({
  name: "",
  pp: "",
  options: [
    {
      value: "选项1",
      label: "黄金糕"
    },
    {
      value: "选项2",
      label: "双皮奶"
    },
    {
      value: "选项3",
      label: "蚵仔煎"
    },
    {
      value: "选项4",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "北京烤鸭"
    }
  ],
  value: "",
  sdssa: val => store.dispatch("changename", val)
});
const msg = ref(props.msg);
// 父子组件传参数据
const emit = defineEmits(["myclick"]);
// watch
watch(
  () => props.msg,
  val => {
    msg.value = val;
  }
);
const father = (val)=>{
console.log("father")
}
const son = (val)=>{
console.log("son")
}
// 点击
const clickButton = () => {
  formFilter
    .sdssa("866")
    .then(res => {
      console.log(store.state.name);
      console.log(res);
    })
    .catch(cd => {
      console.log(store.state.name);
      console.log(cd);
    });
  store.commit("increment", "5788888888888888888888888");
  emit("myclick", props.msg);
  console.log("我是子组件的函数", props.msg);
};

// 对象拷贝
const ad = { a: 5, b: 4 };
const copyObject = array => {
  let copy = {};
  for (let key in array) {
    copy[key] = array[key];
  }
  return copy;
};
copyObject(ad);

const state = reactive({ count: 0, name: "zs" });

watch(
  () => [state.count, state.name],
  val => {
    console.log(val);
  },
  { immediate: true }
);

watchEffect(() => {
  console.log(state.count, "watchEffect");
  console.log(state.name, "watchEffect");
});
const jk = new Map();
jk.set("a", "b");
console.log(jk);
function divide(a, b, { option = false, shhs = "" } = {}) {
  console.log(a, b, option, shhs);
}

const sdk = () => {
  // const foo = Object.freeze({});
  // foo.prop = 123;
  divide(1, 2, 3, 4, 5, 6);
};
onMounted(() => {
  sdk();
});

setTimeout(() => {
  state.count++;
  state.name = "ls";
}, 1000);
</script>

<style scoped>
.a {
  position: absolute;
  width: 100px;
  height: 40px;
  margin: 5px;
  padding-top: 5px;
  background: teal;
  display: table;
}
.b {
  position: relative;
  width: 10px;
  height: 20px;
  /* display: inline; */
  /* top: 10px; */
  background: peachpuff;
  display: table-cell;
}
</style>