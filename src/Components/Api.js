import {useState,useEffect} from "react";
import axios from "axios";

const Api =props=>{
    const url=" https://api.nasa.gov/planetary/apod?api_key=TnzIr0RV3p4JKod6hC3sKvWXaG4gPyjraNFdWJro"
    const[photo, setPhoto]= useState(null)
    useEffect(()=>{
        axios.get(url)
        .then(response=> {
            setPhoto(response.data); 
        })
        
        
    }, [url])
if(photo){
    return(
        <div >
            <a href={photo.url}><img style={styles.pic} src={photo.hdurl} alt='nasa pic of the day'></img></a>
            <p style={styles.title}>Title: {photo.title}</p>
            
        </div>
    )
}
return(
    <div></div>
)
}
export default Api;

const styles={
    pic:{
        height:'200px',
        width:"300px",
        margin:'0'
    },
    title:{
        margin:'0'
    }

}
