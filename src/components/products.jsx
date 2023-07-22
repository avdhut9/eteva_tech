import { Link } from "react-router-dom"
import styles from "./product.module.css"

export default function Products({id,name,image,price,quantity}){
    return(
       <Link to={`${id}`} style={{textDecoration:"none"}}>
        <div className={styles.product} >
       <img src={image}/>
        <h3>{name}</h3>
        <h3>Price : {price}</h3>
        </div></Link>
    )
}