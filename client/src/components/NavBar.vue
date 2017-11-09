<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register" class="nav-link" href="#">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/post" class="nav-link" href="#">Post</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Username" ref='username'>
      <input class="form-control mr-sm-2" type="password" placeholder="Password" ref='password'>
      <button class="btn btn-secondary my-2 my-sm-0" @click.prevent="login()">Login</button>
    </form>
  </div>
</nav>
</template>

<script>
import router from '@/router/index'
export default {
  methods: {
    login () {
      this.$http.post('/users/login', {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      })
      .then(({data}) => {
        console.log(data)
        localStorage.setItem('pressToken', data)
        router.go('/')
      })
      .catch(err => {
        console.log(err)
      })
      console.log(this.$refs.username.value)
    }
  }
}
</script>