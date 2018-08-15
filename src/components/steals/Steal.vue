<template lang="html">

    <section class="section">
        <div class="container">
            <div class="row">
                <steal-view v-if="steal[0].title" :steal="steal[0]"/>
                <pick-view v-if="steal[0].picks" :stealPicks="steal[0].picks" :steal="steal[0]"/>
                <no-picks v-if="!steal[0].picks"/>
            </div>
        </div>
    </section>

</template>

<script>
import StealView from '@/components/steals/StealView'
import PickView from '@/components/steals/PickView'
import NoPicks from '@/components/steals/NoPicks'
import firebaseApp from '@/assets/DbRef.js'

// var sneakersRef = db.ref('sneakers')
const db = firebaseApp.database()
var storesRef = db.ref('stores')

export default {
  name: 'steal',
  firebase () {
    return {
      // sneaker: db.ref('/sneakers').orderByChild('siteTag').equalTo(this.$route.params.id),
      steal: db.ref('/steals').orderByChild('siteTag').equalTo(this.$route.params.id),
      stores: storesRef
    }
  },
  // data () {
  //   return {
  //     sneaker: []
  //   }
  // },
  components: {
    StealView,
    PickView,
    NoPicks
  },
  mounted () {
    if (this.steal.title === undefined) {

    } else {
      document.title = 'Release Plug | ' + this.steal[0].title
    }
  },
  // methods: {
  //   tester () {
  //     console.log(this.sko)
  //   }
  // },
  // created () {
  //   this.$bindAsObject('sneaker', sneakersRef.orderByChild('siteTag').equalTo('air-jordan-1-retro-high-og-shadow'))
  // },
  updated () {
    document.title = 'Release Plug | ' + this.steal[0].title
  }
}
</script>

<style lang="css" scoped>
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

.post-preview:hover {
    opacity: .7;
}

.post-header {
    margin: 0 0 30px;
}

.post-title {
    font-family: 'NeoSansIB', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin: 0 0 10px;
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
    opacity: .7;
}

.post-meta > li {
    display: inline-block;
    margin-right: 30px;
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
