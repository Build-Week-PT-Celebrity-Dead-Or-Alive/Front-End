// Update or Delete Celebrity

import React, { useState } from "react";
//import axios from "axios";

import AxiosWithAuth from "../../../Utilities/AxiosWithAuth";

const initialState = {
  name: "",
  // more state info here
};

const CelebList = ({ celebs, updateCelebs }) => {
  console.log(celebs);
  const [editing, setEditing] = useState(false);
  const [celebToEdit, setCelebToEdit] = useState(initialState);
  
  const [newCeleb, setNewCeleb] = useState({
    // put some stuff here
  });

  const editCeleb = celeb => {
    setEditing(true);
    setCelebToEdit(celeb);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated celebrity
    // think about where will you get the id from...
    // where is is saved right now?
    api()
      .put(`/api/colors/${celebToEdit.id}`, celebToEdit)
      .then(result => {
          setEditing(false);
          console.log(celebToEdit);
      })
      .catch(error => {
          throw error;
      })
    window.location.reload(false);
  };

  const deleteColor = celeb => {
    // make a delete request to delete this color
    if (window.confirm("Are you SURE you want to DELETE this celebrity?")) {
      updateCelebs(celeb.filter(celeb => celeb.id !== id));

      AxiosWithAuth()
        .delete(`/api/colors/${color.id}`)
        .then(result => {
          console.log(`Celeb ${id} deleted`);
        })
        .catch(error => {
          throw error;
        })
        window.location.reload(false);
    }
  };

  const handleNewColor = (event) => {
    event.preventDefault()

    AxiosWithAuth()
      .post("/api/colors", newCeleb)
      .then(result => {
        console.log(newCeleb)
      })
      .catch(error => {
        throw(error)
      })
      window.location.reload(false);
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editCeleb(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setCelebToEdit({ ...celebToEdit, color: e.target.value })
              }
              value={celebToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setCelebToEdit({
                  ...celebToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={celebToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      <form onSubmit={handleNewColor}>
        <label>
          Color Name: 
          <input onChange={event => 
                  setNewCeleb({
                    ...newCeleb,
                    code: {hex: event.target.value}
                  })}
                 value={newCeleb.code.hex} />
        </label>
      </form>
    </div>
  );
};

export default CelebList;