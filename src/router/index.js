// Frameworks / Vigtigt
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import firebase from 'firebase'
import firebaseApp from '@/assets/DbRef.js'

// UI
// Sneakers
import Sneakers from '@/components/Sneakers'
import Sneaker from '@/components/Sneaker'
// Collections
import Collections from '@/components/collections/Collections'
import Collection from '@/components/collections/Collection'
// Kontakt
import Kontakt from '@/components/kontakt/Kontakt'
// Retailers
import Retailers from '@/components/Retailers'
// Steals
import Steals from '@/components/steals/Steals'
import Steal from '@/components/steals/Steal'
// Andet
import RouteError from '@/components/RouteError'

// Previous
// Sneakers
import PreviousSneakers from '@/components/previous/sneakers/PreviousSneakers'
// Collection
// import PreviousCollections from '@/components/previous/collections/PreviousCollections'

// Chef
import Chef from '@/components/chef/Chef'
// Sneaker
import AddSneaker from '@/components/chef/sneakers/AddSneaker'
import SneakersChef from '@/components/chef/sneakers/SneakersChef'
import SneakerEdit from '@/components/chef/sneakers/SneakerEdit'
// Collections
import AddCollection from '@/components/chef/collections/AddCollection'
import CollectionsChef from '@/components/chef/collections/CollectionsChef'
import CollectionEdit from '@/components/chef/collections/CollectionEdit'
// Steals
import AddSteal from '@/components/chef/steals/AddSteal'
import StealsChef from '@/components/chef/steals/StealsChef'
import StealEdit from '@/components/chef/steals/StealEdit'
// Stores
import AddStore from '@/components/chef/stores/AddStore'
import StoresChef from '@/components/chef/stores/StoresChef'
import StoreEdit from '@/components/chef/stores/StoreEdit'
// Andet
import Login from '@/components/chef/Login'

Vue.use(Router)
Vue.use(Meta)
var userState = null
firebaseApp.auth().onAuthStateChanged(function (user) {
  if (user) {
    userState = user
  } else {
    // No user is signed in.
  }
})
export default new Router({

  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'routeErrorName',
      component: RouteError
    },
    {
      path: '/collections/*',
      name: 'collectionNotFound',
      component: RouteError
    },
    // {
    //   path: '/steals/*',
    //   name: 'stealNotFound',
    //   component: RouteError
    // },
    {
      path: '/',
      name: 'sneakers',
      component: Sneakers
    },
    {
      path: '/collections',
      name: 'collections',
      component: Collections
    },
    {
      path: '/steals',
      name: 'steals',
      component: Steals
    },
    {
      path: '/steals/:id',
      name: 'steal',
      component: Steal
    },
    {
      path: '/sneakers/:id',
      name: 'sneaker',
      component: Sneaker
    },
    {
      path: '/collections/:id',
      name: 'collection',
      component: Collection
    },
    {
      path: '/contact',
      name: 'kontakt',
      component: Kontakt
    },
    {
      path: '/retailers',
      name: 'retailers',
      component: Retailers
    },
    {
      path: '/admin',
      name: 'chef',
      component: Chef,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/sneaker/new',
      name: 'admin-sneaker-new',
      component: AddSneaker,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/sneakers/:id',
      name: 'sneakerEdit',
      component: SneakerEdit,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/collection/new',
      name: 'admin-collection-new',
      component: AddCollection,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/collections/:id',
      name: 'collectionEdit',
      component: CollectionEdit,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/store/new',
      name: 'admin-store-new',
      component: AddStore,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/stores/:id',
      name: 'storeEdit',
      component: StoreEdit,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/sneakers',
      name: 'admin-sneakers',
      component: SneakersChef
    },
    {
      path: '/admin/collections',
      name: 'admin-collections',
      component: CollectionsChef
    },
    {
      path: '/admin/steals',
      name: 'admin-steals',
      component: StealsChef
    },
    {
      path: '/admin/steal/new',
      name: 'admin-steal-new',
      component: AddSteal,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/steals/:id',
      name: 'stealEdit',
      component: StealEdit,
      beforeEnter: (to, from, next) => {
        if (userState === null || !userState) {
          next('/login')
        } else if (userState) {
          next()
        }
      }
    },
    {
      path: '/admin/stores',
      name: 'admin-stores',
      component: StoresChef
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/previous',
      name: 'previous',
      component: PreviousSneakers
    }
    // {
    //   path: '/previous/sneakers',
    //   name: 'previousSneakers',
    //   component: PreviousSneakers
    // },
    // {
    //   path: '/previous/collections',
    //   name: 'previousCollections',
    //   component: PreviousCollections
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    window.scrollTo(0, 0)
  }
})

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userState = user
  } else {
    // No user is signed in.
  }
})
