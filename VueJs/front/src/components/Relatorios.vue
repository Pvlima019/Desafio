<template>
  <div>
   <b-container>
      <b-row style="font-size:30px">
        Meus Relatórios
      </b-row>
      <b-row> 
        <hr  style="width:33%;text-align:left;margin-left:0">
      </b-row>
    </b-container> 
      <b-card class="mt-3" header="Novo Consulta" style="max-width: 37.5em;"  >
        <b-row>
          <div>
            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
          </div>
        </b-row>
        <b-row>
          <div v-if="selected === 'Relatório de Ordens'"  >
            <p></p>
            <b-form-datepicker id="example-datepicker" v-model="myDate" class="mb-2"></b-form-datepicker>
            <p></p>
              <b-button type="submit" variant="dark" v-on:click="submit">Consultar</b-button>
            <p></p>
            <div>
              <b-table striped hover small :items="ordens" :fields="fields" class="text-center "></b-table>
            </div>
          </div> 
          <div v-else-if="selected === 'Relatório de Posição'" class="w-100">
            <p></p>
            <b-table striped hover small :items="posicoes" class="text-center " > </b-table>
          </div>
        </b-row>
      </b-card>
    
  </div>
</template>>



<script>
export default {
  data(){
    return{
      titulo:'Meus Relatórios',
      selected: null,
      posicoes:[],
      ordens: [],
      myDate:'',
      options: [
          { value: null, text: 'Selecione a forma de Consulta', disabled: true },
          { value: 'Relatório de Ordens', text: 'Relatório de Ordens' },
          { value: 'Relatório de Posição', text: 'Relatório de Posição' },
        ],
      fields: [
          {
            key: 'descricao',
            sortable: true
          },
          {
            key: 'quantidade',
            sortable: true
          },
          {
            key: 'preco',
            sortable: true
          },
          {
            key: 'data',
            sortable: false
          },
          {
            key: 'classeNegociacao',
            label: 'Classe_Negociacao',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            
          }
        ],
        
        
        



    }

  }, 
  created() {
    
    
         this.$http
        .get(this.$ROOT_ORDENS)
        //.get("http://localhost:5000/api/ordens")
        .then(res => res.json())
        .then(posicoes => (this.posicoes = posicoes));
  },

  props: {},   

  methods: {
     
     submit()
      {
        
          this.$http
          .get(`${this.$ROOT_ORDENS}/${this.myDate}`)
        //.get(`http://localhost:5000/api/Ordens/${this.myDate}`)
        .then(res => res.json())
        .then(ordens => (this.ordens = ordens));
        

      }
  },
  
}
</script>

<style scoped>

</style>
