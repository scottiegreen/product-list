import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
    const navigate = useNavigate();
    return(

        <>
<div><h1>Services Page</h1></div>

<button onClick={() => {navigate("/")}}>Back</button>
<p>this is some stuff</p>
    </>
    )
}
export default ServicesPage