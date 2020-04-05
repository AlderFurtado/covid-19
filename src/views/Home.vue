<template>
  <div class="mx-12 mt-2">
    <h5 class="mb-4">Dashboard</h5>
    <HelloWorld />
    <v-row class="my-5">
      <v-col cols="12" md="3">
        <CardInfo
          tituloNumero="82 casos"
          tituloTipo="confirmados"
          subtitulo="até o dia 21/04/2020"
          icone="mdi-check"
          color="green"
        />
      </v-col>
      <v-col cols="12" md="3">
        <CardInfo
          tituloNumero="01 casos"
          tituloTipo="obito"
          subtitulo="até o dia 21/04/2020"
          icone="mdi-close"
          color="red"
        />
      </v-col>
      <v-col cols="12" md="3">
        <CardInfo
          tituloNumero="116 casos"
          tituloTipo="análise"
          subtitulo="até o dia 21/04/2020"
          icone="mdi-report"
          color="yellow"
        />
      </v-col>
      <v-col cols="12" md="3">
        <CardInfo
          tituloNumero="1027 casos"
          tituloTipo="descartados"
          subtitulo="até o dia 21/04/2020"
          icone="mdi-delete"
          color="grey"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="7">
        <v-data-table
          :headers="headers"
          :items="cases"
          :items-per-page="5"
          class="elevation-1"
          v-if="selectedTypeStatistics == 'Lista de casos confirmados'"
        ></v-data-table>
      </v-col>
      <v-col cols="12" md="5">
        <v-carousel
          cycle
          height="400"
          show-arrows-on-hover="false"
          hide-delimiter-background
          interval="3000"
        >
          <v-carousel-item>
            <v-sheet height="100%" color="white" class="p-6">
              <v-row class="fill-height" align="center" justify="center">
                <BarChart
                  :labels="Array.from(casesByCity.keys())"
                  :data="Array.from(casesByCity.values())"
                  style="width: 80% "
                />
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="100%" color="white" class="p-6">
              <v-row class="fill-height" align="center" justify="center">
                <LineChart
                  :labels="Array.from(casesByDate.keys())"
                  :data="Array.from(casesByDate.values())"
                  style="width: 70%"
                />
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="100%" color="white" class="p-6">
              <v-row class="fill-height" align="center" justify="center">
                <PieChart
                  :labels="Array.from(casesBySex.keys())"
                  :data="Array.from(casesBySex.values())"
                  style="width: 60%"
                />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardInfo from "@/components/CardInfo.vue";
import LineChart from "@/components/LineChart.vue";
import PieChart from "@/components/PieChart.vue";
import BarChart from "@/components/BarChart.vue";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    HelloWorld,
    CardInfo,
    LineChart,
    PieChart,
    BarChart
  }
})
export default class Home extends Vue {
  typeStatistics = [
    "Lista de casos confirmados",
    "Timeline",
    "Separado por gênero",
    "Separado por cidades"
  ];

  selectedTypeStatistics: string = "Lista de casos confirmados";

  headers = [
    {
      text: "Nº Caso ",
      align: "start",
      value: "n",
      width: 2
    },
    { text: "Sexo", value: "sexo", width: 10 },
    { text: "Idade", value: "idade", width: 10 },
    { text: "Cidade", value: "cidade", width: 20 },
    { text: "Data informado", value: "data", width: 20 }
  ];

