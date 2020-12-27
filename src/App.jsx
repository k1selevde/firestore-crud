import React, { useEffect, useState } from 'react'

import firebase from './firebase'
import SubjectInput from "./SubjectInput";

function App() {

 const [subjects,setSubjects] = useState([])
 const [newSubject, setNewSubject] = useState()


  useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const data = await db.collection("subjects").get()
          setSubjects(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }

      fetchData();

  }, [])


 const onCreate = () => {
     const db = firebase.firestore()
     db.collection("subjects").add({...newSubject})
 }

  return (
      <>
          <input placeholder="name" type="text" onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}/>
          <input placeholder="count" type="text" onChange={(e) => setNewSubject({...newSubject, count: e.target.value})}/>
          <button onClick={onCreate}>Create</button>
          <ul>
              {subjects.map(subject => (
                  <li key={subject.name}>
                      <SubjectInput subject={subject}/>
                  </li>
              ))}
          </ul>
      </>
  );
}

export default App;
