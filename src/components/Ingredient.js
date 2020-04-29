import React from 'react';

class Ingredient extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            ingredientId : props.ingredientId,
            ingredientName : props.ingredientName,
            isSelected : false  
        }
    }

    clickHandler() {
         this.setState({
            isSelected : !this.state.isSelected
        }) 
    }

    render() {
        return (
            <div>
                <input type="checkbox" onClick={() => this.clickHandler()}/>
                <label>{this.state.ingredientName}</label>
            </div>
        )
    }
}

export default Ingredient