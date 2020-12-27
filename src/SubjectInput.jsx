import React, {useState} from 'react';
import firebase from "firebase";


const SubjectInput = ({subject}) => {
    const [name, setName] = useState(subject.name)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection("subjects").doc(subject.id).set({...subject, name})
    }

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection("subjects").doc(subject.id).delete()
    }

    return (
        <div>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                defaultValue={subject.name}
                type="text"
            />
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default SubjectInput;
