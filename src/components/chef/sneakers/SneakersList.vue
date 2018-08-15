<template lang="html">
  <div class="portfolioContainer row">

    <!-- Moon Loader -->
    <transition-group name="fade" tag="div" class="transition-div">
      <moon-loader v-if="sneakers == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
      <p v-if="sneakers == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
    </transition-group>

    <!-- ADD STORE BOX -->
    <div class="list-complete-item filter-item sneakerBox col-md-4 col-xl-4 col-6">
      <router-link to="/admin/sneaker/new">
        <div class="portfolio-box">
          <!-- :style="'background-image: url(' + sneaker.imgUrl + ');'" -->
          <div class="portfolio-box-img">
            <p class="portfolio-img-middle">
              <!-- <i class="fa fa-plus-circle"></i> -->
              <i class="material-icons" style="font-size:125px;color:#ff5858;">add_circle</i>
            </p>
            <!-- <p class="sneakerDate">{{ sneaker.date | moment("MMMM D") }}</p> -->
          </div>
          <div class="gallary-title text-center">
            <h6 class="productTitle">
              <!-- <router-link :to="{ name: 'sneaker', params: { id: sneakerId }}"> -->
              Add New Sneaker
              <!-- </router-link> -->
            </h6>
            <span class="productPrice"></span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'sneaker', params: { id: sneakerId }}"> -->
      </router-link>
    </div>

    <!-- STORES LOOP BOX -->
    <div v-if="sneaker.title" v-for="sneaker in sneakers" :sneaker="sneaker" :sneaker-id="sneaker['.key']" :key="sneaker['.key']" class="list-complete-item filter-item sneakerBox col-md-4 col-xl-4 col-6">
      <router-link :to="{ name: 'sneakerEdit', params: { id: sneaker['.key'] } }">
        <div class="portfolio-box">
          <div :style="'background-image: url(' + sneaker.imgUrl + ');'" class="portfolio-box-img">
            <p class="productDate">{{ sneaker.date | moment("MMMM D") }}</p>
          </div>
          <div class="gallary-title text-center">
            <h6 class="productTitle">
              <!-- <router-link :to="{ name: 'sneaker', params: { id: sneakerId }}"> -->
              {{ sneaker.title }}
              <!-- </router-link> -->
            </h6>
            <span class="productPrice">{{ sneaker.price }}€</span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'sneaker', params: { id: sneakerId }}"> -->
      </router-link>
    </div>

  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { orderBy } from 'lodash'
const db = firebaseApp.database()

var sneakersRef = db.ref('sneakers')

export default {
  name: 'sneakersList',
  // firebase: {
  //   sneakers: sneakersRef
  // },
  data () {
    return {
      newSneaker: {
        sneakerId: '',
        link: '',
        sneakers: []
      }
    }
  },
  created () {
    document.title = 'Release Plug | Sneakers'
    // FILTER GEM
    this.$bindAsArray('sneakers', sneakersRef)
  },
  computed: {
    sortedSneakers () {
      return orderBy(this.sneakers, ['name'], ['desc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    addSneakerLink () {
      console.log(this.newSneaker.id)
      // console.log(event.target.find(':selected').text())
      console.log()
      // db.ref('sneakers/' + this.sneaker.id).push(this.newSneaker)
    }
  },
  components: {
    MoonLoader
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
