<template>
  <v-row>
    <v-col cols="12" md="9" class="intro">
      <v-row>
        <v-col cols="12" md="9">
          <p>Seja bem-vindo ao</p>
          <h3>Portal Corona Virus Pará</h3>
          <p>Sistema com intuito de informar os casos de covid-19 no estado do Pará</p>
          <p>
            Os dados são colocados manualmente pegando informações das redes socias da
            <a
              href="https://www.instagram.com/sespapara/?hl=pt-br"
              target="_blank"
            >Sespa</a> e os
            <span>autores não são responsavéis pela veracidades dos mesmos</span>
          </p>
        </v-col>
        <v-col cols="12" md="3">
          <img src="../assets/corona.jpg" alt />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HelloWorld extends Vue {
  name: "HelloWorld";
}
</script>

<style lang="sass" scoped>
.intro
  padding: 12px 3em
  display: flex
  background-color: #FFF
  border-radius: 20px
  flex-wrap: wrap

  span
    font-weight: bold

  img
    min-width: 80px
    max-width: 200px
</style>
