import React from 'react'

function MCoupon() {
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <div className="memberpage">
          <div className="member-list-group">

            <a href="/MEdit"
              className="list-group-item list-group-item-action memberlistgroupitem mb-1">會員資料</a>
            <a href="/MCoupon"
              className="list-group-item list-group-item-action memberlistgroupitem mb-1">優惠劵</a>
            <a href="/MHistory"
              className="list-group-item list-group-item-action memberlistgroupitem mb-1">訂單紀錄</a>
            <a href="/MWishlist"
              className="list-group-item list-group-item-action memberlistgroupitem mb-1">我的收藏</a>
          </div>

          <div className="memberEditPage">
            <ol className="memberinfolist ms-3">
              <li className="list-unstyled h3 me-5"><a href="#">全部</a></li>
              <li className="list-unstyled h3 me-5"><a href="#">可使用</a></li>
              <li className="list-unstyled h3 me-5"><a href="#">已失效</a></li>
              <li className="list-unstyled h3 me-5"><a href="#">未領取</a></li>
            </ol>

            <div className="membereditcoupon">
              <div className="container">

                <div className="row">
                  <div className=" membercoupontitle">
                    <div className="title col-3 ">優惠</div>
                    <div className="title col-6">內容</div>
                    <div className="title col-3">狀態</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col membercoupon">
                    <div className="col-3 mcoupon">
                      <div>NT</div>
                      <div className="discount"><i className="fa-solid fa-dollar-sign"></i>100</div>
                    </div>

                    <div className="col-6 coupondetail">
                      <div>
                        <div className="couponclear">畢業季好禮</div>
                        <div>滿<i className="fa-solid fa-dollar-sign"></i>3000可使用</div>
                        <div>有效期限2023-03-29 00:00</div>
                      </div>
                      <div>
                        <div className="couponclear">Member95</div>
                        <div>優惠代碼</div>
                      </div>
                    </div>
                    <div className="col-3 couponstate">
                      <div>立即使用</div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col membercoupon ">
                    <div className="col-3 mcoupon ">
                      <div>NT</div>
                      <div className="discount"><i className="fa-solid fa-dollar-sign"></i>100</div>
                    </div>

                    <div className="col-6 coupondetail ">
                      <div>
                        <div className="couponclear">新註冊好禮</div>
                        <div>滿<i className="fa-solid fa-dollar-sign"></i>3000可使用</div>
                        <div>有效期限2022-10-19 00:00</div>
                      </div>
                      <div>
                        <div className="couponclear">Member95</div>
                        <div>優惠代碼</div>
                      </div>
                    </div>
                    <div className="col-3 couponstate">
                      <div>已失效</div>
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
  )
}

export default MCoupon