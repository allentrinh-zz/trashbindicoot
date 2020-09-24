<template>
  <div id="home">
    <HeroComponent :images="heroImages"/>
    <section class="home">
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/flag-of-usa-1600162.jpg`)});`" class="home__background">
              <h2 class="home__heading">If you can’t, Trash can!</h2>
            </div>
          </div>
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Bring your trash cans back to life with a sanitizing high pressure wash! Disinfect, sanitize, and deodorize your bacteria-infested trash and recycling cans!</p>
              <p class="home__em">No contracts, no commitments! Plans start at $9.99/<small class="home__small">month</small></p>
              <!-- <a :href="$store.state.joinUrl" @click="this.logEvent('click', 'Home Content Specials')" class="button" target="_blank">
                <span>See our specials!</span>
              </a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/architecture-clouds-daylight-driveway-259588.jpg`)});`" class="home__background">
              <h2 class="home__heading">Disinfect</h2>
            </div>
          </div>
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">We kill 99.9% of harmful bacteria and viruses living in your stinky cans. Even when empty, trash cans harbor millions of harmful bacteria such as salmonella, staph, listeria, and e-coli.</p>
              <a :href="$store.state.commercial" @click="this.logEvent('click', 'Home Content Commercial')" class="button" target="_blank"><span><i class="fa fa-video-camera"></i> See how it works!</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/aerial-photography-of-gray-houses-1486785.jpg`)});`" class="home__background">
              <h2 class="home__heading">Sanitize</h2>
            </div>
          </div>
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Our custom built high pressure trash bin cleaner leaves your cans fully sanitized using hot water and steam along with other eco-friendly cleaning solutions!</p>
              <router-link to="gallery" @click="this.logEvent('click', 'Home Content View Photos')" class="button"><span>See our before and after photos!</span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Reclaim your garages by eliminating stinky odors and pests with our eco-friendly biodegradable cleaning solutions!</p>
              <router-link to="about" @click="this.logEvent('click', 'Home Content Learn More')" class="button"><span>Learn more about Trash Bindicoot!</span></router-link>
            </div>
          </div>
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/architecture-clouds-daylight-driveway-259588.jpg`)});`" class="home__background">
              <h2 class="home__heading">Deodorize</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Our basic monthly cleaning plan has you covered! Never think about a dirty garbage bin again with our curbside cleaning scheduled directly with your trash day!</p>
              <p class="home__em">Only $9.99 a month!</p>
              <router-link to="about" @click="this.logEvent('click', 'Home Content Pricing')" class="button"><span>See other pricing options!</span></router-link>
            </div>
          </div>
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/aerial-view-of-house-village-2255938.jpg`)});`" class="home__background">
              <h2 class="home__heading">No commitments, no contracts!</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">If you've got questions, we've got answers! Check out some of our most frequently asked questions!</p>
              <router-link to="faq" @click="this.logEvent('click', 'Home Content FAQ')" class="button"><span>Frequently Asked Questions</span></router-link>
            </div>
          </div>
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/white-2-storey-house-2850472.jpg`)});`" class="home__background">
              <h2 class="home__heading">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'Home',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/aerial-view-of-house-village-2255938.jpg'),
          title: 'Premier Eco-Friendly Trash Can Cleaning',
          subtitle: 'Servicing Virginia Beach and Chesapeake!',
        },
        {
          src: require('../assets/images/aerial-photography-of-gray-houses-1486785.jpg'),
          title: 'Keeping your homes clean',
          subtitle: 'At a convenient and affordable price!',
        },
        {
          src: require('../assets/images/architecture-building-city-clouds-259593.jpg'),
          title: 'Eliminate harmful bacteria and odor',
          subtitle: 'Say goodbye to maggots and flies!',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';
@import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');

.home {
  &__columns {
    width: 100%;
  }
  &__column {
    position: relative;
    display: flex;
    align-items: center;
  }
  &__content {
    display: flex;
    background-color: $primaryColor;
    &:nth-child(odd) {
      background-color: darken($primaryColor, 10%);
    }
    @media (min-width: $screen-lg) {
      height: 100vh;
    }
  }
  &__inner-content {
    font-family: $font1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.25rem;
    color: #fff;
    text-align: center;
    font-style: italic;
    max-width: 700px;
    margin: 0 auto;
    padding: 4rem 1rem;
    @media (min-width: $screen-sm) {
      padding: 4rem 3rem;
    }
  }
  &__body {
    font-size: 1.25rem;
  }
  &__strong {
    color: #fff;
  }
  &__em {
    font-family: $font2;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 2px;
  }
  &__small {
    font-size: .85rem;
    letter-spacing: 1px;
  }
  &__background {
    padding: 6rem 1rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // @include overlay;
    @media (min-width: $screen-sm) {
      position: absolute;
      top: 0;
      left: 0;
    }
    @media (min-width: $screen-lg) {
      background-attachment: fixed;
    }
  }
  &__heading {
    font-family: $font2;
    font-size: 3rem;
    color: #fff;
  }
}
</style>
