import React from "react";
import {FaTrashAlt ,FaShoppingBag,FaDollarSign} from "react-icons/fa"

function MWishlist() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="memberpage">
                        <div className="member-list-group">
                            <a
                                href="/MEdit"
                                className="list-group-item list-group-item-action memberlistgroupitem mb-1"
                            >
                                會員資料
                            </a>
                            <a
                                href="/MCoupon"
                                className="list-group-item list-group-item-action memberlistgroupitem mb-1"
                            >
                                優惠劵
                            </a>
                            <a
                                href="/MHistory"
                                className="list-group-item list-group-item-action memberlistgroupitem mb-1"
                            >
                                訂單紀錄
                            </a>
                            <a
                                href="/MWishlist"
                                className="list-group-item list-group-item-action memberlistgroupitem mb-1"
                            >
                                我的收藏
                            </a>
                        </div>

                        <div className="memberEditPage">
                        <ol className="memberinfolist">
                <li className="list-unstyled h3 me-5"><a href="#/">全選加入</a></li>
                <li className="list-unstyled h3 me-5"><a href="#/">全選刪除</a></li>
        
              </ol>

                            <div className="memberhistory">
                                <div className="">
                                    <div className="">
                                        <div className=" wishlisttitle">
                                            <div className="title col-2 ">
                                                加入時間
                                            </div>
                                            <div className="title col-6">
                                                商品明細
                                            </div>
                                            <div className="title col-2">
                                                購買
                                            </div>
                                            <div className="title col-2">
                                                刪除
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="col wishList">
                                            <div className="col-2 wishlist">
                                                <div>2022/10/19</div>
                                            </div>

                                            <div className="col-6 wishlistdetail">
                                                <div className="orderimg">
                                                    <a href="#/">
                                                        <img
                                                            alt="product"
                                                            src="./images/epik_high__sleepless_.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="productdetail">
                                                    EPIK HIGH Sleepless
                                                    In___________(white
                                                    vinyl)EPIK HIGH Sleepless
                                                    In___________(white vinyl)
                                                </div>
                                                <div className="productdetailprice">
                                                    <i className="fa-solid fa-dollar-sign"><FaDollarSign/></i>
                                                    3840
                                                </div>
                                            </div>
                                            <div className="col-2 wishicon">
                                                <div>
                                                   <FaShoppingBag/>
                                                </div>
                                            </div>
                                            <div className="col-2 wishicon">
                                                <div>
                                                <FaTrashAlt/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="col wishList">
                                            <div className="col-2 wishlist">
                                                <div>2022/10/19</div>
                                            </div>
                                            <div className="col-6 wishlistdetail">
                                                <div className="orderimg">
                                                    <a href="">
                                                        <img
                                                            alt="product"
                                                            src="./images/epik_high__sleepless_.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="productdetail">
                                                    EPIK HIGH Sleepless
                                                    In___________(white
                                                    vinyl)EPIK HIGH Sleepless
                                                    In___________(white vinyl)
                                                </div>
                                                <div className="productdetailprice">
                                                    <i className="fa-solid fa-dollar-sign"><FaDollarSign/></i>
                                                    3840
                                                </div>
                                            </div>

                                            <div className="col-2 wishicon">
                                                <div>
                                                   <FaShoppingBag/>
                                                </div>
                                            </div>
                                            <div className="col-2 wishicon">
                                                <div>
                                                <FaTrashAlt/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MWishlist;
