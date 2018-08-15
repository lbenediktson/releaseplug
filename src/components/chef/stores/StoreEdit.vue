<template lang="html">
  <section class="section">

      <div class="container">

          <div class="row">
            <div class="col-lg-7">

                <article class="custom-form post">

                    <div class="post-header">

                        <!-- <h1 class="site-title text-center">Edit<span class="rød">/Store</span></h1> -->

                        <label for="storeName">Store name: </label>
                        <input autofocus type="text" id="storeName" placeholder="Adidas" class="form-control" v-model="updatedStore.name">

                        <label for="storeShipping">Shipping from: </label>
                        <input type="text" id="storeShipping" placeholder="Denmark" class="form-control" v-model="updatedStore.shipping">

                        <label for="storeLink">Website link (affiliate): </label>
                        <input type="text" id="storeLink" placeholder="https://viglink.examplestore.com" class="form-control" v-model="updatedStore.website">

                        <label for="storeImgUrl">Billede url: </label>
                        <input type="text" id="storeImgUrl" placeholder="Link for picture" class="form-control" v-model="updatedStore.imgUrl">

                        <button @click="updateStore" class="btn btn-custom" type="button" name="button">Gem</button>

                    </div>

                </article>

            </div>

            <div class="portfolioContainer col-lg-5">

              <div class="">
                <h1 class="site-title text-center">Preview of store</h1>
                <a>
                  <div class="portfolio-box">
                    <div :style="'background-image: url(' + updatedStore.imgUrl + ');'" class="portfolio-box-img">
                      <!-- <p class="store-date">{{ dateFormatter(store.date) }}</p> -->
                      <!-- <p class="storeDate">{{ store.date | moment("MMMM D") }}</p> -->
                    </div>
                    <div class="gallary-title text-center">
                      <h6 class="storeTitle">
                        <!-- <router-link :to="{ name: 'store', params: { id: storeId }}"> -->
                        {{ updatedStore.name }}
                        <!-- </router-link> -->
                      </h6>
                      <span class="sneakerPrice">Shipping from {{ updatedStore.shipping }}</span>
                    </div>
                  </div>
                  <!-- <router-link :to="{name: 'store', params: { id: storeId }}"> -->
                </a>
              </div>

            </div>

            <!-- <div class="col-lg-5">
                <div class="sidebar">

                    <aside class="widget widget_recent_entries_custom">
                        <div class="widget-title">Available Stores</div>
                        <ul>
                          <li v-if="Object.values(store[0].stores)[id].affiliateLink" v-for="(store, id) in availableStores" :key="id" class="store-list">
                              <div class="store-wrapper">
                                <img class="store-image" :src="store.imgUrl" alt="">
                                <div class="container-fluid">
                                  <p>{{ store.name }}</p>
                                  <span>{{ releaseTime(Object.values(store[0].stores)[id].date) }}</span>
                                </div>
                                <a class="admin-button" :href="Object.values(store[0].stores)[id].affiliateLink" target="_blank">
                                  Køb
                                </a>
                                <a @click="removeStore(Object.keys(store[0].stores)[id])" class="admin-button" name="button">Slet</a>
                              </div>
                          </li>

                          <li>
                            <div class="add-store-wrapper">
                              <form style="width:100%;" @submit.prevent="addStore">
                                  <select v-model="newStore.storeId" class="" name="">
                                      <option v-for="(store, id) in stores" :key="id" :value="id">{{ store.name }}</option>
                                  </select>

                                  <label for="affiliateLink">Link</label>
                                  <input class="form-control" type="text" id="affiliateLink" v-model="newStore.affiliateLink">

                                  <label for="date">Clock</label>
                                  <input class="form-control" type="time" id="date" v-model="newStore.date">

                                  <input type="submit" class="btn-center btn btn-custom" name="" value="Tilføj butik">
                              </form>
                            </div>
                          </li>
                        </ul>
                    </aside>
                </div>
            </div> -->
          </div>
          <button @click="removeStore" style="margin-top: 15px; float: right;" class="btn btn-custom" type="button" name="button">Remove store</button>
      </div>
  </section>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
// import { orderBy } from 'lodash'

const db = firebaseApp.database()

export default {
  name: 'storeEdit',
  data () {
    return {
      store: [],
      updatedStore: {
        name: '',
        imgUrl: '',
        shipping: '',
        website: '',
        siteTag: ''
      }
    }
  },
  methods: {
    removeStore () {
      if (confirm('Are you sure you want to delete ' + this.store.name + '?')) {
        db.ref('/stores/' + this.$route.params.id).remove()
        this.$router.go(-1)
      }
    },
    updateStore: function () {
      var route = this.$route.params.id

      var a = this.updatedStore
      var b = a.name.trim().split(' ').join('-')
      var c = b.split('"').join('')
      var d = c.split("'").join('')
      var e = d.split('/').join('-')
      a.siteTag = e.toLowerCase()
      db.ref('stores/' + route + '/name').set(a.name)
      db.ref('stores/' + route + '/shipping').set(a.shipping)
      db.ref('stores/' + route + '/website').set(a.website)
      db.ref('stores/' + route + '/imgUrl').set(a.imgUrl)
      db.ref('stores/' + route + '/siteTag').set(a.siteTag)
    }
  },
  created () {
    this.$bindAsObject('updatedStore', db.ref('stores/' + this.$route.params.id))
    this.$bindAsObject('store', db.ref('stores/' + this.$route.params.id))
  }
}
</script>

<style lang="css" scoped>
.container-fluid p {
  margin-bottom: 0;
  font-size: 17px
}
.container-fluid span {
  color: grey;
}
.admin-button {
  color: #fff!important;
  font-size: 14px;
  background: #ff5858;
  padding: 8px 16px;
  border-radius: 35px;
  margin-left: 20px;
  border: 0;
  cursor: pointer;
}

img.store-image {
  width: 60px;
}
.store-wrapper {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}
.add-store-wrapper {
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
.sidebar {
    padding-left: 30px;
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
/* ----- */
label {
  font-size: 16px;
}
input, textarea {
  font-size: 14px;
  margin-bottom: 10px;
}
.custom-form label {
    font-size: 14px;
    font-weight: 500;
}
.custom-form .form-control {
    margin-bottom: 25px;
    box-shadow: none !important;
    height: 44px;
}

.custom-form .form-control:focus {
    border-color: #ff5858;
    box-shadow: none;
    outline: none;
}

.custom-form textarea.form-control {
    height: auto;
}
</style>
