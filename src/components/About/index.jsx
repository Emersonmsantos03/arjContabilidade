import './about.css'
import arjimg from '/public/images/arj-image.png'
import psi from '/public/images/contabilidade-psi.png'

let About = () => {
    return(
        <section className='about' id='about'>
            <div className='image'>
                <img src={psi}/>
            </div>
            <div className='texts'>
                <h2>Sobre nós</h2>
                <div className='paragraphs'>
                <p>Na ARJ, com nossa equipe de colaboradores altamente treinados e especializados, destacamo-nos por oferecer um atendimento personalizado exclusivo para psicólogos. Cobrimos todos os aspectos das necessidades contábeis e empresariais específicas desse ramo.</p>
                <p>Nossos profissionais possuem expertise para lidar com uma ampla gama de questões únicas enfrentadas por psicólogos, garantindo que nossos clientes recebam um serviço completo e integrado, totalmente adaptado às suas necessidades. </p>
                <p>Reconhecemos que a comunicação eficaz é essencial. Estamos sempre disponíveis para responder prontamente as perguntas e preocupações dos nossos clientes, como questões sobre notas fiscais, impostos, exigências de plano de saúde para reembolso, entre outras. Independentemente da urgência ou complexidade, asseguramos uma experiência tranquila e confiável em todos os momentos.</p>
                </div>

            </div>

        </section>
    )
}

export default About