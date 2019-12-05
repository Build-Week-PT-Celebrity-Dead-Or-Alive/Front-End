// Update or Delete Celebrity
import React, { useContext } from "react";
//import axios from "axios";
import { Link } from 'react-router-dom';
import { CelebrityContext } from '../../context/CelebrityContext';

const CelebList = () => {
  const {celebs, handleCelebDelete } = useContext(CelebrityContext)
  // console.log('CELEBS', celebs)

  return (
    <>
      <h1>Celebrities</h1>

      {celebs.map(celeb => (
        <div key={celeb.id} className='celebs'>
          <Link className='celeb-update' to={`/celebs/${celeb.id}`}>Edit</Link>
          <button className='celeb-delete' onClick={(e) => handleCelebDelete(e, celeb.id)}>Delete</button>
          <div className='celeb-name'>Name: {celeb.name}</div>
          <div className='celeb-dead'>Dead?: {celeb.dead}</div>
        </div>
      ))}
    </>
  )
};

export default CelebList;

//// const initialState = {
//   name: "",
//   imageurl: "",
//   info: "",
//   dead: ""
// };

// const CelebList = (props) => {
//   console.log(celebs);
//   const [editing, setEditing] = useState(false);
//   const [celebToEdit, setCelebToEdit] = useState(initialState);
  
//   const [newCeleb, setNewCeleb] = useState({
//     // put some stuff here
//     name: "",
//     imageurl: "",
//     info: "",
//     dead: ""
//   });

//   const editCeleb = celeb => {
//     setEditing(true);
//     setCelebToEdit(celeb);
//   };

//   const saveEdit = e => {
//     e.preventDefault();
//     // Make a put request to save your updated celebrity
//     // think about where will you get the id from...
//     // where is is saved right now?
//     AxiosWithAuth()
//       .put(`protected/celebs/${celebToEdit.id}`, celebToEdit)
//       .then(result => {
//           setEditing(false);
//           console.log(celebToEdit);
//       })
//       .catch(error => {
//           throw error;
//       })
//     window.location.reload(false);
//   };

//   const deleteCeleb = celeb => {
//     // make a delete request to delete this celeb
//     if (window.confirm("Are you SURE you want to DELETE this celebrity?")) {
//       // updateCelebs(celebs.filter(celeb => celeb.id !== id));

//       AxiosWithAuth()
//         .delete(`protected/celebs/${celeb.id}`)
//         .then(result => {
//           // console.log(`Celebrity ${id} deleted`);
//         })
//         .catch(error => {
//           throw error;
//         })
//         window.location.reload(false);
//     }
//   };

//   const handleNewCeleb = (event) => {
//     event.preventDefault()

//     AxiosWithAuth()
//       .post(`protected/celebs/${celebs.id}`, newCeleb)
//       .then(result => {
//         console.log(newCeleb)
//       })
//       .catch(error => {
//         throw(error)
//       })
//       window.location.reload(false);
//   }

//   return (
//     <div className="celebs-wrap">
//       <p>celebs</p>
//       <ul>
//         {celebs.map(celeb => (
//           <li key={celeb.celeb} onClick={() => editCeleb(celeb)}>
//             <span>
//               <span className="delete" 
//                     onClick={e => {
//                           e.stopPropagation();
//                           deleteCeleb(celeb)
//                         }
//                 }>
//                   x
//               </span>{" "}
//                 {celeb.celeb}
//               </span>
//             {/* <div
//               className="color-box"
//               style={{ backgroundColor: color.code.hex }}
//             /> */}
//           </li>
//         ))}
//       </ul>
//       {editing && (
//         <form onSubmit={saveEdit}>
//           <legend>edit celeb</legend>
//           <label>
//           celeb name:
//             <input
//               onChange={e =>
//                 setCelebToEdit({ 
//                   ...celebToEdit, 
//                   celeb: e.target.value })
//               }
//               value={celebToEdit.celeb}
//             />
//           </label>
//           <label>
//             celeb data:
//             <input
//               onChange={e =>
//                 setCelebToEdit({
//                   ...celebToEdit,
//                   celeb: e.target.value
//                 })
//               }
//               value={celebToEdit.celeb}
//             />
//           </label>
//           <div className="button-row">
//             <button type="submit">save</button>
//             <button onClick={() => setEditing(false)}>cancel</button>
//           </div>
//         </form>
//       )}
//       <div className="spacer" />
//       {/* stretch - build another form here to add a color */}
//       <form onSubmit={handleNewCeleb}>
//         <label>
//         Celeb Name: 
//           <input onChange={event => 
//                   setNewCeleb({
//                     ...newCeleb,
//                     celebs: event.target.value
//                   })}
//                  value={newCeleb.celeb} />
//         </label>
//       </form>
//     </div>
//   );
// };
