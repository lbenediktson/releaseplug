<template lang="html">
  <div class="portfolioContainer row">

    <!-- ADD STORE BOX -->
    <div class="list-complete-item filter-item storeBox col-md-4 col-xl-4 col-6">
      <router-link to="/admin/store/new">
        <div class="portfolio-box">
          <!-- :style="'background-image: url(' + store.imgUrl + ');'" -->
          <div class="portfolio-box-img">
            <p class="portfolio-img-middle"><i class="fa fa-plus-circle"></i></p>
            <!-- <p class="storeDate">{{ store.date | moment("MMMM D") }}</p> -->
          </div>
          <div class="gallary-title text-center">
            <h6 class="storeTitle">
              <!-- <router-link :to="{ name: 'store', params: { id: storeId }}"> -->
              New Store
              <!-- </router-link> -->
            </h6>
            <span class="sneakerPrice">Shipping from COUNTRY</span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'store', params: { id: storeId }}"> -->
      </router-link>
    </div>

    <!-- STORES LOOP BOX -->
    <div v-if="store.name" v-for="store in stores" :store="store" :store-id="store['.key']" :key="store['.key']" class="list-complete-item filter-item storeBox col-md-4 col-xl-4 col-6">
      <router-link :to="{ name: 'storeEdit', params: { id: store['.key'] } }">
        <div class="portfolio-box">
          <div :style="'background-image: url(' + store.imgUrl + ');'" class="portfolio-box-img">
            <!-- <p class="store-date">{{ dateFormatter(store.date) }}</p> -->
            <!-- <p class="storeDate">{{ store.date | moment("MMMM D") }}</p> -->
          </div>
          <div class="gallary-title text-center">
            <h6 class="storeTitle">
              <!-- <router-link :to="{ name: 'store', params: { id: storeId }}"> -->
              {{ store.name }}
              <!-- </router-link> -->
            </h6>
            <span class="sneakerPrice">Shipping from {{ store.shipping }}</span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'store', params: { id: storeId }}"> -->
      </router-link>
    </div>

  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import { orderBy } from 'lodash'
const db = firebaseApp.database()

var storesRef = db.ref('stores')

export default {
  name: 'storeList',
  // firebase: {
  //   stores: storesRef
  // },
  data () {
    return {
      newStore: {
        storeId: '',
        link: '',
        stores: []
      }
    }
  },
  created () {
    document.title = 'Release Plug | Sneakers'
    // FILTER GEM
    this.$bindAsArray('stores', storesRef)
  },
  computed: {
    sortedStores () {
      return orderBy(this.stores, ['name'], ['desc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    addStoreLink () {
      console.log(this.newStore.id)
      // console.log(event.target.find(':selected').text())
      console.log()
      // db.ref('stores/' + this.store.id).push(this.newStore)
    }
  }
}
</script>

<style lang="css" scoped>
ul.list-group-flush {
  padding-left: 0 !important;
}
.fa-plus-circle {
  color: #ff5858;
}
.portfolio-img-middle {
  margin-right: auto;
  margin-left: auto;
  font-size: 100px;
  margin-top: 30px;
}
@media (max-width: 450px) {
  .portfolio-img-middle {
    font-size: 75px;
    margin-top: 30px;
  }
}
</style>
