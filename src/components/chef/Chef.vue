<template lang="html">
  <div class="mt-7 load-clean container-fluid">
    <section>

      <div class="row">

        <div class="chefCategory col-sm-6 col-xs-12">
          <router-link to="admin/sneakers">
            <div class="categoryBox" style="background-image: url('/static/img/sneakers.jpg')">
              <h2 class="site-title">Sneakers</h2>
            </div>
          </router-link>
        </div>

        <div class="chefCategory col-sm-6 col-xs-12">
          <router-link to="admin/collections">
            <div class="categoryBox" style="background-image: url('/static/img/collections.jpg')">
              <h2 class="site-title">Collections</h2>
            </div>
          </router-link>
        </div>

        <div class="chefCategory col-sm-6 col-xs-12">
          <router-link to="admin/steals">
            <div class="categoryBox" style="background-image: url('/static/img/steals.jpg')">
              <h2 class="site-title">Steals</h2>
            </div>
          </router-link>
        </div>

        <div class="chefCategory col-sm-6 col-xs-12">
          <router-link to="admin/stores">
            <div class="categoryBox" style="background-image: url('/static/img/stores.jpg')">
              <h2 class="site-title">Stores</h2>
            </div>
          </router-link>
        </div>

      </div>

    </section>
  </div>
</template>

<script>
// import AddSneaker from '@/components/chef/AddSneaker'
// import AddStore from '@/components/chef/AddStore'
// import SneakerList from '@/components/chef/SneakerList'
// import AddCollection from '@/components/chef/AddCollection'
// import CollectionList from '@/components/chef/CollectionList'
// import AddSales from '@/components/chef/AddSales'
// import SalesList from '@/components/chef/SalesList'

export default {
  name: 'chef',
  data () {
    return {
      user: null
    }
  },
  components: {
    // AddStore,
    // AddSneaker,
    // SneakerList,
    // AddCollection,
    // CollectionList,
    // AddSales,
    // SalesList
  }
}
</script>

<style lang="css" scoped>
.container-fluid {
  padding: 0;
}
.chefCategory {
  padding: 0!important;
}
div.col-sm-6 {
  padding: 0!important;
}
div.row {
  margin-left: 0!important;
  margin-right: 0!important;
}
.categoryBox {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 150px 0;
  transition: .4s;
}
.categoryBox:hover,
.categoryBox:active {
  filter: brightness(1.75);
}
.categoryBox > h2 {
  color: #fff;
}
.mt-10 {
  margin-top: 100px;
}

.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 500ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
  transform: scale(0.4);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
input.btn.btn-custom {
  margin-left: 20px;
}
input.btn.btn-custom.btn-block {
  margin: 0;
}
i {
  float: right;
  cursor: pointer;
}
.form-group {
  text-align: center;
  justify-content: center;
}
.col-12, .col-md-4, .col-sm-6 {
  padding-bottom: 30px !important;
  text-align: center !important;
}
img {
  width: 100%;
}
label {
  margin: 0 15px;
  font-size: 20px;
}
.product-item {
  background-size: cover;
  background-position: center;
}
.products {
  margin-bottom: 30px;
}
.section {
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
}
.container {
  margin-bottom: 150px;
}
</style>