  cases = [
    {
      n: "1",
      sexo: "Masculino",
      idade: 37,
      cidade: "Belém",
      data: new Date("Mar 18, 2020").toDateString()
    },
    {
      n: "2",
      sexo: "Feminino",
      idade: 36,
      cidade: "Belém",
      data: new Date("Mar 20, 2020").toDateString()
    },
    {
      n: "3",
      sexo: "Feminino",
      idade: 44,
      cidade: "Belém",
      data: new Date("Mar 22, 2020").toDateString()
    },
    {
      n: "4",
      sexo: "Masculino",
      idade: 53,
      cidade: "Belém",
      data: new Date("Mar 22, 2020").toDateString()
    },
    {
      n: "5",
      sexo: "Feminino",
      idade: 29,
      cidade: "Marabá",
      data: new Date("Mar 23, 2020").toDateString()
    },
    {
      n: "6",
      sexo: "Feminino",
      idade: 25,
      cidade: "Ananindeua",
      data: new Date("Mar 25, 2020").toDateString()
    },
    {
      n: "7",
      sexo: "Masculino",
      idade: 42,
      cidade: "Ananindeua",
      data: new Date("Mar 25, 2020").toDateString()
    },
    {
      n: "8",
      sexo: "Feminino",
      idade: 23,
      cidade: "Belém",
      data: new Date("Mar 25, 2020").toDateString()
    },
    {
      n: "9",
      sexo: "Masculino",
      idade: 36,
      cidade: "Belém",
      data: new Date("Mar 25, 2020").toDateString()
    },
    {
      n: "10",
      sexo: "Feminino",
      idade: 24,
      cidade: "Itaituba",
      data: new Date("Mar 26, 2020").toDateString()
    },
    {
      n: "11",
      sexo: "Feminino",
      idade: 47,
      cidade: "Castanhal",
      data: new Date("Mar 26, 2020").toDateString()
    },
    {
      n: "12",
      sexo: "Feminino",
      idade: 35,
      cidade: "Ananindeua",
      data: new Date("Mar 26, 2020").toDateString()
    },
    {
      n: "13",
      sexo: "Masculino",
      idade: 35,
      cidade: "Ananindeua",
      data: new Date("Mar 26, 2020").toDateString()
    },
    {
      n: "14",
      sexo: "Masculino",
      idade: 41,
      cidade: "Balém",
      data: new Date("Mar 27, 2020").toDateString()
    },
    {
      n: "15",
      sexo: "Feminino",
      idade: 43,
      cidade: "Balém",
      data: new Date("Mar 27, 2020").toDateString()
    },
    {
      n: "16",
      sexo: "Masculino",
      idade: 44,
      cidade: "Balém",
      data: new Date("Mar 27, 2020").toDateString()
    },
    {
      n: "17",
      sexo: "Masculino",
      idade: 25,
      cidade: "Parauapebas",
      data: new Date("Mar 28, 2020").toDateString()
    },
    {
      n: "18",
      sexo: "Feminino",
      idade: 42,
      cidade: "Belém",
      data: new Date("Mar 28, 2020").toDateString()
    },
    {
      n: "19",
      sexo: "Feminino",
      idade: 9,
      cidade: "Belém",
      data: new Date("Mar 29, 2020").toDateString()
    },
    {
      n: "20",
      sexo: "Masculino",
      idade: 30,
      cidade: "Belém",
      data: new Date("Mar 29, 2020").toDateString()
    },
    {
      n: "21",
      sexo: "Masculino",
      idade: 68,
      cidade: "Belém",
      data: new Date("Mar 30, 2020").toDateString()
    },
    {
      n: "22",
      sexo: "Masculino",
      idade: 35,
      cidade: "Belém",
      data: new Date("Mar 30, 2020").toDateString()
    },
    {
      n: "23",
      sexo: "Feminino",
      idade: 55,
      cidade: "Belém",
      data: new Date("Mar 30, 2020").toDateString()
    },
    {
      n: "24",
      sexo: "Masculino",
      idade: 53,
      cidade: "Belém",
      data: new Date("Mar 30, 2020").toDateString()
    },
    {
      n: "25",
      sexo: "Masculino",
      idade: 34,
      cidade: "Belém",
      data: new Date("Mar 30, 2020").toDateString()
    },
    {
      n: "26",
      sexo: "Masculino",
      idade: 29,
      cidade: "Belém",
      data: new Date("Mar 30, 2020").toDateString()
    },
    {
      n: "27",
      sexo: "Feminino",
      idade: 28,
      cidade: "Ananindeua",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "28",
      sexo: "Masculino",
      idade: 43,
      cidade: "Belém",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "29",
      sexo: "Feminino",
      idade: 29,
      cidade: "Belém",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "30",
      sexo: "Masculino",
      idade: 24,
      cidade: "Belém",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "31",
      sexo: "Feminino",
      idade: 53,
      cidade: "Belém",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "32",
      sexo: "Feminino",
      idade: 39,
      cidade: "Abaetetuba",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "33",
      sexo: "Feminino",
      idade: 39,
      cidade: "Tucuruí",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "34",
      sexo: "Masculino",
      idade: 37,
      cidade: "Marituba",
      data: new Date("Mar 31, 2020").toDateString()
    },
    {
      n: "35",
      sexo: "Feminino",
      idade: 19,
      cidade: "Belém",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "36",
      sexo: "Masculino",
      idade: 31,
      cidade: "Belém",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "37",
      sexo: "Feminino",
      idade: 25,
      cidade: "Ananindeua",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "38",
      sexo: "Feminino",
      idade: 33,
      cidade: "Belém",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "39",
      sexo: "Feminino",
      idade: 42,
      cidade: "Barcarena",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "40",
      sexo: "Feminino",
      idade: 47,
      cidade: "Belém",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "41",
      sexo: "Feminino",
      idade: 87,
      cidade: "Alter do Chão",
      data: new Date("Apr 1, 2020").toDateString()
    },
    {
      n: "42",
      sexo: "Feminino",
      idade: 48,
      cidade: "Santarém",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "43",
      sexo: "Masculino",
      idade: 51,
      cidade: "Santarém",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "44",
      sexo: "Masculino",
      idade: 54,
      cidade: "Santarém",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "45",
      sexo: "Masculino",
      idade: 64,
      cidade: "Ananindeua",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "46",
      sexo: "Masculino",
      idade: 65,
      cidade: "Belém",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "47",
      sexo: "Masculino",
      idade: 64,
      cidade: "Belém",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "48",
      sexo: "Masculino",
      idade: 64,
      cidade: "Ananindeua",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "49",
      sexo: "Feminino",
      idade: 26,
      cidade: "Belém",
      data: new Date("Apr 2, 2020").toDateString()
    },
    {
      n: "50",
      sexo: "Feminino",
      idade: 55,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "51",
      sexo: "Feminino",
      idade: 60,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "52",
      sexo: "Feminino",
      idade: 35,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "53",
      sexo: "Feminino",
      idade: 39,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "54",
      sexo: "Masculino",
      idade: 32,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "55",
      sexo: "Masculino",
      idade: 29,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "56",
      sexo: "Feminino",
      idade: 27,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "57",
      sexo: "Feminino",
      idade: 38,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "58",
      sexo: "Feminino",
      idade: 24,
      cidade: "Itaituba",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "59",
      sexo: "Masculino",
      idade: 32,
      cidade: "Itaituba",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "60",
      sexo: "Masculino",
      idade: 53,
      cidade: "Benevides",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "61",
      sexo: "Feminino",
      idade: 41,
      cidade: "Marabá",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "62",
      sexo: "Masculino",
      idade: 23,
      cidade: "Oeiras do Pará",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "63",
      sexo: "Masculino",
      idade: 36,
      cidade: "Novo Progresso",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "64",
      sexo: "Masculino",
      idade: 37,
      cidade: "Altamira",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "65",
      sexo: "Feminino",
      idade: 22,
      cidade: "São Geraldo do Araguaia",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "66",
      sexo: "Masculino",
      idade: 48,
      cidade: "Goianésia do Pará",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "67",
      sexo: "Feminino",
      idade: 42,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "68",
      sexo: "Feminino",
      idade: 34,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "69",
      sexo: "Feminino",
      idade: 80,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "70",
      sexo: "Feminino",
      idade: 28,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },

    {
      n: "71",
      sexo: "Feminino",
      idade: 38,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "72",
      sexo: "Feminino",
      idade: 65,
      cidade: "Belém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "73",
      sexo: "Masculino",
      idade: 44,
      cidade: "Santarém",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "74",
      sexo: "Masculino",
      idade: 60,
      cidade: "Castanhal",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "75",
      sexo: "Masculino",
      idade: 51,
      cidade: "Parauapebas",
      data: new Date("Apr 3, 2020").toDateString()
    },
    {
      n: "76",
      sexo: "Feminino",
      idade: 46,
      cidade: "Ananindeua",
      data: new Date("Apr 4, 2020").toDateString()
    },
    {
      n: "77",
      sexo: "Feminino",
      idade: 26,
      cidade: "Marituba",
      data: new Date("Apr 4, 2020").toDateString()
    },
    {
      n: "78",
      sexo: "Masculino",
      idade: 50,
      cidade: "Belém",
      data: new Date("Apr 4, 2020").toDateString()
    },
    {
      n: "79",
      sexo: "Masculino",
      idade: 22,
      cidade: "Belém",
      data: new Date("Apr 4, 2020").toDateString()
    },
    {
      n: "80",
      sexo: "Feminino",
      idade: 56,
      cidade: "Belém",
      data: new Date("Apr 4, 2020").toDateString()
    },
    {
      n: "81",
      sexo: "Masculino",
      idade: 28,
      cidade: "Barcarena",
      data: new Date("Apr 4, 2020").toDateString()
    },
    {
      n: "82",
      sexo: "Feminino",
      idade: 32,
      cidade: "Barcarena",
      data: new Date("Apr 4, 2020").toDateString()
    }
  ];

