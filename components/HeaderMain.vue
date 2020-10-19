<template>
  <b-navbar id="The-Header">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!-- <b-button id="Main-Drawer" v-b-toggle.sidebar-1>
        <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
    </b-button> -->
    <b-navbar-brand type="dark" id="Header-Logo" variant="handle">
        <span class="cyan bold">student</span><span class="bold">jobapp</span>
    </b-navbar-brand>

    <b-navbar-toggle></b-navbar-toggle>

    <b-navbar-toggle></b-navbar-toggle>
    
  </b-navbar>
</template>

<style>
#The-Header {
    background: #141414;
}



#Header-Logo {
    color: #F7F7F2;
}

.cyan {
  color: #4DD0E1
}

.bold{
  font-weight: bold;
}
</style>