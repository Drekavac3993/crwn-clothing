import React from "react";
import { withRouter, Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, routeName, match }) => (
  <div className="collection-preview">
    <Link to={`${match.url}/${routeName}`} className="title">
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
