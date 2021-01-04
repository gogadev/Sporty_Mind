import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import "./collection-view.styles.css";

const CollectionView = ({ title, items, subtitle }) => {
  return (
    <div className="collection-view">
      <h1 className="collection-title">{title}</h1>
      <h2 className="sub-title">{subtitle}</h2>
      <div className="view">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionView;
