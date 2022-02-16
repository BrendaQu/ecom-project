import React from "react";

const ShippingForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 default-form">
                    <form>
                        <h3>Shipping Information</h3>
                        <div className="row">
                            <div class="form-group col-6">
                                <input type="text" class="form-control" id="fName" placeholder="First Name" />
                            </div>
                            <div class="form-group col-6">
                                <input type="text" class="form-control" id="lName" placeholder="Last Name" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="strAddr" placeholder="Street Address" />
                        </div>
                        <br />
                        <div className="row">
                            <div className="form-group col-6">
                                <input type="text" class="form-control" id="city" placeholder="City" />
                            </div>
                            <div className="form-group col-2">
                                <input type="text" class="form-control" id="state" placeholder="State" />
                            </div>
                            <div className="form-group col-4">
                                <input type="text" class="form-control" id="zip" placeholder="Zip" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" class="form-control" id="country" placeholder="Country" />
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