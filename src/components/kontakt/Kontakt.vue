<template lang="html">
  <div>
  <div class="">
    <!-- <section class="section bg-light">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="pt-4 mt-5 page-next-level">
                      <h4>Do you have any questions?</h4>
                  </div>
              </div>
          </div>
      </div>
    </section> -->

    <section class="section">
      <div class="mt-4 mb-4 container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bigScreen section-title row">
                    <div class="site-title-wrapper col-6">
                        <h2 class="text-center site-title floatRight">Release</h2>
                    </div>
                    <div class="site-title-wrapper col-6 rød">
                        <h2 class="text-center site-title floatLeft">/Contact</h2>
                    </div>
                </div>
                <div class="smallScreen section-title">
                    <h2 class="text-center site-title">Release<span class="rød">/Contact</span></h2>
                </div>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-lg-4 mr-auto">
                <div class="contact-info">
                    <i class="mbri-letter"></i>
                    <div class="contact-desc">
                        <h5>E-mail</h5>
                        <p class="text-muted">support@releaseplug.com</p>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="mbri-pin"></i>
                    <div class="contact-desc">
                        <h5>Address</h5>
                        <p class="text-muted">
                            Vesterbrogade 112A, 1620 København V</p>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="mbri-mobile2"></i>
                    <div class="contact-desc">
                        <h5>Telephone</h5>
                        <p class="text-muted">+45 53 55 84 35</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="custom-form mt-1">
                    <form action="https://formspree.io/lbenediktson@gmail.com" method="POST" name="contact" id="contact-form">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input name="Name" id="name" type="text" class="form-control" placeholder="Your name...">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input name="Reply Email" id="email" type="email" class="form-control" placeholder="Your email...">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="subject">Subject</label>
                                    <input name="Subject" type="text" class="form-control" id="subject" placeholder="Your Subject.." />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="comments">Message</label>
                                    <textarea name="Message" id="comments" rows="4" class="form-control" placeholder="Your message..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <input type="submit" id="submit" class="submitBnt btn btn-custom" value="Send Message">
                                <div id="simple-msg"></div>
                            </div>
                        </div>
                    </form>
                    <!-- /form -->
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'kontakt',
  data () {
    return {
      msg: '',
      email: ''
    }
  },
  mounted () {
    document.title = 'Release Plug | Contact'
  }
}
</script>

<style lang="css" scoped>
.contact-section {
  background: #fff;
}
label {
  font-size: 16px;
}
input, textarea {
  font-size: 14px;
  margin-bottom: 10px;
}
.contact-info {
    margin-bottom: 22px;
}

.contact-info i {
    font-size: 32px;
    opacity: 0.7;
    float: left;
    margin-right: 15px;
}

.contact-desc h5 {
    font-size: 18px;
}

.contact-desc {
    overflow: hidden;
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
