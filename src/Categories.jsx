import styles from "./App.module.css";

const Categories = () => {
  return (
    <div className={styles["btn-container"]}>
      <button className={styles["filter-btn"]}>All</button>
      <button className={styles["filter-btn"]}>Breakfast</button>
      <button className={styles["filter-btn"]}>Shakes</button>
    </div>
  );
};

export default Categories;
