import logo from "../assets/react-core-concepts.png"
import frases from "../data/frases.js"

function fraseAleatoria() {  
  const meuArray = frases
  return meuArray[Math.floor(Math.random() * meuArray.length)];
}

function Header() {
	return (
		<header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {fraseAleatoria()}
      </p>
    </header>
	)
}

export default Header
