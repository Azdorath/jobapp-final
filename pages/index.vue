<template>
  <div id="Main-Container" class="container">
    <div class="root">
      <div class="logo-backdrop">
        <div id="logo-content">
          <img id="index-img" 
            src="https://media.discordapp.net/attachments/755129411082387653/767862308780113920/sjahigh.png"
            class="mx-auto d-block" 
          />
          <span id="tit" class="cyan">student</span><span id="tit2">jobapp</span>
          <h3>Student job hunting. Simplified.</h3>
        </div>
      </div>
      <b-row id="button-container">
        <b-col style="padding:0rem; height:100%;" xs="6" sm="6">
          <b-button
            to="/register"
            style="height:100%; background-color:#5139E4; border: 2px solid #5139E4;" 
            block 
            id="Register">
            Register
          </b-button>
        </b-col>
        <b-col style="padding:0rem; height:100%;" xs="6" sm="6">
          <b-button to="signin" style="height:100%; background-color:#2D2C2C; border: 2px solid #2D2C2C;" block id="Sign-In">Sign In</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#Main-Container {
  margin-left: 0rem;
  margin-right: 0rem;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  width: 100%;
  height: 100vh;
}

#button-container {
  flex-wrap: nowrap;
  height: 7%;
}

.root {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.logo-backdrop {
  background: linear-gradient(19.12deg, #003844 6.5%, #563635 100%);
  display: flex;
  width: 100%;
  height: 93%;
  justify-content: center;
  align-content: center;
}

#logo-content {
  display: inline-block;
  margin: auto;
  text-align: center;
  color: #F7F7F2;
}

#Sign-In, #Register {
  border-radius: 0rem;
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

.cyan {
  color: #4DD0E1
}
#tit,#tit2 {
  font-size: 40px;
  font-weight: bold;
}
h3{
  font-size: 20px;
  font-weight:100
}
#index-img{
  width: 75%;
  height: auto
}
</style>
