import React from "react";
import { NavLink } from "react-router-dom";
import logo  from "../IMG/Temp.png"


function Heading(props){
    return(
        <div style={styles.header}>
           <NavLink style={styles.Contact} to="/"> <h1>Jake Coffey - Fullstack Developer</h1></NavLink>
            <div style={styles.right}>  
                <NavLink style={styles.Contact} to ="/contact" ><h2>Contact Me</h2></NavLink>
                <img style={styles.logo} src={logo} alt="logo"></img>
            </div>
        </div>
    );
}
export default Heading;

const styles={
    header:{
        backgroundColor:'#8f80fd',
        color:'#EAF4F4',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-Between',
        padding:'0px 15px 0px 15px',
        borderBottom:'5px solid #EAF4F4'
        
    },
    right:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        color:'white',
        textDecoration:'none'
        
    },
    Contact:{
        color:'white',
        textDecoration:'none'
    },
    logo:{
        height:'70px',
        width:'80px',
        borderRadius:'50%',
        marginLeft:'50px'
    }
}