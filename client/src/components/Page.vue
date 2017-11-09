<template>
<div class='container'>
<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search by category" ref='category'>
      <button class="btn btn-secondary my-2 my-sm-0" @click.prevent="getByCategory()">Search</button>
      <button class="btn btn-secondary my-2 my-sm-0" @click.prevent="getArticles()">Get all</button>
</form>
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
    },
    getByCategory () {
      this.$http.get('/' + this.$refs.category.value + '/category')
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