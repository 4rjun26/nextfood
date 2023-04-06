import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles2 from 'sample/styles/Profile.module.css'
import {BsYoutube} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {TiArrowUnsorted} from "react-icons/ti";
import styles from 'sample/styles/Feed.module.css'
import Footbar from '../components/Footbar'
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

const profile = ({posts,accs,selects}) => {
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

    function followaction(){
        const elem=document.getElementById("follow");
        // router.replace({
        //     query: { ...router.query, f:elem.name },
        //  });
        if(elem.innerHTML=="Follow"){
            elem.style.background="rgb(153, 228, 41)";
            elem.style.color="white";
            elem.innerHTML="Following";
        }
        else{
            elem.style.background="none";
            elem.style.color="black";
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
        const elem2=document.getElementById("sortpost");
        if(elem.style.opacity==0){
            elem.style.height="300px";
            elem.style.opacity=1;
            elem2.style.background="rgb(153, 228, 41)";
            elem2.style.color="white";
        }
        else{
            elem.style.height="0px";
            elem.style.opacity=0;
            elem2.style.background="none";
            elem2.style.color="black";
        }
        
       
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
    function showreqcont(){
        const elem=document.getElementById("reqcont");
        
         elem.style.opacity=1;
         elem.style.scale=1;
         }
     function togglereq(){
        const elem=document.getElementById("reqcont");
         elem.style.opacity=0;
         elem.style.scale=0;
       
     }
    function changeoption(id){
       const elem=document.getElementById(id);
       elem.style.textDecoration="underline";
       elem.style.textDecorationThickness="5px";
       if(id=="paid"){
            document.getElementById('free').style.textDecoration="none";
       }
       else{
            document.getElementById('paid').style.textDecoration="none";
       }
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>
        <link href='https://fonts.googleapis.com/css?family=Comic Neue' rel='stylesheet'></link>
        </Head>
        {selects.map((select) => (
        <div className={styles.picscontainer} id="picscont">
            <button className={styles.cls} onClick={closezoompics}><ImCross/></button>
            <div className={styles.pics}>
            
                 <Image 
                src={select.pic1}
                alt={select.serial}
                id="1"
                className={styles.zoomimg}
                width={1000}
                height={1000}
                />
               
                <Image 
                src={select.pic2}
                alt={select.serial}
                id="2"
                style={{"width":"0%"}}
                className={styles.zoomimg}
                width={1000}
                height={1000}
                />

                <Image 
                src={select.pic3}
                alt={select.serial}
                id="3"
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
        <div className={styles2.reqcont} id="reqcont">
            <h2>{"Send dish requests to your favourite chef <3"}</h2>
        <button className={styles2.cls} onClick={togglereq}><ImCross/></button>
        <br/><br/>
            <textarea rows={10} cols={20}></textarea>
            <br/>
        <button className={styles2.sendbtn}>Send</button>
        </div>
        <section>
        {accs.map((acc) => (
            <div className={styles2.profcont}>
                <Image className={styles2.bgimg} src='/profilebg.webp' width={1300} height={400}/>
                <div className={styles2.pfpdiv}>
                <Image className={styles2.pfp} src='/defprofile.png' width={300} height={300}/> 
                </div>
                <h2>{acc.username}</h2>   
                <br/>
                <button className={styles2.follow} onClick={followaction} id="follow">Follow</button>
                <button className={styles2.request} onClick={showreqcont}>Request</button>
                <br/>
              <h3>{acc.name}</h3>
              <p>{acc.bio}</p>
              <br/>
              <a href='#'><BsInstagram/></a>
              <a href='#'><BsFacebook/></a>
              <a href='#'><BsYoutube/></a>
              <br/><br/>
            <div className={styles2.statcont}>
             <div className={styles2.stats}>
             <h1>Followers</h1>
             <h1>Ratings <AiFillStar/></h1>
             <h1>Post count</h1>
             </div>
             <div className={styles2.stats}>
             <h1>1112</h1>
             <h1>123</h1>
             <h1>1123</h1>
             </div>
             </div>
            </div>
            ))}
        </section>
        <section id="posts">
            <div className={styles2.optionscont}>
                <button id="paid" onClick={()=>changeoption('paid')} className={styles2.options}>&nbsp;&nbsp; Paid &nbsp;&nbsp;</button>
                <button id="free" onClick={()=>changeoption('free')} className={styles2.options}>&nbsp;&nbsp; Free &nbsp;&nbsp;</button>
            </div>
            <br/><br/>
            <button className={styles2.sortpost} id="sortpost" onClick={showsort}>SortBy <TiArrowUnsorted/></button>
            <div className={styles2.sortcont} id="sortcont">

            </div>
            <br/><br/>
        </section>
        {/* Actual posts */}
        <section className={styles.feedsection}>
        <div className={styles.row}>
            
        {posts.map((post) => (
            <div className={styles.column}>
                    
                            <div className={styles.card} id={post.serial}>
                            <div className={styles.imgdiv}>
                <Image 
                src={post.pic1}
                alt={post.serial}
                className={styles.img}
                width={1000}
                height={1000}
                />
                </div>
                <h3>{post.name}</h3>
                <h4>Rs.{post.price}</h4>
                {/* <Link href={'/profile?v=thechef'}><p className={styles.username}>@thechef</p></Link> */}
                
                {/* <button className={styles.follow} name={post.seller} id={post.serial} onClick={()=>followaction(post.serial)}>Follow</button> */}
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
    </div>
  )
}

export default profile


export async function getServerSideProps(router) {
      
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(process.env.DB_NAME);
  var collection = db.collection('users');
  const documents = await collection.find().toArray();
  collection= db.collection('posts');
  var selleraccs=db.collection('selleraccs');
  var accs;
  accs=await selleraccs.find({"username":router.query.v}).toArray();
  var posts,selects;
  if(router.query.zoompost!=null){
      selects= await collection.find({"serial":router.query.zoompost}).toArray();
  }
  else{
    selects=[];
  }
      
  // if(router.query.f!=null){
  //     if(await selleraccs.countDocuments({"following":router.query.f})==0){
  //         await selleraccs.insertOne({following:router.query.f});
  //     }
  //     else{
  //         await selleraccs.deleteMany({following:router.query.f});
  //     }
  // }
// if(router.query.search==null){
//   if(router.query.sort!=null){
//       if(router.query.sort=="mr"){
          posts= await collection.find({"seller":router.query.v}).toArray();
//      }
  //    else if(router.query.sort=="old"){
        //  posts= await collection.find().sort({"serial":1}).toArray();
   //   }
 // }
 // else{
     // posts= await collection.find().toArray();
 // }
//}
// else{
//   if(router.query.sort!=null){
//       if(router.query.sort=="mr"){
//           posts= await collection.find({"name":router.query.search}).sort({"serial":-1}).toArray();
//       }
//       else if(router.query.sort=="old"){
//           posts= await collection.find({"name":router.query.search}).sort({"serial":1}).toArray();
//       }
//   }
//   else{
//       posts= await collection.find({"name":router.query.search}).toArray();
//   }
// }
       client.close();

  return {
    props: {
      // documents: documents.map((document) => ({
      //   ...document,
      //   _id: document._id.toString(),
      // })),
      posts: posts.map((post) => ({
          ...post,
          _id: post._id.toString(),
        })),
        accs: accs.map((acc) => ({
            ...acc,
            _id: acc._id.toString(),
          })),
          selects: selects.map((select) => ({
            ...select,
            _id: select._id.toString(),
          })),
        revalidate: 1,
      },

  };
}