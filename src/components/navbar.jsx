import React from 'react';
import '../App.css';

//sateleess functional components

export default function Navbar({totalCounters}){
    return ( 

        <nav className="navbar navbar-light bg-light">
            <div className="Center">
            <a className="navbar-brand" href="navbar"> total Counters Active:</a>
           <span className="badge badge-pill badge-secondary">
               {totalCounters}
           </span>
          </div>
         </nav>
        
     );
}

 
