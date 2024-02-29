import Offers from '../Offers'
import './proposals.css'

let Proposals = () => {
    return(
        <section className='proposals' id='proposals'>
            <h1>Nossas propostas:</h1>
            <div className='offers-list'>
            
                <Offers />
                <button className='proposals-button'><a href='https://docs.google.com/forms/d/e/1FAIpQLSdSkg0hjdggIzeGAEKHqozurbcelBF5a7gdvS5kqnRkWl4aAQ/viewform;' target='__blank'>Solicite o seu orçamento!</a></button>
            </div>
            
        </section>
    )
}

export default Proposals