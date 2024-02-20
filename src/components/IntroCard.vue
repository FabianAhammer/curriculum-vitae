<template>
  <v-card max-width="374" class="h-100">
    <div class="d-flex justify-center align-center">
      <div class="flex-picture-container">
        <v-img
<<<<<<< HEAD
          height="300"
          width="300"
          src="~@/../public/me.jpg"
=======
          src="~@/assets/me.jpg"
>>>>>>> 825fd6f2d588e97a171676e1c0b460c113de335f
          cover
          aspect-ratio="1"
          style="
          filter: grayscale(1);
          border-radius: 50%;"
        ></v-img>
      </div>
    </div>
    <v-card-title class="text-xxl-h4 text-lg-h6 text-wrap">Fabian Ahammer</v-card-title>
    <div class="divider"></div>
    <div class="information-scaffold">
    <v-card-subtitle>
      <div clasS="d-flex justify-space-between align-center">
      <div class="icon-base bg-indigo">
        <v-icon
          icon="mdi-cake"
          class="ma-xxl-2"
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
            class="ma-xxl-2"
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
            class="ma-xxl-2"
            color="white"
          ></v-icon>
        </div>
        <a href="https://github.com/FabianAhammer" class="text-xxl-h5">FabianAhammer</a>
      </div>
    </v-card-subtitle>
    <v-card-subtitle>
      <div clasS="d-flex justify-space-between align-center">
        <div class="icon-base bg-blue-accent-2">
          <v-icon
            icon="mdi-linkedin"
            class="ma-xxl-2"
            color="white"
          ></v-icon>
        </div>
        <a href="https://at.linkedin.com/in/fabian-ahammer-b71581204" class="text-xxl-h5">Fabian Ahammer</a>
      </div>
    </v-card-subtitle>
    </div>
    <div class="divider"></div>
    <SkillChart></SkillChart>
  </v-card>
</template>

<<<<<<< HEAD
<script setup lang="ts">
</script>
=======
>>>>>>> 825fd6f2d588e97a171676e1c0b460c113de335f

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
.flex-picture-container{
  height: 300px;
  width: 300px;
}

@media screen and (max-width: 1920px){
  .flex-picture-container{
    height: 150px;
    width: 150px;
  }
  .icon-base{
    height: 1.6rem;
    width: 1.6rem;
  }
}

</style>
<script setup lang="ts">
</script>
