import { ImTwitter,ImGithub,ImLinkedin,ImStackoverflow } from "react-icons/im";
import { Link } from "react-router-dom";
import Api from "./Api";





const SideBar=props=>{

    return(
        
            <nav style={styles.Side}>
                <div style={styles.links}>
                <Link className="icon" style={styles.navLinks}to="/About">About Me</Link>
                <Link style={styles.navLinks} to="/Current">Current Projects</Link>
                <Link style={styles.navLinks}to="/Past">Past Projects</Link>
                </div>
                <hr style={styles.bar}></hr>
                <h2 style={styles.headings} >Socials:</h2>
        <ul style={styles.Socials}>
            <li style={styles.icons}><a href="https://twitter.com/Karmatic_lol" target="_blank" rel="noreferrer" ><ImTwitter size={"2rem"} className="icon"></ImTwitter></a></li>
            <li style={styles.icons}><a href="https://github.com/CoffeyJacob-FS" target="_blank" rel="noreferrer" ><ImGithub size={"2rem"} className="icon"></ImGithub></a></li>
            <li style={styles.icons} ><a href="https://www.linkedin.com/in/jake-coffey-421a31188/" target="_blank" rel="noreferrer" ><ImLinkedin size={"2rem"} className="icon"></ImLinkedin></a></li>
            <li style={styles.icons} ><a href="https://stackoverflow.com/users/18192310/jakec45/" target="_blank" rel="noreferrer" ><ImStackoverflow size={"2rem"} className="icon"></ImStackoverflow></a></li>
        </ul>
        <hr style={styles.bar}></hr>
        <h2 style={styles.headings}>Nasa's Picture of the day:</h2>
        <Api></Api>
            </nav>
            )
}
export default SideBar
const styles={
    Side:{
        backgroundColor:'#8f80fd',
        display:'flex',
        flexDirection:'column',
        width:'300px',
        height:'100vh',
        padding:'50px 10px 10px 10px',
        color:'#EAF4F4',
        borderRight:'5px solid #EAF4F4'
    },
    Socials:{
        listStyleType:'none',
        display:'flex',
        flexDirection:'row',
    },
    navLinks:{
        color:'#EAF4F4',
        textDecoration:'none',
        fontSize:'30px',
    },
    icons:{
        margin:'0px 10px 10px 10px',
        color:'white',
    },
    headings:{
        color:'#EAF4F4',
        margin:'15px 0 5px 0'

    },
    bar:{
        color:' #EAF4F4',
        backgroundColor:' #EAF4F4',
        height: '2px',
        width:'300px',
        border:'none',
        margin:'0px 0 0 0'
    },
    links:{
        margin:'0 0 50px 0',
        display:'flex',
        flexDirection:'column',
    }
}
