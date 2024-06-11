import { Card } from "./Card";

export const Tours = ({ tourism, removeTour }) => {
  return (
    <div className="wrapper">
      <h1 className="heading">Plan With Prince</h1>
      <div className="card-container">
        {tourism.map((tours) => {
          return <Card {...tours} key={tours.id} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};
