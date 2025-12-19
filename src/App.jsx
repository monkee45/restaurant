import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import styles from "./App.module.css";
// This is a simple app
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = [...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    setMenuItems(
      category ? items.filter((item) => item.category === category) : items
    );
  };

  return (
    <main>
      <section className={`${styles.menu} ${styles.section}`}>
        <div className={styles.title}>
          <h2>our menu</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
