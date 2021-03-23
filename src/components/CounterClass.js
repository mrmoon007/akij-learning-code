import React,{Component} from 'react';
class CounterClass extends Component {
    state = { 
        counter: 0,
     }

     increment=()=>{
        this.setState({
            counter: this.state.counter+1,
        })
    }

     discrement=()=>{

        if(this.state.counter>0)
            {
                this.setState({
                    counter: this.state.counter-1,
                })
            }
        else
           {
            this.setState({
                counter: 0,
            })
           }
    }

    render() { 
        return ( 
            <>
                <button onClick={this.increment}>+</button>
                    {this.state.counter}
                <button onClick={this.discrement}>-</button>
            </>
         );
    }
}
 
export default CounterClass;