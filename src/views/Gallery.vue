<template>
  <div id="location">
    <HeroComponent :images="heroImages"/>
    <section class="section">
      <div class="container">
        <div class="intro content has-text-centered">
          <h2 class="intro__heading">We come to you and leave no mess behind!</h2>
          <p class="intro__body">Never worry about you, your family, or friends smelling a dirty trash bin when entertaining or storing in your garage.</p>
        </div>
      </div>
    </section>
    <section class="iframe">
      <div class="columns is-vcentered is-desktop">
        <div class="column has-text-centered content iframe__content">
          <h2 class="iframe__heading">See our process!</h2>
          <p class="iframe__body">Preview how we clean each and every single bin, leaving no mess behind!</p>
          <a :href="$store.state.directionsLink" @click="this.logEvent('click', 'Location Get Directions')" class="button button--ghost" target="_blank"><span>Get directions</span></a>
        </div>
        <div class="column iframe__no-padding">
          <div class="iframe__container">
            <iframe :src="$store.state.commercial" class="iframe__frame" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="intro intro--blue content has-text-centered">
          <h2 class="intro__heading">Before and After Shots!</h2>
          <p class="intro__body">Get a quick look at our amazing results!</p>
        </div>
      </div>
    </section>
    <section class="gallery-section">
      <div class="container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="gallery">
          <div class="gallery__item" v-for="(image, key) in images" :key="key">
            <img :src="image" class="gallery__image" @click="index = key" />
          </div>
        </div>
      </div>
    </section>
    <section class="section outro has-text-centered content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <div class="outro__content">
              <h2 class="outro__heading">Ready to live a cleaner, healthier life?</h2>
              <p class="outro__body">We're excited to meet you! If you're still unsure, feel free to contact us or check out our FAQ!</p>
              <router-link to="contact" @click="this.logEvent('click', 'Gallery Contact Us')" class="button outro__button"><span>Contact us</span></router-link>
              <router-link to="faq" @click="this.logEvent('click', 'Gallery FAQ')" class="button button--alt outro__button"><span>Frequently Asked Questions</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'Location',
  components: {
    HeroComponent,
    gallery: VueGallery,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/black-home-area-rug-2950003.jpg'),
          title: 'Gallery',
          subtitle: 'Photos speak a thousand sanitized words',
        },
      ],
      images: [],
      index: null,
    };
  },
  mounted() {
    this.importAll(require.context('../assets/gallery/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push(r(key))));
      this.images.sort()
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.intro {
  padding: 4rem 0;
  &--blue {
    background: $primaryColor;
    position: relative;
    .intro__heading {
      color: #fff;
      font-weight: 400;
    }
    .intro__body {
      color: #fff;
    }
  }
  &__body {
    font-size: 1.25rem;
    line-height: 2;
    margin-bottom: 1rem;
    max-width: 56.25rem;
    margin: 0 auto;
    max-width: 600px;
    font-style: italic;
  }
}

.iframe {
  background: #000;
  padding: 0;
  &__content {
    padding: 2rem 1.5rem;
    margin: 0;
    @media (min-width: $screen-md) {
      padding: 0 1.5rem;
    }
  }
  &__no-padding {
    padding: 0;
  }
  &__container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
  }
  &__frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  &__heading {
    color: #fff !important;
  }
  &__body {
    color: #fff;
    font-style: italic;
    font-size: 1.25rem;
    max-width: 26rem;
    margin: 0 auto;
  }
}

.gallery-section {
  padding: 0 1.5rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -.75rem;
  &__item {
    flex: 0 0 25%;
    padding: 0 .75rem;
    margin-bottom: 1.5rem;
  }
  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    @include transition;
    @include box-shadow;
    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
    }
  }
}

.blueimp-gallery {
  .next,
  .prev {
    text-indent: -9999px;
    overflow: hidden;
    border: 0;
    background: #f9f9f9;
  }
  .next {
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('../assets/images/keyboard-right-arrow-button.png');
      background-repeat: no-repeat;
      background-position: 9px 50%;
    }
  }
  .prev {
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('../assets/images/left-arrow-key.png');
      background-repeat: no-repeat;
      background-position: 6px 50%;
    }
  }
}

.outro {
  padding: 16rem 4rem;
  background: $slate;
  @include overlay;
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
    color: #fff !important;
  }
  &__content {
    position: relative;
    z-index: 3;
  }
  &__body {
    font-size: 1.25rem;
    font-style: italic;
    color: #fff;
  }
  &__button {
    margin: 0 .5rem 1rem;
  }
}
</style>
