<template lang="html">
  <div class="portfolioContainer row">

    <!-- Moon Loader -->
    <transition-group name="fade" tag="div" class="transition-div">
      <moon-loader v-if="steals == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
      <p v-if="steals == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
    </transition-group>

    <!-- ADD STORE BOX -->
    <div class="list-complete-item filter-item stealBox col-md-4 col-xl-4 col-6">
      <router-link to="/admin/steal/new">
        <div class="portfolio-box">
          <div class="portfolio-box-img">
            <p class="portfolio-img-middle">
              <i class="material-icons" style="font-size:125px;color:#ff5858;">add_circle</i>
            </p>
          </div>
          <div class="gallary-title text-center">
            <h6 class="productTitle">
              Add New Steal
            </h6>
            <span class="productPrice"></span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- PICKS LOOP BOX -->
    <div v-if="steal.title" v-for="steal in steals" :steal="steal" :steal-id="steal['.key']" :key="steal['.key']" class="list-complete-item filter-item stealBox col-md-4 col-xl-4 col-6">
      <router-link :to="{ name: 'stealEdit', params: { id: steal['.key'] } }">
        <div class="portfolio-box">
          <div :style="'background-image: url(' + steal.imgUrl + ');'" class="portfolio-box-img">
            <p class="productDate">{{ steal.startDate | moment("D. MMM") }} - {{ steal.endDate | moment("D. MMM") }}</p>
          </div>
          <div class="gallary-title text-center">
            <h6 class="productTitle">
              <!-- <router-link :to="{ name: 'steal', params: { id: stealId }}"> -->
              {{ steal.title }}
              <!-- </router-link> -->
            </h6>
            <span class="productPrice">{{ steal.priceOff }}%</span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'steal', params: { id: stealId }}"> -->
      </router-link>
    </div>

  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { orderBy } from 'lodash'
const db = firebaseApp.database()

var stealsRef = db.ref('steals')

export default {
  name: 'stealsList',
  // firebase: {
  //   steals: stealsRef
  // },
  data () {
    return {
      newSteal: {
        stealId: '',
        link: '',
        steals: []
      }
    }
  },
  created () {
    document.title = 'Release Plug | Steals'
    // FILTER GEM
    this.$bindAsArray('steals', stealsRef)
  },
  computed: {
    sortedSteals () {
      return orderBy(this.steals, ['name'], ['desc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    addStealLink () {
      console.log(this.newSteal.id)
      // console.log(event.target.find(':selected').text())
      console.log()
      // db.ref('steals/' + this.steal.id).push(this.newSteal)
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
