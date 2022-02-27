const Post=props=>{

    return(
        <section style={styles.card}>
            <h3>{props.title}</h3>
            <hr></hr>
            <p style={styles.desc}>{props.desc}</p>
        </section>
    )
}
export default Post

const styles={
    card:{
        backgroundColor:'#EAF4F4',
        borderRadius:'5px',
        border:'2px solid black',
        height:'500px',
        width:'375px',
    },
    desc:{
        padding:'5px 20px 5px 20px',
        textAlign:'left'
    }
}