import './footer.css'
import face from '/public/images/social/face.png'
import insta from '/public/images/social/instagram.png'
import email from '/public/images/social/gmail.png'


let Footer = () => {
    return(
        <section className='footer' id='footer'>
            <h3>© 2024 ARJ Contabilidade. Todos os direitos reservados.</h3>
            <div className='social'>
                <a target='__blank' href='https://www.facebook.com/arjcontabilidadegerencial/'><img src={face}/></a>
                <a target='__blank' href='https://www.instagram.com/arj_contabilidade/'><img src={insta} /></a>
                <a target='__blank' href="mailto:arj@arjperformance.com"><img src={email}/></a>
            </div>
            <div className='developed'>
            <h4>Desenvolvido por: <a href='https://wa.me/5541984537827' target='__blank'>Emerson Moraes</a></h4>
            </div>
        </section>
    )
}

export default Footer