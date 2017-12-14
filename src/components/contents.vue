<template>
  <div class="contents">
    <div class="contents__main">
     <div class="typo" v-html="personinfo.content"></div>
     </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { showdetail } from '../api/all'
export default {
  data () {
    return {
      personinfo: ''
    }
  },
  mounted () {
    this.show()
  },
  computed: {
    ...mapState(['id']),
    Id () {
      return this.$route.params.id
    }
  },
  methods: {
    async show () {
      this.personinfo = await showdetail(this.Id)
      console.log(this.personinfo)
    }
  }
}
</script>

<style >
@import '../public/typo.css';

.contents li {
  list-style:none;
}
.contents h2 {
  border-bottom:2px solid #3b3b3b;
}

.contents__main {
  width:80%;
  margin:0 auto;
}

</style>


