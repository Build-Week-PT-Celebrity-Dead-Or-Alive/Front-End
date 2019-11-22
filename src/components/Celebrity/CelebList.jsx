// Update or Delete Celebrity

import React, { useState } from "react";
//import axios from "axios";

import AxiosWithAuth from "../../Utilities/AxiosWithAuth";

const initialState = {
  name: "",
  imageurl: "",
  info: "",
  dead: ""
};

const CelebList = ({ celebs, updateCelebs }) => {
  console.log(celebs);
  const [editing, setEditing] = useState(false);
  const [celebToEdit, setCelebToEdit] = useState(initialState);
  
  const [newCeleb, setNewCeleb] = useState({
    // put some stuff here
    name: "",
    imageurl: "",
    info: "",
    dead: ""
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
      .put(`/celebs/${celebToEdit.id}`, celebToEdit)
      .then(result => {
          setEditing(false);
          console.log(celebToEdit);
      })
      .catch(error => {
          throw error;
      })
    window.location.reload(false);
  };

  const deleteCeleb = celeb => {
    // make a delete request to delete this celeb
    if (window.confirm("Are you SURE you want to DELETE this celebrity?")) {
      updateCelebs(celebs.filter(celeb => celeb.id !== id));

      AxiosWithAuth()
        .delete(`protected/celebs/${celeb.id}`)
        .then(result => {
          console.log(`Celebrity ${id} deleted`);
        })
        .catch(error => {
          throw error;
        })
        window.location.reload(false);
    }
  };

  const handleNewCeleb = (event) => {
    event.preventDefault()

    AxiosWithAuth()
      .post(`/celebs/${celeb.id}`, newCeleb)
      .then(result => {
        console.log(newCeleb)
      })
      .catch(error => {
        throw(error)
      })
      window.location.reload(false);
  }

  return (
    <div className="celebs-wrap">
      <p>celebs</p>
      <ul>
        {celebs.map(celeb => (
          <li key={celeb.celeb} onClick={() => editCeleb(celeb)}>
            <span>
              <span className="delete" 
                    onClick={e => {
                          e.stopPropagation();
                          deleteCeleb(celeb)
                        }
                }>
                  x
              </span>{" "}
                {celeb.celeb}
              </span>
            {/* <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            /> */}
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit celeb</legend>
          <label>
          celeb name:
            <input
              onChange={e =>
                setCelebToEdit({ 
                  ...celebToEdit, 
                  celeb: e.target.value })
              }
              value={celebToEdit.celeb}
            />
          </label>
          <label>
            celeb data:
            <input
              onChange={e =>
                setCelebToEdit({
                  ...celebToEdit,
                  celeb: e.target.value
                })
              }
              value={celebToEdit.celeb}
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
      <form onSubmit={handleNewCeleb}>
        <label>
        Celeb Name: 
          <input onChange={event => 
                  setNewCeleb({
                    ...newCeleb,
                    celeb: event.target.value
                  })}
                 value={newCeleb.celeb} />
        </label>
      </form>
    </div>
  );
};

export default CelebList;