
import ContactCard from "../Components/ContactCard";
import Heading from "../Components/Heading";
import SideBar from "../Components/SideBar";
import Background from "../IMG/Background.jpg";



function Contact(){
    return(
   <html>
       <header>
           <Heading></Heading>
       </header>
       <body style={Styles.body}>
           <SideBar></SideBar>
           <div>
           <h2>Reach out to me!</h2>
           <p>Whether you have a project or a question please reach out!</p>
           <ContactCard></ContactCard>
           </div>
           <div></div>
       </body>

   </html>
    )
}
export default Contact;
const Styles={
    body:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundImage:`url(${Background})`,
        color:'#EAF4F4'
    },
    

}