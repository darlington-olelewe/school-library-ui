import style from "./style.module.css"
import React, {useState} from "react";
import {LoginPayload} from "../../_types";
import {postUserLogin} from "../../_actions/user.actions";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../_reducers";
import {useNavigate} from "react-router-dom";

export const LoginSignUp = () => {

    const [display, setDisplay] = useState<"LOGIN"|"SIGNUP">("LOGIN")


    const update=(vale: "LOGIN"|"SIGNUP")=>{
        setDisplay(vale)
    }
    return(

        <div className={style.container}>

            <div>
                {display==="LOGIN" && <Login updateDisplay={update}/>}
                {display==="SIGNUP" && <SignUp updateDisplay={update}/>}
            </div>

        </div>

    )
}

type welcomeProp = {
    updateDisplay:(value: "LOGIN"|"SIGNUP")=>void
}

const Login=(props: welcomeProp)=>{

    const dispatch = useDispatch<AppDispatch>();

    const [emailAndPassword, setEmailAndPassword] = useState<LoginPayload>({email:"", password:""})
    const navigate = useNavigate()

    const handleSubmit = () => {

        console.log(emailAndPassword)
        const checkNavigate=()=>{
            navigate("/check")
        }
        dispatch(postUserLogin({email:emailAndPassword.email, password:emailAndPassword.password}, checkNavigate))

    }



    return (
        <section className={style.section}>
            <h3>Login with email</h3>
            <form className={style.form}>
                <input type="text" placeholder="email" value={emailAndPassword.email}
                       onChange={(e)=>{setEmailAndPassword({...emailAndPassword, email:e.target.value})}}   />
                <input type="password" placeholder="password"
                       value={emailAndPassword.password}
                       onChange={(e)=>{setEmailAndPassword({...emailAndPassword, password:e.target.value})}}/>
                <button type={"button"} onClick={()=>handleSubmit()}>Login</button>
            </form>


            <button onClick={()=>{props.updateDisplay("SIGNUP")}}>no account, signup</button>
        </section>
    )
}

const SignUp=(props:welcomeProp)=>{

    return (
        <section className={style.section}>
            <h3>Setup user account</h3>
            <form className={style.form}>
                <input type="text" placeholder="first name"/>
                <input type="text" placeholder="last name"/>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Create Account</button>
            </form>

            <button onClick={()=>{props.updateDisplay("LOGIN")}}>go back to login</button>
        </section>
    )
}