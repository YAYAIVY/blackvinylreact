import React from "react";
import {FaTrashAlt ,FaShoppingBag} from "react-icons/fa"

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
                            <ol className="memberinfolist ms-3 mb-3">
                                <li className="list-unstyled me-5">
                                    <button className="btn-tag ">
                                        <i className="fa-solid fa-bag-shopping me-1"></i>
                                        全選加入購物車
                                    </button>
                                </li>
                                <li className="list-unstyled me-5">
                                    <button className="btn-tag">
                                        <i className="fa-regular fa-trash-can me-1"></i>
                                        全選刪除商品
                                    </button>
                                </li>
                            </ol>

                            <div className="memberhistory">
                                <div className="container-fluid">
                                    <div className="">
                                        <div className=" wishlisttitle">
                                            <div className="title col-2 ">
                                                加入時間
                                            </div>
                                            <div className="title col-6">
                                                商品明細
                                            </div>
                                            <div className="title col-2">
                                                加入購物車
                                            </div>
                                            <div className="title col-2">
                                                刪除商品
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
                                                    <i className="fa-solid fa-dollar-sign"></i>
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
                                                    <i className="fa-solid fa-dollar-sign"></i>
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
