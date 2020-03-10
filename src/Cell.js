import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super()
		this.state = {
			color: props.value
		}
	}

	handleClick = () => {
		const clickColor = '#333'

		this.setState({ color: clickColor })
	}

	render() {
		console.log(this.props.color)
		return (
			<div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
		)
	}
}

export default Cell;