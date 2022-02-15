import{useState,useEffect} from "react";

import Heading from "../Components/Heading";
import Loading from "../Components/loading";
import Terminal from "../Components/Terminal";
import Background from "../IMG/Background.jpg";



function Landing(){
    const[loaded, setloading]= useState(null)
    useEffect(()=>{
        setTimeout( ()=>{
            setloading(true)
        },4000);
        
        
    },)
if(loaded){
    return(
        <html style={Styles.body}>
            <header> <Heading></Heading> </header>
            <body>
            <div style={Styles.loading}> 
                <Terminal></Terminal>
            </div>
            </body>
        </html>
    )
}
return(
    <div style={Styles.loading}>
        <h1>Loading portfolio.OS</h1>
        <div >
            <Loading></Loading>
        </div>
    </div>
)
}
export default Landing;

const Styles={
    loading:{
        display: 'flex',
        flexDirection:"column", 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:'10%',
    },
    body:{
        height:'100vh',
        backgroundImage:`url(${Background})`,
        margin:'0'
    }
}