import React, { useEffect, useRef, useState } from 'react'
import './Chat.scss'
//FIREBASE CHAT
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';//database
import 'firebase/compat/auth';//auth

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA09UZBT4_Ttcu9fPlTBo50oI50X2xp-8w",
  authDomain: "proyecto-final-upgrade.firebaseapp.com",
  projectId: "proyecto-final-upgrade",
  storageBucket: "proyecto-final-upgrade.appspot.com",
  messagingSenderId: "640162832173",
  appId: "1:640162832173:web:4b519017beaefed8757da4",
  measurementId: "G-CVXYD3QZGE"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analitycs

const Chat = () => {
    const [user] = useAuthState(auth);
  return (
    <div className='container'>
      
    <div className='App'>
      <header>
        <h1>🥔</h1>
        <SignOut />
      </header>
      <section >
        {user ? <ChatRoom /> : <SignIn />}
      </section>


    </div>
    </div>
  )
}

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
  function ChatRoom() {

    const dummy = useRef(null);

    const messagesRef = firestore.collection('messages');

    const query = messagesRef.orderBy('createdAt', "desc").limit(30);
    
    const [messagesFromFirebase] = useCollectionData(query, { idField: 'id' });
      
    useEffect(() => {
      dummy.current.scrollIntoView({ behavior: 'smooth' })
    }, [messagesFromFirebase]);
  
    const sendMessage = async (ev) => {
      ev.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: ev.target.elements[0].value,
        createdAt: new Date().getTime(),
        author: uid,
        photoURL,
      });

      // dummy.current.scrollIntoView({ behavior: 'smooth' });
      ev.target.reset();
    }
  
    return (<>
      <main>

        {messagesFromFirebase?.reverse().map(msg => 
          <ChatMessage key={`${msg.uid}-${msg?.createdAt}`} message={msg} />
        )}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>

        <input name="message" placeholder="say something nice" required />
  
        <button type="submit">Press Enter</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, author, photoURL } = props.message;
  
    const messageClass = author === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://www.corpcier.org/zunchowiki/images/c/c2/Potato.png'} alt={''} />
        <p>{text}</p>
      </div>
    </>)
  }
  

export default Chat
