<template>
<div class="cold-md-9">
<router-link :to="'/' + content._id">
<h4>{{ content.title }}</h4>
</router-link>
<blockquote class="blockquote blockquote-reverse">
  <p>{{ content.content }}</p>
  <footer class="blockquote-footer">Published by <cite title="Source Title">{{ content.author.username }}</cite></footer>
</blockquote>
<br>
</div>
</template>

<script>
export default {
  props: ['content']
}
</script>