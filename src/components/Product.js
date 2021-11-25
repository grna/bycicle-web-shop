import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../tools/helperFunctions";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <NavLink key={product._id} to="/">
      <img src={`/images/${product.image}`} alt={product.image}></img>
      <h4>{`${product.manufacturer.toUpperCase()} ${product.model}`}</h4>
      <p>{formatPrice(product.price)}</p>
    </NavLink>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    manufacturer: PropTypes.string,
    model: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    gender: PropTypes.string,
    image: PropTypes.string,
    features: PropTypes.array,
  }),
};

export default Product;
