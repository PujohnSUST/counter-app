import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {

    state = {
        counters:[
            {id:1, value:5},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    }

    handleReset = () =>{
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    }


    handleDelete = counterId =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    }




    render() { 

        
        return <div>
            <button className="btn btn-primary" onClick={this.props.handleReset}>Reset</button>
           {this.state.counters.map( counter => 
           
           <Counter key={counter.id} value={counter.value} selected={true} id={counter.id} onDelete={this.handleDelete}>
               <h5>Counter: #{counter.id} </h5>
           </Counter>
           
           )}
        </div>;
    }
}
 
export default Counters;