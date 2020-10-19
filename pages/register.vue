<template>
  <div class="container">
    <!-- Todo: Check firebase token: If token: Redirect -->
    <div class="root">
      <div id="Logo-Stuff">
        <img id="index-img"
            src="https://media.discordapp.net/attachments/755129411082387653/767862308780113920/sjahigh.png"
            class="mt-1 mx-auto d-block" 
        />
               <span id="tit" class="cyan">student</span><span id="tit2">jobapp</span>
      </div>
      <b-form id="Form-Stuff">
        <label for="text-username" class="turn-me-white">Username</label>
        <b-input 
          type="username" 
          id="text-username" 
          class="py-2 my-1"
          aria-describedby="password-help-block"
        ></b-input>
      
        <label for="text-email" class="turn-me-white">Email</label>
        <b-input 
          type="email" 
          id="text-email" 
          class="py-2 my-1"
          aria-describedby="password-help-block"
        ></b-input>

        <label for="text-password" class="turn-me-white">Password</label>
        <b-input 
          type="password" 
          id="text-password" 
          class="py-2 my-1"
          aria-describedby="password-help-block"
        ></b-input>
        
        <b-button to="/main" block class="mt-4">Sign Up</b-button>
        <span>Already have an account? </span>
        <span>
          <nuxt-link  to="/signin">Sign in here</nuxt-link >
        </span>
      </b-form>
    </div>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
export default {
  components: {
    'HeaderMain': HeaderMain
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
}

#Logo-Stuff {
  text-align: center;
}

label {
  text-align: left;
}

#text-password, #text-username, #text-email {
  background: linear-gradient(88.57deg, #191919 0%, #2D2C2C 100%);
  border-radius: 5px;
  border: none;
}

.turn-me-white {
  color: #F7F7F2;
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
</style>
