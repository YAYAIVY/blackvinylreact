import React, { useEffect,useState }  from 'react'
import {FaDollarSign} from "react-icons/fa"
import { COUPONLIST } from '../components/api_config';

function MMCoupon({rows}) {



const [couponlist,setCouponlist]=useState({
    //資料設定預設0
page: 0,
perPage: 10,
rows: [],
totalPages: 0,
totalRows: 0,
})



 //抓資料
const getCouponData =async()=>{
    const r = await fetch(COUPONLIST);
    const json = await r.json();
    console.log(json);
    setCouponlist(json);
}

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
    <div className="container">
    <div className="row">
    <div className="memberinfolist d-flex h3">
    <li className="list-unstyled  me-1">全部</li>
    <li className="list-unstyled  me-1">可使用</li>
    <li className="list-unstyled  me-1">已失效</li>
    <li className="list-unstyled  me-1">未領取</li>
</div>
<div className='mainh'>
        <table className="table  orderList align-middle">
            <thead>
                <tr>
                    <th className="col">優惠</th>
                    <th className="col">內容</th>
                    <th className="col">狀態</th>
                </tr>
            </thead>
            <tbody>

               
            {rows.map((r)=>{
                  return(
                    <tr>
                    {r.key}
                    <td className="ordernamber coupon ">
                     NT<i className="fa-solid fa-dollar-sign"></i>{r.discount_amount}
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <div className=" d-none d-lg-block">
                        <div className="couponclear">{r.coupon_name_SID}</div>
                      <div>滿<FaDollarSign/>3000可使用</div>
                      <div>有效期限2023-03-29 00:00</div>
                      </div>
                      <div>
                        <div className="couponclear">Member95</div>
                        <div>優惠代碼</div>
                      </div>
                      
                    </td>
                    <td>立即使用</td>
                </tr>
                  )
                })} 
                
            </tbody>
        </table>
    </div>
    </div>
</div>
  )
}

export default MMCoupon