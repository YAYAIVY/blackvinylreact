import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import ML4page from "../components/ML4page";
import MMCoupon from "../components/MMCoupon";
import { COUPONLIST } from '../components/api_config';
import {FaDollarSign} from "react-icons/fa"
import axios from 'axios';
    
function MCoupon() {


const [couponlist,setCouponlist]=useState({
    //資料設定預設0
page: 0,
perPage: 10,
rows: [],
totalPages: 0,
totalRows: 0,
})



 //抓資料
const getCouponData =async(page=1)=>{
  

    // const response = await axios.get(COUPONLIST,{
    //     params:{
    //         page
    //     }
    // });
    // setCouponlist(response.couponlist)

    const r = await fetch(COUPONLIST);
    const json = await r.json();
    console.log(json);
    setCouponlist(json);

}
//刪除
// const removeItem =async (itemId=0)=>{
//     if(!(+itemId)){
//         return;
//     }
//     const response = await axios.delete(COUDELETE+'/'+ itemId);
//     console.log(response.data);
//     getCouponData()
// }






//按按紐才發送的不要放在useEffect
//一進來就要拿到資料就放在useEffect
useEffect(()=>{
//設定功能

    getCouponData();


return()=>{
//解除功能
}

},[])


    return (
    <section className="container-fluid mbg px-5 pb-5 ">
    <div className="container memberpage">
        <div className="row">
            <div>
                <span className="mlogout">
                    <button className=" mb-3 h4">登出</button>
                </span>

                <div className="memberlistgroup-sm d-lg-none">
                    {/* 手機版上四分類 */}
                    <Link
                        to="/MEdit"
                        className="col memberlistgroupitem h3"
                    >
                        個人資料
                    </Link>
                    <Link
                        to="/MCoupon"
                        className="col memberlistgroupitem h3"
                    >
                        優惠劵
                    </Link>
                    <Link
                        to="/MHistory"
                        className="col memberlistgroupitem h3"
                    >
                        訂單紀錄
                    </Link>
                    <Link
                        to="/MWishlist"
                        className="col memberlistgroupitem h3"
                    >
                        我的收藏
                    </Link>
                </div>
            </div>
            <div className="memberedit  d-flex">
            <ML4page/> 
            <MMCoupon rows={couponlist.rows}/>
            </div>
        </div>
    </div>

</section>
)
}

export default MCoupon