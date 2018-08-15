<template lang="html">
  <div class="wrapper col-md-6 offset-md-3 col-xs-12">
    <h2 class="site-title text-center">Admin</h2>
    <p class="noobInfo">Only for the owners of the site.</p>
    <p class="noobInfo">If you have any questions, please go to <router-link to="contact">our contact page</router-link>.</p>
    <form @submit.prevent="loginUser">

      <label for="Email">Email</label>
      <input v-model="email" class="form-control" type="text" name="Email" placeholder="Email">

      <label for="Password">Password</label>
      <input v-model="password" class="form-control" type="password" name="Password" placeholder="Password">
      <input v-if="!loggedIn" class="align-center loginBtn btn btn-custom" type="submit" value="Login">

    </form>
    <div class="loggedInWrapper">
      <button :key="1" v-if="loggedIn" class="btn btn-custom" type="button" @click="logoutUser" name="button">Log ud</button>
      <router-link :key="2" to="admin">
        <button v-if="loggedIn" type="button" class="btn btn-custom" name="button">Gå til admin</button>
      </router-link>
    </div>
    <!-- <button @click="logoutUser" class="btn btn-custom" name="button">Log ud</button> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'
import firebaseApp from '@/assets/DbRef.js'
const db = firebaseApp.database()

firebaseApp.auth().onAuthStateChanged(function (user) {
  if (user) {
    this.loggedIn = true
  } else {
    this.loggedIn = false
  }
})

export default {
  name: 'login',
  firebase: {
    stores: db.ref('stores')
  },
  data () {
    return {
      email: '',
      password: '',
      userState: firebaseApp.auth().currentUser,
      loggedIn: false
    }
  },
  methods: {
    loginUser () {
      var email = this.email
      var password = this.password
      firebaseApp.auth().signInWithEmailAndPassword(email, password).then(
        // function (user) {
        //
        // },
        // function (err) {
        //   console.log(err)
        // }
      )
      this.loggedIn = true
    },
    logoutUser () {
      firebase.auth().signOut().catch(function (error) {
        console.log(error)
      })
      this.loggedIn = false
    }
  }
}
</script>

<style lang="css" scoped>
a {
  color: #ff5858;
  text-decoration: underline!important;
}
a:hover, a:active, a:focus {
  color: #ea2a2a;
}
.noobInfo {
  text-align: center;
  color: #888;
  margin: 10px 0 0;
}
label {
  margin-top: 15px;
}
.loggedInWrapper {
  text-align: center;
  margin-top: 25px;
}
.loginBtn {
  display: flex;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}
.loggedInWrapper > button.btn.btn-custom {
  margin: 0 15px;
}
.wrapper {
  margin-top: 175px;
  margin-bottom: 230px;
}
@media (max-width: 767px) {
  .wrapper {
    margin-top: 140px;
  }
}
form {
  margin-top: 5px;
}
</style>
