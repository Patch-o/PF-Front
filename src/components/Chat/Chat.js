import React, { useRef, useState } from 'react'
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
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(30);
    // .onSnapshot(snapshot => {
    //   query(snapshot.docs.map(doc => doc.data()))
    // });
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>Press Enter</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://www.corpcier.org/zunchowiki/images/c/c2/Potato.png'} alt={''} />
        <p>{text}</p>
      </div>
    </>)
  }
  

export default Chat
