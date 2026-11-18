function Component1(){


    var Products=[{id:1,name:"naresh"},{id:2,name:'Tharun'},{id:3,name:"bhaskar"}]
return(

    <>
    
    <ol>{
        Products.map((obj,index)=>{

            return <li key= {obj.id}> & name : {obj.name}</li>
        })
        
        
    }</ol>
    
    </>

)
}

export default Component1