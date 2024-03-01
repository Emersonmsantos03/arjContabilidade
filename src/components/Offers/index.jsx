import './offers.css'
import contabilidade from '/public/images/Contabilidade-gerencial.png'
import regularizacao from '/public/images/Regularização.png'
import certificado from '/public/images/Certificado.png'
import sistema from '/public/images/Sistema.png'

let Offers = () =>{
    let offer = [
        {image: contabilidade , title:'CONTABILIDADE GERENCIAL' , text:'Maximize os resultados da sua empresa! Transformamos dados em ações lucrativas. Entre em contato e impulsione seu sucesso!' },
        {image:  regularizacao , title:'REGULARIZAÇÃO EMPRESARIAL' , text:'Regularize seu CNPJ nos últimos 5 anos em todas as esferas: federal, estadual e municipal. Conte conosco para simplificar esse processo. Entre em contato agora!' },
        {image: certificado , title:'CERTIFICADO DIGITAL' , text:'Obtenha seu certificado digital rapidamente. Garantimos praticidade e segurança' },
        {image: sistema , title:'SISTEMA FINANCEIRO COMPLETO' , text:'Otimize sua gestão com controle de estoque, vendas, ERP, financeiro e muito mais. Descomplique seu dia a dia empresarial conosco. Entre em contato para saber mais' },
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