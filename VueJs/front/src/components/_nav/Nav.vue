<template>

<div>
  <b-card title="Card Title" no-body  bg-variant="secondary"  class="Cabecalho" >
    <b-card-header header-tag="nav" >
      <b-nav card-header pills small >
        <b-nav-item to="/Cadastro" >Cadastro de Ordens</b-nav-item>
        <b-nav-item to="/Relatorios" >Meus Relatórios</b-nav-item>
      </b-nav>
    </b-card-header>
  </b-card> 
</div>
</template>
<script>
    export default {
        
    }
</script>

<style>




nav a {
    padding: 10px;
    text-decoration: none;
    background-color: #fff;
    border-radius: 3px;
    color: rgb(160, 10, 5);
    font-weight: bold;
    margin-right: 15px; 
}
nav a:hover{
    text-decoration:none;
    color:rgb(73, 72, 72)
}
nav .router-link-active:hover{
    background-color: rgb(160, 10, 5);
    color: white
}

nav .router-link-active{
    background-color: rgb(160, 10, 5);
    color: white
}

</style>