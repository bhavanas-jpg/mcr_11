import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const AddMovieForm = () => {
  const [formValues, setFormValues] = useState({
    id: uuid(),
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });
  const navigate = useNavigate();
  const {dispatch} = useData();

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    dispatch({
        type: "ADD_MOVIE",
        payload: formData
    })
    console.log(formData);
    navigate("/");
  };



  const changeMediaHandler = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image/")) {
        if (file.size < 10 * 1024 * 1024) {
            setFormValues((prev) => ({
                ...prev,
                imageURL: URL.createObjectURL(file)
            }))
        } else {
            alert("file must be less than 10mb")
        }
    } else {
        alert("file must be an image (JPEG/PNG)");
    }
  }
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e, formValues)}>
          <div>
            <label>
              Title:
              <input
                type="text"
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              Year:
              <input type="number" value={formValues.year} 
               onChange={(e) =>
                setFormValues({ ...formValues, year: Number(e.target.value) })
              }
              />
            </label>
          </div>
          <div>
            <label>
              Genre:
              <input type="text" value={formValues.genre}
               onChange={(e) =>
                setFormValues({ ...formValues, genre: e.target.value })
              }
              />
            </label>
          </div>
          <div>
            <label>
              Rating:
              <input type="number" value={formValues.rating} 
               onChange={(e) =>
                setFormValues({ ...formValues, rating: Number(e.target.value) })
              }/>
            </label>
          </div>
          <div>
            <label>
              Director:
              <input type="text" value={formValues.director} 
               onChange={(e) =>
                setFormValues({ ...formValues, director: e.target.value })
              }
              />
            </label>
          </div>
          <div>
            <label>
              Writer:
              <input type="text" value={formValues.writer}
               onChange={(e) =>
                setFormValues({ ...formValues, writer: e.target.value })
              }
              />
            </label>
          </div>
          <div>
            <label>
              Cast:
              <input type="text" value={formValues.cast} 
               onChange={(e) =>
                setFormValues({ ...formValues, cast: e.target.value })
              }
              />
            </label>
          </div>
          <div>
            <label>
              Summary:
              <textarea
               onChange={(e) =>
                setFormValues({ ...formValues, summary: e.target.value })
              }
                value={formValues.summary}
                cols="30"
                rows="10"
              ></textarea>
            </label>
          </div>
          <div>
            <label>
              Image URL:
              <input type="file"
              onChange={changeMediaHandler}
              />
            </label>
          </div>

          <button type="submit">Add movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
