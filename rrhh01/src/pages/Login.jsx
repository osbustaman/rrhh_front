import { useState, useEffect } from "react";
import '../static/vendors/nprogress/nprogress.css';
import '../static/vendors/animate.css/animate.min.css';
import '../static/build/css/custom.min.css';


export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const fechLogin = () => {


        console.log(username, password);
        console.log(!username, !password);


        if (!username || !password) {
            $.alert({
                title: 'Alerta!',
                content: 'Los campos no pueden estar vacios',
            });
            return;
        }else{

            window.location.href = '/admin-panel';
        }
    }


    return (
        <div>
            <a className="hiddenanchor" id="signup"></a>
            <a className="hiddenanchor" id="signin"></a>
            <div className="login_wrapper">
                <div className="animate form login_form">
                    <section className="login_content">
                        <form>
                            <h1>Login Form</h1>
                            <div>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    id="username"
                                    required
                                    placeholder="nombre usuario"
                                    onChange={handleUserChange}
                                />
                            </div>
                            <div>

                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="Contraseña"
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div>
                                <a className="btn btn-default submit" onClick={ fechLogin }>Log in</a>
                                <a className="reset_pass" href="#">Lost your password?</a>
                            </div>

                            <div className="clearfix"></div>

                            <div className="separator">
                                <p className="change_link">New to site?
                                <a href="#signup" className="to_register"> Create Account </a>
                                </p>

                                <div className="clearfix"></div>
                                <br />

                                <div>
                                    <h1><i className="fa fa-paw"></i> Gentelella Alela!</h1>
                                    <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 4 template. Privacy and Terms</p>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

            </div>
        </div>
    )
}