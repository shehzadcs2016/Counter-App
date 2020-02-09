import React from 'react';
import Counter from './counter';
import '../App.css';

export default function Counters({onReset,counters,onDeletes,onIncrement,onDecrement}) {
  
        return ( 
                <div className="Counter">
            
{           

    
        counters.map(
            (
                counter=><Counter
             key={counter.id}  
             onDeletes={onDeletes} 
            onReset={onReset}
             onIncrement={onIncrement}
             onDecrement={onDecrement}
            counter={counter}
             />
             )) }
            
        </div> );
    }
 