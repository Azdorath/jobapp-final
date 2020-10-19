<template>
<!-- 
<img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
-->
  <b-card
    class="work-card"
    :title="content.title"
    tag="article"
    :sub-title="content.Location"
  >
    <b-card-text style="font-size:12px; text-align:left; margin:0rem;">
      <nuxt-link to="companyinfo">
      A Crew Team Member at McDonalds is more than just a paycheck its a chance to gain life skills and grow as an individual. And for anyone willing to take advantage of these opportunitieswere committed to becoming Americas Best First Job.
      </nuxt-link>
    </b-card-text>

    <img 
      :src="content.logo" 
      alt=""
      class="company-logo"
      />
  </b-card>
</template>

<script>
export default {
  props: {
    content: {
      default: function() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style>

a {
  color: #F7F7F2;
}

.work-card {
  position: relative;
  border-radius: 1rem;
  background: radial-gradient(195.97% 590.14% at 0% 100%, #0F0F0F 0%, #2D2C2C 100%);
  color: #F7F7F2;
  box-shadow: 0px 0px 6px 2px rgba(0, 56, 68, 0.95);
;
}

.card-body {
  padding: 0.8rem;
}

.card-subtitle {
  font-size: 11px;
}

.company-logo {
  position: absolute;
  top: 9%;
  right: 4%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
</style>
