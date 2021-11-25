import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-items: space-between;
  background-color: lightgray;
  height: 100 vh;

  & a {
    text-decoration: none;
    width: 33%;
    background: white;
    margin: 1rem 0;
    padding: 1rem;
    text-align: center;

    & img {
      width: 200px;
    }

    &:hover {
      border: 2px solid grey;
    }
  }
`;

const ProductsList = ({ products }) => {
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ProductListWrapper>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      manufacturer: PropTypes.string,
      model: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      gender: PropTypes.string,
      image: PropTypes.string,
      features: PropTypes.array,
    })
  ),
};

export default ProductsList;
