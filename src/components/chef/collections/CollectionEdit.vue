<template lang="html">
  <section class="section">

      <div class="container">

          <div class="row">
            <div class="col-lg-7">

                <article class="custom-form post">

                    <div v-if="switcher == 'collection'" class="post-header">

                        <h1 class="site-title text-center">Edit<span class="rød">/Collection</span></h1>

                        <label for="collectionTitle">Collection Title: </label>
                        <input autofocus type="text" id="collectionTitle" placeholder="Wood Wood Summer Collection" class="form-control" v-model="updatedCollection.title">

                        <label for="collectionBrand">Brand: </label>
                        <input type="text" id="collectionBrand" placeholder="Wood Wood" class="form-control" v-model="updatedCollection.brand">

                        <label for="collectionDate">Date: </label>
                        <input type="date" id="collectionDate" class="form-control" v-model="updatedCollection.date">

                        <label for="collectionPrice">Price range (€): </label>
                        <input type="text" id="collectionPrice" placeholder="40 - 120" class="form-control" v-model="updatedCollection.price">

                        <label for="imgUrl">Image URL: </label>
                        <input type="text" id="imgUrl" placeholder="https://images.stockx.com/wood-wood-summer-collection.jpg" class="form-control" v-model="updatedCollection.imgUrl">

                        <label for="collectionDescription">Description: </label>
                        <textarea rows="6" type="text" id="collectionDescription" placeholder="Wood Wood releases their.." class="form-control" v-model="updatedCollection.description"></textarea>

                        <button @click="updateCollection" class="btn btn-custom" type="button" name="button">Gem</button>

                    </div>
                    <div v-if="switcher == 'stores'" class="post-header">

                        <h1 class="site-title text-center">Add<span class="rød">/Store</span></h1>

                        <form style="width:100%;" @submit.prevent="addStore">
                            <label for="storeChoose">Store</label>
                            <select v-model="newStore.storeId" class="form-control" id="storeChoose">
                                <option v-for="(store, id) in stores" :key="id" :value="id">{{ store.name }}</option>
                            </select>

                            <label for="affiliateLink">Link</label>
                            <input class="form-control" type="text" id="affiliateLink" v-model="newStore.affiliateLink">

                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="clockType" type="radio" id="known" value="known">
                              <label for="known" class="custom-control-label">Release time is known</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="clockType" type="radio" id="unknown" value="unknown">
                              <label class="custom-control-label" for="unknown">Release time is unknown</label>
                            </div>

                            <br>
                            <br>

                            <label for="date">Clock</label>
                            <input class="form-control" :disabled="clockType === 'unknown'" type="time" id="date" v-model="newStore.date">

                            <div class="custom-control custom-radio custom-control-inline">
                              <input :disabled="clockType === 'known'" class="custom-control-input" v-model="newStore.date" type="radio" id="notKnown" value="Not known yet.">
                              <label for="notKnown" class="custom-control-label">Not known yet</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input :disabled="clockType === 'known'" class="custom-control-input" v-model="newStore.date" type="radio" id="random" value="Random.">
                              <label class="custom-control-label" for="random">Random</label>
                            </div>

                            <hr>
                            <p style="margin-bottom:14px;font-weight:500;">Clock Type</p>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="newStore.type" type="radio" id="raffle" value="raffle">
                              <label for="raffle" class="custom-control-label">This is a raffle</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input class="custom-control-input" v-model="newStore.type" type="radio" id="buy" value="buy">
                              <label class="custom-control-label" for="buy">Able to buy from store</label>
                            </div>

                            <input style="margin-top:10px;" type="submit" class="btn-center btn btn-custom" name="" value="Tilføj butik">
                        </form>

                    </div>

                </article>

            </div>

            <div class="portfolioContainer col-lg-5">

              <div v-if="switcher != 'stores'">
                <div class="widget-title">Preview of collection</div>
                <a>
                  <div class="portfolio-box">
                    <div :style="'background-image: url(' + updatedCollection.imgUrl + ');'" class="portfolio-box-img">
                      <p v-if="updatedCollection.date.length == 10" class="productDate">{{ updatedCollection.date | moment("MMMM D") }}</p>
                    </div>
                    <div class="gallary-title text-center">
                      <h6 class="productTitle">
                        <!-- <router-link :to="{ name: 'collection', params: { id: collectionId }}"> -->
                        {{ updatedCollection.title }}
                        <!-- </router-link> -->
                      </h6>
                      <span v-if="updatedCollection.price != ''" class="productPrice">{{ updatedCollection.price }}€</span>
                    </div>
                  </div>
                </a>
              </div>
              <div v-if="switcher != 'collection'" class="sidebar">

                  <!-- <aside class="widget widget_recent_entries_custom">
                      <div class="widget-title">Preview of store</div>
                      <ul>
                        <li v-if="switcher != 'collection'" class="store-list">
                            <div class="store-wrapper">
                              <img v-if="newStore.storeId != ''" class="store-image" :src="storeImageRetrieve(newStore.storeId)" alt="">
                              <div class="container-fluid">
                                <p v-if="newStore.storeId != ''">{{ storeNameRetrieve(newStore.storeId) }}</p>
                                <span v-if="newStore.date.length < 6">{{ newStore.date }}</span>
                                <span v-if="newStore.date.length > 6">{{ newStore.date }}</span>
                              </div>
                              <a :href="newStore.affiliateLink" target="_blank">
                                <button v-if="newStore.type != ''" class="go-to go-to-custom" type="button" name="button">
                                  <span v-if="newStore.type === 'buy'">Buy</span>
                                  <span v-if="newStore.type === 'raffle'">Raffle</span>
                                </button>
                              </a>
                            </div>
                        </li>
                      </ul>
                  </aside> -->

              </div>

              <div class="sidebar">
                  <aside class="widget widget_recent_entries_custom">
                      <div class="widget-title">Available Stores</div>
                      <ul>
                        <li v-if="switcher != 'stores'" class="store-list">
                            <a @click="switcher = 'stores'" class="btn-center" target="_blank">
                              <button class="center-item go-to go-to-custom" style="display:flex;" type="button" name="button">Add new store <i class="material-icons">create</i></button>
                            </a>
                        </li>
                        <li v-if="switcher == 'stores'" class="store-list">
                            <a @click="switcher = 'collection'" class="btn-center" target="_blank">
                              <button class="center-item go-to go-to-custom" type="button" name="button">Edit collection</button>
                            </a>
                        </li>
                        <li v-if="collection.stores" v-for="(store, id) in availableStores" :key="id" class="store-list">
                            <div class="store-wrapper">
                              <img class="store-image" :src="store.imgUrl" alt="">
                              <div class="container-fluid">
                                <p>{{ store.name }}</p>
                                <span v-if="Object.values(collection.stores)[id].date">{{ releaseTime(Object.values(collection.stores)[id].date) }}</span>
                              </div>
                              <a style="margin-right:10px;" :href="Object.values(collection.stores)[id].affiliateLink" target="_blank">
                                <button class="go-to go-to-custom" type="button" name="button">
                                  <span v-if="Object.values(collection.stores)[id].type === 'buy'">Buy</span>
                                  <span v-if="Object.values(collection.stores)[id].type === 'raffle'">Raffle</span>
                                </button>
                              </a>
                              <a @click="removeStore(store.name, id)" target="_blank">
                                <button class="go-to go-to-custom" type="button" name="button"><i class="material-icons">delete</i></button>
                              </a>
                            </div>
                        </li>
                      </ul>
                  </aside>
              </div>

            </div>
          </div>
          <button @click="removeCollection" style="margin-top: 15px; float: right;" class="btn btn-custom" type="button" name="button">Remove collection</button>
      </div>
  </section>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import { orderBy } from 'lodash'

