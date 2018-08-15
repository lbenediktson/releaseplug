<template lang="html">
  <section class="load-clean section bg-light">
    <transition-group name="fade" tag="div" class="transition-div">
      <moon-loader v-if="stores == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
      <p v-if="stores == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
    </transition-group>
    <div class="mt-4 mb-3 container">
      <div class="row">
          <div class="col-lg-12">
              <div class="bigScreen section-title row">
                  <div class="site-title-wrapper col-6">
                      <h2 class="text-center site-title floatRight">Release</h2>
                  </div>
                  <div class="site-title-wrapper col-6 rød">
                      <h2 class="text-center site-title floatLeft">/Retailers</h2>
                  </div>
              </div>
              <div class="smallScreen section-title">
                  <h2 class="text-center site-title">Release<span class="rød">/Retailers</span></h2>
              </div>
          </div>
      </div>
    </div>
    <div class="container">
      <div class="port portfolio-masonry mb-3">
        <transition-group name="fadeTrans" tag="div" class="portfolioContainer row">
          <div v-if="store" v-for="store in stores"  :key="store['.key']" class="list-complete-item filter-item sneakerBox col-md-4 col-xl-4 col-6">
            <a target="_blank" :href="store.website">
              <div class="portfolio-box">
                <div :style="'background-image: url(' + store.imgUrl + ');'" class="portfolio-box-img">
                  <!-- <p class="collectionDate">{{ collection.date | moment("MMMM D") }}</p> -->
                </div>
                <div class="gallary-title text-center">
                  <h6 class="collectionTitle">
                    {{ store.name }}
                  </h6>
                  <span class="collectionPrice">Shipping from {{ store.shipping }}</span><br>
                  <button style="margin-top:15px;" class="btn btn-custom" type="button" name="button">Shop</button>
                </div>
              </div>
            </a>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'

import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

const db = firebaseApp.database()

var storesRef = db.ref('stores').orderByChild('name')

export default {
  name: 'retailers',
  firebase: {
    stores: storesRef
  },
  metaInfo: {
    titleTemplate: 'Retailers | %s'
  },
  components: {
    MoonLoader
  },
  created () {
    document.title = 'Release Plug | Retailers'
  }
}
</script>

<style lang="css" scoped>
.collectionTitle {
  text-transform: uppercase;
  font-family: 'NeoSansIB', sans-serif;
  font-weight: 700;
}
.collectionPrice {
  font-family: 'NeoSansIB', sans-serif;
}
.collectionDate {
  padding: 7px 12px;
  margin: 10px;
  float: right;
  background-color: #ff5858;
  color: #fff;
  border-radius: 35px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
}
.col-xl-4 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 15px;
}
/* PORTFOLIOBOX */
.portfolio-box {
    overflow: hidden;
    position: relative;
    padding: 0;
    /* margin-top: 15px; */
    /* margin-bottom: 15px; */
}
span {
  font-family: 'Roboto Mono', monospace;
  /* font-size: 16px!important; */
}
div.portfolio-box:hover > span, a:hover, div.portfolio-box:hover > h6 {
  color: #ff5757;
  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}
.portfolio-box .portfolio-box-img {
    position: relative;
    overflow: hidden;
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-bottom: 1px solid #ececec;
}

.portfolio-box .portfolio-box-img:after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0px;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}

.portfolio-box .portfolio-box-img {
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}

.portfolio-box .portfolio-box-detail {
    opacity: 0;
    color: #ffffff;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    overflow: hidden;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}

.portfolio-box .portfolio-box-detail h4 {
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 16px;
}

.portfolio-box .portfolio-box-detail p {
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    font-weight: 500;
}

.portfolio-box:hover .portfolio-box-detail {
    transform: translateY(-100%);
    z-index: 3;
    opacity: 1;
}

.portfolio-box:hover .portfolio-box-img:after {
    background: rgba(40, 40, 46, 0.2);
}

/* GALLARY TITLE */
.gallary-title {
    padding: 25px 0;
    background: #ffffff;
    min-height: 122px;
}

.gallary-title h3 {
    color: #555;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.4s ease-in-out 0s;
}

.gallary-title > span {
    font-family: 'Roboto', sans-serif;
    color: #3f3f3f;
    font-size: 14px;
    text-transform: uppercase;
}

.gallary-title a {
    color: #393434;
}

.project-desc {
    line-height: 26px;
    font-size: 15px;
}
/* .card {
  border-radius: 0!important
}
.storeTitle {
  text-transform: uppercase;
  font-family: 'NeoSansIB', sans-serif;
  font-weight: 700;
}
.card-body {
  border-top: 1px solid #dfdfdf;
}
.col-lg-4 {
  margin-top: 30px;
}
.btn {
  padding: 15px 0;
} */
</style>
