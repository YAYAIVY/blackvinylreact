import React from 'react'
import {FaDollarSign} from "react-icons/fa"
function MMCoupon() {
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

                <tr>
                    <td className="ordernamber coupon ">
                     NT<i className="fa-solid fa-dollar-sign"></i>100
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <div className=" d-none d-lg-block">
                        <div className="couponclear">畢業季好禮</div>
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
                
            </tbody>
        </table>
    </div>
    </div>
</div>
  )
}

export default MMCoupon