import { Card } from "./Card";
import styles from "./ProductDate.module.css";
export const ProductDate = (props) => {
  const month = props.data.toLocaleString("en-US", { month: "long" });
  const year = props.data.getFullYear();
  const day = props.data.toLocaleString("en-US", { day: "2-digit" });
  return (
    <Card className={styles.date}>
      <span>{month}</span> <br />
      <span>{year}</span> <br />
      <span className={styles.day}>{day}</span>
    </Card>
  );
};
