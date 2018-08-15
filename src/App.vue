<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'App',
  metaInfo: {
    title: 'Release Plug'
  },
  components: {
    Navbar,
    FooterBar
  }
}
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,300,400,500,700');
@font-face {
  font-family: 'NeoSansIB';
  src: url('assets/fonts/NeoSansItalicBold.ttf');
}
/* Modal CSS */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.modal-default-button {
  padding: 8px 12px;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* Modal CSS End */
a, a:hover {
  color: #333333;
  cursor: pointer!important;
}
@font-face {
  font-family: 'NeoSans';
  src: url('assets/fonts/NeoSans.ttf');
}
.align-items {
  display: flex;
  align-items: center;
}
.oldPrice {
    text-decoration: line-through;
    color: #777!important;
}
.store-wrapper > div > span {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.v-toast {
  border: 0!important;
}
.light-info-text > a {
  color: #ff5858!important;
  text-decoration: underline!important;
  transition: .3s;
}
.light-info-text > a:hover, .light-info-text > a:active {
  color: #ea2a2a!important;
}

.light-info-text {
  text-align: center;
  color: #888;
  margin: -10px 0 20px;
}

.loader-middle {
  height: 400px;
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.transition-div {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Material Design Icons */
.material-icons {
  font-size: 20px;
}

.material-icons {
  transform: translateY(5px);
}

div.v-toast {
  padding-top: 18px!important;
}
/* Sidebar Widget (pick, stores etc) */
.store-image {
  width: 70px!important;
  max-height: 70px;
}
.container-fluid p {
  margin-bottom: 0;
  font-size: 17px
}
.container-fluid span {
  color: grey;
}
.go-to-custom {
  font-size: 20px;
  /* margin-right: 15px; */
  margin: 10px 0 10px 0;
  border: 0;
  background-color: #ff5858;
  color: #fff;
  padding: 10px 20px;
  border-radius: 35px;
  cursor: pointer;
}
div.store-wrapper > img {
  width: 60px;
}
.store-wrapper {
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

.col-lg-7,
.col-lg-5 {
  margin-bottom: 25px;
}

.btn-center {
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.ma-2 {
  margin: 20px;
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

.go-to-custom {
  font-size: 20px;
  text-transform: uppercase;
  margin: 10px 0 10px 0;
  border: 0;
  background-color: #ff5858;
  color: #fff;
  padding: 10px 20px;
  border-radius: 35px;
  cursor: pointer!important;
}

.center-item {
  margin-left: auto;
  margin-right: auto;
}

/* PRODUCT BOX */
.productTitle {
  text-transform: uppercase;
  font-family: 'NeoSansIB', sans-serif;
  font-weight: 700;
}
.productPrice {
  font-family: 'NeoSans', sans-serif!important;
  font-weight: 500!important;
}
.productCurrency {
  font-weight: 400!important;
}
.productDate {
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
  font-family: 'NeoSans', monospace;
  font-size: 16px;
}

.sneakerCurrency,
ul.post-meta > li > small > span,
.portfolio-box > div.gallary-title > span > span {
  font-size: 14px!important;
}

.site-title > span.rød {
  font-family: 'NeoSansIB', monospace;
  font-weight: 700!important;
  font-size: 35px;
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

.portfolio-box .portfolio-box-img:after,
.portfolio-box .gallary-title:after {
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

/* .portfolio-box:hover .portfolio-box-img:after {
    background: rgba(40, 40, 46, 0.1);
} */

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
/* PRODUCT BOX END */
.bg-light {
  background-color: #fff!important;
}
.load-clean {
  min-height: 100vh;
}
.fadeTrans-enter-active, .fadeTrans-leave-active {
  transition: opacity .9s;
}
.fadeTrans-enter, .fadeTrans-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 450px) {
  .portfolio-box div.portfolio-box-img {
      height: 150px;
  }
}

@media (max-width: 550px) {
  .site-title,
  .site-title > * {
    font-size: 25px!important;
  }
  .portfolio-box .portfolio-box-img {
    background-size: contain;
    background-position: bottom;
  }
}

@media (min-width: 770px) {
  .smallScreen {
    display: none;
  }
  div.portfolio-box:hover span, a:hover {
    color: #ff5757;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
  }
  .portfolio-box:hover .gallary-title:after {
      background: rgba(40, 40, 46, 0.1);
  }
}
@media (max-width: 769px) {
  .bigScreen {
    display: none;
  }
  a:active {
    color: #333;
  }
  /* div.portfolio-box:active span, a:active {
    color: #ff5757;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
  }
  .portfolio-box:active .gallary-title:after {
      background: rgba(40, 40, 46, 0.1);
  } */
}

.site-title-wrapper {
  padding-left: 0;
  padding-right: 0;
}
.floatRight {
  float: right;
  padding-right: 0;
}
.floatLeft {
  float: left;
  padding-left: 0;
}
.mt-7 {
  margin-top: 70px;
}
.mt-10 {
  margin-top: 100px;
}
body {
  background-color: #fff!important;
}
.rød {
  color: #ff5858;
}
/* a:hover, a:active, a:focus {
  color: #ff5858;
} */
.text-center {
  text-align: center;
}
/* Theme Name:Evaxo - Responsive Multipurpose Blog Page Template
   Author: Zoyothemes
   Version: 1.0.0
   Created: February 2018
   File Description:Main JS file of the template
*/

/*=========================
 *  1.Helper          *
 *  2.Title           *
 *  3.Home            *
 *  4.Portfolio       *
 *  5.About           *
 *  6.Testimonial     *
 *  7.team            *
 *  8.Services        *
 *  9.Client          *
 *  10.Blog           *
 *  11.Contact        *
 *  12.Footer         *
 *  13.Respomsive     *
 ===========================*/

body {

}
.mb-4 {
  margin-bottom: 40px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'NeoSansIB';
    font-weight: 700;
}
.site-title {
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1;
}
::selection {
    background: rgba(255, 88, 88, 0.7);
    color: #ffffff;
}
::-moz-selection {
    background: rgba(255, 88, 88, 0.7);
    color: #ffffff;
}

a {
    text-decoration: none !important;
}

p {
    font-size: 15px;
}

/*****************
  1. HELPER
*****************/

.section {
    padding-top: 85px;
    padding-bottom: 80px;
    position: relative;
}

.btn {
    padding: 15px 35px;
    outline: none;
    text-decoration: none;
}

.btn-round {
    border-radius: 35px;
}

.btn-outline-white {
    background-color: transparent;
    border: 2px solid #7F7F7F;
    color: #fff;
    font-size: 12px;
    border-radius: 35px;
    letter-spacing: 2px;
    transition: all 0.3s;
    font-weight: 600;
    transition: all 0.5s;
}

.btn-outline-white:hover,
.btn-outline-white:focus,
.btn-outline-white:active,
.btn-outline-white.active,
.btn-outline-white.focus,
.btn-outline-white:active,
.btn-outline-white:focus,
.btn-outline-white:hover,
.open > .dropdown-toggle.btn-outline-white {
    color: #000;
    background-color: #fff !important;
    box-shadow: 0 -3px rgba(0, 0, 0, 0.1) inset;
}

.btn-sm {
  padding: 16px 20px!important;
}

.btn-custom {
    border-radius: 35px;
    color: #fff;
    font-size: 14px;
    background: #ff5858;
    border: 0px;
    letter-spacing: 1px;
    transition: all 0.5s;
    font-weight: 500;
    text-transform: uppercase;
}

.btn-custom:hover,
.btn-custom:focus,
.btn-custom:active,
.btn-custom.active,
.btn-custom.focus,
.btn-custom:active,
.btn-custom:focus,
.btn-custom:hover,
.open > .dropdown-toggle.btn-custom {
  background-color: #e85454;
  color: #fff;
}

.btn-lift {
  box-shadow: 0 20px 38px rgba(0, 0, 0, 0.16);
  color: #fff;
  text-decoration: none;
  transform: translateY(-5px);
}

.page-next a,
.page-next span {
    font-size: 15px;
    display: inline-block;
    font-weight: 500;
    padding-right: 8px;
    text-transform: capitalize;
    color: rgba(145, 145, 145, 0.9);
}

.page-next-level h4 {
    font-size: 28px;
    color: rgba(94, 91, 91, 0.9);
}

.bg-overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
}

.vertical-content {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    flex-direction: row;
    -webkit-flex-direction: row;
}
</style>
