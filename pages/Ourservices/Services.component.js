import { useNavigate } from "react-router-dom";
const Services=()=>{
    const navigate =useNavigate();
 const handleChange=()=>{
    navigate("/");
}
return(
    <div>
        <h1>This is the  services page</h1>
        <button onClick={handleChange}>go to Home page</button>
    </div>
)
}
export default Services;