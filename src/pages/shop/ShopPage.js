import React, { Component } from "react";

import CollectionView from "../../components/collection-view/CollectionView";

import STORE_DATA from "./store.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: STORE_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionView key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
