<template>
<div>
<content-summary
v-for="(content,index) in content"
:content="content"
:key="index">
</content-summary>
</div>
</template>

<script>
import ContentSummary from '@/components/ContentSummary'
export default {
  props: ['content'],
  components: {
    ContentSummary
  },
  data () {
    return {
      token: ''
    }
  }
}
</script>