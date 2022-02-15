import { NavLink } from "react-router-dom";
function Terminal(){
    let today = new Date();

    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    let dateTime = date+' '+time;
    return(
        <div style={styles.align}>
        <section style={styles.term}>
            <div>
            <p style={styles.align}>Last Login: {dateTime} </p>
            <p style={styles.align}>Portfolio.OS: Loaded </p>
            <p style={styles.align}>Menu.UI: Loaded </p>
            <p style={styles.align}>Please choose an option:</p>
            <NavLink  style={styles.navLinks}to="/About">About Me</NavLink>
            <NavLink style={styles.navLinks} to="/Current">Current Projects</NavLink>
            <NavLink style={styles.navLinks}to="/Past">Past Projects</NavLink>

            </div>
        </section>
        </div>
    )
}
export default Terminal

const styles={
    term:{
        backgroundColor:'black',
        color:'white',
        height:'300px',
        width:'700px',
        border:'#d458ca solid 10px',
        borderRadius:'5px',
        display: 'flex',
        flexDirection:"column", 
        alignItems:'start', 
    },
    align:{
        textAlign:'left',
        margin:'0 0 5px 5px'
    },
    navLinks:{
        color:'white',
        textDecoration:'none',
        fontSize:'20px',
        margin:'5px',
    }
}