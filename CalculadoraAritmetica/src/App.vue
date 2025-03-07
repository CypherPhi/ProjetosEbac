<script>
export default {
  data() {
    return {
      valor1: 0,
      valor2: 0,
      resultado: 0,
      operacao: '+',
      registros: []
    };
  },
  methods: {
    calcular() {
      switch (this.operacao) {
        case "+":
          this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);
          break;
        case "-":
          this.resultado = parseFloat(this.valor1) - parseFloat(this.valor2);
          break;
        case "*":
          this.resultado = parseFloat(this.valor1) * parseFloat(this.valor2);
          break;
        case "/":
          this.resultado = parseFloat(this.valor1) / parseFloat(this.valor2);
          break;
      }
      this.lista();
    },
    lista() {
      const resultadoFinal = {
        valor1: this.valor1,
        valor2: this.valor2,
        operacao: this.operacao,
        resultado: this.resultado
      }
      this.registros.push(resultadoFinal)
    }
  }
}
</script>

<template>
  <h1 class="text-center m-5">Calculadora Aritmética</h1>
  <div class="container">
    <div class="row text-center">
      <div class="col-4">
        <input type="number" class="form-control fs-1 text-center" placeholder="Digite um número" v-model="valor1"
          @input="calcular()">
      </div>
      <div class="col-4">
        <select class="form-select fs-1 text-center" v-model="operacao" @change="calcular()">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div class="col-4">
        <input type="number" class="form-control fs-1 text-center" placeholder="Digite um número" v-model="valor2"
          @input="calcular()">
      </div>
    </div>
    <div class="row">
      <h1 class="resultado text-center">{{ resultado }}</h1>
    </div>
    <div class="row">
      <h2 class="text-center">Histórico</h2>
      <ul class="list-group text-center">
        <li class="list-group-item" v-for="registro in registros">
          {{ registro.valor1 }} {{ registro.operacao }} {{ registro.valor2 }} = {{ registro.resultado }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.resultado {
  font-size: 200px;
  margin-top: 20%;
}
</style>
