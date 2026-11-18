import { Component } from "react";

export default class Exporting extends Component{

render(){


return(

    <>
    <h1>In his component we are learing exporting typesss they are..</h1>
            <h2>Thia is a default export. we need to write export keyword before function keyword in the function</h2>

    <ol>
<li>Named export</li>
<li>Default export</li>
    </ol>
    </>
)}}

export function DefaultExport(){
    return(
        <div> 

        <h2>Thia is a named export. we need to write export keyword before function keyword in the function</h2>



   </div>
   
)
}

export const name1="Naresh"