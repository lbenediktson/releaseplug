<template lang="html">
  <!-- <div class="col-md-8 col-sm-12">
    <h1>{{ sneaker.title }}</h1>
    <hr>
    <h5>{{ sneaker.date }}</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img style="width: 100%;" :src="sneaker.imgUrl" alt="Skoen.">
  </div> -->
  <div class="col-lg-7">
      <!-- Post-->
      <article class="post">
          <div class="post-preview">
            <img :src="sneaker.imgUrl" alt="" class="img-fluid img-rounded">
          </div>
          <div class="post-header">
              <h2 class="post-title">{{ sneaker.title }}</h2>
              <ul class="post-meta">
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Date for release')"><i class="material-icons">today</i> <small>{{ sneaker.date }}</small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Date for release'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Product code')" v-if="sneaker.productCode != ''"><i class="material-icons md-18">vpn_key</i> <small>{{ sneaker.productCode }} </small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Product code'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Retail price')"><i class="material-icons">local_grocery_store</i> <small>{{ sneaker.price }}<span class="euro-span" v-if="sneaker.price != 'Unknown'">€</span></small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Retail price'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Our current resell estimation')"><i class="material-icons">show_chart</i> <small>{{ sneaker.resellEstimate }}<span class="euro-span" v-if="sneaker.resellEstimate != 'Unknown'">€</span></small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Our current resell estimation'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
              </ul>
          </div>

          <hr>

          <div class="post-content">
              <p>{{ sneaker.description }}</p>
          </div>

      </article>

      <!-- Pagination end-->
  </div>
</template>

<script>
export default {
  name: 'SneakerView',
  props: {
    sneaker: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      toolTipMsg: ''
    }
  },
  methods: {
    showToolTip (toolMsg) {
      this.toolTipMsg = toolMsg
    }
  }
}
</script>

<style lang="css" scoped>
.infoTooltip {
  text-align: center;
  position: absolute;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #ff5858;
  color: #fff;
  border-radius: 35px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-to {
  opacity: 1;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* ^^ TOOLTIP ^^ */

ul.post-meta > li > small {
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
}
.post {
    margin: 0 0 45px;
}

.post + .post {
    border-top: 1px solid rgba(238, 238, 238, .7);
    padding-top: 50px;
}

.post-preview {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    margin: 0 0 25px;
}

.post-header {
    margin: 0 0 15px;
}

.post-title {
    font-family: 'NeoSansIB', sans-serif;
    font-weight: 700;
    font-size: 30px;
    margin: 0 0 15px;
    text-transform: capitalize;
}

.post-title a {
    color: #333;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}

.post-title a:hover {
    color: #ff5858;
}

.post-meta {
    list-style: none;
    padding: 0;
    margin: 0;
}

@media (max-width: 767px) {
  .post-meta > li {
    width: 49%;
    margin: 0!important;
  }
}

.post-meta > li {
    display: inline-block;
    margin-right: 30px;
    color: #444;
}
.post-meta > li > i {
    color: #555;
}

.post-meta > li:last-child {
    margin-right: 0;
}

.post .post-meta a,
.post-meta a {
    color: #888;
}

.post-meta a:hover,
.post-meta a:focus,
.post-more a:hover {
    color: #ff5858;
}

.post-more a {
    font-size: 14px;
    color: #333;
    font-weight: 500;
    text-decoration: underline !important;
}

.post-tags {
    margin: 40px 0 0;
}

.post-tags a {
    background-color: #f5f5f5;
    border-radius: 2px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 7px;
    color: #303133;
    padding: 7px 8px 5px 10px;
    margin: 5px 10px 5px 0;
}

.post-tags a:hover,
.post-tags a:focus {
    background: #0db3e3;
    color: #fff;
}

.post-content {
  margin-top: 15px;
}

.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
    margin: 30px 0 20px;
}

.post-content h1:first-child,
.post-content h2:first-child,
.post-content h3:first-child,
.post-content h4:first-child,
.post-content h5:first-child,
.post-content h6:first-child {
    margin-top: 0;
}

.post-content p,
.post-content ul,
.post-content ol {
    margin: 0 0 20px;
    line-height: 25px;
}

.post-content ul,
.post-content ol {
    margin-left: 40px;
}

.post-content ul {
    list-style-type: disc;
}

.post-content ol {
    list-style-type: decimal;
}
</style>
