
import Heading from "../Components/Heading";
import SideBar from "../Components/SideBar";
import Self from "../IMG/FullSelf.jpeg";
import bLeft from "../IMG/bottomleft.jpg"



function About(){
    return(
        <html>
            <header>
                <Heading></Heading>
            </header>
            <body style={styles.body}>
                <SideBar></SideBar>
                <section style={styles.text} >
                <section style={styles.top}>
                <div style={styles.p1}>
                <h2>Who am I</h2>
                <p style={styles.p1Text}>
                    My names Jake and im a full stack developer based out of cleveland ohio. I got my start in tech on the operations side with netwokring / systems administration
                    and then transitioned into more development based roles. This I feel give me an interesting perpective on web development and UX. Overall I'm a self starter that 
                    enjoys working in teams and I cant wait to hear from you about your project. 
                </p>
                </div>
                    <img style={styles.img} src={Self} alt='Full body'></img>
                </section>
                <section style={styles.bottom} >
                    <img src={bLeft}  style={styles.img2}  alt='stock Dev' ></img>
                    <div style={styles.bottomtext}>
                    <h2>My Skills:</h2>
                    <p style={styles.p2}> 
                    Being trained in Fullstack web dev at fullsail University I ve had my hands on the whole process at some point. This means that I have expience doing 
                    everyhing from UX Design, to database creation, to API creation. That being said I typically enjoy working on the backend of things more than the front. My strengths
                    really shine when it comes to large data handling and representation.
                    </p>
                    </div>
                </section>
                </section>
            </body>
        </html>
    )
}
export default About;
const styles= {
    body:{
        display:'flex',
        flexDirection:'row',
        
    },
    img:{
        width:'475px',
        height:'600px',
        
    },
    img2:{
        width:'475px',
        height:'300px',
        marginLeft:'60px'
    },
    p1:{
        margin:'15px 5px 20px 30px',


    },
    p1Text:{
        textAlign:'left',
        fontSize:'25px'
    },
    p2:{
        margin:'15px 5px 20px 10px',
        textAlign:'left',
        width:'800px',
        fontSize:'25px'

    },
    top:{
        display:'flex',
        flexDirection:'row',
        margin:'15px 20px 0px 0px',

    },
    text:{
        display:'felx',
        flexDirection:'column',
        backgroundColor:'#1f0b52',
        color:'#EAF4F4'
    },
    bottom:{
        display:'flex',
        flexDirection:'row',
    },
    bottomtext:{
        display:'felx',
        flexDirection:'column',
    }
}