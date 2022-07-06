import { useNavigate } from "react-router-dom";

const ContactUs=()=>{
const navigate=useNavigate();
const handleClick=()=>{
    navigate("/about-us");
}
    return(
        <div className="structure ">
            <h1 style={{color:"goldenrod"}}>you are on contact us page</h1>
            <button style={{color:'black',backgroundColor:'aqua'}} onClick={handleClick}>Go to about us</button>
        </div>
    )
}
export default ContactUs;