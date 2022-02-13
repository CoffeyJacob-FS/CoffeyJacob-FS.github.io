import react from "react";

import { ImTwitter,ImGithub,ImLinkedin,ImStackoverflow } from "react-icons/im";
import { NavLink } from "react-router-dom";
import Api from "./Api";



const SideBar=props=>{

    return(
        <section style={styles.Side}>
            <nav>
                <NavLink to="/About">About Me</NavLink>
                <NavLink to="/Current">My Current Projects</NavLink>
                <NavLink to="/Past">Past Projects</NavLink>
            </nav>
        <h2>Socials:</h2>
        <ul style={styles.Socials}>
            <li><a href="https://twitter.com/Karmatic_lol" target="_blank" rel="noreferrer" ><ImTwitter size={"2rem"}></ImTwitter></a></li>
            <li><a href="https://github.com/CoffeyJacob-FS" target="_blank" rel="noreferrer" ><ImGithub size={"2rem"}></ImGithub></a></li>
            <li><a href="https://www.linkedin.com/in/jake-coffey-421a31188/" target="_blank" rel="noreferrer" ><ImLinkedin size={"2rem"}></ImLinkedin></a></li>
            <li><a href="https://stackoverflow.com/users/18192310/jakec45/" target="_blank" rel="noreferrer" ><ImStackoverflow size={"2rem"}></ImStackoverflow></a></li>


        </ul>
        <h3>Nasa's Picture of the day:</h3>
        <Api></Api>
        </section>
    )
}
export default SideBar
const styles={
    Side:{
        backgroundColor:'grey',
        display:'flex',
        flexDirection:'column',
        width:'350px',
        height:'100vh'
    },
    Socials:{
        listStyleType:'none',
        display:'flex',
        flexDirection:'row',
    }
}
