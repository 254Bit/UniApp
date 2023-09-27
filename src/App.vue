<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LandingPage from './components/LandingPage.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import AboutUs from './components/AboutUs.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />


  </header>

  <main>
    
    <div class="wrapper">
      <TheWelcome />
      <HelloWorld msg="You did it!" />
      <LandingPage/>
      <LogIn/>
      <SignUp/>
      <AboutUs/>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
