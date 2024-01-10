function TabButton(props) {

	function handleClick() {
		alert(props.children)
	}

	return (
		<li>
			<button onClick={handleClick}> {props.children} </button>
		</li>
	)
}

export default TabButton
