<template>
  <div id="Navbar">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Message Board</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarColor01" aria-controls="navbarColor01" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li> <router-link to="/Home">Home</router-link></li>
      <li> <router-link to="/Login">Login</router-link></li>
      <li> <router-link to="/Register">Register</router-link></li>
    </ul>
  </div>
</nav>
    <router-view class="container"/>
  </div>
</template>
