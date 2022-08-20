<template>
  <el-button type="primary" @click="add">
    新增
    <el-icon class="el-input__icon">
      <plus />
    </el-icon>
  </el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="名称" align="center" width="120" />
    <el-table-column prop="age" label="年龄" align="center" width="120" />
    <el-table-column prop="address" label="地址" align="center" width="300" />
    <el-table-column label="操作" align="center" width="400">
      <template v-slot="scope">
        <el-button link type="primary" size="small" @click="edit(scope.row)"
          >修改</el-button
        >
        <el-button
          link
          type="primary"
          size="small"
          @click="deletedata(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-model="dialogVisible"
    title="新增用户"
    width="50%"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="名字" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age" autocomplete="off" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancle">Cancel</el-button>
        <el-button type="primary" @click="handleOk">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, onUnmounted } from "vue";
import { User, Lock, Sunny, Plus } from "@element-plus/icons";
import { getUser, setUser, updataUser } from "/@/api/login";
const dialogVisible = ref(false);
const editMode = ref("edit");
const editID = ref("");
const useData = reactive({
  tableData: [],
});
const add = () => {
  dialogVisible.value = true;
  editMode.value = "add";
};
const edit = (val) => {
  dialogVisible.value = true;
  editMode.value = "edit";
  editID.value = val._id
  console.log("click", editID.value);
  ruleForm.address = val.address;
  ruleForm.age = val.age;
  ruleForm.name = val.name;
  ruleForm.id = val._id;
};
const deletedata = () => {
  console.log("click");
};
const handleCancle = () => {
  dialogVisible.value = false;
};
const handleOk = async () => {
  if (editMode.value === "add") {
    await setUser(ruleForm);
  } else {
    await updataUser(ruleForm);
  }
  const { data } = await getUser();
  useData.tableData = data;
  console.log(ruleForm, data);
  handleCancle();
};
onMounted(async () => {
  const { data } = await getUser();
  useData.tableData = data;
  console.log(data.tableData);
});
const ruleFormRef = ref();
const ruleForm = reactive({
  name: "",
  address: "",
  age: "",
  id: "",
});
// const checkAge = (rule, value, callback) => {
//   if (!value) {
//     return callback(new Error("Please input the age"));
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error("Please input digits"));
//     } else {
//       if (value < 18) {
//         callback(new Error("Age must be greater than 18"));
//       } else {
//         callback();
//       }
//     }
//   }, 1000);
// };

// const validatePass = (rule, value, callback) => {
//   if (value === "") {
//     callback(new Error("Please input the password"));
//   } else {
//     if (ruleForm.checkPass !== "") {
//       if (!ruleFormRef.value) return;
//       ruleFormRef.value.validateField("checkPass", () => null);
//     }
//     callback();
//   }
// };
// const validatePass2 = (rule, value, callback) => {
//   if (value === "") {
//     callback(new Error("Please input the password again"));
//   } else if (value !== ruleForm.pass) {
//     callback(new Error("Two inputs don't match!"));
//   } else {
//     callback();
//   }
// };

const rules = reactive({
  pass: [{ validator: null, trigger: "blur" }],
  checkPass: [{ validator: null, trigger: "blur" }],
  age: [{ validator: null, trigger: "blur" }],
});

const { tableData } = { ...toRefs(useData) };
</script>
