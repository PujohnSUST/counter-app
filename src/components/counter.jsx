import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        tags: ['JD', 'TAQUILA', 'RAM']

    };

    styles = {
        fontSize : 15,
        fontWeight: 'bold',
    }

    renderTags (){

        if(this.state.tags.length === 0) return <h4>There is no Tags</h4>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement = () => {
        console.log('Increment Clicked');

        this.setState({count: this.state.count + 1})
       
    }

    render() { 

        return (
            <div className="container">
              
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} style={{fontSize:20}} className="btn btn-secondary btn-sm">Increment</button>
              

               {this.state.tags.length === 0 && 'please add new tags'} 

               {this.renderTags()}


                
            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2";
        classes = +this.state.count === 0 ? 'badge-warning m-2' : 'm-2 badge-primary';
        return classes;
    }

    formatCount (){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;