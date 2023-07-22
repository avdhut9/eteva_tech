import Products from "../../components/products"
import data from "../../productsblue.json"
import styles from "./productlist.module.css"
console.log(data)
export default function ProductListPage(){
    return(
        <div className={styles.main}>
         {data.map((ele)=>
         <div key={ele.id}>
            <Products {...ele}/>
         </div>
         )}
        </div>
    )
}