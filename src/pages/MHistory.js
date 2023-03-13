import React from 'react'
import {FaDollarSign} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function MHistory() {
  return (
    <section className="container-fluid px-5 pb-5">
        <div className="container">
            <div className="row">
                <div>
                    <span className="logout"><button>登出</button></span>

                    <div className="memberlistgroup-sm d-lg-none">
                    <Link to="/MEdit" className="col memberlistgroupitem">個人資料</Link>
                    <Link to="/MCoupon" className="col memberlistgroupitem lh-sm">優惠劵</Link>
                    <Link to="/MHistory" className="col memberlistgroupitem">訂單紀錄</Link>
                    <Link to="/MWishlist" className="col memberlistgroupitem">我的收藏</Link>
                    </div>
                    <div className="memberinfolist d-flex">
                        <li className="list-unstyled me-1">全部</li>
                        <li className="list-unstyled me-1">配送中</li>
                        <li className="list-unstyled me-1">已完成/取消</li>
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
                                        <th scope="col">訂單編號</th>
                                        <th scope="col">內容</th>
                                        <th scope="col">狀態</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row" className="ordernamber">
                                            <div><a href="#/">#1234567</a></div>
                                        </td>
                                        <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                                            <div className="d-none d-lg-block">2022/10/19(共三件商品)</div>

                                            <img className="orderimg d-none d-lg-block" alt="product"
                                                src="./images/epik_high__sleepless_.jpg" />

                                                <div>{FaDollarSign}3840</div>                                    
                                                <button className="btn-success d-block">
                                                    <Link  to="./member-orderdetellist.html"/>查看
                                                </button>
                                        </td>
                                        <td>配送中</td>
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

export default MHistory