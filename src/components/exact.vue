<template>
  <div class="good">
    <ul>
      <li v-for="(item,index) in gooddata">
        <dl>
          <dd class="good__header--icon"><img :src="item.author.avatar_url"></dd>
          <dd class="good__header--tag" >精华</dd>
          <dd class="good__header--count">{{item.reply_count}}/{{item.visit_count}}</dd>
          <dd class="good__header--title"><router-link :to="{name:'contents',params:{id:item.id}}"> {{item.title}} </router-link></dd>
          <dd class="good__header--hours">2小时</dd>
          <dd class="good__header--smgood"></dd>
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
      gooddata: ''
    }
  },
  computed: {
    ...mapState(['goodinfo'])
  },
  mounted () {
    this.showTabdata()
  },
  methods: {
    async showTabdata () {
      if (this.goodinfo) {
        this.gooddata = this.goodinfo
      } else {
        this.gooddata = await showTab(10, 20, 'good')
        this.$store.commit('saveGood', this.gooddata)
      }
    }
  }
}
</script>
<style scoped>
.good,
.good ul {
  width: 100%;
  background: #fff;
}
.good ul li {
  height: 50px;
  width: 100%;
  /* background: yellow; */
}
.good ul li:hover {
  background: #e6e6e6;
}
.good ul li:hover .good__header--title a {
  color: #b46767;
  text-decoration: underline;
}
.good ul li dl dd {
  float: left;
  margin-left: 20px;
}

.good ul li .good__header--icon {
  width: 40px;
  height: 40px;
  background: red;
  margin-top: 5px;
}
.good ul li .good__header--icon img {
  width: 100%;
  height: 100%;
}
.good ul li .good__header--tag {
  width: 50px;
  height: 30px;
  text-align: center;
  margin-top: 10px;
  background: #804040;
  line-height: 30px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
}
.good ul li .good__header--count {
  height: 50px;
  line-height: 50px;
}
.good ul li .good__header--title {
  height: 50px;
  line-height: 50px;
}
.good ul li .good__header--hours {
  height: 50px;
  line-height: 50px;
  float: right;
  margin-right: 20px;
}
.good ul li .good__header--smgood {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  /* background: red; */
  float: right;
}
</style>

