import './offers.css'
import contabilidade from '/public/images/Contabilidade-gerencial.png'
import regularizacao from '/public/images/Regularização.png'
import certificado from '/public/images/Certificado.png'
import sistema from '/public/images/Sistema.png'

let Offers = () =>{
    let offer = [
        {image: contabilidade , title:'CONTABILIDADE GERENCIAL' , text:'Abra agora mesmo o CNPJ da sua clínica e evite pagar altos impostos como pessoa física! Transformamos dados em ações lucrativas. Entre em contato e impulsione seu sucesso!' },
        {image:  regularizacao , title:'REGULARIZAÇÃO EMPRESARIAL' , text:'Já tem CNPJ aberto? Nós regularizamos todas pendências do seu CNPJ dos últimos 5 anos. Também vamos avaliar a melhor estratégia para você pagar menos impostos. Conte conosco para simplificar esse processo. Entre em contato agora!' },
        {image: certificado , title:'CERTIFICADO DIGITAL' , text:'Adquira seu certificado digital de maneira rápida, fácil e segura conosco. Nossa equipe garante praticidade e segurança em todas as etapas do processo, proporcionando a você tranquilidade e confiança.' },
        {image: sistema , title:'SISTEMA FINANCEIRO COMPLETO' , text:'Melhore a administração da sua clínica com ferramentas para gestão de agenda, prontuários, finanças e muito mais. Simplifique sua rotina profissional conosco. Entre em contato para descobrir como podemos ajudar!' },
    ]
    return(
        <div className='offers-container'>
            {offer.map(({image, title, text}, index) =>(
                <div className='column' key={index}>
                    <div className='icon'><img src={image}/></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            )) }
        </div>

    )
}

export default Offers