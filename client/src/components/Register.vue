<template>
<form>
  <fieldset>
    <legend>Legend</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" ref='username'>
      <small id="emailHelp" class="form-text text-muted">Make it unique</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref='password'>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="register()">Submit</button>
  </fieldset>
</form>
</template>

<script>
export default {
  methods: {
    register () {
      this.$http.post('/users', {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>