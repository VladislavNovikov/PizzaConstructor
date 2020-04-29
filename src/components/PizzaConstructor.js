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

    render() {
        return (
            <div>
                <h2>Pizza Constructor</h2>
                {this.state.ingredients.map( (item, key) =>
                    <Ingredient ingredientName={item} ingredientId={key} key={key}/>
                )}
            </div>
        )
    }
}

export default PizzaConstructor