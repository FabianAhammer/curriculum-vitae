<script setup lang="ts">
import * as chart from 'charts.css';

</script>

<template>
  <div class="text-h5 pl-4">
    Technologies:
  </div>
  <div id="my-chart">
    <table class="charts-css pie hide-data pa-2">
      <tbody>
      <tr>
        <td style="--start: 0; --end: 0.6;"> <span class="data outside"> Angular </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.6; --end: 0.8;"> <span class="data outside"> Java </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.8; --end: 0.85;"> <span class="data outside"> Protobuf </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.85; --end: 0.9;"> <span class="data outside"> PostgreSQL </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.9; --end: 1;"> <span class="data outside"> Other </span> </td>
      </tr>
      </tbody>
    </table>
    <ul class="charts-css legend legend-square">
      <li>Angular (HTML/Typescript/Scss)</li>
      <li>Java (Hibernate, Liquibase, SpringBoot)</li>
      <li>Protobuf (gRPC)</li>
      <li>PostgreSQL</li>
      <li>Other (Vue, C#, C++, Docker, Shell ...)</li>
    </ul>
  </div>

</template>

<style scoped lang="scss">
  .legend{
    outline: transparent;
    border: none;
  }
</style>
