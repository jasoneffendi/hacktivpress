<template>
<div class='container'>
    <router-view
    :content="content">
    </router-view>
</div>
</template>

<script>
import ContentPage from '@/components/ContentPage'
export default {
  components: {
    ContentPage
  },
  data () {
    return {
      token: '',
      content: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/')
      .then(({data}) => {
        console.log(data)
        this.content = data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>