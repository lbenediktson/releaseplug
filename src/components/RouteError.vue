<template lang="html">
  <section class="load-clean section bg-light">
    <div class="mt-4 mb-4 container">
      <div class="row">
          <div class="col-lg-12">
              <div class="bigScreen section-title row">
                  <div class="site-title-wrapper col-6">
                      <h2 class="text-center site-title floatRight">Release</h2>
                  </div>
                  <div class="site-title-wrapper col-6 rød">
                      <h2 class="text-center site-title floatLeft">/NotFound</h2>
                  </div>
              </div>
              <div class="smallScreen section-title">
                  <h2 class="text-center site-title">Release<span class="rød">/NotFound</span></h2>
              </div>
          </div>
      </div>
    </div>
    <div class="wrapper col-md-6 offset-md-3 col-xs-12">
      <p class="noobInfo">Unfortunately the site you were looking for, doesn't seem to exist (anymore).</p>
      <p class="noobInfo">You can head to <router-link to="/">our front page</router-link>, if you want to see the latest releases.</p>
      <!-- <button @click="logoutUser" class="btn btn-custom" name="button">Log ud</button> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'routeError'
}
</script>

<style lang="css" scoped>
.noobInfo {
  text-align: center;
  color: #888;
  margin: 10px 0 0;
}
a {
  color: #ff5858;
  text-decoration: underline!important;
}
a:hover, a:active, a:focus {
  color: #ea2a2a;
}
</style>
