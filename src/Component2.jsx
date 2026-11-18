import React from'react'


class Component2 extends React.Component{
 
    Products=[{brand:"Samsung",price:12300},{brand:"Realme",price:20000},{brand:'Oppo',price:54000},{brand:"Apple",price:132000}]
   styleshet={
    color:'red',
    height:'100px',
    width:'150px',
    borderColor:"Green",
    borderStyle: 'solid',
    borderWidth:"3px",
    BackgroundColor:'yellow',
    margin:'10px'
       }

render(){

    return(
        <>
        <h1>This is an example ffor List rendering using Class-Componentssss</h1>
        

        <ol>{
            this.Products.map((obj,index)=>{
      return ( 

          <li key={index} style={this.styleshet}>
             <div>
                                        Brand: {obj.brand}
                                    </div>

                                    <div>
                                        Price: {obj.price}
                                    </div>
            
              </li>

      )   

            })
        
        
}</ol>
        
        
        </>


    )
}

}

export default Component2;