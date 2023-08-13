import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar";

const AddMovieForm = () => {
  const [formValues, setFormValues] = useState({
    id: uuid(),
    title: "",
    year: 0,
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  return (
    <div>
        <Navbar />
        <div className="container">
        <form
      //   onSubmit={}
      >
        <div>
          <label>
            Title:
            <input type="text" value={formValues.title} />
          </label>
        </div>
        <div>
          <label>
            Year:
            <input type="number" value={formValues.year} />
          </label>
        </div>
        <div>
          <label>
            Genre:
            <input type="text" value={formValues.genre} />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input type="number" value={formValues.rating} />
          </label>
        </div>
        <div>
          <label>
            Director:
            <input type="text" value={formValues.director} />
          </label>
        </div>
        <div>
          <label>
            Writer:
            <input type="text" value={formValues.writer} />
          </label>
        </div>
        <div>
          <label>
            Cast:
            <input type="text" value={formValues.cast} />
          </label>
        </div>
        <div>
          <label>
            Summary:
            <textarea value={formValues.summary} cols="30" rows="10"></textarea>
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input type="file" />
          </label>
        </div>

        <button type="submit">Add movie</button>
      </form>
        </div>
     
    </div>
  );
};

export default AddMovieForm;
