import { useRef, useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/cover.png";

const Register = () => {
    const [email, setEmail] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        const password = passwordRef.current.value;

        try{
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, { email, password });
            navigate("/login");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    {/* <svg className="logo" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 300 81.387" id="netflix"><path fill="#b81d24" d="M256.09 76.212c4.178.405 8.354.84 12.52 1.29l9.198-22.712 8.743 24.807c4.486.562 8.97 1.152 13.44 1.768l-15.328-43.501L299.996 0H287.01l-.135.186-8.283 20.455L271.32.003h-12.822l13.237 37.565-15.644 38.644zM246.393 75.322V0h-12.817v74.265c4.275.33 8.552.684 12.817 1.056M150.113 71.11c3.46 0 6.916.026 10.366.054V43.492h15.397V31.708H160.48v-19.91h17.733V0h-30.6v71.12c.831 0 1.666-.013 2.5-.01M110.319 71.83c4.27-.152 8.544-.28 12.824-.384V11.8h11.98V.003H98.339V11.8h11.982v60.03h-.002zM12.295 79.772V34.897L27.471 77.96c4.667-.524 9.341-1.017 14.028-1.483V.001H29.201v46.483L12.825.001H0v81.384h.077c4.063-.562 8.14-1.096 12.218-1.613M85.98 11.797V.001H55.377V75.202a1100.584 1100.584 0 0 1 30.578-2.211V61.184c-5.916.344-11.82.74-17.71 1.181V43.497h15.397V31.706H68.245V11.797H85.98zM203.614 60.62V-.003h-12.873v71.876c10.24.376 20.44.9 30.606 1.56V61.619c-5.9-.381-11.81-.712-17.733-1"></path></svg> */}
                    <div className="logoContainer">
                        <img width="90px" src={logo} alt="logo" />
                    </div>
                    {/* <Link to="/login"><button className="loginButton">Sign In</button></Link> */}
                </div>  
            </div>
            <div className="container">
                <h1>Unlimited Movies, TV Series and more.</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>Ready to watch? Enter the email to create or restart your membership.</p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <button className="registrationButton" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="registrationButton" onClick={handleFinish}>Start Membership</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register;