import store from '../store'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Connexion.vue') },
      { path: '/inscription', component: () => import('pages/Inscription.vue') },
      { path: '/connexion', component: () => import('pages/Connexion.vue') },
      { path: '/message', component: () => import('pages/Chat.vue') },
      { path: '/information', component: () => import('pages/Information.vue') },
      { path: '/offre', component: () => import('pages/Offre.vue') },
      { path: '/demande', component: () => import('pages/Demande.vue') },
      { path: '/creationdemande', component: () => import('pages/CreationDemande.vue') },
      { path: '/creationoffre', component: () => import('pages/CreationOffre.vue') },
      {
        path: '/profile',
        component: () => import('pages/Profile'),
        beforeEnter: (to, from, next) => {
          if (!store.getters.estConnecter) {
            return next('/connexion')
          }
          next()
        }
      },
      { path: '/file', component: () => import('pages/file') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
