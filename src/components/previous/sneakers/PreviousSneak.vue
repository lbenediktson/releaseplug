<template lang="html">
  <div class="list-complete-item filter-item col-md-4 col-xl-4 col-6 sneakerBox">
    <router-link :to="{ name: 'sneaker', params: { id: sneakerId }}">
      <div class="portfolio-box">
        <div :style="'background-image: url(' + sneaker.imgUrl + ');'" class="portfolio-box-img">
          <!-- <p class="sneaker-date">{{ dateFormatter(sneaker.date) }}</p> -->
          <p class="productDate">{{ sneaker.date | moment("D. MMM") }}</p>
        </div>
        <div class="gallary-title text-center">
          <h6 class="productTitle">
            <!-- <router-link :to="{ name: 'sneaker', params: { id: sneakerId }}"> -->
            {{ sneaker.title }}
            <!-- </router-link> -->
          </h6>
          <span class="productPrice">{{ sneaker.price }}<span v-if="sneaker.price != 'Unknown'">€</span></span>
        </div>
      </div>
      <!-- <router-link :to="{name: 'sneaker', params: { id: sneakerId }}"> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'previousSneak',
  props: {
    sneaker: {
      type: Object,
      required: true
    },
    sneakerId: {
      type: String,
      required: true
    }
  },
  methods: {
    dateFormatter (dato) {
      var month = dato.substring(5, 7)
      var monthDay = dato.substring(8, 10)
      switch (month) {
        case '01':
          return monthDay + '. jan'

        case '02':
          return monthDay + '. feb'

        case '03':
          return monthDay + '. mar'

        case '04':
          return monthDay + '. apr'

        case '05':
          return monthDay + '. may'

        case '06':
          return monthDay + '. jun'

        case '07':
          return monthDay + '. jul'

        case '08':
          return monthDay + '. aug'

        case '09':
          return monthDay + '. sep'

        case '10':
          return monthDay + '. oct'

        case '11':
          return monthDay + '. nov'

        case '12':
          return monthDay + '. dec'

        default:
          return 'NaN'
      }
    }
  },
  watch: {
    sneaker (newValue) {
      // console.log(newValue)
    }
  },
  mounted () {
    // console.log(this.sneaker)
  }
}
</script>

<style lang="css" scoped>

</style>
