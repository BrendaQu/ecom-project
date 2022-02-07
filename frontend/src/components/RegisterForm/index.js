import React from "react";

const RegisterForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div  className="col-lg-6 default-form">
                    <form>
                        <h3>Create an Account</h3>
                        <div class="form-group">
                            <input type="text" class="form-control" id="fName" placeholder="First Name" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="lName" placeholder="Last Name" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Email" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="phone" placeholder="Phone" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="country" placeholder="Country" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary col-12">Register Now</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    )
}

export default RegisterForm;