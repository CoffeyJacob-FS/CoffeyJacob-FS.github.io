
import SideBar from "../Components/SideBar";
import Heading from "../Components/Heading";
import Post from "../Components/Post";
import Background from "../IMG/Background.jpg";



function Past(){
    return(
        <html>
            <header>
                <Heading></Heading>
            </header>
            <body style={Styles.body}>
                <SideBar></SideBar>
                <section>
                    <div>
                        <ul className="sort" style={Styles.pageNav}>
                            <li>Backend</li>
                            <li>Front end</li>
                            <li>designs</li>
                            <li>Full stack</li>
                        </ul>
                    </div>
                    <Post title="Covid Today"desc='Covid Today is a website that congrigated Covid-19 statistics for a given county state and contry wide. 
                    Pulling data from the "Covid Act Now" api that pulls data from the CDC it updates every morning at 4am its extremly accurate.The main 
                    goal is to have a clean and simple UI that allows people to quickly look at the page and get the information ' ></Post>
                </section>
                <div></div>
            </body>
        </html>
    )
}
export default Past;

const Styles={
    body:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundImage:`url(${Background})`,
    },
    pageNav:{
        display:'flex',
        flexDirection:'row',
        listStyleType:'none',
        color:'#EAF4F4',
        justifyContent:'space-around',
        backgroundColor:'#d458ca ',
        padding:'0',
        height:'30px',
        alignItems:'center',
        borderRadius:'20px',
        cursor:'pointer'

    },

}