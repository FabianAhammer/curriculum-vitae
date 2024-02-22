<script lang="ts">
export default {
  data: () => ({
    timelineentries: [
      {
        color: 'cyan',
        img: new URL(`@/../public/skylinx.png`, import.meta.url).href,
        year: '01.2021 - 04.2024',
        company: 'Skylinx GmbH',
        text: `
        First two years worked as the leading Frontend Developer, creating various user interfaces for a Flight Planning Software solution, including a 3D Map, communication via gRPC Web and WebSocket based connections to a message queue .
        Later switched to Fullstack Developer role, creating solutions for Free Route Airspace Europe and worldwide application of known directs.`
      },
      {
        color: 'red',
        img: new URL(`@/../public/oebh.png`, import.meta.url).href,
        year: '07.2020 - 01.2021',
        company: 'Austrian Armed Forces',
        text: `Fulfillment of the duty to serve as an Austrian male citizen. Worked in the mountain-moving division of Salzburg`
      },
      {
        color: 'pink',
        img: new URL(`@/../public/bwt.png`, import.meta.url).href,
        year: '08.2017',
        company: 'Internship BWT Mondsee',
        text: `Worked as an IT Intern for one month, primarily in Web Development`
      },
      {
        color: 'amber',
        img: new URL(`@/../public/muki.png`, import.meta.url).href,
        year: '08.2015',
        company: 'Internship Muki Ebensee',
        text: `Internship at a local retailer as sales assistant`
      },
      {
        color: 'green',
        img: new URL(`@/../public/leonding.png`, import.meta.url).href,
        year: '09.2014 - 07.2021',
        company: 'HTBLA Leonding',
        text: `Graduated the "Informatics" Branch of the Higher Technical College in Leonding `
      }
    ],
  })
}
</script>

<template>
  <v-card class="pa-2 flex-1-0 card-align-max-width">
    <v-timeline align="start">
      <v-timeline-item
        v-for="(entry, i) in timelineentries"
        :key="i"
        :dot-color="entry.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${entry.color}`"
            v-text="entry.year"
          ></div>
        </template>
        <template v-if="entry.img != null" v-slot:icon>
          <v-avatar size="small" :image="entry.img"></v-avatar>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${entry.color}`">
            {{ entry.company }}
          </h2>
          <div>
            {{ entry.text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<style scoped lang="scss">
.card-align-max-width{
  max-width: 100%;
}
</style>
