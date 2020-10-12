import React from 'react'
import Ingredient from './Ingredient'

class PizzaConstructor extends React.Component{

    constructor(){
        super()
        this.state = {
            ingredients : ['Flour','Cheese','Tomato sauce','Mozzarella','Tomato','Basil','Sugar','Olive oil',
            'Eggs','Water','Bacon'],
            currentCountOfSelectedIngredients : 0 
        }
    }

    parentMethod = (wasSelected) => {
        let count = this.state.currentCountOfSelectedIngredients
        this.setState({
            currentCountOfSelectedIngredients : (wasSelected) ? count + 1 : count - 1
        }) 
    }

    render() {
        return (
            <div>
                <h2>Pizza Constructor</h2>
                <h5>Clicked {this.state.currentCountOfSelectedIngredients} times</h5>
                {(this.state.currentCountOfSelectedIngredients===5)?<b className='warning'>Can not select more than five items!</b>:''}
                {
                this.state.ingredients.map( (item, key) =>
                    <Ingredient ingredientName={item} ingredientId={key} 
                        parentMethod={this.parentMethod} 
                        isBlocked={(this.state.currentCountOfSelectedIngredients === 5)? true : false}
                        key={key}
                    />
                )}
            </div>
        )
    }
}

export default PizzaConstructor