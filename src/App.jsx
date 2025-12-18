import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import styles from "./App.module.css";
// This is a simple app
function App() {
  return (
    <main>
      <section className={"${styles.menu} ${styles.section}"}>
        <div className={styles.title}>
          <h2>our menu</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
