
import "./Home.css"
import logo from '/public/images/logo-sem-fundo.png'
import whatsapp from '/public/images/social/whatsapp-icon.png'


let Home = () => {


    return(
    <section className="home" id="home">
    <header className="header">
        <div className="nav">
          
        <a href="#about">Sobre nós</a>
        <a href="#comments">Comentários</a>
        
       
        <a href="#proposals">Propostas</a>
        <button className="nav-button" ><a className="nav-button-a" href='#footer'>Contato</a></button>
        </div>
    </header>
    <div className="main">
      <h1>Contabilidade especializada para <strong>psicólogos</strong></h1>
      <button className="main-button"><a target="__blank" href="https://wa.me/5585988185316?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os%21
">Fale com um especialista!</a></button>
    </div>
    <a className="whatsapp" target="__blank" href="https://wa.me/5585988185316?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os%21"><img src={whatsapp}/></a>
    <a href="#home"><img className="logotipo"src={logo}/></a>
  </section>
  )
}

export default Home