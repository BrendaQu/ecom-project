import React from "react";

const PaymentForm = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div  className="col-lg-6 default-form">
                    <form>
                        <h3>Payment</h3>
                        <div class="form-group">
                            <input type="text" class="form-control" id="cardNum" placeholder="Card Number" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="cardName" placeholder="Name" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="cardMonth" placeholder="Month" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="cardYear" placeholder="Year" />
                        </div>
                        <br />
                        <div class="form-group">
                            <input type="text" class="form-control" id="cardCVV" placeholder="CVV/CVC" />
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