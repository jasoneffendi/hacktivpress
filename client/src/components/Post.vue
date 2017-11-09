<template>
<div>
<form>
  <fieldset>
    <legend>Edit content</legend>
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" placeholder="Title" ref='title'>
      <small id="emailHelp" class="form-text text-muted">Make it unique</small>
    </div>
    <div class="form-group">
      <label>Content</label>
      <textarea type="text" class="form-control" placeholder="Content" ref='content' rows="4"></textarea>
    </div>
    <div class="form-group">
      <label>Category</label>
      <textarea type="text" class="form-control" placeholder="Category" ref='category' rows="1"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="post()">Submit</button>
  </fieldset>
</form>
</div>
</template>

<script>
export default {
  data () {
    return {
      token: ''
    }
  },
  methods: {
    getToken () {
      this.token = localStorage.getItem('pressToken')
      if (typeof this.token !== 'string') {
        alert('Please log in first')
      }
    },
    post () {
      var title = this.$refs.title.value
      var content = this.$refs.content.value
      if (content === '') {
        return alert("You can't leave the content empty")
      }
      if (title === '') {
        return alert("You can't leave the title empty")
      }
      this.$http.post('/', {
        token: localStorage.getItem('pressToken'),
        title: title,
        content: content,
        category: this.$refs.category.value
      })
      .then(({data}) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        alert('Log in to post a new article')
      })
    }
  },
  mounted () {
    this.getToken()
  }
}
</script>