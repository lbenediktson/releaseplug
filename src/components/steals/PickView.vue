<template lang="html">
  <div class="col-lg-5">
      <div class="sidebar">

          <!-- Recent entries widget-->
          <aside class="widget widget_recent_entries_custom">
              <div class="widget-title">Our picks</div>
              <ul>
                  <li v-for="(pick, id) in stealPicks" :key="id" class="store-list">
                      <div class="store-wrapper">
                        <img class="store-image" :src="pick.imgUrl" alt="">
                        <div class="container-fluid">
                          <span>{{ pick.title }}</span><br>
                          <span class="oldPrice">{{ pick.oldPrice }}€</span><br>
                          <span>{{ pick.newPrice }}€</span>
                        </div>
                        <a :href="pick.affiliateLink" target="_blank">
                          <button class="go-to go-to-custom" type="button" name="button">Buy</button>
                        </a>
                      </div>
                  </li>
              </ul>
          </aside>

      </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
const db = firebaseApp.database()

export default {
  name: 'PickView',
  data () {
    return {
      stealpicks: [],
      stores: [],
      arraystealStores: []
    }
  },
  methods: {
    releaseTime (clock) {
      var hours = parseInt(clock.substring(0, 2))
      var hoursMinus = hours - 12
      switch (hours) {
        case 0:
          return clock + ' AM'
        case 1:
          return clock + ' AM'
        case 2:
          return clock + ' AM'
        case 3:
          return clock + ' AM'
        case 4:
          return clock + ' AM'
        case 5:
          return clock + ' AM'
        case 6:
          return clock + ' AM'
        case 7:
          return clock + ' AM'
        case 8:
          return clock + ' AM'
        case 9:
          return clock + ' AM'
        case 10:
          return clock + ' AM'
        case 11:
          return clock + ' AM'
        case 12:
          return clock + ' PM'
        case 13:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 14:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 15:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 16:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 17:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 18:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 19:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 20:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 21:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 22:
          return '0' + hoursMinus + clock.substring(2, 6) + ' PM'
        case 23:
          return hoursMinus + clock.substring(2, 6) + ' PM'
        case 24:
          return '00' + clock.substring(2, 6) + ' PM'
        default:
          return 'No time yet.'
      }
    }
  },
  created () {
    // DEN SKAL VÆRE NEDENUNDER måske: db.ref('steals/' + this.$route.params.id + '/stores')
    this.$bindAsArray('stealStores', db.ref('steals/').orderByChild('siteTag').equalTo(this.$route.params.id))
    this.$bindAsObject('stores', db.ref('stores'))
    // this.arraystealStores = Object.values(this.steal.stores)
  },
  props: {
    steal: {
      type: Object,
      required: true
    },
    stealPicks: {
      type: Array,
      required: true
    }
  },
  computed: {
    availableStores () {
      // VED IKKE HVAD DETTE ER: return this.stores ? Object.values(this.stealStores[0].stores).map(s => this.stores[s.storeId]) : []
      var arrayStores = Object.values(this.stealStores[0].stores).map(s => this.stores[s.storeId])
      return arrayStores
    }
  }
}
</script>

<style lang="css" scoped>
.oldPrice {
  text-decoration: line-through;
  color: #777!important;
}
.store-image {
  width: 70px!important;
  max-height: 70px;
}
.container-fluid p {
  margin-bottom: 0;
  font-size: 17px
}
.container-fluid span {
  color: #333;
}
.go-to-custom {
  font-size: 20px;
  /* margin-right: 15px; */
  margin: 10px 0 10px 0;
  border: 0;
  background-color: #ff5858;
  color: #fff;
  padding: 10px 20px;
  border-radius: 35px;
  cursor: pointer;
}
img {
  width: 60px;
}
.store-wrapper {
  width: 100%;
  height: 70px;
  display: flex;
}
.img-fluid {
  display: block;
}
.wb {
  width: 33.33%;
  margin: 0!important;
  text-align: center;
}
.clearfix {
  height: 75px;
  width: 100%;
  display: inline-flex;
}
.wi {
  height: 100%;
  width: 40px;
}

.sidebar .widget:last-child {
    border: 0;
    padding: 0;
}

.widget_search form {
    position: relative;
}

.search-button {
    position: absolute;
    top: 0;
    height: 100%;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}

.widget_search .form-control:focus {
    border-color: #ddd;
    outline: 0;
    box-shadow: none;
}

.search-button:focus,
.search-button.focus,
.search-button.active.focus,
.search-button.active:focus,
.search-button:active.focus,
.search-button:active:focus {
    outline: none;
    box-shadow: none;
}

.search-button:hover {
    color: #0db3e3;
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

.widget ul,
.widget ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

.widget ul li,
.widget ol li {
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.widget ul li:last-child,
.widget ol li:last-child {
    border: 0;
}

.widget ul li a,
.widget ol li a {
    color: #333333;
}

.widget ul li a:hover,
.widget ol li a:hover {
    color: #ff5858;
}

.widget select {
    width: 100%;
    box-shadow: none;
    border-radius: 2px;
    border-color: #eee;
    padding: 12px 15px;
    height: 49px;
    font-size: 14px;
}

.widget select:focus {
    border-color: #0db3e3;
    box-shadow: none;
}

.widget_archive ul li a,
.widget_categories ul li a {
    margin-right: 5px;
}

.post-date {
    display: block;
    opacity: .7;
}

.tagcloud > a {
    background: #f5f5f5;
    border-radius: 2px;
    color: #303133;
    display: inline-block;
    font-size: 9px;
    letter-spacing: 1px;
    margin: 5px 10px 5px 0;
    padding: 7px 8px 5px 10px;
    text-transform: uppercase;
}

.tagcloud > a:hover {
    background: #ff5858;
    color: #fff;
}

.widget_recent_entries_custom ul li {
    border-bottom: 1px solid rgba(238, 238, 238, .7);
    margin-bottom: 15px;
    padding-bottom: 15px;
}

.widget_recent_entries_custom .wi {
    float: left;
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
}

.widget_recent_entries_custom .wb {
    padding-top: 2px;
    margin-left: 84px;
}

.widget_recent_entries_custom .wb a {
    color: #303133;
}

.text-widget-des {
    line-height: 24px;
}
</style>
