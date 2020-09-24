<template>
  <div id="trainers">
    <HeroComponent :images="heroImages"/>
    <section class="section content">
      <div class="container">
        <div class="columns">
          <div class="column is-4-widescreen">
            <div class="intro">
              <h2 class="intro__heading">Something here</h2>
              <p class="intro__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nostrum quod libero iste voluptate, ut. Corporis aperiam eos quam architecto. Facilis amet nesciunt voluptas eaque, minus esse saepe mollitia vero.</p>
            </div>
          </div>
          <div class="column">
            <div class="faq">
              <article v-for="(faq, key) in faqs" :key="key" class="faq__article" :class="{ 'faq__article--active': faq.active }">
                <h3 class="faq__heading">
                  <button class="faq__button" @click="toggleFaq(key)">
                    {{ faq.title }}
                    <i class="faq__icon fa" :class="[ faq.active ? 'fa-chevron-up' : 'fa-chevron-down' ]"></i>
                  </button>
                </h3>
                <div class="faq__content">
                  <p class="faq__body">
                    {{ faq.body }}
                  </p>
                  <router-link v-if="faq.link" :to="faq.link.to" class="button">
                    <span class="button__span">
                      {{ faq.link.text }}
                    </span>
                  </router-link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section outro has-text-centered content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <div class="outro__content">
              <h2 class="outro__heading">Want to see more?</h2>
              <p class="outro__body">See our before and after shots and a demo of how we clean each and every bin!</p>
              <router-link to="gallery" class="button outro__button"><span>Check out the gallery</span></router-link>
              <router-link to="contact" class="button button--alt outro__button"><span>Contact us today!</span></router-link>
              <!-- <a :href="$store.state.joinUrl" class="button button--alt outro__button" target="_blank"><span>Online specials!</span></a> -->
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
  name: 'FAQ',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/flag-of-usa-1600162.jpg'),
          title: 'Frequently Asked Questions',
          subtitle: 'If you\'ve got questions, we\'ve got answers!',
        },
      ],
      faqs: [
        {
          title: 'Why do my cans need to be cleaned?',
          body: 'Most people know their cans are dirty, but they don\'t understand the dangers of the long-term buildup of microorganisms, viruses and harmful bacteria that grow over time. Most people bag their trash and dispose of the garbage in the trash bins but they often leak or break thus creating a breeding ground for bacteria and insects to linger or lay eggs, this can also attract pests and rodents to scavenge your trash and recycling cans. We recommend cleaning your cans minimum once every 3 months.',
          active: false,
          link: null,
        },
        {
          title: 'When do you clean my cans?',
          body: 'We stop by the day after your trash is normally collected. This way, your cans are empty and ready to be cleaned. Before we come out, you\'ll receive a notification as a reminder to keep your cans empty and curbside for us.',
          active: false,
          link: null,
        },
        {
          title: 'How do I sign up?',
          body: 'You can sign up for all of our plans via our pricing page!',
          active: false,
          link: {
            to: 'about',
            text: 'Check out our pricing!'
          },
        },
        {
          title: 'Do you offer any discounts?',
          body: 'We do! For every referral you send us your next cleaning is on us! Simply have your family or friends put your name in the comment section when they’re checking out and we will service your next cleaning free of charge!',
          active: false,
          link: null,
        },
        {
          title: 'Can you work with HOAs?',
          body: 'Absolutely! We would love to schedule and work with your HOA to keep you and your neighbors bins clean and sanitary. Please Contact Us for more details.',
          active: false,
          link: null,
        },
        {
          title: 'Can I gift a cleaning to a friend or neighbor?',
          body: 'Of course! We love to encourage the gift of clean garbage cans! As long as the recipient is within our cleaning routes, we are happy to help you spread the love. Please contact us with the address of the cleaning and we can add their services to your existing account for billing. If you want to simply gift a one-time cleaning, we can accommodate that as well. Should the recipient sign up for recurring cleanings, you get a free month of services on us!',
          active: false,
          link: null,
        },
        {
          title: 'My bin wasn\'t spotless after my service, how come?',
          body: 'On very rare occasions, some cans are EXTREMELY dirty. It can take a few cleanings to fully remove the built-up grime from these cans that haven\'t been cleaned in several years. Please note that some stains, such as paint or dried tar cannot be removed completely by our cleaning services.',
          active: false,
          link: null,
        },
        {
          title: 'How will I know you’ve cleaned our bins?',
          body: 'After each serviced bin, we will roll your cans back to your garage door and place a piece of masking tape over the lid.',
          active: false,
          link: null,
        },
      ],
    };
  },
  methods: {
    toggleFaq(key) {
      this.faqs.forEach((faq) => faq.active = false)
      this.faqs[key].active = true
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.faq {
  &__article {
    margin-bottom: -1rem;
    &--active {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
      margin-bottom: 1rem;
      .faq__button {
        background: darken($primaryColor, 10);
      }
      .faq__content {
        height: auto;
        opacity: 1;
      }
    }
  }
  &__heading {
    margin: 0;
    display: block;
  }
  &__button {
    background: $primaryColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    font-family: $font2;
    letter-spacing: 2px;
    font-size: 1.25rem;
    color: #fff;
    border: 0;
    padding: .5rem .75rem;
    @include transition;
    &:hover {
      cursor: pointer;
      background: lighten($primaryColor, 10);
    }
  }
  &__icon {
    margin-top: -4px;
  }
  &__content {
    opacity: 0;
    height: 0;
    padding: 1rem .75rem;
    overflow: hidden;
    @include transition;
  }
  &__body {
  }
}

.outro {
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
