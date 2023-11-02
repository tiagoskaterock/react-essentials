import logo from "../assets/react-core-concepts.png"

function stringAleatoria() {  
  const meuArray = ["Crucial", "Core", "Fundamental"]
  return meuArray[Math.floor(Math.random() * meuArray.length)];
}

function Header() {
	return (
		<header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {stringAleatoria()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
	)
}

export default Header