const db = firebaseApp.database()

export default {
  name: 'collectionEdit',
  data () {
    return {
      clockType: 'known',
      newStoreName: '',
      newStoreImage: '',
      switcher: 'collection',
      stores: [],
      collection: [],
      newStore: {
        affiliateLink: '',
        storeId: '',
        date: new Date(),
        type: ''
      },
      updatedCollection: {
        title: '',
        productCode: '',
        resellEstimate: '',
        date: '',
        price: '',
        imgUrl: '',
        description: '',
        brand: '',
        siteTag: ''
      }
    }
  },
  computed: {
    availableStores () {
      // VED IKKE HVAD DETTE ER: return this.stores ? Object.values(this.collectionStores[0].stores).map(s => this.stores[s.storeId]) : []
      if (this.collection.stores) {
        var arrayStores = Object.values(this.collection.stores).map(s => this.stores[s.storeId])
        return orderBy(arrayStores, ['date'], ['asc'])
      } else {

      }
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
    },
    addStore () {
      var that = this
      var ns = this.newStore
      var newStoreRef = db.ref('/collections/' + this.$route.params.id + '/stores').push()
      newStoreRef.set(this.newStore, function (error) {
        if (error) {
          that.$toaster.error('Der skete en fejl under tilføjelsen af produktet. Kontakt admin eller prøv igen senere.')
        } else {
          that.$toaster.success('Produkt tilføjet!')
          ns.affiliateLink = ''
          ns.storeId = ''
          ns.date = new Date()
          ns.type = ''
        }
      })
    },
    removeCollection () {
      var that = this
      if (confirm('Are you sure you want to delete ' + this.collection.title + '?')) {
        var collectionRef = db.ref('/collections/' + this.$route.params.id)
        collectionRef.remove()
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
    removeStore (storeName, id) {
      var that = this
      if (confirm('Are you sure you want to delete ' + storeName + '?')) {
        var storeRef = db.ref('/collections/' + this.$route.params.id + '/stores/' + Object.keys(this.collection.stores)[id])
        storeRef.remove()
          .then(function () {
            that.$toaster.success('Butik fjernet!')
          })
          .catch(function (error) {
            console.log(error)
            that.$toaster.error('Butik kunne ikke fjernes. Kontakt admin eller prøv igen senere.')
          })
      }
    },
    storeNameRetrieve (id) {
      // console.log(id)
      this.$bindAsObject('newStoreName', db.ref('stores/' + id + '/name'))
      return this.newStoreName['.value']
    },
    storeImageRetrieve (id) {
      this.$bindAsObject('newStoreImage', db.ref('stores/' + id + '/imgUrl'))
      return this.newStoreImage['.value']
    },
    updateCollection: function () {
      var that = this
      var route = this.$route.params.id
      var a = this.updatedCollection
      var b = a.title.trim().split(' ').join('-')
      var c = b.split('"').join('')
      var d = c.split("'").join('')
      var e = d.split('/').join('-')
      a.siteTag = e.toLowerCase()
      db.ref('collections/' + route).update({
        title: a.title,
        brand: a.brand,
        price: a.price,
        date: a.date,
        description: a.description,
        imgUrl: a.imgUrl,
        siteTag: a.siteTag
      }, function (error) {
        if (error) {
          that.$toaster.error('Der skete en fejl. Prøv igen senere.')
          console.log(error)
        } else {
          that.$toaster.success('Produkt opdateret!')
        }
      })
      // db.ref('collections/' + route + '/title').set(a.title)
      // db.ref('collections/' + route + '/date').set(a.date)
      // db.ref('collections/' + route + '/resellEstimate').set(a.resellEstimate)
      // db.ref('collections/' + route + '/price').set(a.price)
      // db.ref('collections/' + route + '/productCode').set(a.productCode)
      // db.ref('collections/' + route + '/description').set(a.description)
      // db.ref('collections/' + route + '/brand').set(a.brand)
      // db.ref('collections/' + route + '/imgUrl').set(a.imgUrl)
      // db.ref('collections/' + route + '/siteTag').set(a.siteTag)
    }
  },
  created () {
    this.$bindAsObject('updatedCollection', db.ref('collections/' + this.$route.params.id))
    this.$bindAsObject('collection', db.ref('collections/' + this.$route.params.id))
    this.$bindAsObject('stores', db.ref('stores'))
  }
}
</script>

<style lang="css" scoped>
button > i.material-icons {

}
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

img.collection-image {
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

.collection-wrapper {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}
.add-collection-wrapper {
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
