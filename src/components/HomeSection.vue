<template lang="html">
  <div class="mt-4 mb-4 container">
    <div class="row">
        <div class="col-lg-12">
            <div class="bigScreen section-title row">
                <div class="site-title-wrapper col-6">
                    <h2 class="text-center site-title floatRight">{{ beforeSlash }}</h2>
                </div>
                <div class="site-title-wrapper col-6 rød">
                    <h2 class="text-center site-title floatLeft">/{{ afterSlash }}</h2>
                </div>
            </div>
            <div class="smallScreen section-title">
                <h2 class="text-center site-title">{{ beforeSlash }}<span class="rød">/{{ afterSlash }}</span></h2>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeSection',
  props: {
    afterSlash: {
      type: String,
      required: true
    },
    beforeSlash: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>

</style>
