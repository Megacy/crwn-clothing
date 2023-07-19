import { Link } from "react-router-dom";
import "./directory-item-styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-body-container">
        <h2>{title}</h2>
        <Link to={`shop/${title}`}>Shop Now</Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
