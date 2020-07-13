import React, { Component } from "react";
import { fetchAllProducts } from "../../service/Request/Request";
import Product from "../../components/Product/Product";

import "./ShopPage.scss";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetchAllProducts().then((res) => {
      this.setState({ products: res.data.data });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="shop-page">
        <div className="product-list">
          {products
            .filter((item, i) => i < 4)
            .map(({ id, ...otherProps }) => (
              <Product key={id} {...otherProps} />
            ))}
        </div>
      </div>
    );
  }
}

export default ShopPage;