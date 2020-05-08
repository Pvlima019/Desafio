<template>
  <div>
    <b-container>
      <b-row style="font-size:30px">
        Cadastro de Ordens
      </b-row>
      <b-row> 
        <hr  style="width:42%;text-align:left;margin-left:0">
      </b-row>
    </b-container> 
    <b-row>
      <div>
        <b-card class="mt-3" header="Novo Cadastro">
          <b-form @submit="submit">
            <b-form-group id="input-group-1" label="Ativos disponíveis:" label-for="input-1">
              <b-form-select id="input-1" v-model="FkIdAtivo" required>
                  <b-form-select-option value="null" disabled>Selecione um ativo</b-form-select-option>
                  <div></div>
                  <b-form-select-option v-for="(ativo, index) in ativos" :key="index"  v-bind:value="index+1">
                  {{ativo.descricao}} (Lote Mínimo: {{ativo.loteMinimo}})
                  </b-form-select-option>
              </b-form-select>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Quantidade:"
              label-for="input-2"
              description="A quantidade deve ser multipla do lote mínimo do ativo selecionado.">
              <b-form-input
                id="input-2"
                v-model="Quantidade"
                type="number"
                required
                placeholder="Entre com a quantidade"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Preço:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="Preco"
                type="number"
                required
                placeholder="Entre com o preço da Ordem"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Data:" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="Data"
                type="date"          
                required
                placeholder="Entre com o preço da Ordem"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-5" label="Classe Negociação:" label-for="input-3">
              <b-form-select
                id="input-"
                v-model="ClasseNegociacao"
                :options="options"
                required
              ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card>
      </div>
    </b-row>  
  </div>

</template>
<script>
export default {
  data(){
    return{
      titulo:'Cadastro de Ordens',
      FkIdAtivo:"",
      Quantidade:"",
      Preco:"",
      ClasseNegociacao:"",
      ordens: [],
      ativos:[],
      Data:'',
      options: [
          { value: null, text: 'Selecione a Classe de Negociação', disabled: true },
          { value: 'C', text: 'Compra' },
          { value: 'V', text: 'Venda' },
        ],
      

    }

  }, 
  created() {
    
      this.$http
        .get(this.$ROOT_ORDENS)
        //.get("http://localhost:3000/ordens")
        .then(res => res.json())
        .then(ordens => (this.ordens = ordens));
         
         this.$http
        .get(this.$ROOT_ATIVOS)
        //.get("http://localhost:5000/api/ativos")
        .then(res => res.json())
        .then(ativos => (this.ativos = ativos));

        
  },
  
  props: {},
  
  methods: {
    submit() {
      
      let _ordem ={
        fkIdAtivo: this.FkIdAtivo,
         quantidade: this.Quantidade,
          preco: this.Preco,
           data: this.Data,
            classeNegociacao: this.ClasseNegociacao
      }

     this.$http
          .post(this.$ROOT_ORDENS,_ordem)
        //.post("http://localhost:5000/api/ordens",_ordem)
        .then(res => res.json())
        .then(ordem => {
        this.ordens.push(ordem);
          
        });
        this.fkIdAtivo = "";
      
    }
  },
    
  
}
</script>

<style lang="scss" scoped>

</style>
