<template>
  <div>
    <!-- <home-section></home-section> -->
    <section class="load-clean section bg-light">
      <transition-group name="fade" tag="div" class="transition-div">
        <moon-loader v-if="collections == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
        <p v-if="collections == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
      </transition-group>
      <div class="mt-4 mb-4 container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bigScreen section-title row">
                    <div class="site-title-wrapper col-6">
                        <h2 class="text-center site-title floatRight">Previous</h2>
                    </div>
                    <div class="site-title-wrapper col-6 rød">
                        <h2 class="text-center site-title floatLeft">/Collections</h2>
                    </div>
                </div>
                <div class="smallScreen section-title">
                    <h2 class="text-center site-title">Previous<span class="rød">/Collections</span></h2>
                </div>
            </div>
        </div>
      </div>
      <div class="container widget_search">
        <form @submit.prevent="" class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <input v-model="searchText" class="form-control" type="search" placeholder="Search...">
            <button class="search-button" type="submit"><span class="mdi mdi-magnify"></span></button>
        </form>
      </div>
      <div class="container">
        <div class="port portfolio-masonry mb-3">
          <!-- <div class="portfolioContainer row"> -->
            <transition-group tag="div" name="fadeTrans" class="portfolioContainer row">
              <previous-collection v-if="collection.date < dateNow" v-for="collection in sortedCollections" :collection="collection" :collection-id="collection.siteTag" :key="collection['.key']"/>
            </transition-group>
          <!-- </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import PreviousCollection from '@/components/previous/collections/PreviousCollection'
import HomeSection from '@/components/HomeSection'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { orderBy } from 'lodash'

const db = firebaseApp.database()
var collectionsRef = db.ref('collections')

export default {
  name: 'previousCollections',
  components: {
    PreviousCollection,
    HomeSection,
    MoonLoader
  },
  data () {
    return {
      searchText: '',
      msg: 'Sko',
      // filter: 'allChecked',
      collections: []
    }
  },
  // firebase () {
  //   return {
  // collections: collectionsRef.orderByChild(this.filter).equalTo(true)
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
      // this.$bindAsArray('collections', collectionsRef.orderByChild(this.filter).equalTo(true))
      this.$bindAsArray('collections', collectionsRef)
    }
  },
  created () {
    document.title = 'Release Plug | Collections'
    // FILTER GEM
    this.$bindAsArray('collections', collectionsRef)
  },
  computed: {
    sortedCollections () {
      var str = orderBy(this.collections, ['date'], ['desc'])
      return str.filter((collection) => {
        var textSearch = new RegExp(this.searchText.toLowerCase())
        return collection.title.match(textSearch)
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
