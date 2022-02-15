
import Heading from "../Components/Heading";
import Post from "../Components/Post";
import SideBar from "../Components/SideBar";
import Background from "../IMG/Background.jpg";



function Current(){
    return(
        <html>
            <header>
            <Heading></Heading>
            </header>
            <body style={Styles.body}>
            <SideBar></SideBar>
            <section>
            <Post title="Hackle.js"desc='hackle.js is a group of tools in order to assest in the solving of daily wordly problems.The first is an extension that reveals 
                    the answer to the user by reading the local storage where the answer is saved. the second is a web app that the user will input the letters entered into the different catagories correct, in the word but wrong place, and wrong. 
                    Through with the information gathered and the word list for wordle the site would narrow done the words possible and display them to the user. see the current state of the project here: NOT LIVE YET ' ></Post>
            </section>
            
            <div></div>
            </body>
        </html>
        
    )
}
export default Current;
const Styles={
    body:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundImage:`url(${Background})`,
    }
}