<template lang="html">

    <section class="section">
        <div class="container">
            <div class="row">
                <sneaker-view v-if="sneaker[0].title" :sneaker="sneaker[0]"/>
                <store-view v-if="sneaker[0].stores" :sneakerstores="Object.values(sneaker[0].stores)" :sneaker="sneaker[0]"/>
                <no-stores v-if="!sneaker[0].stores"/>
            </div>
        </div>
    </section>

</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import SneakerView from '@/components/SneakerView'
import StoreView from '@/components/StoreView'
import NoStores from '@/components/NoStores'
import NoSneaker from '@/components/NoSneaker'

// var sneakersRef = db.ref('sneakers')
const db = firebaseApp.database()

export default {
  name: 'sneaker',
  metaInfo () {
    return {
      titleTemplate: this.sneakerTitleCap + ' | %s',
      meta: [
        {property: 'og:title', content: 'My Page Title ← My Site'},
        {property: 'og:site_name', content: 'My Site'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
        {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: 'I have things here on my site.'}
      ]
    }
  },
  // metaInfo () {
  //   return {
  //
  //     title: this.sneakerTitleCap,
  //     meta: [
  //       // OpenGraph data (Most widely used)
  //       // {property: 'og:title', content: this.sneakerTitleCap + ' | Release Plug'},
  //       // {property: 'og:site_name', content: 'Release Plug'},
  //       // // The list of types is available here: http://ogp.me/#types
  //       // {property: 'og:type', content: 'article'},
  //       // // Should the the same as your canonical link, see below.
  //       // {property: 'og:url', content: 'https://releaseplug.com'},
  //       // {property: 'og:image', content: this.sneaker[0].imgUrl},
  //       // // Often the same as your meta description, but not always.
  //       // {property: 'og:description', content: this.sneaker[0].description}
  //
  //       // {property: 'og:title', content: 'Nice sko | Release Plug'},
  //       // {property: 'og:description', content: 'Piet Parra have teamed up with Nike to release two iconic shoes. The Nike Air Zoom Spiridon and the Nike Air Max 1. The colorful sneakers will release at selected retailers this Saturday. This is a limited and hyped release so expect it to be a hard cop.'},
  //       // {property: 'og:image', content: 'https://stockx-360.imgix.net/Adidas-Yung-1-Collegiate-Navy/Images/Adidas-Yung-1-Collegiate-Navy/Lv2/img01.jpg?auto=format,compress&w=1117&q=90'},
  //       // {property: 'og:image:width', content: '1333'},
  //       // {property: 'og:image:height', content: '2000'},
  //       // {property: 'og:url', content: 'https://releaseplug.com'}
  //
  //       // Twitter card
  //       // {name: 'twitter:card', content: 'summary'},
  //       // {name: 'twitter:site', content: 'https://releaseplug.com'},
  //       // {name: 'twitter:title', content: this.sneakerTitleCap + ' | Release Plug'},
  //       // {name: 'twitter:description', content: this.sneaker[0].description},
  //       // // Your twitter handle, if you have one.
  //       // {name: 'twitter:creator', content: '@ReleasePlug'},
  //       // {name: 'twitter:image:src', content: this.sneaker[0].imgUrl},
  //       //
  //       // // Google / Schema.org markup:
  //       // {itemprop: 'name', content: this.sneakerTitleCap + ' | Release Plug'},
  //       // {itemprop: 'description', content: this.sneaker[0].description},
  //       // {itemprop: 'image', content: this.sneaker[0].imgUrl}
  //     ]
  //   }
  // },
  firebase () {
    return {
      // sneaker: db.ref('/sneakers').orderByChild('siteTag').equalTo(this.$route.params.id),
      sneaker: db.ref('/sneakers').orderByChild('siteTag').equalTo(this.$route.params.id),
      stores: db.ref('stores')
    }
  },
  computed: {
    sneakerTitleCap () {
      return this.sneaker[0].title.replace(/\b\w+/g, function (s) { return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase() })
    }
  },
  components: {
    SneakerView,
    StoreView,
    NoStores,
    NoSneaker
  }
}
</script>

<style lang="css" scoped>
/* .clearfix {
  height: 75px;
}
.wi {
  height: 53px;
  width: 64px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container {
  margin-top: 15px;
} */
/* ----- */
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
/*
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
    width: 64px;
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
} */

</style>
