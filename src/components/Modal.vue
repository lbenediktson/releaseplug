<template lang="html">

</template>

<script>
export default {
  name: 'modal',
  props: {
    header: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    footer: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
