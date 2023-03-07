import React from 'react'


function MHistory() {
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
            <a href="/MWishlist" className="list-group-item list-group-item-action memberlistgroupitem mb-1">我的收藏</a>
          </div>

          <div className="memberEditPage">
            <ol className="memberinfolist ms-3">
              <li className="list-unstyled h3 me-5"><a href="#">全部</a></li>
              <li className="list-unstyled h3 me-5"><a href="#">配送中</a></li>
              <li className="list-unstyled h3 me-5"><a href="#">已完成/取消</a></li>
            </ol>

            <div className="memberhistory">
              <div className="container">

                <div className="row">
                  <div className=" membercoupontitle">
                    <div className="title col-2 ">訂單編號</div>
                    <div className="title col-8">內容</div>
                    <div className="title col-2">狀態</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col orderNumber">
                    <div className="col-2 ordernamber">
                        <div><a href="#">#123456789</a></div>
                    </div>


                    <div className="col-8 orderdetail">
                        <div>2022/10/19</div> 
                        <div className="orderimg">
                        <img alt="product" src="/images/epik_high__sleepless_.jpg"/>                       
                        </div>
                        <div><i className="fa-solid fa-dollar-sign"></i>3840(共三件商品)</div>
                        <div><button className="btn-success">查看</button></div>
                    </div>

                    <div className="col-2 couponstate">
                      <div>配送中</div>
                    </div>
                  </div>
                </div> 
                <div className="row done">
                  <div className="col orderNumber">
                    <div className="col-2 ordernamber">
                        <div><a href="/CheckOrderList.js">#123456789</a></div>
                    </div>


                    <div className="col-8 orderdetail">
                        <div>2022/10/19</div> 
                        <div className="orderimg">
                        <img alt="product" src="/images/epik_high__sleepless_.jpg"/>                             
                        </div>
                        <div><i className="fa-solid fa-dollar-sign"></i>3840(共三件商品)</div>
                        <div><button className="btn-success">查看</button></div>
                    </div>

                    <div className="col-2 couponstate">
                      <div>已完成</div>
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

export default MHistory