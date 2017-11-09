<template>
<div>
<div class="jumbotron">
  <h1 class="display-3">{{ content.title }}</h1>
  <br>
  <br>
  <p>{{ content.content }}</p>
  <br>
  <br>
  <p> written by : {{ content.author.username }}</p>
</div>
<form>
  <fieldset>
    <legend>Edit content</legend>
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" placeholder="Title" ref='title'>
      <small id="emailHelp" class="form-text text-muted">Make it unique</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Content</label>
      <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Content" ref='content' rows="4"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="edit()">Submit</button>
  </fieldset>
</form>
<br>
<button type="submit" class="btn btn-primary" @click.prevent="del()">Delete</button>
</div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      content: {}
    }
  },
  methods: {
    getDetail () {
      this.$http.get('/' + this.id + '/details')
      .then(({data}) => {
        console.log(data, 'asldamsds')
        this.content = data
      })
      .catch(err => {
        console.log(err)
      })
    },
    edit () {
      var title = this.$refs.title.value
      var content = this.$refs.content.value
      if (content === '') {
        content = this.content.content
      }
      if (title === '') {
        title = this.content.title
      }
      this.$http.put('/' + this.id, {
        token: localStorage.getItem('pressToken'),
        title: title,
        content: content
      })
      .then(({data}) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    del () {
      var token = localStorage.getItem('pressToken')
      this.$http.delete('/' + this.id + '/' + token)
      .then(({data}) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    console.log(this.id)
    this.getDetail()
  }
}
</script>