import React from 'react'
import styles from '../CSS_Modules/List.module.css'
type List_Params = {
  List_Text?: string; // This Parameter's passing is optional
}
function List(props : List_Params){
  return <div className={styles.Final_List}>{props.List_Text}</div>
}

export default List
