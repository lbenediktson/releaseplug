<template lang="html">
  <div class="col-lg-5">
      <div class="sidebar">

          <!-- Recent entries widget-->
          <aside class="widget widget_recent_entries_custom">
              <div class="widget-title">No Available Stores</div>
          </aside>

      </div>
  </div>
</template>

<script>
export default {
  name: 'noStores'
}
</script>

<style lang="css" scoped>
.sidebar .widget:last-child {
    border: 0;
    padding: 0;
}
.widget-title {
    position: relative;
    font-size: 16px;
    margin: 0 0 25px;
    font-weight: 500;
}

.widget-title:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
}

.widget-title:after {
    content: "";
    display: block;
    width: 35px;
    z-index: 1;
    position: relative;
    border-bottom: 1px solid #ff5858;
    margin: 20px auto 25px 0px;
}

.widget {
    margin: 0 0 40px;
    font-size: 14px;
}
</style>
