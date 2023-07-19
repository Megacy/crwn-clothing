import { categories } from "../../data/categories";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
