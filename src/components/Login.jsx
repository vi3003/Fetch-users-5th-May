import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {validateUser} from "../redux/Actions"
const Login=()=>{
    const dispatch=useDispatch();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const searching=useSelector(state=>state.validate.searching);
    const error=useSelector(state=>state.validate.error);

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(validateUser(username,password));
    }
    return <div className="login">
        <form action="">
                <h1>Login Page</h1>
                <div>
                    <label htmlFor="username">Enter Username: </label>
                    <input
                        type="text"
                        name=""
                        id="username"
                        required
                        autoComplete="off"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter Password: </label>
                    <input
                        type="password"
                        name=""
                        id="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button onClick={clickHandler}>Login</button>
            </form>
    </div>
}

export default Login