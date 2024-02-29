import Cards from '../Cards'
import './comments.css'

let Comments = () => {
   
    return(
        <section className='comments' id='comments'>
            <h1>Saiba o que estão falando sobre nós:</h1>
            <Cards  />
            <button className='comments-button'><a href='https://www.google.com/search?client=firefox-b-d&q=arj+contabilidade+fortaleza#ip=1&lrd=0x7c7497e0aec691f:0x946e822abef43d1c,1,,,,' target='__blank'>Mais comentários!</a></button>
        </section>
    )
}

export default Comments