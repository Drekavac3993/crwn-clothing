import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import data from "./shop.data";
import "./shop.styles.scss";

class ShopPage extends Component {
  state = {
    collections: [...data]
  };

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
