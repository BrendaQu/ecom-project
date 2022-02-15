import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css';

const LoginForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div  className="col-lg-6 default-form">
                    <form>
                        <h3>Login</h3>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary col-12">Submit</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    )
}

export default LoginForm;