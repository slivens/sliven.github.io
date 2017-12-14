<template>
  <div class="page">
   <chat-header></chat-header> 
   <chat-main></chat-main>
   <div class="page__allpage">
   <el-pagination
  background
  layout="prev, pager, next"
  :total="200">
</el-pagination>
   </div>
   
  </div>
</template>
<script>
import ChatHeader from '../components/ChatHeader'
import ChatMain from '../components/ChatMain'
export default {
  data () {
    return {

    }
  },
  components: {ChatHeader, ChatMain}
}
</script>
<style scoped>
.page {
  background:#c0c0c0;
}
 .page__allpage {
   width:86%;
   margin:20px auto 0;
   
 }

</style>

 