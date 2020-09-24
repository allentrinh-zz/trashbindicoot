<template>
  <div id="about">
    <HeroComponent :images="heroImages"/>
    <section class="about section content">
      <div class="container">
        <h2 class="about__heading">Who we are</h2>
        <div class="columns">
          <div class="column is-3">
            <h3 class="about__heading-3">We are:</h3>
            <ul class="hashtags">
              <li class="hashtags__list-item">#trashbindicoot</li>
              <li class="hashtags__list-item">#cleanerliving</li>
              <li class="hashtags__list-item">#local</li>
              <li class="hashtags__list-item">#community</li>
            </ul>
          </div>
          <div class="column is-9">
            <p class="about__body">Our state of the art pressure washing system is what keeps your cans spotless. First the hydraulic lift places your stinky bin above our high pressure spray head. From there, the system sprays out hot water and steam at around 200 degrees Fahrenheit on 360-degree rotation to get rid of all dirt and grime. The used dirty water runs back into a separate dirty water tank which we dispose of daily at a local waste station. We manually spray and/or brush away the exterior with our handheld wand.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing section content">
      <div class="container">
        <h2 class="pricing__heading">Pricing Plans</h2>
        <div class="columns">
          <div v-for="(plan, key) in plans" :key="key" class="column">
            <div class="pricing__wrapper">
              <div class="pricing__image-wrapper">
                <img :src="plan.image.src" :alt="plan.image.alt" class="pricing__image" />
              </div>
              <div class="pricing__content">
                <h3 class="pricing__title">{{ plan.title }}</h3>
                <ul class="pricing__list">
                  <li v-for="(detail, index) in plan.details" :key="key" class="pricing__list-item">
                    {{ detail }}
                  </li>
                </ul>
                <div class="pricing__price">
                  {{ plan.price }}
                  <span class="pricing__price-span">
                    {{ plan.increment }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="contact" class="button">
          <span class="button__span">
            Contact us today to get started!
          </span>
        </router-link>
      </div>
    </section>
    <section class="mission section content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <div class="mission__content">
              <h2 class="mission__heading">Our Mission</h2>
              <p class="mission__body">To keeping families safe and healthy from harmful bacteria and pathogens within their trash and recycling bins through disinfectants and sanitary solutions.</p>
              <router-link to="gallery" @click="this.logEvent('click', 'About Photos')" class="button mission__button"><span>See our before and after photos</span></router-link>
              <!-- <a :href="$store.state.joinUrl" @click="this.logEvent('click', 'About Specials')" class="button button--alt mission__button" target="_blank"><span>See our current specials!</span></a> -->
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
  name: 'About',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/flag-of-usa-1600162.jpg'),
          title: 'Why Trash Bindicoot?',
          subtitle: 'It\'s not about us, it\'s about you!',
        },
      ],
      plans: [
        {
          image: {
            src: require('../assets/images/flag-of-usa-1600162.jpg'),
            alt: '',
          },
          title: 'Monthly Cleaning',
          price: '$9.99',
          increment: 'monthly',
          details: [
            'Monthly Can Cleaning',
            'No commitment/Cancel Anytime',
            '1 Can Service',
            '$7.99 per Additional Can',
          ],
        },
        {
          image: {
            src: require('../assets/images/flag-of-usa-1600162.jpg'),
            alt: '',
          },
          title: 'Quarterly Cleaning',
          price: '$34.99',
          increment: 'quarterly',
          details: [
            'Quarterly Can Cleaning',
            'No commitment/Cancel Anytime',
            '1 Can Service',
            '$9.99 per Additional Can',
          ],
        },
        {
          image: {
            src: require('../assets/images/flag-of-usa-1600162.jpg'),
            alt: '',
          },
          title: 'One Time Cleaning',
          price: '$49.99',
          increment: 'one-time',
          details: [
            'One Time Cleaning',
            'Zero Contract',
            '2 Can Service',
            '$24.99 per Additional Can',
          ],
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.about {
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
  }
  &__heading-3 {
    opacity: .5;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  &__body {
    font-size: 1.25rem;
    line-height: 2;
    margin-bottom: 1rem;
    font-style: italic;
  }
  &__em {
    font-style: italic;
    font-weight: 700;
  }
}

.hashtags {
  margin: 0;
  padding: 0;
  &__list-item {
    display: inline-block;
    list-style: none;
    font-size: 1.125rem;
    font-weight: 700;
    color: $primaryColor;
    letter-spacing: 1px;
    padding-right: .75rem;
  }
}

.pricing {
  text-align: center;
  padding-bottom: 4rem;
  &__wrapper {
    margin-bottom: 5rem;
    @include transition;
    @include box-shadow;
    &:hover {
      .pricing__price {
        box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
      }
    }
  }
  &__image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 150px;
    overflow: hidden;
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 50px 700px;
      border-color: transparent transparent #f1f1f1 transparent;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  &__content {
    background: #f1f1f1;
    position: relative;
    padding: 2.5rem 1rem 4rem;
  }
  &__list {
    margin: 0;
    padding: 0;
  }
  &__list-item {
    list-style: none;
  }
  &__price {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: $primaryColor;
    z-index: 1;
    color: #fff;
    font-family: $font2;
    letter-spacing: 1px;
    transform: translate(-50%, 50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    font-size: 1.115rem;
  }
  &__price-span {
    display: block;
    font-family: $font1;
    letter-spacing: 0;
  }
}

.mission {
  padding: 16rem 4rem;
  background: $slate;
  @include overlay;
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
    color: #fff;
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
