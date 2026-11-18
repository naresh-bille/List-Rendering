    import bike from '../src/assets/Bike1.webp'
    import bike1 from './assets/Bike2.jpg'
    import Exporting ,{DefaultExport,name1} from './Exporting'
 
   export default function Images({name}){


    return(
        <>
        <h1> My name is {name} i like gt bike.so i lised a few colours...</h1>
        <div>
            <img src={bike} alt="Bike" />
        </div>
        <div>
            <img src={bike1}></img>
        </div>
        <img src='Range-Rover.jpeg' style={{height:'800px',width:'1500px'}}></img>
        
        < Exporting/>
   <h2> i imported my name from another file . My name is {name1}</h2>
<DefaultExport />


        </>
    )
   }

