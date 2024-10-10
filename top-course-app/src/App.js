import "./App.css";
import { filterData, apiUrl } from "./data";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import { Cards } from "./components/Cards";
import { Spinner } from "./components/Spinner";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]); // avoid to initiate with null , otherwise you must have to face consiquences;
  const [spinner, setSpinner] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);

  // make a api request;
  async function fetchData() {
    setSpinner(true);
    try {
      let response = await fetch(apiUrl);
      let result = await response.json();
      setCourses(result.data);
      // console.log(result.data);
      // console.log("updated course", courses);
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Wrong");
    }
    setSpinner(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div>
        {spinner ? (
          <Spinner />
        ) : (
          <Cards
            courses={courses}
            category={category}
            setCategory={setCategory}
          />
        )}
      </div>
    </div>
  );
}

export default App;
