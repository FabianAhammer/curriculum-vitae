<template>
  <v-app>
    <v-main>
      <div class="d-flex main-spacer flex-md-row flex-lg-row flex-xl-row flex-column ga-lg-1 ga-xxl-2">
        <IntroCard class="card-flex"></IntroCard>
        <div class="d-flex flex-column ga-lg-1 ga-xxl-2 ga-1">
          <Experience></Experience>
          <v-card class="mr-lg-2 mb-lg-2">
            <v-card-title class="text-h5">Language Proficiency</v-card-title>
            <div class="d-flex align-center justify-space-between language-bar">
              <div>German (Native Speaker)</div>
              <div>English</div>
            </div>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.language-bar{
  height: 3rem;
  padding: 0 1rem;
  font-size: 1.5rem;
  width: 100%;
  background: linear-gradient(149deg, rgba(241,64,37,1) 0%, rgba(241,64,37,1) 57%,rgba(8,40,142,1) 60%, rgba(0,212,255,1) 100%);
}
.main-spacer{
  height: 100vh;
}

.card-flex{
  min-width: 375px;
}
@media screen and (max-width: 2032px)  {
  .card-flex{
    min-width: 250px;
  }
  .language-bar{
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 1920px)  {
  .card-flex{
    min-width: 250px;
  }
  .language-bar{
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 1600px)  {
  .card-flex{
    min-width: 250px;
  }
  .language-bar{
    font-size: 1rem;
  }
}




@media screen and (max-width: 500px)  {
  .main-spacer{
    height: auto;
  }

  .language-bar{
    font-size: 1rem;
  }
}

</style>
