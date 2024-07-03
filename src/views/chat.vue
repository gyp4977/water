<template>
  <Navi />
  <div class="body" style="height: 100%;margin-left: 170px;">
    <div class="container">
      <div class="right">
        <div class="zhuyemian" style=" padding-top: 30px; padding-bottom: 30px; margin-left: 1115px; color: #9292ee;font-size: 20px;">
          水利问答
        </div>
        <div class="chat" ref="chatContainer">
          <div v-for="message in messages" :key="message.id" class="chat-to-llm-message-box" :class="{  
             'rightMsg': message.talker === 1,  
             'leftMsg': message.talker === 2  
          }">
            <img v-if="message.talker === 2" src="../assets/AI.png" />
            <div class="msg">{{ message.text }}</div>
          
          
          </div>
        </div> 

        <div class="bottom">
            <input id="myInput" v-model="sendMessageText" placeholder="请输入您想提问的内容" @keydown.enter="handleEnter" />
            <el-button id="myButton" :type='primary' size="large" @click="onSend()"  >发送</el-button>
          </div>
      </div>
    </div>
  </div>



</template>


  <script>
  import Navi from "@/components/Navi";
  // import axios from 'axios';
//   import router from "@/router/index.js";

// var input = document.getElementById("myInput");
//       input.addEventListener("keyup", function(event) {
//           if (event.key == 'Enter') {
//               document.getElementById("myButton").click();
//           }
//       });

  export default {
    name: "chat",
    data() {
      return { 
        sendMessageText: "",
        answer: "",
        tempMessageText: "",
        messages: [],
        docsNum: "",
        docsMessageList: [
            {docsName: 'test', docsUrl: 'test', docsText: 'test'},
        ],
    };
  },
    components: {
      Navi,
    },
    methods: {
      // 处理回车键按下的事件  
      handleEnter() {  
        this.onSend();  
      },  
      onSend(){
      let newId = this.messages.length + 1;
      this.tempMessageText = this.sendMessageText;
      let newMessage = {
        id: newId,
        talker: 1,
        text: this.tempMessageText,
      };
      this.sendMessageText = "";
      this.messages.push(newMessage);
      
      this.returnMessageText = '后端的回答：是是是';
      let newId2 = newId;
      this.tempMessageText = this.returnMessageText;
      let newMessage2 = {
        id: newId2,
        talker: 2,
        text: this.tempMessageText,
      };
      this.returnMessageText = "";
      this.messages.push(newMessage2);
          
    //   axios
    //     .post("/api/testChat", {
    //       query: this.tempMessageText,
    //     })
    //     .then((response) => {
    //       if (response.data.isok == true) {
    //         this.returnMessageText = response.data.returnMessageText;
    //         let newId = this.messages.length + 1;
    //         this.tempMessageText = this.returnMessageText;
    //         let newMessage = {
    //           id: newId,
    //           talker: 2,
    //           text: this.tempMessageText,
    //         };
    //         this.returnMessageText = "";
    //         this.messages.push(newMessage);
    //       } else {
    //         this.$message({
    //           message: "发送失败",
    //           type: "error",
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //       alert("error");
    //     });
    }
    },
    mounted() {},
    created() {},
  };
  export {}
  </script>
  <style>
    
.container {
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .right {
    flex: 1;
    background-color: rgba(147, 213, 255, 0);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .chat {
      flex: 1;
      max-height: 100%;
      overflow-y: auto;
      padding: 10px;
      overflow-y: auto; /* 允许内容滚动 */
      box-sizing: border-box;

      .leftMsg {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        margin: 10px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          overflow: hidden;
          object-fit: cover;
          margin: 0 10px;
        }

        .msg {
          display: inline-block;
          padding: 10px;
          word-wrap: break-word;
          max-width: 600px;
          background-color: #dfdfdf;
          border-radius: 10px;
          white-space: pre-wrap;
          text-align: left;
        }
      }
      .rightMsg {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        margin: 10px;

        .msg {
          color: black;
          background-color: #b5d4ee;
          display: inline-block;
          padding: 10px;
          word-wrap: break-word;
          max-width: 600px;
          border-radius: 10px;
          white-space: pre-wrap;
          text-align: right;
        }
      }

      .leftMsg .docmsg {
        font-size: 12px;
        display: inline-block;
        padding: 10px;
        word-wrap: break-word;
        max-width: 600px;
        background-color: #dfdfdf;
        border-radius: 10px;
        white-space: pre-wrap;
        text-align: left;
      }
    }
  
    .bottom {
      height: 60px;
      display: flex;
      align-items: center;
      width: 95%;
      margin: 10px auto;

      input {
        flex: 1;
        border: 1px solid rgb(25, 2, 225);
        /* border-right: none; */
        height: 35px;
        color: rgb(3, 87, 213);
        text-indent: 2px;
        line-height: 35px;
        /* border-radius: 10px 0 0 10px; */
      }

      .el-button {
        width: auto;
        /* border-radius: 0 10px 10px 0; */
      }

    }
  }
}
  </style>
   