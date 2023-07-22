import { useParams } from "react-router-dom"
import data from "../../productsblue.json"
import { useState } from "react"
import styles from "./productdetails.module.css"
export default function ProductDetailsPage(){
    const{id}=useParams()
    let x=data.find((ele)=>ele.id==id)
    const[state,setstate]=useState(x)
    return(
        <div className={styles.main}>
        <div className={styles.img}>
            <img src={state.image}/>
        </div>
        <div className={styles.sub}>
            <h1>{state.name}</h1>
            <h3>Price : {state.price}</h3>
            <h3>Quantity : {state.qty}</h3>
            <button>Add to Cart</button>
        </div>
        </div>
    )
}