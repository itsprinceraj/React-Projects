import { HeroSection } from "../Components/HeroSection";
import { useSelector } from "react-redux";

export const Home = () => {
  const items = useSelector((store) => store.items);
  // console.log(items);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HeroSection key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};
