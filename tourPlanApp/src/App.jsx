import "./App.css";
import data from "./data";
import { Tours } from "./components/Tours";
import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

function App() {
  const [tours, setTours] = useState(data);
  const removeTourHandler = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  if (tours.length === 0) {
    return (
      <div className="noTour-UI">
        <h2 className="noTour-heading">No Tours Left</h2>
        <button className="refresh-button" onClick={() => setTours(data)}>
          Refresh <FiRefreshCw />
        </button>
      </div>
    );
  }
  return (
    <>
      <Tours tourism={tours} removeTour={removeTourHandler} />
    </>
  );
}

export default App;
