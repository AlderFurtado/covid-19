
<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto mt-3 mt-md-0"
      max-width="300"
      outlined
      shaped
      :elevation="hover ? 16 : 2"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 font-weight-black">
            {{ tituloNumero }}
            <br />
            {{ tituloTipo }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ subtitulo }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" :color="color">
          <v-icon size="50">{{ icone }}</v-icon>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class CardInfo extends Vue {
  @Prop() tituloNumero: string;
  @Prop() tituloTipo: string;
  @Prop() subtitulo: string;
  @Prop() icone: string;
  @Prop() color: string;
}
</script>