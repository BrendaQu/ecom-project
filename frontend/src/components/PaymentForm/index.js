import React from "react";
import "./style.css";

const PaymentForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 default-form">
                    <form>
                        <h3>Payment</h3>
                        <div className="row">
                            <div class="form-group col-9">
                                <input type="text" class="form-control" id="cardNum" placeholder="Card Number" />
                            </div>
                            <div class="form-group col-3">
                                <input type="text" class="form-control" id="cardCVV" placeholder="CVV/CVC" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div class="form-group col-6">
                                <input type="text" class="form-control" id="cardFName" placeholder="First Name" />
                            </div>
                            <div class="form-group col-6">
                                <input type="text" class="form-control" id="cardLName" placeholder="Last Name" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-3 text-center">
                                <h6>Expiration Date</h6>
                            </div>
                            <div class="form-group col-5">
                                <input type="text" class="form-control" id="cardMonth" placeholder="Month" />
                            </div>
                            <div class="form-group col-4">
                                <input type="text" class="form-control" id="cardYear" placeholder="Year" />
                            </div>
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

export default PaymentForm;