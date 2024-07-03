<template>
  <div class="navi">
    <el-menu class="header" mode="vertical" router>
        <template v-for="(v, i) in listB" :key="i">
          <template v-if="v.children.length > 0">
            <el-submenu :index="i.toString()">
              <template #title>
                <span class="menu-item">{{ v.title }}</span>
              </template>
              <template v-for="(item, j) in v.children" :key="j">
                <el-menu-item class="menu-item-two" :index="'/' + item.name">{{
                  item.title
                }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item class="menu-item" :index="'/' + v.name">{{
              v.title
            }}</el-menu-item>
          </template>
        </template>
        <el-menu-item index="/" class="menu-item">退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import { createTable } from "@/service/genServ.js";
export default {
  name: "Navi",
  components: {},

  data() {
    return {
      list:[],
      listA: [//管理员
       
      ],
      listB:[//用户
        {
          name: "chat",
          title: "新建对话",
          children: [],
        },
        {
          name: "chat_history",
          title: "历史对话",
          children: [],
        },
       
      


      ]
    };
  },
  methods: {
    doCreate(){
      // createTable({username:this.$store.state.username}).then((res)=>{
      //   if(res.data==1){
      //     this.list=this.listA;
      //   }
      //   if(res.data==2){
      //     this.list=this.listB;
      //   }
      // }
      // )
    },
  },
};
</script>
<style scoped>
.navi {
  border-right: 1px solid #64b6cf;
  height: 70%;
  width: 135px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #4bbad3;
  overflow-x: hidden;
  justify-content: center;
  padding-top: 13%;
  
}
.header {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4ae4f3;
}
.menu-item {
  color: #000000 !important;
  font-size: 18px;
  font-weight: bold;
}
.menu-item-two {
  text-align: left;
}
img{
  width:135px;
  height: 92px; 
  position: absolute; 
  top: 0%;
  left: 0%;
}
</style>

