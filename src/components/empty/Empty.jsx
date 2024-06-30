import React from "react";
import './Empty.scss'
import { useLocation } from "react-router-dom";

const Empty = () => {
  const location = useLocation();
  const isFavouritesPage = location.pathname === "/wishlist";
  return (
    <div className="empty">
      {isFavouritesPage ? (
        <img
          src="https://cdn.dribbble.com/users/1445676/screenshots/3742742/favorites_empty_state.png"
          alt=""
        />
      ) : (
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          alt=""
        />
      )}
    </div>
  );
};

export default Empty;
