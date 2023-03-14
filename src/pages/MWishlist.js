import React from "react";
import { FaTrashAlt, FaShoppingBag, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function MWishlist() {
    return (
        <section className="container-fluid mbg px-5 pb-5">
            <div className="container memberpage">
                <div className="row">
                    <div>
                        <span className="mlogout">
                            <button>登出</button>
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

                    <div className="memberedit d-flex">
                        <div className="list-group d-none d-lg-block">
                            {/* 網頁版左四分類 */}
                            <Link
                                to="/MEdit"
                                className="list-group-item list-group-item-action mb-3 h3"
                            >
                                個人資料
                            </Link>
                            <Link
                                to="/MCoupon"
                                className="list-group-item  list-group-item-action mb-3 h3"
                            >
                                優惠劵
                            </Link>
                            <Link
                                to="/MHistory"
                                className="list-group-item list-group-item-action mb-3 h3"
                            >
                                訂單紀錄
                            </Link>
                            <Link
                                to="/MWishlist"
                                className="list-group-item list-group-item-action mb-3 h3"
                            >
                                我的收藏
                            </Link>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="memberinfolist d-flex h3">
                                    <li className="list-unstyled me-1">
                                        一鍵加入
                                    </li>
                                </div>
                                <table className="table minfo-editgroup orderList align-middle">
                                    <thead>
                                        <tr className="">
                                            <th className="col">加入時間</th>
                                            <th className="col">商品明細</th>
                                            <th className="col">購物車</th>
                                            <th className="col d-none d-lg-flex justify-content-center">刪除</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="ordernamber">
                                                <div>
                                                    <a href="#/">2022/10/19</a>
                                                </div>
                                            </td>
                                            <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                                                <img
                                                    className="orderimg "
                                                    alt="product"
                                                    src="./public/img/mimg/epikhigh_shoebox.jpg"
                                                />
                                                <div className="productdetail d-none d-lg-block">
                                                    EPIK HIGH Sleepless
                                                    In___________(white
                                                    vinyl)
                                                </div>
                                                <div className="productdetailprice ">
                                                    <FaDollarSign />
                                                    3840
                                                </div>
                                            </td>
                                            <td>
                                            <div  className="wishicon">
                                            <FaShoppingBag />
                                            </div>
                                                
                                            </td>
                                            <td  className="wishicon">
                                                <FaTrashAlt />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MWishlist;
