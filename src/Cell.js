import React, {Component} from 'react';



class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value        
        }
        this.changeColor = this.changeColor.bind(this);
    }

    

    changeColor = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }
    
    render () {
        console.log(this.props.value)
    return (<div onClick={this.changeColor} className='cell' style={{backgroundColor: this.state.color}}> </div>)
    }
}

export default Cell