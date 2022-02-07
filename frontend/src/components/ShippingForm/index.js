import React from "react";

const ShippingForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 default-form">
                    <form>
                        <h3>Shipping Information</h3>
                        <div class="form-group">
                            <input type="text" class="form-control" id="fName" placeholder="First Name" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="lName" placeholder="Last Name" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="strAddr" placeholder="Street Address"/>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="city" placeholder="City"/>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="state" placeholder="State"/>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="zip" placeholder="Zip"/>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="country" placeholder="Country"/>
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="phone" placeholder="Phone" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary col-12">Add Card</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    )
}

export default ShippingForm;