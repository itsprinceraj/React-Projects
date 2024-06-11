import { BagSummary } from "../Components/BagSummary";
import { BagItems } from "../Components/BagItems";
import { useSelector } from "react-redux";

export const Bag = () => {
  const itemInCart = useSelector((state) => state.cart);
  const itemsOnAddtoCart = useSelector((state) => state.items);
  const itemMenu = itemsOnAddtoCart.filter((item) => {
    const itemIndex = itemInCart.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {itemMenu.map((items) => (
              <BagItems key={items.id} item={items} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
