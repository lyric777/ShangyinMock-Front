<template>
<div>
  {{data}}
</div>
</template>

<script>
import reqwest from 'reqwest'
export default {
  name: 'Api',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    fetch () {
      reqwest({
        url: 'http://127.0.0.1:5000/use_api/' + this.$route.params.api,
        method: 'get',
        data: {},
        type: 'json'
      }).then(data => {
        console.log(data[0])
        this.data = data
      })
    }
  }
}
</script>

<style scoped>

</style>