  beforeMount() {
    var myMap = new Map();
    this.casesBySex;
  }

  get casesByDate() {
    var casesByDate = new Map();
    for (let index = 0; index < this.cases.length; index++) {
      if (casesByDate.get(this.cases[index].data) == undefined) {
        casesByDate.set(this.cases[index].data, 1);
      } else {
        casesByDate.set(
          this.cases[index].data,
          casesByDate.get(this.cases[index].data) + 1
        );
      }
    }

    return casesByDate;
  }

  get casesBySex() {
    var casesBySex = new Map();
    for (let index = 0; index < this.cases.length; index++) {
      if (casesBySex.get(this.cases[index].sexo) == undefined) {
        casesBySex.set(this.cases[index].sexo, 1);
      } else {
        casesBySex.set(
          this.cases[index].sexo,
          casesBySex.get(this.cases[index].sexo) + 1
        );
      }
    }

    return casesBySex;
  }

  get casesByCity() {
    var casesBySex = new Map();
    for (let index = 0; index < this.cases.length; index++) {
      if (casesBySex.get(this.cases[index].cidade) == undefined) {
        casesBySex.set(this.cases[index].cidade, 1);
      } else {
        casesBySex.set(
          this.cases[index].cidade,
          casesBySex.get(this.cases[index].cidade) + 1
        );
      }
    }

    return casesBySex;
  }

  selectTypeStatistics(type: string) {
    this.selectedTypeStatistics = type;
  }
}
</script>
