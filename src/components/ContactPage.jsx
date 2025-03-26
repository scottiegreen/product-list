import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate();
    return(

        <>
<div><h1>About Page</h1></div>

<button onClick={() => {navigate('/')}}>Back</button>
<p>this is some stuff</p>
    </>
    )
}
export default ContactPage