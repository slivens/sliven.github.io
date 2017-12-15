
<template>
  <div class="job">
    <ul>
      <li v-for="(item,index) in jobdata">
        <dl>
          <dd class="job__header--icon"><img :src="item.author.avatar_url"></dd>
          <dd class="job__header--tag" >招聘</dd>
          <dd class="job__header--count">{{item.reply_count}}/{{item.visit_count}}</dd>
          <dd class="job__header--title" ><router-link :to="{name:'contents',params:{id:item.id}}"> {{item.title}} </router-link></dd>
          <dd class="job__header--hours">2小时</dd>
          <dd class="job__header--smjob"></dd>
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
      jobdata: ''
    }
  },
  computed: {
    ...mapState(['jobinfo'])
  },
  mounted () {
    this.showTabdata()
  },
  methods: {
    async showTabdata () {
      if (this.jobinfo) {
        this.jobdata = this.jobinfo
      } else {
        this.jobdata = await showTab(10, 20, 'job')
        this.$store.commit('saveJob', this.jobdata)
      }
    }
  }
}
</script>
<style scoped>
.job,
.job ul {
  width: 100%;
  background: #fff;
}
.job ul li {
  height: 50px;
  width: 100%;
  /* background: yellow; */
}
.job ul li:hover {
  background: #e6e6e6;
}
.job ul li:hover .job__header--title a {
  color: #b46767;
  text-decoration: underline;
}
.job ul li dl dd {
  float: left;
  margin-left: 20px;
}

.job ul li .job__header--icon {
  width: 40px;
  height: 40px;
  background: red;
  margin-top: 5px;
}
.job ul li .job__header--icon img {
  width: 100%;
  height: 100%;
}
.job ul li .job__header--tag {
  width: 50px;
  height: 30px;
  text-align: center;
  margin-top: 10px;
  background: #c0c0c0;
  line-height: 30px;
  border-radius: 8px;
  font-size: 14px;
  color: #ffffff;
}
.job ul li .job__header--count {
  height: 50px;
  line-height: 50px;
}
.job ul li .job__header--title {
  height: 50px;
  line-height: 50px;
}
.job ul li .job__header--hours {
  height: 50px;
  line-height: 50px;
  float: right;
  margin-right: 20px;
}
.job ul li .job__header--smjob {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  background: red;
  float: right;
}
</style>

