import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth'
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from 'firebase/firestore'

import { db, auth } from './firebase'

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase
            .auth()
            .signInWithEmailAndPassword(
                credentials.emailRef,
                credentials.passwordRef
            )
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' })
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err })
            })
    }
}

export const registerWithEmailAndPassword = async (
    firstName,

    lastName,

    email,
    password
) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'allusers'), {
            uid: user.uid,
            firstName,

            lastName,

            authProvider: 'local',
            email,
        })
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}
