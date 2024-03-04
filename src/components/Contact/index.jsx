import { useState } from 'react';
import './contact.css'
import aumentou from '/public/images/aumentou.png'


const Contact = () => {
  const [income, setIncome] = useState('');
  const [pfTax, setPfTax] = useState(0);
  const [pjTax, setPjTax] = useState(0);

  const calculateTaxes = () => {
    const incomeFloat = parseFloat(income);
    let pfTaxValue = 0;
    let pjTaxValue = 0;

    if (incomeFloat <= 2259.20) {
      pfTaxValue = incomeFloat * 0.075;
    } else if (incomeFloat <= 2826.65) {
      pfTaxValue = 169.42 + (incomeFloat - 2259.20) * 0.15;
    } else if (incomeFloat <= 3751.05) {
      pfTaxValue = 169.42 + 366.33 + (incomeFloat - 2826.65) * 0.225;
    } else {
      pfTaxValue = 169.42 + 366.33 + 445.64 + (incomeFloat - 3751.05) * 0.275;
    }

    if (incomeFloat <= 15000) {
      pjTaxValue = incomeFloat * 0.06;
    } else if (incomeFloat <= 30000) {
      pjTaxValue = 900 + (incomeFloat - 15000) * 0.112;
    } else if (incomeFloat <= 60000) {
      pjTaxValue = 2620 + (incomeFloat - 30000) * 0.135;
    } else if (incomeFloat <= 150000) {
      pjTaxValue = 6620 + (incomeFloat - 60000) * 0.16;
    } else if (incomeFloat <= 300000) {
      pjTaxValue = 25220 + (incomeFloat - 150000) * 0.21;
    } else if (incomeFloat <= 400000) {
      pjTaxValue = 52920 + (incomeFloat - 300000) * 0.33;
    } else {
      pjTaxValue = 117720 + (incomeFloat - 400000) * 0.33;
    }

    setPfTax(pfTaxValue.toFixed(2));
    setPjTax(pjTaxValue.toFixed(2));
  };

  return (

    <section className='contact'>

  
      <div className='contact-container'>
        <div className='imagem'>
          <img src={aumentou}/>

        </div>
    <div className="calculator-container">
      <h2>Calculadora de Impostos</h2>
      <div>
        <label htmlFor="income">Renda Mensal:</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Digite sua renda"
        />
      </div>
      <button onClick={calculateTaxes}>Calcular</button>
      <div>
        <h3>Imposto como Pessoa Física (PF): R$ {pfTax}</h3>
        <h3>Imposto como Pessoa Jurídica (PJ): R$ {pjTax}</h3>
        <h3>Economia: R$ <strong>{(pfTax - pjTax).toFixed(2)}</strong></h3>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;
