<template>
  <div class="share">
    <ul>
      <li v-for="(item,index) in sharedata">
        <dl>
          <dd class="share__header--icon"><img :src="item.author.avatar_url"></dd>
          <dd class="share__header--tag" >分享</dd>
          <dd class="share__header--count">{{item.reply_count}}/{{item.visit_count}}</dd>
          <dd class="share__header--title" ><router-link :to="{name:'contents',params:{id:item.id}}"> {{item.title}} </router-link></dd>
          <dd class="share__header--hours">2小时</dd>
          <dd class="share__header--smshare"></dd>
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
      sharedata: ''
    }
  },
  computed: {
    ...mapState(['shareinfo'])
  },
  mounted () {
    this.showTabdata()
  },
  methods: {
    async showTabdata () {
      if (this.shareinfo) {
        this.sharedata = this.shareinfo
      } else {
        this.sharedata = await showTab(10, 20, 'share')
        this.$store.commit('saveShare', this.sharedata)
      }
    }
  }
}
</script>
<style scoped>
.share,
.share ul {
  width: 100%;
  background: #fff;
}
.share ul li {
  height: 50px;
  width: 100%;
  /* background: yellow; */
}
.share ul li:hover {
  background: #e6e6e6;
}
.share ul li:hover .share__header--title a {
  color: #b46767;
  text-decoration: underline;
}
.share ul li dl dd {
  float: left;
  margin-left: 20px;
}

.share ul li .share__header--icon {
  width: 40px;
  height: 40px;
  background: red;
  margin-top: 5px;
}
.share ul li .share__header--icon img {
  width: 100%;
  height: 100%;
}
.share ul li .share__header--tag {
  width: 50px;
  height: 30px;
  text-align: center;
  margin-top: 10px;
  background: green;
  line-height: 30px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
}
.share ul li .share__header--count {
  height: 50px;
  line-height: 50px;
}
.share ul li .share__header--title {
  height: 50px;
  line-height: 50px;
}
.share ul li .share__header--hours {
  height: 50px;
  line-height: 50px;
  float: right;
  margin-right: 20px;
}
.share ul li .share__header--smshare {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  background: red;
  float: right;
}
</style>

