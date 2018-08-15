<template lang="html">
  <section class="section">

      <div class="container">

          <div class="row">
            <div class="col-lg-7">

                <article class="custom-form post">

                    <div v-if="switcher == 'steal'" class="post-header">

                        <h1 class="site-title text-center">Edit<span class="rød">/Steal</span></h1>

                        <label for="stealTitle">Steal Title: </label>
                        <input v-if="updatedSteal.title" autofocus type="text" id="stealTitle" placeholder="Wood Wood Summer Steal" class="form-control" v-model="updatedSteal.title">

                        <label for="stealBrand">Brand: </label>
                        <input type="text" id="stealBrand" placeholder="Wood Wood" class="form-control" v-model="updatedSteal.brand" v-if="updatedSteal.brand">

                        <label for="stealStartDate">Start Date: </label>
                        <input type="date" id="stealStartDate" class="form-control" v-model="updatedSteal.startDate" v-if="updatedSteal.startDate">

                        <label for="stealEndDate">End Date: </label>
                        <input type="date" id="stealEndDate" class="form-control" v-model="updatedSteal.endDate">

                        <label for="stealPriceOff">Price of range (%): </label>
                        <input type="text" id="stealPriceOff" placeholder="25 - 45" class="form-control" v-model="updatedSteal.priceOff" v-if="updatedSteal.priceOff">

                        <label for="link">Link to whole sale: </label>
                        <input type="text" id="link" placeholder="https://nk-ed.com/sale/summer-sale" class="form-control" v-model="updatedSteal.link" v-if="updatedSteal.link">

                        <label for="imgUrl">Image URL: </label>
                        <input type="text" id="imgUrl" placeholder="https://images.stockx.com/wood-wood-summer-steal.jpg" class="form-control" v-model="updatedSteal.imgUrl" v-if="updatedSteal.imgUrl">

                        <label for="stealDescription">Description: </label>
                        <textarea rows="6" type="text" id="stealDescription" placeholder="Wood Wood releases their.." class="form-control" v-model="updatedSteal.description" v-if="updatedSteal.description"></textarea>

                        <button @click="updateSteal" class="btn btn-custom" type="button" name="button">Gem</button>

                    </div>
                    <div v-if="switcher == 'picks'" class="post-header">

                        <h1 class="site-title text-center">Add<span class="rød">/Pick</span></h1>

                        <form style="width:100%;" @submit.prevent="addPick">
                            <label for="pickTitle">Pick Title</label>
                            <input class="form-control" type="text" id="pickTitle" v-model="newPick.title">

                            <label for="affiliateLink">Link</label>
                            <input class="form-control" type="text" id="affiliateLink" v-model="newPick.affiliateLink">

                            <label for="imgUrl">Image URL</label>
                            <input class="form-control" type="text" id="imgUrl" v-model="newPick.imgUrl">

                            <label for="oldPrice">Old Price (€)</label>
                            <input class="form-control" type="text" id="oldPrice" v-model="newPick.oldPrice">

                            <label for="newPrice">New Price (€)</label>
                            <input class="form-control" type="text" id="newPrice" v-model="newPick.newPrice">

                            <!-- <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="clockType" type="radio" id="known" value="known">
                              <label for="known" class="custom-control-label">Release time is known</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="clockType" type="radio" id="unknown" value="unknown">
                              <label class="custom-control-label" for="unknown">Release time is unknown</label>
                            </div> -->

                            <!-- <br>
                            <br> -->

                            <!-- <label for="date">Clock</label>
                            <input class="form-control" :disabled="clockType === 'unknown'" type="time" id="date" v-model="newPick.date">

                            <div class="custom-control custom-radio custom-control-inline">
                              <input :disabled="clockType === 'known'" class="custom-control-input" v-model="newPick.date" type="radio" id="notKnown" value="Not known yet.">
                              <label for="notKnown" class="custom-control-label">Not known yet</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input :disabled="clockType === 'known'" class="custom-control-input" v-model="newPick.date" type="radio" id="random" value="Random.">
                              <label class="custom-control-label" for="random">Random</label>
                            </div> -->

                            <!-- <hr>
                            <p style="margin-bottom:14px;font-weight:500;">Clock Type</p>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="newPick.type" type="radio" id="raffle" value="raffle">
                              <label for="raffle" class="custom-control-label">This is a raffle</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="newPick.type" type="radio" id="buy" value="buy">
                              <label class="custom-control-label" for="buy">Able to buy from pick</label>
                            </div> -->

                            <input style="margin-top:10px;" type="submit" class="btn-center btn btn-custom" name="" value="Tilføj butik">
                        </form>

                    </div>

                </article>

            </div>

            <div class="portfolioContainer col-lg-5">

              <div v-if="switcher != 'picks'">
                <div class="widget-title">Preview of steal</div>
                <a>
                  <div class="portfolio-box">
                    <div :style="'background-image: url(' + updatedSteal.imgUrl + ');'" class="portfolio-box-img">
                      <p v-if="updatedSteal.endDate" class="productDate">{{ updatedSteal.startDate | moment("D. MMM") }} - {{ updatedSteal.endDate | moment("D. MMM") }}</p>
                    </div>
                    <div class="gallary-title text-center">
                      <h6 class="productTitle">
                        <!-- <router-link :to="{ name: 'steal', params: { id: stealId }}"> -->
                        {{ updatedSteal.title }}
                        <!-- </router-link> -->
                      </h6>
                      <span v-if="updatedSteal.price != ''" class="productPrice">{{ updatedSteal.priceOff }}%</span>
                    </div>
                  </div>
                </a>
              </div>
              <div v-if="switcher != 'steal'" class="sidebar">

                  <aside class="widget widget_recent_entries_custom">
                      <div class="widget-title">Preview of pick</div>
                      <ul>
                        <li v-if="switcher != 'steal'" class="pick-list">
                            <div class="store-wrapper">
                              <img v-if="newPick.imgUrl.length > 5" class="store-image" :src="newPick.imgUrl" alt="">
                              <div class="container-fluid">
                                <p v-if="newPick.title">{{ newPick.title }}</p>
                                <span class="oldPrice" v-if="newPick.oldPrice">{{ newPick.oldPrice }}€</span><br>
                                <span v-if="newPick.newPrice">{{ newPick.newPrice }}€</span>
                              </div>
                              <a :href="newPick.affiliateLink" target="_blank">
                                <button v-if="newPick.affiliateLink != ''" class="go-to go-to-custom" type="button" name="button">
                                  Buy
                                </button>
                              </a>
                            </div>
                        </li>
                      </ul>
                  </aside>

              </div>

              <div class="sidebar">
                  <aside class="widget widget_recent_entries_custom">
                      <div class="widget-title">Available Picks</div>
                      <ul>
                        <li v-if="switcher != 'picks'" class="store-list">
                            <a @click="switcher = 'picks'" class="btn-center" target="_blank">
                              <button class="center-item go-to go-to-custom" style="display:flex;" type="button" name="button">Add new pick <i class="material-icons">create</i></button>
                            </a>
                        </li>
                        <li v-if="switcher == 'picks'" class="store-list">
                            <a @click="switcher = 'steal'" class="btn-center" target="_blank">
                              <button class="center-item go-to go-to-custom" type="button" name="button">Edit steal</button>
                            </a>
                        </li>
                        <li v-if="steal.picks" v-for="(pick, id) in steal.picks" :key="id" class="store-list">
                            <div class="store-wrapper">
                              <img class="store-image" :src="pick.imgUrl" alt="">
                              <div class="container-fluid">
                                <p v-if="pick.title">{{ pick.title }}</p>
                                <span class="oldPrice" v-if="pick.oldPrice">{{ pick.oldPrice }}</span><br>
                                <span v-if="pick.newPrice">{{ pick.newPrice }}</span>
                              </div>
                              <a style="margin-right:10px;" :href="pick.affiliateLink" target="_blank">
                                <button class="go-to go-to-custom" type="button" name="button">
                                  Buy
                                  <!-- <span v-if="Object.values(steal.picks)[id].type === 'raffle'">Raffle</span> -->
                                </button>
                              </a>
                              <a @click="removePick(pick.title, id)" target="_blank">
                                <button class="go-to go-to-custom" type="button" name="button"><i class="material-icons">delete</i></button>
                              </a>
                            </div>
                        </li>
                      </ul>
                  </aside>
              </div>

            </div>
          </div>
          <button @click="removeSteal" style="margin-top: 15px; float: right;" class="btn btn-custom" type="button" name="button">Remove steal</button>
      </div>
  </section>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
