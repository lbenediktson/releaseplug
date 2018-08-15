<template lang="html">
  <div>
    <section class="section text-center">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <!-- <div class="footer mb-4">
                      <router-link to="/">
                        <img src="/static/img/logo-full.png" alt="Release Plug Logo" style="height: 25px;">
                      </router-link>
                  </div> -->
                  <div class="mb-4 pt-4">
                      <ul class="list-unstyled social-icon">
                          <li class="list-inline-item"><a target="_blank" href="https://www.facebook.com/releaseplug"><i class="fab fa-facebook-f"></i></a></li>
                          <li class="list-inline-item"><a target="_blank" href="https://twitter.com/ReleasePlug"><i class="fab fa-twitter"></i></a></li>
                          <li class="list-inline-item"><a target="_blank" href="https://www.instagram.com/releaseplug"><i class="fab fa-instagram"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <footer class="footer-alt">
      <div class="container">
          <div class="row mt-4 text-center">

              <div class="float-right pull-none col-md-6 col-xs-12">
                  <a href="">
                      <p class="text-muted">Terms & Conditions</p>
                  </a>
                  <a href="">
                      <p class="text-muted">CVR: 39 53 10 89</p>
                  </a>
                  <router-link to="/contact">
                      <p class="text-muted">Contact</p>
                  </router-link>
              </div>

              <div class="float-right pull-none col-md-6 col-xs-12">
                  <a href="">
                      <p class="text-muted">2018 © Release Plug. All Rights Reserved.</p>
                  </a>
                  <router-link to="/admin">
                      <p class="text-muted">Admin</p>
                  </router-link>
              </div>

          </div>
      </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'footerBar'
}
</script>

<style lang="css" scoped>
section, footer {
  background: #fff;
}
footer {
  background-color: white;
  padding: 30px 0;
}
ul {
  list-style: none;
}
li {
  /* text-align: center; */
}
.footer-alt {
    border-top: 1px solid #ddd;
    padding: 10px 0;
}

.footer-icons li > a {
    color: #000;
    border: 1px solid #ddd;
    width: 35px;
    font-size: 16px;
    height: 35px;
    display: block;
    line-height: 35px;
    text-align: center;
    background: #fff;
    transition: all 0.3s;
}

.footer-icons a:hover {
    color: #fff;
    background: #000;
}

.copy-rights {
    line-height: 36px;
    font-size: 15px;
    color: #797676;
}

.section {
  padding: 20px 0;
}

.social-icon > li a {
    background-color: #ededed;
    border-radius: 35px;
    color: #4c5667;
    display: inline-block;
    height: 35px;
    line-height: 36px;
    text-align: center;
    width: 35px;
    margin-left: 12px;
    transition: all 0.5s;
}

.social-icon > li a:hover {
    background: #000;
    color: #fff;
}

.footer .footer-logo a {
    color: #000;
}
</style>
