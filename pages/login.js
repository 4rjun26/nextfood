import React from 'react'
import styles from 'sample/styles/Login.module.css'
import {FaEye} from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import Link from 'next/link'
import { MongoClient } from 'mongodb';
import { useReducer } from 'react';

const formReducer=(state,event)=>{
  return{
    ...state,
    [event.target.name]:event.target.value
  }
}
const login = ({documents}) => {
  const[formData,setFormData]=useReducer(formReducer,{})
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  }
  function showpass(){
    const eye=document.getElementById('eye');
    const pass=document.getElementById('pass');

    if(eye.style.color=="grey"){
      eye.style.color="black";
      pass.setAttribute("type","text");
    }
    else{
      eye.style.color="grey";
      pass.setAttribute("type","password");
    }
  }
  async function getUser(){
   
  }
  return (
    <div style={{"margin-top":"60px"}}>
      <br/>
      <section>
          <div className={styles.container}>
              <div className={styles.info}>
                <h1>Sign in <SlUser/></h1>
                <form action='/api/loginapi' method='post'>
                <input type='text' onChange={setFormData} name='username' id='user' onKeyUp={getUser} placeholder='Username...'/>
                <input id='pass' onChange={setFormData} name='password' type='password' placeholder='Password...'/>
                <button id='eye' className={styles.eye} onClick={showpass}><FaEye/></button>

                <button className={styles.login}>Login</button>
                </form>
                <div className={styles.others}>
                  <Link className={styles.link} href={'/'}>Don't have an account yet? Click here.</Link>
                  <br/>
                  <br/>
                  <Link className={styles.link} href={'/'}>Forgot Password? Click here.</Link>
                </div>
              </div>
          </div>

      </section>
      
    </div>
  )
}

export default login

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(process.env.DB_NAME);
  const collection = db.collection('selleraccs');
  const documents = await collection.find().toArray();
  client.close();

  return {
    props: {
      documents: documents.map((document) => ({
        ...document,
        _id: document._id.toString(),
      })),
    },
    revalidate: 1,
  };
}