// import { orderBy } from 'lodash'

const db = firebaseApp.database()

export default {
  name: 'stealEdit',
  data () {
    return {
      clockType: 'known',
      switcher: 'steal',
      picks: [],
      steal: [],
      newPick: {
        imgUrl: '',
        affiliateLink: '',
        oldPrice: '',
        newPrice: '',
        title: ''
      },
      updatedSteal: {
        title: '',
        startDate: new Date(),
        endDate: new Date(),
        priceOff: '',
        link: '',
        imgUrl: '',
        description: '',
        brand: '',
        siteTag: '',
        picks: []
      }
    }
  },
  methods: {
    addPick () {
      var that = this
      var ns = this.newPick
      var newPickRef = db.ref('/steals/' + this.$route.params.id + '/picks').push()
      newPickRef.set(this.newPick, function (error) {
        if (error) {
          that.$toaster.error('Der skete en fejl under tilføjelsen af produktet. Kontakt admin eller prøv igen senere.')
        } else {
          that.$toaster.success('Produkt tilføjet!')
          ns.affiliateLink = ''
          ns.oldPrice = ''
          ns.imgUrl = ''
          ns.newPrice = ''
          ns.title = ''
          that.switcher = 'steal'
        }
      })
    },
    removeSteal () {
      var that = this
      if (confirm('Are you sure you want to delete ' + this.steal.title + '?')) {
        var stealRef = db.ref('/steals/' + this.$route.params.id)
        stealRef.remove()
          .then(function () {
            that.$toaster.success('Produkt fjernet!')
            that.$router.go(-1)
          })
          .catch(function (error) {
            console.log(error)
            that.$toaster.error('Produkt kunne ikke fjernes. Kontakt admin eller prøv igen senere.')
          })
      }
    },
    removePick (pickName, id) {
      var that = this
      if (confirm('Are you sure you want to delete ' + pickName + '?')) {
        var pickRef = db.ref('/steals/' + this.$route.params.id + '/picks/' + id)
        pickRef.remove()
          .then(function () {
            that.$toaster.success('Pick fjernet!')
          })
          .catch(function (error) {
            console.log(error)
            that.$toaster.error('Butik kunne ikke fjernes. Kontakt admin eller prøv igen senere.')
          })
      }
    },
    // pickNameRetrieve (id) {
    //   // console.log(id)
    //   this.$bindAsObject('newPickName', db.ref('picks/' + id + '/name'))
    //   return this.newPickName['.value']
    // },
    // pickImageRetrieve (id) {
    //   this.$bindAsObject('newPickImage', db.ref('picks/' + id + '/imgUrl'))
    //   return this.newPickImage['.value']
    // },
    updateSteal: function () {
      var that = this
      var route = this.$route.params.id
      var a = this.updatedSteal
      var b = a.title.trim().split(' ').join('-')
      var c = b.split('"').join('')
      var d = c.split("'").join('')
      var e = d.split('/').join('-')
      a.siteTag = e.toLowerCase()
      db.ref('steals/' + route).update({
        title: a.title,
        startDate: new Date(),
        endDate: new Date(),
        priceOff: a.priceOff,
        link: a.link,
        imgUrl: a.imgUrl,
        description: a.description,
        brand: a.brand,
        siteTag: a.siteTag
      }, function (error) {
        if (error) {
          that.$toaster.error('Der skete en fejl. Prøv igen senere.')
          console.log(error)
        } else {
          that.$toaster.success('Produkt opdateret!')
        }
      })
      // db.ref('steals/' + route + '/title').set(a.title)
      // db.ref('steals/' + route + '/date').set(a.date)
      // db.ref('steals/' + route + '/resellEstimate').set(a.resellEstimate)
      // db.ref('steals/' + route + '/price').set(a.price)
      // db.ref('steals/' + route + '/productCode').set(a.productCode)
      // db.ref('steals/' + route + '/description').set(a.description)
      // db.ref('steals/' + route + '/brand').set(a.brand)
      // db.ref('steals/' + route + '/imgUrl').set(a.imgUrl)
      // db.ref('steals/' + route + '/siteTag').set(a.siteTag)
    }
  },
  created () {
    this.$bindAsObject('updatedSteal', db.ref('steals/' + this.$route.params.id))
    this.$bindAsObject('steal', db.ref('steals/' + this.$route.params.id))
    this.$bindAsObject('picks', db.ref('steals/' + this.$route.params.id + '/picks'))
  }
}
</script>

<style lang="css" scoped>
section {
  padding-top: 100px!important;
}
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

img.steal-image {
  width: 60px;
}

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.steal-wrapper {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}
.add-steal-wrapper {
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
