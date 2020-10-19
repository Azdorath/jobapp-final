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
            <b-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png" fluid thumbnail></b-img>
          </div>
        </b-sidebar>

        <!-- Side bar Right: Filter and stuff -->
        <b-sidebar id="sidebar-2" title="Sidebar" right shadow>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png" fluid thumbnail></b-img>
          </div>
        </b-sidebar>

        <b-row id="Main-Container">
          <template v-for="item in cards"> 
            <b-col :key="item" xs="10" sm="12" class="mb-4">
              <Cards :content="item" />
            </b-col>
          </template>
        </b-row>

      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import Cards from '@/components/Cards.vue'
export default {
  components: {
    'HeaderMain': HeaderMain,
    'Cards': Cards
  },
  data() {
    return {
      cards: [
        {
          title: "Mcdonald's Crew Team Member",
          Location: "Aiea, HI     $30-$40/Hr.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png"
        },
        {
          title: "Mcdonald's Crew Team Member",
          Location: "Waikiki, HI     $15-$20/Hr.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png"
        },
        {
          title: "Mcdonald's Crew Team Member",
          Location: "Aiea, HI     $10-$12/Hr.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png"
        },
        {
          title: "Mcdonald's Crew Team Member",
          Location: "Aiea, HI     $30-40/Hr.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png"
        },
        {
          title: "Mcdonald's Crew Team Member",
          Location: "Aiea, HI     $30-40/Hr.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png"
        },
        {
          title: "Mcdonald's Crew Team Member",
          Location: "Aiea, HI     $30-40/Hr.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/792px-McDonald%27s_logo.svg.png"
        }
      ]
    }
  }
}
</script>

<style>

#Main-Container {
  margin-left: 0rem;
  margin-right: 0rem;
  justify-content: center;
  max-height:95vh;
  overflow-y: scroll;
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
