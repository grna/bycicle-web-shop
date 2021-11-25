import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import PropTypes from "prop-types";
import ProductList from "../components/ProductsList";

const ProductListContainer = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length === 0) return null;

  return <ProductList products={products} />;
};

ProductListContainer.propTypes = {
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
  fetchProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: state.fromProducts.products,
});

export default connect(mapStateToProps, { fetchProducts })(
  ProductListContainer
);
