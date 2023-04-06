import React from 'react'
import Footbar from '../components/Footbar'
import styles from 'sample/styles/Notifications.module.css'
import {BsFillTrash3Fill} from "react-icons/bs";
const notifications = () => {
  return (
    <div>
      <br/><br/><br/>
      <div>
        <div className={styles.notif}>
          <div className={styles.notcolumn}>
            <p>Lorem ipsum dolor sit amet. Vel galisum omnis et minima ipsam a rerum galisum ut rerum ipsa et iste voluptas aut inventore adipisci et pariatur nihil. </p>
          </div>
          <div className={styles.delbtn}>
            <button className={styles.delete}><BsFillTrash3Fill/></button>
          </div>
        </div>
        <div className={styles.notdate}> 
        <h5>26/03/2023</h5>
        </div>
      </div>
        <Footbar/>
    </div>
  )
}

export default notifications