import styles from "./App.module.css";

const Categories = (props) => {
  const { filterItems, categories } = props;
  return (
    <div className={styles["btn-container"]}>
      <button className={styles["filter-btn"]} onClick={() => filterItems()}>
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={styles["filter-btn"]}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

/* <div className={styles["btn-container"]}>
      <button className={styles["filter-btn"]} onClick={() => filterItems()}>
        All
      </button>
      <button
        className={styles["filter-btn"]}
        onClick={() => filterItems("breakfast")}
      >
        Breakfast
      </button>
      <button
        className={styles["filter-btn"]}
        onClick={() => filterItems("shakes")}
      >
        Shakes
      </button>
    </div> */

export default Categories;
