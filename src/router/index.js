import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView'
import BookDetailsView from '../views/BookDetailsView'
import SignUp from '../views/SignUp'
import SignIn from '../views/SignIn'
import CartView from '../views/CartView'
import { auth } from '@/firebase/config'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/books/:id',
    name: 'books',
    component: BooksView
  },
  {
    path: '/books/:id/:id2',
    name: 'details',
    component: BookDetailsView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach( (to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) {
    next('/signin')
  } else {
    next()
  }
})

export default router
