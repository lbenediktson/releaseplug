<template lang="html">
  <div class="list-complete-item filter-item sneakerBox col-md-4 col-xl-4 col-6">
    <router-link :to="{ name: 'steal', params: { id: siteId }}">
      <div class="portfolio-box">
        <div :style="'background-image: url(' + steal.imgUrl + ');'" class="portfolio-box-img">
          <!-- <p class="steal-date">{{ dateFormatter(steal.date) }}</p> -->
          <p class="productDate">{{ steal.startDate | moment("D. MMM") }} - {{ steal.endDate | moment("MMMM D")}}</p>
        </div>
        <div class="gallary-title text-center">
          <h6 class="productTitle">
            <!-- <router-link :to="{ name: 'steals', params: { id: stealId }}"> -->
            {{ steal.title }}
            <!-- </router-link> -->
          </h6>
          <span class="productPrice">{{ steal.priceOff }}% off</span>
        </div>
      </div>
      <!-- <router-link :to="{name: 'steals', params: { id: stealId }}"> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'stealsGrid',
  props: {
    steal: {
      type: Object,
      required: true
    },
    siteId: {
      type: String,
      required: true
    }
  },
  // methods: {
  //   dateFormatter (dato) {
  //     var month = dato.substring(5, 7)
  //     var monthDay = dato.substring(8, 10)
  //     switch (month) {
  //       case '01':
  //         return monthDay + '. jan'
  //
  //       case '02':
  //         return monthDay + '. feb'
  //
  //       case '03':
  //         return monthDay + '. mar'
  //
  //       case '04':
  //         return monthDay + '. apr'
  //
  //       case '05':
  //         return monthDay + '. may'
  //
  //       case '06':
  //         return monthDay + '. jun'
  //
  //       case '07':
  //         return monthDay + '. jul'
  //
  //       case '08':
  //         return monthDay + '. aug'
  //
  //       case '09':
  //         return monthDay + '. sep'
  //
  //       case '10':
  //         return monthDay + '. oct'
  //
  //       case '11':
  //         return monthDay + '. nov'
  //
  //       case '12':
  //         return monthDay + '. dec'
  //
  //       default:
  //         return 'NaN'
  //     }
  //   }
  // },
  watch: {
    steal (newValue) {
      // console.log(newValue)
    }
  },
  mounted () {
    // console.log(this.steal)
  }
}
</script>

<style lang="css" scoped>
.stealTitle {
  text-transform: uppercase;
  font-family: 'NeoSansIB', sans-serif;
  font-weight: 700;
}
.stealPrice {
  font-family: 'Open Sans', sans-serif;
}
.stealDate {
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
  font-size: 16px!important;
}
div.portfolio-box:hover span, a:hover {
  color: #ff5757;
  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
}
.portfolio-box .portfolio-box-img {
    position: relative;
    overflow: hidden;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
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
</style>
