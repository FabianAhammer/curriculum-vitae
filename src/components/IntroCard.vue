<template>
  <v-card  class="h-100 max-width-card">
    <div class="d-flex justify-center align-center">
      <div class="scaling-image">
        <v-img
          height="300"
          width="300"
          src="~@/../public/me.jpg"
          cover
          style="filter: grayscale(1); border-radius: 50%"
        ></v-img>
      </div>
    </div>
    <v-card-title class="text-xl-h5 text-xxl-h4">Fabian Ahammer</v-card-title>
    <div class="divider"></div>
    <div class="information-scaffold">
    <v-card-subtitle>
      <div clasS="d-flex justify-space-between align-center">
      <div class="icon-base bg-indigo">
        <v-icon
          icon="mdi-cake"
          class="ma-2"
          color="white"
        ></v-icon>
      </div>
        <span class="text-xxl-h5">13. February 2000</span>
      </div>
    </v-card-subtitle>
    <v-card-subtitle>
      <div clasS="d-flex justify-space-between align-center">
        <div class="icon-base bg-red-accent-3">
          <v-icon
            icon="mdi-mail"
            class="ma-2"
            color="white"
          ></v-icon>
        </div>
        <a href="mailto:faa.ahammer@gmail.com" class="text-xxl-h5">faa.ahammer@gmail.com</a>
      </div>
    </v-card-subtitle>
    <v-card-subtitle>
      <div clasS="d-flex justify-space-between align-center">
        <div class="icon-base bg-black">
          <v-icon
            icon="mdi-github"
            class="ma-2"
            color="white"
          ></v-icon>
        </div>
        <a href="https://github.com/FabianAhammer" class="text-xxl-h5 ">FabianAhammer</a>
      </div>
    </v-card-subtitle>
    <v-card-subtitle>
      <div clasS="d-flex justify-space-between align-center">
        <div class="icon-base bg-blue-accent-2">
          <v-icon
            icon="mdi-linkedin"
            class="ma-2"
            color="white"
          ></v-icon>
        </div>
        <a href="https://at.linkedin.com/in/fabian-ahammer-b71581204" class="text-xxl-h5 ">Fabian Ahammer</a>
      </div>
    </v-card-subtitle>
    </div>
    <div class="divider"></div>
    <SkillChart></SkillChart>
  </v-card>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.icon-base {
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 100%;
}

.information-scaffold{
  display: flex;
  flex-direction: column;
  gap: .3rem;

  > .v-card-subtitle{
    background: rgba(63, 62, 62, 0.71);
  }


}
.divider{
  border-bottom: 2px solid grey;
  margin: 2rem 0;
}

.scaling-image{
  width: 300px;
  height: 300px
}

.max-width-card{
  max-width: 374px;
}

@media only screen and (max-width: 2032px) {
  .scaling-image{
    width: 200px;
    height: 200px
  }
  .divider {
    margin: 1rem 0;
  }
}

@media only screen and (max-width: 1920px) {
  .scaling-image{
    width: 200px;
    height: 200px
  }
  .divider {
    margin: 1rem 0;
  }
}

@media only screen and (max-width: 1600px) {
  .scaling-image{
    width: 200px;
    height: 200px
  }
  .divider {
    margin: 1rem 0;
  }
}

@media only screen and (max-width: 500px) {

  .max-width-card{
    max-width: 500px;
  }
}


</style>
