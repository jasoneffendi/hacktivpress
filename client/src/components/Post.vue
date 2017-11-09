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
      <label for="exampleInputPassword1">Content</label>
      <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Content" ref='content' rows="4"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="post()">Submit</button>
  </fieldset>
</form>
</div>
</template>

<script>
import router from '@/router/index'
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
        router.go('/')
      }
    }
  },
  mounted () {
    this.getToken()
  }
}
</script>