<template>
  <div class="all">
    <ul>
       <Scroll :on-reach-bottom="handleReachBottom">
      <Card dis-hover v-for="(item, index) in alldata" :key="index" >
         <li>
        <dl>
          <dd class="all__header--icon"><img :src="item.author.avatar_url"></dd>
          <dd class="all__header--tag" :class="showClassTab(item.tab)">{{showtab(item.tab)}}</dd>
          <dd class="all__header--count">{{item.reply_count}}/{{item.visit_count}}</dd>
          <dd class="all__header--title" ><router-link :to="{name:'contents',params:{id:item.id}}"> {{item.title}} </router-link></dd>
          <dd class="all__header--hours">2小时</dd>
          <dd class="all__header--small"></dd>
        </dl>
      </li>
      </Card>
    </Scroll>
     
    </ul>
  </div>  
</template>
<script>
import { mapState } from 'vuex'
import { showall } from '../api/all'
export default {
  data () {
    return {
      alldata: '',
      switchClass: true
    }
  },
  computed: {
    ...mapState(['allinfo'])
  },
  mounted () {
    this.showData()
  },
  methods: {
    handleReachBottom () {
      return new Promise(resolve => {
        setTimeout(async () => {
          console.log('___this', this)
          let changepage = await showall()
          changepage.forEach(item => {
            this.alldata.push(item)
          })
          resolve()
        }, 1000)
      })
    },
    async showData () {
      if (this.allinfo) {
        this.alldata = this.allinfo
      } else {
        this.alldata = await showall()
        this.$store.commit('saveAll', this.alldata)
      }
    },
    showtab (tab) {
      if (tab === 'share') {
        return '分享'
      } else if (tab === 'job') {
        return '工作'
      } else if (tab === 'ask') {
        return '问答'
      } else {
        return '精华'
      }
    },
    showClassTab (tab) {
      if (tab === 'good') {
        return { good: this.switchClass }
      } else if (tab === 'job') {
        return { job: this.switchClass }
      } else if (tab === 'share') {
        return { share: this.switchClass }
      } else {
        return { ask: this.switchClass }
      }
    }
  }
}
</script>
<style>
.ivu-scroll-container {
  height: 800px !important;
}
</style>

<style scoped>
.all,
.all ul {
  width: 100%;
  height: 100%;
}
.all ul li {
  height: 50px;
  width: 100%;
  /* background: yellow; */
}
.all ul li:hover {
  background: #e6e6e6;
}
.all ul li:hover .all__header--title a {
  color: #b46767;
  text-decoration: underline;
}
.all ul li dl dd {
  float: left;
  margin-left: 20px;
}

.all ul li .all__header--icon {
  width: 40px;
  height: 40px;
  background: red;
  margin-top: 5px;
}
.all ul li .all__header--icon img {
  width: 100%;
  height: 100%;
}
.all ul li .all__header--tag {
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
.all ul li .all__header--count {
  height: 50px;
  line-height: 50px;
}
.all ul li .all__header--title {
  height: 50px;
  line-height: 50px;
}
.all ul li .all__header--hours {
  height: 50px;
  line-height: 50px;
  float: right;
  margin-right: 20px;
}
.all ul li .all__header--small {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  /* background: red; */
  float: right;
}
.job {
  background: yellow !important;
}
.ask {
  background: #ffb468 !important;
}
.share {
  background: #008442 !important;
}
.good {
  background: #408080 !important;
}
</style>

