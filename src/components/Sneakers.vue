<template>
  <div>
    <!-- <home-section></home-section> -->
    <section class="load-clean section bg-light">
      <transition-group style="height:initial;" name="fade" tag="div" class="transition-div">
        <moon-loader v-if="sneakers == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
        <p v-if="sneakers == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
      </transition-group>
      <div class="mt-4 mb-3 container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bigScreen section-title row">
                    <div class="site-title-wrapper col-6">
                        <h2 class="text-center site-title floatRight">Release</h2>
                    </div>
                    <div class="site-title-wrapper col-6 rød">
                        <h2 class="text-center site-title floatLeft">/Sneakers</h2>
                    </div>
                </div>
                <div class="smallScreen section-title">
                    <h2 class="text-center site-title">Release<span class="rød">/Sneakers</span></h2>
                </div>
            </div>
        </div>
      </div>
      <div class="container">
        <!-- NOTE: Filter til brands evt -->
        <!-- <div class="row">
            <div class="col-lg-12">
                <div class="portfolioFilter text-center">
                    <a @click="filterItems('allChecked')" :class="{ current : filter == 'allChecked' }">All</a>
                    <a @click="filterItems('sneakerChecked')" :class="{ current : filter == 'sneakerChecked' }" class="">Sneakers</a>
                    <a @click="filterItems('clothingChecked')" :class="{ current : filter == 'clothingChecked' }" class="">Clothing</a>
                    <a @click="filterItems('salesChecked')" :class="{ current : filter == 'salesChecked' }" class="">Sales</a>
                </div>
            </div>
        </div> -->
        <div class="port portfolio-masonry mb-3">
          <!-- <div class="portfolioContainer row"> -->
            <transition-group tag="div" name="fadeTrans" class="portfolioContainer row">
              <p :key="'noProductsInfo1'" v-if="!sneakers" class="light-info-text col-12">No current sneakers at the moment.</p>
              <p :key="'noProductsInfo2'" v-if="!sneakers" class="light-info-text col-12">You can head to our <router-link to="/previous/sneakers">previous sneakers</router-link> if you want to see our previously featured sneakers.</p>
              <tabel v-if="sneaker.date >= dateNow" v-for="sneaker in sortedSneakers" :sneaker="sneaker" :sneaker-id="sneaker.siteTag" :key="sneaker.siteTag"/>
            </transition-group>
          <!-- </div> -->
        </div>
      </div>
    </section>
    <div v-if="sneakers" style="margin:0 0 35px;display:flex;justify-content:center;">
      <router-link to="/previous" class="btn btn-custom">Go to previous</router-link>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import Tabel from './Tabel'
import HomeSection from './HomeSection'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { orderBy } from 'lodash'

const db = firebaseApp.database()

export default {
  name: 'Sneakers',
  components: {
    Tabel,
    HomeSection,
    MoonLoader
  },
  metaInfo: {
    titleTemplate: 'Sneakers | %s'
  },
  data () {
    return {
      msg: 'Sko',
      // filter: 'allChecked',
      sneakers: []
    }
  },
  // firebase () {
  //   return {
  // sneakers: sneakersRef.orderByChild(this.filter).equalTo(true)
  //   }
  // },
  methods: {
    filterItems (a) {
      this.filter = a
    }
  },
  created () {
    var that = this
    var ref = db.ref('sneakers').orderByChild('date').startAt(this.dateNow)
    ref.on('value', function (snapshot) {
      that.sneakers = snapshot.val()
    })
  },
  // watch: {
  //   sneakers (sneakers) {
  //     if (sneakers > '') {
  //       var counter = 0
  //       for (var i = 0; i < sneakers.length; i++) {
  //         if (sneakers[i].date >= this.dateNow) {
  //           counter = counter + 1
  //         }
  //       }
  //       if (counter > 0) {
  //         this.noSneakers = false
  //       } else {
  //         this.noSneakers = true
  //       }
  //     } else {
  //       this.noSneakers = false
  //     }
  //   }
  // },
  computed: {
    sortedSneakers () {
      return orderBy(this.sneakers, ['date'], ['asc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* FILTER */
.container-filter {
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 30px;
    padding: 0;
    text-align: center;
}

.container-filter li {
    list-style: none;
    display: inline-block;
}

.container-filter li a {
    font-size: 14px;
    padding: 7px 15px;
    color: #000 !important;
    border: 1px solid transparent;
    margin: 0px 3px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    -webkit-transition: all 0.6s;
}

.portfolioFilter {
    margin-bottom: 30px;
}

.portfolioFilter a {
    display: inline-block;
    margin: 3px 2px;
    font-size: 12px;
    text-transform: uppercase;
    padding: 7px 12px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.4s ease-in-out;
    color: #333;
    border-radius: 35px;
}

.portfolioFilter a:hover,.portfolioFilter a.current {
    background-color: #ff5858;
    color: #fff;
}

/* ------------------ */
</style>
