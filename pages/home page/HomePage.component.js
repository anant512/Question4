import {useNavigate} from 'react-router-dom';
const HomePage=()=>{

const navigate =useNavigate();
 const handleChange=()=>{
    navigate("/contact-us");
 }
    
 return(
    <div>
        <h1 style={{color:"red"}}>you are on home page </h1>
        <button  style={{color:'black',backgroundColor:'aqua'}} onClick={handleChange}>Go to ContactUs</button>
    </div>
 )

}
export default HomePage;