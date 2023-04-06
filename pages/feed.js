import React from 'react'
import Head from 'next/head'
import styles from 'sample/styles/Feed.module.css'
import Footbar from '../components/Footbar'
import Image from 'next/image'
import {MdZoomOutMap} from "react-icons/md";
import {BsBookmarkHeart} from "react-icons/bs";
import {BsBasket2} from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import {FaSortAmountDownAlt} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {BsFillHeartFill} from "react-icons/bs";
import {GiLouvrePyramid, GiReceiveMoney} from "react-icons/gi";
import {MdOutlineViewCarousel} from "react-icons/md";
import { Script } from 'vm'
import { MongoClient } from 'mongodb';
import Link from 'next/link'
import {useRouter} from 'next/router';

var history=0;
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
export default function feed({ documents,posts,cats,selects}) {

 const router = useRouter()
    function changeQuery(){
       
        const elem=document.getElementById('sbar');
        router.replace({
            query: { ...router.query, search: elem.value },
         });
        
        var srfemel=document.getElementById('srf');
        srfemel.style.display="inline-block";
        srfemel=document.getElementById('cs');
        srfemel.style.display="inline";
        }

    function followaction(identity){
        var elem=0;
        const followarray=document.getElementsByClassName("Feed_follow__A66R7");
        elem=followarray[identity-1];
        router.replace({
            query: { ...router.query, f:elem.name },
         });
        if(elem.innerHTML=="Follow"){
            elem.style.width="90px";
            elem.innerHTML="Following";
        }
        else{
            elem.style.width="70px";
            elem.innerHTML="Follow";
        }
    }

    function expandview(identity){

        var expand=0,moreinfo=0,reviews=0;
        let number=identity;

        // expand=document.getElementById("c_".concat(number));
        // moreinfo=document.getElementById("moreinfo_".concat(number));
        // reviews=document.getElementById("rev_".concat(number));
      let i=0;
      const array=document.getElementsByClassName("Feed_card__58J74");
      
    
            expand=document.getElementsByClassName("Feed_card__58J74")[identity-1];
            moreinfo=document.getElementsByClassName("Feed_moreinfo__YAFzu")[identity-1];
            reviews=document.getElementsByClassName("Feed_review__tjz8z")[identity-1];
      
        if(moreinfo.style.display=="none"){
           expand.style.height="550px";
           moreinfo.style.display="block";
        }
        else{
           expand.style.height="330px";
           moreinfo.style.display="none";
          reviews.style.display="none";
        }
       
    //     if(history!=0){
    //         history--;
    //         expand=document.getElementsByClassName("Feed_card__58J74")[history];
    //         moreinfo=document.getElementsByClassName("Feed_moreinfo__YAFzu")[history];
    //    //     reviews=document.getElementsByClassName("review")[history];

    //         expand.style.height="330px";
    //         moreinfo.style.display="none";
    //       //  reviews.style.display="none";
    //     }
    //     if(history==number){
    //         history=0;
    //     }
    //     else{
    //         history=number; 
    //     }
    }

    function loadreviews(identity){
        let number=identity;
        const expand=document.getElementsByClassName("Feed_card__58J74")[identity-1];
        const reviews=document.getElementsByClassName("Feed_review__tjz8z")[identity-1];

         if(reviews.style.display=="none"){
            expand.style.height="650px";
            reviews.style.display="block";
         }
         else{
            expand.style.height="550px";
            reviews.style.display="none";
         }

     }

    function showsort(){
        const elem=document.getElementById("sortcont");
        elem.style.scale="100%";
        elem.style.opacity=1;
    }
    function bruh(){
        const elem=document.getElementById("sortcont");
        window.addEventListener('click', function(e){
	
            if (document.getElementById('sortcont').contains(e.target)){

          } else if(elem.style.scale==1){
          //  elem.style.scale="0%";
        }
        });
       
    }
    function closesort(identity){
        const elem=document.getElementById("sortcont");
        elem.style.scale="0%";
        elem.style.opacity=0;
    //    const btn=document.getElementById(identity);
        router.replace({
            query: { ...router.query, sort:identity },
         });
    }
    function sortclose(){
        const elem=document.getElementById("sortcont");
        elem.style.scale="0%";
        elem.style.opacity=0;
    }
    function selectfood(id){
        const elems=document.getElementsByClassName("Feed_foodbtns__a4NeD");
        if(elems[id-1].style.boxShadow=="none"){
            elems[id-1].style.boxShadow="rgba(0,255, 0, 0.65) 0px 5px 15px";
        }
        else{
            elems[id-1].style.boxShadow="none";
        }
    }
    function togglezoompics(id){
        router.replace({
            query: { ...router.query, zoompost:id },
         });
         const elem=document.getElementById("picscont");
        elem.style.opacity=1;
        elem.style.scale=1;
    }
    function closezoompics(){
        const elem=document.getElementById("picscont");
        elem.style.opacity=0;
        elem.style.scale=0;
    }
    function cancelsearch(){
        router.replace('/feed', undefined);
      
        const elem=document.getElementById('sbar');
        elem.value="";
       
        
        var srfemel=document.getElementById('srf');
        srfemel.style.display="none";
         srfemel=document.getElementById('cs');
        srfemel.style.display="none";
    }
    function changeImage(id){
        const btnarray=document.getElementsByClassName("Feed_gole__ErszZ");
        const imgarray=document.getElementsByClassName("Feed_zoomimg__v9ELS");

        for(var i=1;i<=3;i++){
            if(i==id){
                btnarray[i-1].style.background="white";
                btnarray[i-1].style.color="black";

              //  imgarray[i-1].style.display="block";
              imgarray[i-1].style.width="100%";
            }
            else{
                btnarray[i-1].style.background="none";
                btnarray[i-1].style.color="white";

             //   imgarray[i-1].style.display="none";
             imgarray[i-1].style.width="0%";
            }
        }
    }  
  
  return (
    <div style={{"margin-top":"60px"}}>
        <Head>
        <title>Feed</title>
        </Head>
        {selects.map((select) => (
        <div className={styles.picscontainer} id="picscont">
            <button className={styles.cls} onClick={closezoompics}><ImCross/></button>
            <div className={styles.pics}>
            
                 <Image 
                src={select.pic1}
                alt={select.serial}
                id="1"
                loading='lazy'
                className={styles.zoomimg}
                width={1000}
                height={1000}
                />
               
                <Image 
                src={select.pic2}
                alt={select.serial}
                id="2"
                loading='lazy'
                style={{"width":"0%"}}
                className={styles.zoomimg}
                width={1000}
                height={1000}
                />

                <Image 
                src={select.pic3}
                alt={select.serial}
                id="3"
                loading='lazy'
                style={{"width":"0%"}}
                className={styles.zoomimg}
                width={1000}
                height={1000}
                />
          
            </div>
            <button className={styles.gole} style={{"background":"white","color":"black"}} onClick={()=>changeImage(1)}>1</button>
            <button className={styles.gole} onClick={()=>changeImage(2)}>2</button>
            <button className={styles.gole} onClick={()=>changeImage(3)}>3</button>
        </div>
          ))}
        <div className={styles.searchnsort}>
        <input className={styles.searchbar} id="sbar" type='text' placeholder='Search food...'/> <button onClick={changeQuery}><BsSearch/></button> 
          </div>
        <div id="opt" className={styles.optionbtncont}>
        <div id="sortcont" className={styles.sortcont}>
            <button className={styles.close} onClick={sortclose}><ImCross/></button>
            <ul>
                <li><button id="mr" onClick={()=>closesort("mr")}>Most recent</button></li>
                <li><button id="old" onClick={()=>closesort("old")}>Oldest</button></li>
                <li><button id="phtl" onClick={()=>closesort("phtl")}>Price(High to Low)</button></li>
                <li><button id="plth" onClick={()=>closesort("plth")}>Price(Low to High)</button></li>
                <li><button id="mp" onClick={()=>closesort("mp")}>Most Purchased</button></li>
            </ul>
        </div>
        <button className={styles.opbtns} onClick={showsort}>SortBy <FaSortAmountDownAlt/></button>
       
        {cats.map((cat) => (
        <button className={styles.foodbtns} id={cat.serial} onClick={()=>selectfood(cat.serial)}> <Image src={cat.pic} alt="" className={styles.btnimg} width={1000} height={1000}/><p>{cat.name}</p></button>
        ))}
        {/* <button className={styles.foodbtns} id="nonveg" onClick={()=>selectfood("nonveg")}> <Image src='/nonveg.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Non-Veg</p></button>
        <button className={styles.foodbtns} id="junk" onClick={()=>selectfood("junk")}> <Image src='/junk.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Junk</p></button>
        <button className={styles.foodbtns} id="sweet" onClick={()=>selectfood("sweet")}> <Image src='/sweet.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Sweet</p></button>
        <button className={styles.foodbtns} id="chicken" onClick={()=>selectfood("chicken")}> <Image src='/chicken.jpg' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Chicken</p></button>
        <button className={styles.foodbtns} id="seafood" onClick={()=>selectfood("seafood")}> <Image src='/seafood.jfif' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Seafood</p></button> */}
        {/* <button className={styles.foodbtns}> <Image src='/veg.png' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Veg</p></button>
        <button className={styles.foodbtns}> <Image src='/veg.png' alt="" className={styles.btnimg} width={1000} height={1000}/><p>Veg</p></button> */}

        </div>
       
        <section className={styles.feedsection}>
        <div className={styles.row}>
            <h1 className={styles.SRF} id="srf">Search results for '{router.query.search}'&nbsp;&nbsp;</h1>
            <button onClick={cancelsearch} id="cs" style={{"display":"none","background":"red","color":"white","border-radius":"50%",
        "border":"none","width":"25px","height":"25px","cursor":"pointer"}}><ImCross/></button>
            <br/><br/>
        {posts.map((post) => (
            <div className={styles.column}>
                    
                            <div className={styles.card} id={post.serial}>
                <div className={styles.imgdiv}>
                <Image 
                src={post.pic1}
                alt={post.serial}
                loading='lazy'
                className={styles.img}
                width={1000}
                height={1000}
                />
                </div>
                <h3>{post.name}</h3>
                <h4>Rs.{post.price}</h4>
                {/* <Link href={'/profile?v=thechef'}><p className={styles.username}>@thechef</p></Link> */}
                <PostLink v={post.seller}/>
                <button className={styles.follow} name={post.seller} id={post.serial} onClick={()=>followaction(post.serial)}>Follow</button>
                <button className={styles.expand} id="expview_1" onClick={()=>expandview(post.serial)}><MdZoomOutMap/></button>
                <button className={styles.picslider} onClick={()=>togglezoompics(post.serial)}><MdOutlineViewCarousel/></button>
                <div className={styles.moreinfo} id={post.serial} style={{display:"none"}}>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                            
                    </p>
                    <button className={styles.decision}>&nbsp;&nbsp;Buy &nbsp;&nbsp;<BsBasket2/></button>
                    <button className={styles.decision}>Save <BsBookmarkHeart/></button>
                <br/><br/>
                <p className={styles.lc}><BsFillHeartFill/> 100</p>
                <h4><GiReceiveMoney/> 30</h4>
                <br/>
                    <button className={styles.loadrev} id="showreview_1" onClick={()=>loadreviews(post.serial)}>Show reviews</button>

                </div>

                <div className={styles.review} id={post.serial}>
                    <p>This is review 1</p>
                    <p>This is review 2</p>
                </div>
                </div>
                </div>
  ))}
                </div>
        </section>
     
        <Footbar/>
    </div>
  )
}

