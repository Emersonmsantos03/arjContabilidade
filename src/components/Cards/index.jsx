import './cards.css'
import female from '/public/images/female.png'
import male from '/public/images/male.png'

let Cards = () =>{
    let card = [
        {image: male, comment:' “Saí de uma contabilidade que  me deu muitos prejuízos por descuido e vim para ARJ, meu imposto agora ajustado corretamente me fez economizar muito como PJ, um pequeno detalhe fez toda a diferença, só tenho a agradecer! Recomendo que está em boas mãos.” '},
        {image: male , comment:' “Excelente Atendimento, to muito satisfeito com o comprometimento e eficácia, gostei muito de ser atendido pelo Sr.Raphael que foi atencioso e prestativo, resolveu meus problemas até mesmo a distância, o que economizou muito tempo.Super indico os seus serviços!!” '},
        {image: male , comment: ' “ótima equipe, moro em Brasília e não largo essa empresa por nada!” '},
        {image: female , comment: ' “Profissionais excelentes, zero defeitos. Recomendo de olhos fechados.👏🏻👏🏻👏🏻👏🏻” '}
    ]
    return(
        <div className='card-container'>
            {card.map(({image, comment}, index) =>(
                <div className='card' key={index}>
                    <img src={image}/>
                    <p>{comment}</p>
                </div>
            ))}
        </div>
        
    )
}

export default Cards