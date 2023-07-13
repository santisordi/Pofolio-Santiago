import React from 'react'
import Contact from './Contact'
import { db } from "../firebase";
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'

const Links = () => {
  const formCollection = collection(db, "form"); // Reemplaza "form" con el nombre de la colección en tu Firestore

    const addOrEditLink = async (linkObject) => {
    try {
      await addDoc(formCollection, linkObject);
        Swal.fire(
          'Thanks you!',
          "I'll contanct you soon!",
          'success'
        )
    } catch (error) {
      Swal.fire(
        'ups',
        "Please completed de form with de correct values",
        'error'
      )
      console.error("Error al agregar la tarea:", error);
    }
  };

  return (
    <div>
      <Contact addOrEditLink={addOrEditLink} />
      Links
    </div>
  );
};

export default Links;

