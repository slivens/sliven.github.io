<template>
  <div class="answer">
    <ul>
      <li v-for="(item,index) in answerdata">
        <dl>
          <dd class="answer__header--icon"><img :src="item.author.avatar_url"></dd>
          <dd class="answer__header--tag" >问答</dd>
          <dd class="answer__header--count">{{item.reply_count}}/{{item.visit_count}}</dd>
          <dd class="answer__header--title" ><router-link :to="{name:'contents',params:{id:item.id}}"> {{item.title}} </router-link></dd>
          <dd class="answer__header--hours">2小时</dd>
          <dd class="answer__header--smanswer"></dd>
        </dl>
      </li>
    </ul>
  </div>  
</template>
<script>
import { mapState } from 'vuex'
import { showTab } from '../api/all'
export default {
  data () {
    return {
      answerdata: ''
    }
  },
  computed: {
    ...mapState(['answerinfo'])
  },
  mounted () {
    this.showTabdata()
  },
  methods: {
    async showTabdata () {
      if (this.answerinfo) {
        this.answerdata = this.answerinfo
      } else {
        this.answerdata = await showTab(10, 20, 'ask')
        this.$store.commit('saveAnswer', this.answerdata)
      }
    }
  }
}
</script>
<style scoped>
.answer,
.answer ul {
  width: 100%;
  background: #fff;
}
.answer ul li {
  height: 50px;
  width: 100%;
  /* background: yellow; */
}
.answer ul li:hover {
  background: #e6e6e6;
}
.answer ul li:hover .answer__header--title a {
  color: #b46767;
  text-decoration: underline;
}
.answer ul li dl dd {
  float: left;
  margin-left: 20px;
}

.answer ul li .answer__header--icon {
  width: 40px;
  height: 40px;
  background: red;
  margin-top: 5px;
}
.answer ul li .answer__header--icon img {
  width: 100%;
  height: 100%;
}
.answer ul li .answer__header--tag {
  width: 50px;
  height: 30px;
  text-align: center;
  margin-top: 10px;
  background: #ffb468;
  line-height: 30px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
}
.answer ul li .answer__header--count {
  height: 50px;
  line-height: 50px;
}
.answer ul li .answer__header--title {
  height: 50px;
  line-height: 50px;
}
.answer ul li .answer__header--hours {
  height: 50px;
  line-height: 50px;
  float: right;
  margin-right: 20px;
}
.answer ul li .answer__header--smanswer {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  background: red;
  float: right;
}
</style>

