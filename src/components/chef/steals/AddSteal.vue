<template lang="html">
  <section class="section">
      <div class="container">

          <div class="row">
            <div class="col-lg-7">

                <article class="custom-form post">

                    <div class="post-header">

                        <h1 class="site-title text-center">Add/Steal</h1>

                        <label for="stealTitle">Steal Title: </label>
                        <input autofocus type="text" id="stealTitle" placeholder="Wood Wood Summer Steal" class="form-control" v-model="newSteal.title">

                        <label for="stealBrand">Brand: </label>
                        <input type="text" id="stealBrand" placeholder="Wood Wood" class="form-control" v-model="newSteal.brand">

                        <label for="stealStartDate">Start Date: </label>
                        <input type="date" id="stealStartDate" class="form-control" v-model="newSteal.startDate">

                        <label for="stealEndDate">End Date: </label>
                        <input type="date" id="stealEndDate" class="form-control" v-model="newSteal.endDate">

                        <label for="stealPriceOff">Price of range (%): </label>
                        <input type="text" id="stealPriceOff" placeholder="25 - 45" class="form-control" v-model="newSteal.priceOff">

                        <label for="link">Link to whole sale: </label>
                        <input type="text" id="link" placeholder="https://nk-ed.com/sale/summer-sale" class="form-control" v-model="newSteal.link">

                        <label for="imgUrl">Image URL: </label>
                        <input type="text" id="imgUrl" placeholder="https://images.stockx.com/wood-wood-summer-steal.jpg" class="form-control" v-model="newSteal.imgUrl">

                        <label for="stealDescription">Description: </label>
                        <textarea rows="6" type="text" id="stealDescription" placeholder="Wood Wood releases their.." class="form-control" v-model="newSteal.description"></textarea>

                        <button @click="addSteal" class="btn btn-custom" type="button" name="button">Add <i class="material-icons">send</i> </button>

                    </div>

                </article>

            </div>

            <div class="portfolioContainer col-lg-5">

              <div class="">
                <h1 class="site-title text-center">Preview/Steal</h1>
                <a>
                  <div class="portfolio-box">
                    <div :style="'background-image: url(' + newSteal.imgUrl + ');'" class="portfolio-box-img">
                      <p v-if="newSteal.endDate" class="productDate">{{ newSteal.startDate | moment("D. MMM") }} - {{ newSteal.startDate | moment("D. MMM") }}</p>
                    </div>
                    <div class="gallary-title text-center">
                      <h6 class="productTitle">
                        {{ newSteal.title }}
                      </h6>
                      <span v-if="newSteal.priceOff != ''" class="productPrice">{{ newSteal.priceOff }}%</span>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
      </div>
      <div class="v-toaster">
        <span></span>
      </div>
  </section>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
// import { debounce } from 'lodash'

const db = firebaseApp.database()
var stealsRef = db.ref('steals')

export default {
  name: 'addSteal',
  data () {
    return {
      // counter: 0,
      // toasterMessages: [],
      createdStealKey: '',
      newSteal: {
        title: '',
        date: '',
        price: '',
        imgUrl: '',
        description: '',
        brand: '',
        siteTag: ''
      }
    }
  },
  methods: {
    addSteal: function () {
      var that = this
      var a = this.newSteal
      var b = a.title.trim().split(' ').join('-')
      var c = b.split('"').join('')
      var d = c.split("'").join('')
      var e = d.split('/').join('-')
      a.siteTag = e.toLowerCase()
      a.title = a.title.toLowerCase()
      var newStealRef = stealsRef.push()
      newStealRef.set(this.newSteal, function (error) {
        if (error) {
          that.$toaster.error('Der skete en fejl under tilføjelsen af produktet. Kontakt admin eller prøv igen senere.')
        } else {
          that.$toaster.success('Produkt tilføjet!')
        }
      })
      a.title = ''
      a.date = ''
      a.resellEstimate = ''
      a.price = ''
      a.productCode = ''
      a.imgUrl = ''
      a.description = ''
      a.brand = ''
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
div.toaster {
  position: fixed;
  right: 25px;
  top: 95px;
  z-index: 9999;
}
div.toaster > p {
  color: #fff;
  font-family: 'NeoSans', sans-serif;
  padding: 14px 20px 12px;
  background-color: #ff5858;
  border-radius: 35px;
  margin-bottom: 10px;
}
.stealTitle {
  text-transform: capitalize;
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
