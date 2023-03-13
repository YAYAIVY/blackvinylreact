import React from 'react'
import {FaDollarSign} from "react-icons/fa"
import { Link } from 'react-router-dom'


function MCoupon() {
  return (
    <section className="container-fluid px-5 pb-5">
        <div className="container">
            <div className="row">
                <div>
                    <span className="mlogout"><button>登出</button></span>

                    <div className="memberlistgroup-sm d-lg-none">
                    <Link to="/MEdit" className="col memberlistgroupitem">個人資料</Link>
                    <Link to="/MCoupon" className="col memberlistgroupitem lh-sm">優惠劵</Link>
                    <Link to="/MHistory" className="col memberlistgroupitem">訂單紀錄</Link>
                    <Link to="/MWishlist" className="col memberlistgroupitem">我的收藏</Link>
                    </div>
                    <div className="memberinfolist d-flex">
                        <li className="list-unstyled me-1">全部</li>
                        <li className="list-unstyled me-1">可使用</li>
                        <li className="list-unstyled me-1">已失效</li>
                        <li className="list-unstyled me-1">未領取</li>
                    </div>
                </div>

                <div className="memberedit d-flex">
                    <div className="list-group d-none d-lg-block">
                    <Link to="/MEdit" className="list-group-item list-group-item-action mb-3">個人資料</Link>
                    <Link to="/MCoupon" className="list-group-item list-group-item-action mb-3">優惠劵</Link>
                    <Link to="/MHistory" className="list-group-item list-group-item-action mb-3">訂單紀錄</Link>
                    <Link to="/MWishlist" className="list-group-item list-group-item-action mb-3">我的收藏</Link>
                    </div>
                    <div className="container">
                        <div className="row">
                            <table className="table info-editgroup orderList align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">優惠</th>
                                        <th scope="col">內容</th>
                                        <th scope="col">狀態</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="ordernamber coupon ">
                                         NT<i className="fa-solid fa-dollar-sign"></i>100
                                        </th>
                                        <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                                          <div className=" d-none d-lg-block">
                                            <div className="couponclear">畢業季好禮</div>
                                          <div>滿{FaDollarSign}3000可使用</div>
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
            </div>
        </div>
    </section>
  )
}

export default MCoupon