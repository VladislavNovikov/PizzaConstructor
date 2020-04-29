import React from 'react'

// function Greet(){
//     return <h1>Hello</h1>
// }

class Greet extends React.Component{

    constructor(){
        super()
        this.state = {
            n : 0,
            messeage : 0,
            kek : 'kek'
        }

        //this.kek1 = this.kek1.bind(this)
    }

    kek1 = () => {
        this.setState(
            {
                n : this.state.n + 1,
                messeage : this.state.messeage + this.state.n
            }
        )
    }

    render() {

        const {name} = this.props
        return (
            <div>
                <h1>{name} {this.state.kek} {this.state.messeage}</h1>
                <button onClick={this.kek1}>Kek1</button>
            </div>
        )
    }
}

export default Greet