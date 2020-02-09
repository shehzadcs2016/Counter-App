import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {


    getBadge() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "zeror" : count;
    }
 
    render() { 
        return ( 
        
            <div   className="row">
                <div className="col-1">
                <span className={this.getBadge()} >{this.formatCount()}</span>
            
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">
                        <b className="Bold">+</b>
                    </button> 
                    <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0 ? 'disabled' : ''} className="btn btn-primary btn-sm m-2">
                        <b className="Bold">-</b>
                    </button> 
                    <button onClick={this.props.onReset} className="btn btn-secondary btn-sm m-2 ">
                        Reset
                        </button> 

                </div>

            </div>
            );
        
    }


}
 
export default Counter;