{/* export default feed; */}

export async function getServerSideProps(router) {
      
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(process.env.DB_NAME);
    var categories=db.collection('categories');
    var cats= await categories.find().toArray();
    var collection = db.collection('users');
    const documents = await collection.find().toArray();
    collection= db.collection('posts');
    var selleraccs=db.collection('selleraccs');
    var posts,selects;
    if(router.query.zoompost!=null){
        selects= await collection.find({"serial":router.query.zoompost}).toArray();
    }
    else{
        selects=[];
    }
        
    if(router.query.f!=null){
        if(await selleraccs.countDocuments({"following":router.query.f})==0){
            await selleraccs.insertOne({following:router.query.f});
        }
        else{
            await selleraccs.deleteMany({following:router.query.f});
        }
    }
if(router.query.search==null){
    if(router.query.sort!=null){
        if(router.query.sort=="mr"){
            posts= await collection.find().sort({"serial":-1}).toArray();
        }
        else if(router.query.sort=="old"){
            posts= await collection.find().sort({"serial":1}).toArray();
        }
    }
    else{
        posts= await collection.find().toArray();
    }
}
else{
    if(router.query.sort!=null){
        if(router.query.sort=="mr"){
            posts= await collection.find({"name":{'$regex':router.query.search}}).sort({"serial":-1}).toArray();
        }
        else if(router.query.sort=="old"){
            posts= await collection.find({"name":{'$regex':router.query.search}}).sort({"serial":1}).toArray();
        }
    }
    else{
        posts= await collection.find({"name":{'$regex':router.query.search}}).toArray();
    }
}
         client.close();
  
    return {
      props: {
        documents: documents.map((document) => ({
          ...document,
          _id: document._id.toString(),
        })),
        posts: posts.map((post) => ({
            ...post,
            _id: post._id.toString(),
          })),
          cats: cats.map((cat) => ({
            ...cat,
            _id: cat._id.toString(),
          })),
          selects: selects.map((select) => ({
            ...select,
            _id: select._id.toString(),
          })),
          revalidate: 1,
        },

    };
  }
