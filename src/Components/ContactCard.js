function ContactCard(){
return(
    <section>
        <form style={Styles.form}>
            <input style={Styles.name} type="text" id="name" name="name" placeholder="Name"></input>
            <input style={Styles.email} type="text" id="email" name="email" placeholder="Email"></input>
            <input style={Styles.company} type="text" id="company" name="company" placeholder="Company"></input>
            <textarea style={Styles.message} type="textarea" id="message" name="message"  placeholder="Your message"></textarea>
        </form>
    </section>

)
}
export default ContactCard;

const Styles={
    form:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        width:'750px',
        backgroundColor:'#EAF4F4',
        border:'#d458ca solid 2px',
        
        borderRadius:'5px',
        justifyContent:'center',
        padding:'10px'
    },
    name:{
        width:'340px',
        margin:'0 12px 5px 0',
        height:'30px',
    },
    email:{
        width:'340px',
        margin:'0  0 5px 12px',
        height:'30px',
    },
    company:{
        width:'705px',
        margin:'0 0 5px 0',
        height:'30px',
    },
    message:{
        width:'705px',
        height:'100px'
    }
}