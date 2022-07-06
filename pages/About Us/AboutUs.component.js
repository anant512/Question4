import { useNavigate } from "react-router-dom";
const AboutUs=()=>{
    const navigate =useNavigate();
 const handleChange=()=>{
    navigate("/services");
}
return(
    <div>
        <h1 style={{color:"goldenrod"}}>This is the about us page</h1>
        <button style={{color:'black',backgroundColor:'aqua'}} onClick={handleChange}>Go to services</button>
    </div>
)
}
export default AboutUs;