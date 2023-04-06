import React from 'react'
import styles from 'sample/styles/Home.module.css'
 import {AiOutlinePlusCircle} from "react-icons/ai";
 import {AiOutlinePlusSquare} from "react-icons/ai";
 import {BsBell} from "react-icons/bs";
 import {MdAccountCircle} from "react-icons/md";
 import {HiHome} from "react-icons/hi";
 import {ImSearch} from "react-icons/im";
 import Link from 'next/link'
 import Image from 'next/image'

const Footbar = () => {
  function expandposting(){
    const elem=document.getElementById("posting");
    if(elem.style.height=="0px"){
      elem.style.height="70%";
    }
    else{
      elem.style.height="0px";
    }
}
function contractposting(){
  const elem=document.getElementById("posting");
  elem.style.height="0px";
}
function changepic(id){
for(var i=1;i<=3;i++){
  var elem=document.getElementById(i);
  if(id==i){
    elem.style.zIndex="16";
    document.getElementById("b".concat(i)).style.background="white";
    document.getElementById("b".concat(i)).style.color="black";
  }
  else{
    elem.style.zIndex="15";
    document.getElementById("b".concat(i)).style.background="none";
    document.getElementById("b".concat(i)).style.color="white";
  }
}
}
  return (
    <div className={styles.foot}>
         <div className={styles.posting} id="posting">
          
           <div className={styles.picscont}>
            <div className={styles.pic1} id="1">
            <Image 
                src='/cookbookbghd.jpg'
                alt=""
                className={styles.img}
                width={1000}
                height={1000}
                />
            </div>
            <div className={styles.pic2} id="2">
            <input type="file" className={styles.addpost}/>
            </div>
            <div className={styles.pic3} id="3">
            <input type="file" className={styles.addpost}/>
            </div>
           </div>
           <div className={styles.serialcont}>
           <button id="b1" onClick={()=>changepic("1")}>1</button><button id="b2" onClick={()=>changepic("2")}>2</button><button id="b3" onClick={()=>changepic("3")}>3</button>         
           </div>
           <br/>
           <div className={styles.postinfo}>
            <input type="text" className={styles.foodname} placeholder="Name..."/>
            <br/> <br/> <br/> <br/>
            <input type="number" className={styles.foodprice} placeholder="Price in Rs..."/>
            <br/><br/>
            <h3>Select food category.</h3>
            <br/>
            <div id="opt" className={styles.optionbtncont}>
            <button className={styles.foodbtns} id="veg" onClick={()=>selectfood("veg")}> <Image src='/veg.png' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Veg</p></button>
        <button className={styles.foodbtns} id="nonveg" onClick={()=>selectfood("nonveg")}> <Image src='/nonveg.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Non-Veg</p></button>
        <button className={styles.foodbtns} id="junk" onClick={()=>selectfood("junk")}> <Image src='/junk.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Junk</p></button>
        <button className={styles.foodbtns} id="sweet" onClick={()=>selectfood("sweet")}> <Image src='/sweet.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Sweet</p></button>
        <button className={styles.foodbtns} id="chicken" onClick={()=>selectfood("chicken")}> <Image src='/chicken.jpg' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Chicken</p></button>
        <button className={styles.foodbtns} id="seafood" onClick={()=>selectfood("seafood")}> <Image src='/seafood.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Seafood</p></button>
            </div>
         <br/><br/>
         <textarea className={styles.foodingred} placeholder="Ingredients..."></textarea>   
         <br/><br/>
         <textarea className={styles.foodrecipe} placeholder="Recipe..."></textarea>
         <br/><br/>
         <button className={styles.postbtn}>Post</button>
           </div>
        </div>
        <div className={styles.footcont}>
            <div className={styles.cols}>
            <Link href={'/feed'}><button className={styles.footbtns} onClick={contractposting}><HiHome/></button></Link>
            </div>
            <div className={styles.cols}>
            <Link href={'/sellers'}><button className={styles.footbtns} onClick={contractposting}><ImSearch/></button></Link>              
            </div>
            <div className={styles.cols}>
            <button className={styles.footbtns} onClick={expandposting}><AiOutlinePlusCircle/></button>
            </div>
            <div className={styles.cols}>
            <Link href={'/notifications'}><button className={styles.footbtns} onClick={contractposting}><BsBell/>
            <span className={styles.badge}>9</span>
            </button></Link>
            </div>
            <div className={styles.cols}>
            <Link href={'/myprofile'}><button className={styles.footbtns} onClick={contractposting}><MdAccountCircle/></button></Link>
            </div>
        </div>
    </div>
  )
}

export default Footbar