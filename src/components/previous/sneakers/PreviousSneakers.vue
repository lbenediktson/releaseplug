<template>
  <div>
    <section class="load-clean section bg-light">
      <transition-group name="fade" tag="div" class="transition-div">
        <moon-loader v-if="sneakers == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
        <p v-if="sneakers == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
      </transition-group>
      <home-section
        :beforeSlash="'Previous'"
        :afterSlash="'Releases'"
      />
      <div class="container widget_search">
        <form @submit.prevent="" class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <input v-model="searchText" class="form-control" type="search" placeholder="Search...">
            <button class="search-button" type="submit"><span class="mdi mdi-magnify"></span></button>
        </form>
      </div>
      <div class="container">
        <div class="port portfolio-masonry mb-3">
          <transition-group tag="div" name="fadeTrans" class="portfolioContainer row">
            <previous-sneak v-if="sneaker.date" class="list-complete-item filter-item col-md-4 col-xl-4 col-6 sneakerBox" v-for="sneaker in sortedSneakers" :sneaker-id="sneaker.siteTag" :sneaker="sneaker" :key="sneaker.siteTag"/>
          </transition-group>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import PreviousSneak from '@/components/previous/sneakers/PreviousSneak'
import HomeSection from '@/components/HomeSection'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { orderBy } from 'lodash'

const db = firebaseApp.database()
var sneakersRef = db.ref('sneakers').orderByChild('date').endAt(this.dateNow)

export default {
  name: 'previousSneakers',
  components: {
    PreviousSneak,
    HomeSection,
    MoonLoader
  },
  metaInfo: {
    titleTemplate: 'Previous | %s'
  },
  data () {
    return {
      msg: 'Sko',
      // filter: 'allChecked',
      sneakers: [],
      snapShotSneakers: [],
      searchText: ''
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
  watch: {
    filter () {
      // FILTER GEM
      // this.$bindAsArray('sneakers', sneakersRef.orderByChild(this.filter).equalTo(true))
      this.$bindAsArray('sneakers', sneakersRef)
    }
    // searchText (val) {
    //   this.$bindAsArray('sneakers', sneakersRef.orderByChild('title').startAt(val.toLowerCase()).endAt('\uf8ff' + val.toLowerCase() + '\uf8ff'))
    // }
  },
  created () {
    var that = this
    document.title = 'Release Plug | Sneakers'
    // FILTER GEM
    // this.$bindAsArray('sneakers', sneakersRef)
    var ref = db.ref('sneakers').orderByChild('date').endAt(this.dateNow)
    ref.on('value', function (snapshot) {
      that.sneakers = snapshot.val()
    })
    console.log(Object.keys(this.sneakers)[6])
  },
  computed: {
    sortedSneakers () {
      var str = orderBy(this.sneakers, ['date'], ['desc'])
      // var str = this.sneakers
      return str.filter((sneaker) => {
        var textSearch = new RegExp(this.searchText.toLowerCase())
        return sneaker.title.match(textSearch)
      })
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* SEARCH */
.widget_search {
  margin-bottom: 30px;
}
.widget_search form {
    position: relative;
}

.search-button {
    position: absolute;
    top: 0;
    height: 100%;
    right: 15px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    cursor: pointer;
}

.widget_search .form-control:focus {
  box-shadow: 0 0 1pt 2pt rgba(255, 88, 88, 0.6);
  border-color: rgba(0,0,0,0);
  /* outline-color: #ff5858!important; */
  outline: 0;
}

.search-button:focus,
.search-button.focus,
.search-button.active.focus,
.search-button.active:focus,
.search-button:active.focus,
.search-button:active:focus {
    outline: 0;
    box-shadow: none;
}

.search-button:hover {
    color: #ff5858;
}
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
