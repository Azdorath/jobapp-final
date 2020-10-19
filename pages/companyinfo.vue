<template>
  <div class="container Special-Comandments">
    <div class="root">
        <!-- Header -->
        <HeaderMain />

        <!--<div class="header">
            <b-button v-b-toggle.sidebar-1>Drawer Button</b-button>
            <p>Text Content</p>
            <b-button v-b-toggle.sidebar-2>FilterButton</b-button>
        </div>-->

        <!-- Side Bar Left -->
        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://fontmeme.com/images/McDonald%E2%80%99s-Logo.jpg" fluid thumbnail></b-img>
          </div>
        </b-sidebar>

        <!-- Side bar Right: Filter and stuff -->
        <b-sidebar id="sidebar-2" title="Sidebar" right shadow>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://fontmeme.com/images/McDonald%E2%80%99s-Logo.jpg" fluid thumbnail></b-img>
          </div>
        </b-sidebar>

        <b-row id="Main-Container">
          <b-col sm="12">
            <img 
              src="https://fontmeme.com/images/McDonald%E2%80%99s-Logo.jpg" 
              alt=""
              class="company-logos my-5"
            />
          </b-col>

          <b-col sm="12" class="text-center">
            <h1 id="mdss">Mcdonald's Crew Team Member</h1>
            <h5>Aiea, HI</h5>
            <h2>$10-$15/Hr</h2>
          </b-col>
          
          <b-col sm="12" size="lg" class="mb-3 neat-buttons">
             <a target="_blank" href="https://mcdonalds.jibeapply.com/main/jobs/crew-team-member-94-595-kapuohi-st-waipahu-hi-96797-18038-11826?lang=en-us&utm_source=Glassdoor&utm_medium=Organic&utm_campaign=Profile_Jobs"> <b-button block>
                  Submit Resume
              </b-button></a>
          </b-col>

          <b-col sm="12" size="lg" class="mb-3 neat-buttons">
              <a href="https://rb.gy/xpprqk" target="_blank"> <b-button block>
                  More Info
              </b-button></a>
          </b-col>

          <b-col sm="12">
              <DescriptionCard />
          </b-col>

        </b-row>

      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import DescriptionCard from '@/components/DescriptionCard.vue'
export default {
  components: {
    'HeaderMain': HeaderMain,
    'DescriptionCard': DescriptionCard
  },
  data() {
    return {
      cards: ["love","loves","lovess","lovesss"]
    }
  }
}
</script>

<style>

#mdss {
  font-size: 21px
}

.company-logos {
    display: table;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: auto;
}

/* .neat-buttons {
    font-size: 24px;
} */

#Main-Container {
  margin-left: 0rem;
  margin-right: 0rem;
  justify-content: center;
  color: #F7F7F2;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.Special-Comandments {
  padding: 0rem;
  align-items: start;
}
</style>
