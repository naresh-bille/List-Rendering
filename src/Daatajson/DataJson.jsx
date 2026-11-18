

import data from '../Daatajson/Data.json'


export  function  DataJson(){

    return(
        <>  
        {
         data.products.map((item) => (

    <ol key={item.name}>
           <li>name is {item.name}</li>
           <li> city is {item.city}</li>
           <li> Education is {item.Education}</li>       
      </ol>  
      )) 
      
      } 
    </> 
    
    )
    
    
    }

