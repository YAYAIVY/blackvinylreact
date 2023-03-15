import React from 'react'
import { Link } from 'react-router-dom'
import ML4page from "../components/ML4page";
import MMCoupon from "../components/MMCoupon";
    
function MCoupon() {
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
            <MMCoupon/>
            </div>
        </div>
    </div>

</section>
  )
}

export default MCoupon