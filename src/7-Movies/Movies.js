// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const Movies = () => {
  const [data, setData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState(data);

  const handleUserInput = (event) => {
    const updatedData = data.filter(
      (selectedCategory) => selectedCategory.category === event.target.value
    );
    setDataToDisplay(event.target.value !== "All" ? updatedData : data);
  };

  const showData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div style={{ border: "1px solid grey" }}>
      <hr />
      <h4>All Categories</h4>
      <label>
        <input
          onClick={handleUserInput}
          id="all"
          type="radio"
          name="option"
          value="All"
        />
        All
      </label>
      <label>
        <input
          onClick={handleUserInput}
          id="drama"
          type="radio"
          name="option"
          value="Drama"
        />
        DRAMA
      </label>
      <label>
        <input
          onClick={handleUserInput}
          type="radio"
          name="option"
          value="Crime"
        />
        CRIME
      </label>
      <label>
        <input
          onClick={handleUserInput}
          type="radio"
          name="option"
          value="Action"
        />
        ACTION
      </label>
      {dataToDisplay.map((movie) => {
        return (
          <div>
            <div>
              <h4>{movie.title}</h4>
              Rating : {movie.rating} Year: {movie.year}
              category : {movie.category}
            </div>
          </div>
        );
      })}
    </div>
  );
};
