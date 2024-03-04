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
                <p>Com uma equipe de colaboradores treinados e especializados, a ARJ se destaca no atendimento personalizado, abrangendo todos os aspectos das necessidades contábeis e empresariais de nossos clientes.</p>
                <p> Nossos profissionais são capacitados para lidar com uma ampla gama de questões, garantindo que nossos clientes recebam um serviço completo e integrado. </p>
                <p>Reconhecemos a importância de uma comunicação eficaz e acessível, estando sempre disponíveis para responder às perguntas e preocupações dos nossos clientes, independentemente da urgência ou complexidade.</p>
                </div>

            </div>

        </section>
    )
}

export default About