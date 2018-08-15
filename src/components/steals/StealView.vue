<template lang="html">
  <div class="col-lg-7">
      <!-- Post-->
      <article class="post">
          <div class="post-preview">
            <img :src="steal.imgUrl" alt="" class="img-fluid img-rounded">
          </div>
          <div class="post-header">
              <h2 class="post-title">{{ steal.title }}</h2>
              <ul class="post-meta">
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Date for release')"><i class="far fa-calendar-alt"></i> <small>{{ steal.startDate | moment("MMM D") }} - {{ steal.endDate | moment("MMM D") }}</small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Date for release'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Brand')" v-if="steal.productCode != ''"><i class="fas fa-user"></i><small> {{ steal.brand }} </small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Brand'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
                  <li @mouseleave="showToolTip('')" @mouseover="showToolTip('Discount in percent')"><i class="fas fa-tag"></i><small> {{ steal.priceOff }}<span v-if="steal.price != 'Unknown'">% off</span></small>
                    <transition name="fade">
                      <span class="infoTooltip" v-if="toolTipMsg === 'Discount in percent'">{{ toolTipMsg }}</span>
                    </transition>
                  </li>
              </ul>
          </div>

          <hr>

          <div class="post-content">
              <p>{{ steal.description }}</p>
          </div>

      </article>

      <!-- Pagination end-->
  </div>
</template>

<script>
export default {
  name: 'stealView',
  props: {
    steal: {
      type: Object,
      isRequired: true
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
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
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
