import { Route, Routes } from "react-router-dom";
import ProductListPage from "../pages/productlist/productslist";
import ProductDetailsPage from "../pages/productdetails/productsdetailspage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ProductListPage/>}/>
            <Route path="/:id" element={<ProductDetailsPage/>}/>
        </Routes>
    )
}