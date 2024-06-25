import { Card } from "./Card";
import { ProductItem } from "./ProductItems";
import styles from "./Products.module.css";

function Products(props) {
  return (
    <Card className={styles.products}>
      <ProductItem title={props.items[0].title} date={props.items[0].date} />
      <ProductItem title={props.items[1].title} date={props.items[1].date} />
      <ProductItem title={props.items[2].title} date={props.items[2].date} />
      <ProductItem title={props.items[3].title} date={props.items[3].date} />
    </Card>
  );
}

export default Products;
