

function Component(){

    var names=["Chandana","Harini sai","Vaishnaavi","Bhargavi",'Kamakshi','Sravani']

    return(

        <>
           
<ol>{

    names.map((name,index)=>(
    <li key={index}>{name}</li>

    ))
   }

</ol>
        
        
        
        </>
    
   )

}

export default Component;