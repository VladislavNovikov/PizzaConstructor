import React from 'react';

class Ingredient extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            ingredientId : props.ingredientId,
            ingredientName : props.ingredientName,
            isBlocked : props.isBlocked,
            isSelected : false  
        }
    }

    clickHandler() {
         this.setState({
            isSelected : !this.state.isSelected
        }, () => {
            this.props.parentMethod(this.state.isSelected)           
        }) 
    }

    render() {
        return (
            <div>
                {(this.props.isBlocked && !this.state.isSelected) ? 
                    '':
                    <input type="checkbox" onClick={() => this.clickHandler()}/>
                } 
                <label>{this.state.ingredientName}</label>
            </div>
        )
    }
}

export default Ingredient