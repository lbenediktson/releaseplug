<template>
  <div>
    <!-- <home-section></home-section> -->
    <section class="load-clean section bg-light">
      <transition-group style="height:initial;" name="fade" tag="div" class="transition-div">
        <moon-loader v-if="steals == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
        <p v-if="steals == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
      </transition-group>
      <div class="mt-4 mb-3 container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bigScreen section-title row">
                    <div class="site-title-wrapper col-6">
                        <h2 class="text-center site-title floatRight">Release</h2>
                    </div>
                    <div class="site-title-wrapper col-6 rød">
                        <h2 class="text-center site-title floatLeft">/Steals</h2>
                    </div>
                </div>
                <div class="smallScreen section-title">
                    <h2 class="text-center site-title">Release<span class="rød">/Steals</span></h2>
                </div>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="port portfolio-masonry mb-3">
          <!-- <transition name="fade">
            <p class="col-12" style="margin-top:320px;" :key="'noProductsInfo'" v-if="noSteals" class="light-info-text">No steals available</p>
          </transition> -->
          <transition-group name="fadeTrans" tag="div" class="portfolioContainer row">
            <p :key="'noProductsInfo1'" v-if="noSteals" class="light-info-text col-12">No current steals at the moment.</p>
            <p :key="'noProductsInfo2'" v-if="noSteals" class="light-info-text col-12">You can check out the <router-link to="/">latest releases</router-link>, while we find your steals.</p>
            <steals-grid v-if="steal.endDate >= dateNow" v-for="steal in sortedSteals" :key="steal.siteTag" :site-id="steal.siteTag" :steal="steal"/>
          </transition-group>
        </div>
      </div>
    </section>
    <div v-if="!noSteals" style="margin:0 0 35px;display:flex;justify-content:center;">
      <router-link to="/previous" class="btn btn-custom">Go to previous releases</router-link>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import { orderBy } from 'lodash'
import StealsGrid from '@/components/steals/StealsGrid'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

const db = firebaseApp.database()

var stealsRef = db.ref('steals')

export default {
  name: 'steals',
  components: {
    StealsGrid,
    MoonLoader
  },
  metaInfo: {
    titleTemplate: 'Steals | %s'
  },
  data () {
    return {
      noSteals: false,
      steals: []
    }
  },
  methods: {
    tester () {
      console.log(this.steals)
      console.log('virker')
    }
  },
  watch: {
    steals (steals) {
      if (steals > '') {
        var counter = 0
        for (var i = 0; i < steals.length; i++) {
          if (steals[i].endDate >= this.dateNow) {
            counter = counter + 1
          }
        }
        if (counter > 0) {
          this.noSteals = false
        } else {
          this.noSteals = true
        }
      } else {
        this.noSteals = false
      }
    }
  },
  created () {
    this.$bindAsArray('steals', stealsRef)
  },
  mounted () {
    document.title = 'Release Plug | Steals'
  },
  computed: {
    sortedSteals () {
      return orderBy(this.steals, ['endDate'], ['asc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h1 {
  padding: 15px 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
