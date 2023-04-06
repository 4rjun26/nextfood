import React from 'react'
import Footbar from '../components/Footbar'
import styles from 'sample/styles/Sellers.module.css'
import {BsSearch} from "react-icons/bs";
import Image from 'next/image'
import { MongoClient } from 'mongodb';
import Link from 'next/link'
import {useRouter} from 'next/router';

const PostLink=({v})=>(
  <Link 
  href={{
      pathname: '/profile',
      query: { v: v },
    }}
    >
      <p className={styles.username}>@{v}</p
      ></Link>
);

const sellers = ({accs}) => {

  function changeQuery(){

  }
function dropdown(){
  var elem=document.getElementById("b1");
  if(elem.style.top=="-25px"){
    elem.style.top="0px";
    elem.style.zIndex="1";
    elem=document.getElementById("b2");
    elem.style.top="0px";
    elem.style.zIndex="1";
    elem=document.getElementById("b3");
    elem.style.top="0px";
    elem.style.zIndex="1";
    elem=document.getElementById("b4");
    elem.style.top="0px";
    elem.style.zIndex="1";
  }
  else{
  elem.style.top="-25px";
  elem.style.zIndex="-1";
  elem=document.getElementById("b2");
  elem.style.top="-50px";
  elem.style.zIndex="-1";
  elem=document.getElementById("b3");
  elem.style.top="-75px";
  elem.style.zIndex="-1";
  elem=document.getElementById("b4");
    elem.style.top="-100px";
    elem.style.zIndex="-1";
  }
}

function follow(identity){
  const elem=document.getElementById(identity);
    if(elem.innerHTML=="Follow"){
      elem.innerHTML="Following";
      elem.style.color="white";
      elem.style.background="rgb(153, 228, 41)";
    }
    else{
      elem.innerHTML="Follow";
      elem.style.color="black";
      elem.style.background="none";
    }
}
  return (
    <div style={{"margin-top":"60px"}}>
          <div className={styles.searchnsort}>
          <input className={styles.searchbar} id="sbar" type='text' placeholder='Search sellers by username...'/> <button onClick={changeQuery}><BsSearch/></button> 
          </div>
          <div className={styles.sortcont}>
          <button className={styles.sortby} onClick={dropdown}>Sort By</button>
          <ul>
            <li><button className={styles.b1} onClick={dropdown} id="b1">Recent</button></li>
             <li><button className={styles.b2} onClick={dropdown} id="b2">Oldest</button></li>
           <li><button className={styles.b3} onClick={dropdown} id="b3">Followed</button></li>
             <li><button className={styles.b4} id="b4">Sellings</button></li> 
          </ul>
          </div>
          <br/><br/><br/><br/>          <br/><br/>

    <section id="accs">
      <div className={styles.row}>
      {accs.map((acc) => (
        <div className={styles.column}>  
      <div className={styles.card}>
        <button id={acc.serial} onClick={()=>follow(acc.serial)} className={styles.follow}>Follow</button>
        <div className={styles.stats}>
          <br/><br/><br/>
        <h1>shinde</h1>
        </div>
        <div className={styles.pfp}>
        <Image className={styles.pfpimg} src='/defprofile.png' width={100} height={100}/> 
        </div>
        <PostLink v={acc.username}/>
        <br/>
        <p className={styles.bio}>{acc.bio}</p>
        <br/>
        {/* <p className={styles.statinfo}>24</p> */}
      </div>
    </div>
    ))}
  </div>
<br/><br/><br/><br/><br/>
    </section>
        <Footbar/>
    </div>
  )
}

export default sellers

export async function getServerSideProps(router) {
      
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(process.env.DB_NAME);
  var selleraccs=db.collection('selleraccs');
  var accs;
  accs=await selleraccs.find().toArray();
       client.close();

  return {
    props: {
      accs: accs.map((acc) => ({
          ...acc,
          _id: acc._id.toString(),
        })),
        revalidate: 1,
      },

  };
}