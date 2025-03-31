import { useState, useEffect } from "react";
import styles from "./CalculadoraIMS.module.css";
import imcIMagem from "./imc.png";

const CalculadoraIMS = () => {
  let [peso, setPeso] = useState(0);
  let [altura, setAltura] = useState(0);
  let [imc, setImc] = useState(0);
  let [tipo, setTipo] = useState(" ");
  let [resultado, setResultado] = useState(false);

  const calcularIMC = (e) => {
    e.preventDefault();

    let alturaAjustada = altura / 100;
    let imc = peso / (alturaAjustada * alturaAjustada);
    let imcFormatado = imc.toFixed(2);
    setImc(imcFormatado);
    setResultado(true);
  };

  const alterar = () => {
    if (imc < 18.5) {
      setTipo("Baixo do peso");
    } else if (imc < 24.9) {
      setTipo("Normal");
    } else if (imc < 29.9) {
      setTipo("Sobrepeso");
    } else if (imc < 34.9) {
      console.log("foi");
      setTipo("Obesidade");
    } else if (imc < 35) {
      setTipo("Obesidade Severa");
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Calculadora</h1>
      <form onSubmit={calcularIMC}>
        <div className={styles.calculadora__bloco}>
          <label className={styles.calculadora__bloco__text}>
            Digite sua Altura:
          </label>
          <input
            className={styles.calculadora__bloco__input}
            type="number"
            placeholder="180cm"
            onChange={(e) => setAltura(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.calculadora__bloco}>
          <label className={styles.calculadora__bloco__text}>
            Digite seu Peso:
          </label>
          <input
            className={styles.calculadora__bloco__input}
            type="number"
            placeholder="100Kg"
            onChange={(e) => setPeso(parseFloat(e.target.value))}
          />
        </div>
        <button
          type="submit"
          className={styles.calculadora__bloco__button}
          onClick={alterar}
        >
          Calcular
        </button>
        <div>
          <h2 className={styles.calculadora__bloco__text}>Seu IMC é</h2>
          <p className={styles.calculadora__bloco__imc}>{imc}</p>
          <p className={styles.calculadora__bloco__imc}>{tipo}</p>
        </div>
      </form>
      {resultado ? (
        <>
          <img src={imcIMagem} alt="a" />
        </>
      ) : (
        <h1>Aguardando Resultado...</h1>
      )}
    </div>
  );
};

export default CalculadoraIMS;
