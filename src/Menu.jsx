import styles from "./App.module.css";

const Menu = (props) => {
  const { items } = props;
  return (
    <div className={styles["section-center"]}>
      {items.map((item) => (
        <article key={item.id} className={styles["menu-item"]}>
          <img src={item.img} alt={item.title} className={styles.photo} />
          <div className={styles["item-info"]}>
            <header>
              <h4>{item.title}</h4>
              <h4 className={styles.price}>${item.price}</h4>
            </header>
            <p className={styles["item-text"]}>{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
