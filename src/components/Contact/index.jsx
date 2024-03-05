import { useState } from 'react';
import './contact.css';
import aumentou from '/public/images/aumentou.png';

const Contact = () => {
  const [income, setIncome] = useState('');
  const [pfTax, setPfTax] = useState(0);
  const [pjTax, setPjTax] = useState(0);

  const calculateTaxes = () => {
    const incomeFloat = parseFloat(income);
    let pfTaxValue = 0;
    let pjTaxValue = 0;

    if (incomeFloat < 7900) {
      pfTaxValue = 0;
      pjTaxValue = 0;
    } else {
      // Pessoa Física
      const baseCalcPF = incomeFloat - 564.8; // Dedução do imposto de renda
      const aliquotaPF = 27.5 / 100;
      const valorFixoPF = 896;
      pfTaxValue = baseCalcPF * aliquotaPF - valorFixoPF;

      // Pessoa Jurídica
      const folhaPagamento = incomeFloat * 0.28; // 28% sobre o faturamento
      const descontoINSS = folhaPagamento * 0.11;
      const deducaoIRRF = 564.8;
      const simplesNacional = incomeFloat * 0.06;
      const contabilidade = 350;
      const coworking = 80;
      const irrf = 163.84;
      const baseIRRF = deducaoIRRF > descontoINSS ? folhaPagamento - deducaoIRRF : folhaPagamento - descontoINSS;

      if (incomeFloat > 4664.68) {
        pjTaxValue = baseIRRF * 0.275 - 896;
      } else if (incomeFloat >= 3751.06) {
        pjTaxValue = baseIRRF * 0.225 - 662.77;
      } else if (incomeFloat >= 2826.66) {
        pjTaxValue = baseIRRF * 0.15 - 381.44;
      } else if (incomeFloat >= 2259.21) {
        pjTaxValue = baseIRRF * 0.075 - 169.44;
      }
      pjTaxValue = descontoINSS + simplesNacional + contabilidade + coworking + irrf;
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
            {income < 7900 ?
              <h3>Com o valor informado, é válido permanecer como pessoa física. </h3>
              :
              <>
                <h3>Imposto como Pessoa Física (PF): R$ {pfTax}</h3>
                <h3>Imposto como Pessoa Jurídica (PJ): R$ {pjTax}</h3>
                <h3>Economia: R$ <strong>{(pfTax - pjTax).toFixed(2)}</strong></h3>
              </>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
