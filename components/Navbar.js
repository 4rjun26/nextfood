import React from 'react'
import Link from 'next/link'
import styles from 'sample/styles/Home.module.css'
import {FaHamburger} from 'react-icons/fa'
import Image from 'next/image'
import {BsSearch} from "react-icons/bs";
import {useRouter} from 'next/router';
import {IoMdArrowDropdown} from "react-icons/io";

var cond=1;
const Navbar = () => {
  const router = useRouter();
    var id = null;
    function hamb(){
       const btn=document.getElementById("bur");
       const elem = document.getElementById("sample");  
       const hl=document.getElementById("hl");
       if(elem.style.height=="0px"){
        btn.innerHTML="x";
        elem.style.height="400px";
        hl.style.display="block";
        // elem.style.display="flex";
        cond=-1;
       }
       else{
        btn.innerHTML="<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z'></path></svg>";
        elem.style.height="0px";
        hl.style.display="none";
        // elem.style.display="none";
        cond=1;
       }
  }
function opensearch(){
  const elem=document.getElementById("sb");
  const os=document.getElementById("os");

  const abt=document.getElementById("aboutcontain");
  abt.style.scale=0;
  if(elem.style.width=="400px" && elem.value==""){
    elem.style.width="0px";
    elem.style.padding="3px 0px";
    os.style.transform="rotate(0deg)";
    os.style.scale="150%";
  }
  else if(elem.style.width=="400px" && elem.value!=""){
    router.push({
      pathname: '/feed',
      query: { search: elem.value },
   });
   elem.value="";
  }
  else{
    elem.style.width="400px";
    elem.style.padding="3px 10px";  os.style.transform="rotate(360deg)";
    os.style.scale="100%";
    elem.focus();
  }
}
  function clshamb(){
    const btn=document.getElementById("bur");
      
    btn.innerHTML="<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z'></path></svg>";
    cond=1;
      
        const elem = document.getElementById("sample");  
        elem.style.height="0px";
        const hl = document.getElementById("hl");  
        hl.style.display="none";
  }

  function showabout(){
    const elem=document.getElementById("aboutcontain");
    const sb=document.getElementById("sb");
    const os=document.getElementById("os");
    sb.style.width="0px";
    sb.style.padding="3px 0px";
    os.style.transform="rotate(0deg)";
    os.style.scale="150%";
    if(elem.style.scale==0){
      elem.style.scale=1;
    }
    else{
      elem.style.scale=0;
    }
  }
  return (
    <>
    <nav className={styles.mainnav}>
    <ul>
      <Link href={'/'}><h1 id='logo'><Image src='/Logo.jpg' width={60} height={60}></Image></h1></Link>
      <Link href={'/'}><li>Home</li></Link>
      <li onClick={showabout} style={{"cursor":"pointer"}}>About Us <IoMdArrowDropdown/>

      <div id='aboutcontain' className={styles.aboutcontain}>
          <button>What are we?</button>
          <button>Pricing</button>
          <button>Contribute</button>
      </div>
      </li>
        
      
      <Link href={'/sellers'}><li>Find sellers</li></Link>
      <Link href={'/feed'}><li>Explore</li></Link>
      <Link href={'/faqs'}><li>FAQs</li></Link>
      <Link href={'/login'}><li>Sign in</li></Link>
      <li><input type="text" id="sb" placeholder='Search dish by name...' className={styles.homesearchbar}/><button className={styles.os} id="os" onClick={opensearch}><BsSearch/></button></li>
      
      <button className={styles.hamburger} id="bur" onClick={hamb}><FaHamburger/></button>
    </ul>
  </nav>
  {/* <h1 className={styles.sample} id="sample">Hellow</h1> */}
  <div className={styles.navcont} id="sample">
  <ul className={styles.hamlinks} id="hl">
      <Link href={'/'}><button onClick={clshamb}>Home</button></Link>
      <Link href={'/#abt'}><button onClick={clshamb}>About</button></Link>
      <Link href={'/feed'}><button onClick={clshamb}>Explore</button></Link>
      <Link href={'/faqs'}><button onClick={clshamb}>FAQs</button></Link>
      <Link href={'/login'}><button onClick={clshamb}>Sign in</button></Link>
       
    </ul>
  </div>
  </>
  )
}

export default Navbar