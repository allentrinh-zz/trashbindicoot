import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: [
        {
          name: 'title',
          content: 'Premier Eco-Friendly Trash Can Cleaning in Virginia Beach! | Trash Bindicoot',
        },
        {
          name: 'description',
          content: 'The best curbside trash bin cleaning and sanitizing service in Virginia Beach and Chesapeake!',
        },
        {
          name: 'og:title',
          content: 'Premier Eco-Friendly Trash Can Cleaning in Virginia Beach! | Trash Bindicoot',
        },
        {
          name: 'og:description',
          content: 'The best curbside trash bin cleaning and sanitizing service in Virginia Beach and Chesapeake!',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://trashbindicoot.com',
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: [
        {
          name: 'title',
          content: 'About Us | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Learn about Trash Bindicoot in Virginia Beach and Chesapeake and how we can help!',
        },
        {
          name: 'og:title',
          content: 'About Us | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Learn about Trash Bindicoot in Virginia Beach and Chesapeake and how we can help!',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://trashbindicoot.com/about',
        },
      ],
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue'),
      meta: [
        {
          name: 'title',
          content: 'Gallery | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'description',
          content: 'See photos, videos, and more on the Trash Bindicoot process in Virginia Beach and Chesapeake!',
        },
        {
          name: 'og:title',
          content: 'Gallery | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'See photos, videos, and more on the Trash Bindicoot process in Virginia Beach and Chesapeake!',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://trashbindicoot.com/gallery',
        },
      ],
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "about" */ './views/Faq.vue'),
      meta: [
        {
          name: 'title',
          content: 'FAQ | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Frequently asked questions on trash can cleaning',
        },
        {
          name: 'og:title',
          content: 'FAQ | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Frequently asked questions on trash can cleaning',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://trashbindicoot.com/faq',
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
      meta: [
        {
          name: 'title',
          content: 'Contact Us | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Contact Trash Bindicoot in Virginia Beach and Chesapeake!',
        },
        {
          name: 'og:title',
          content: 'Contact Us | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Contact Trash Bindicoot in Virginia Beach and Chesapeake!',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://trashbindicoot.com/contact',
        },
      ],
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "contact" */ './views/404.vue'),
      meta: [
        {
          name: 'title',
          content: '404 | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Premier Eco-Friendly Trash Can Cleaning in Virginia Beach! | Trash Bindicoot',
        },
        {
          name: 'og:title',
          content: '404 | Trash Bindicoot | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Premier Eco-Friendly Trash Can Cleaning in Virginia Beach! | Trash Bindicoot',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://trashbindicoot.com',
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
