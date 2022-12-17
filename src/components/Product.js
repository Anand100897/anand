import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Product(props) {

  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <Badge bg="secondary">₹{props.product.price}</Badge>
        </h2>
      </div>
      <div className="col-3">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" onClick={()=>{props.decrementQuantity(props.index)}}>-</Button>
          <Button variant="secondary">{props.product.quantity}</Button>
          <Button variant="success" onClick={()=>{props.incrementQuantity(props.index)}}>+</Button>
        </ButtonGroup>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.prices}
      </div>
      <Button variant="success" onClick={()=>{props.removeItem(props.index)}}>Remove</Button>
    </div>
  );
}
