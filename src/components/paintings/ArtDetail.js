import React from "react";
import PropTypes from "prop-types";
// import { PayPalScriptProvider, BraintreePayPalButtons, } from "@paypal/react-paypal-js";

function ArtDetail(props){
  const { art, onClickingDelete, onClickingEdit } = props;
  // const initialOptions = {
  //   "client-id": "test",
  //   currency: "USD",
  //   intent: "capture",
  //   "data-client-token": "abc123xyz==",
  // }; 

  return (
    <React.Fragment>
      <br></br>
      <img src={art.imgUrl} style={{ float: "left", height: "25%", width: "25%", paddingRight: 50 }} alt="painting" />
      <h2>{art.title}</h2>
      <h3>{art.year}</h3>
      <p><em>{art.medium}</em></p>
      <p><em>{art.about}</em></p>
      <p><em>$ {art.price}</em></p>
      {/* <PayPalScriptProvider
            options={{
                "client-id": "test",
                "data-client-token": "abc123xyz==",
            }}
        >
            <BraintreePayPalButtons
                createOrder={(data, actions) => {
                    return actions.braintree.createPayment({
                        flow: "checkout",
                        amount: "10.0",
                        currency: "USD",
                        intent: "capture",
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.braintree
                        .tokenizePayment(data)
                        .then((payload) => {
                            // call server-side endpoint to finish the sale
                        });
                }}
            />
      </PayPalScriptProvider> */}
      <button onClick={onClickingEdit}>Update Listing</button>
      <button onClick={()=> onClickingDelete(art.id)}>Delete Listing</button>
      <hr/>
    </React.Fragment>
  );
}

ArtDetail.propTypes = {
  art: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ArtDetail;