import React from 'react'
import {FaKey} from "react-icons/fa"

function MPassword() {
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
        <ol className="memberinfolist">
          <li className="list-unstyled h3 me-5"><a href="./member-edit.html">個人資訊</a></li>
          <li className="list-unstyled h3 me-5"><a href="./member-password.html">設定密碼</a></li>
        
        </ol>

        <div className="membereditPassword">
          <div className="container">
            <div className="info-editgroup">
              <div className="usereditpassword"><label for="password"><i className='fa-unlock-keyhole'><FaKey/></i></label><input
                      type="password" placeholder="輸入舊密碼"/>
              </div>

              <div className="usereditpassword"><label for="password"><i
                          className="fa-solid fa-unlock-keyhole"><FaKey/></i></label><input
                      type="password" placeholder="新密碼(至少8個字元)"/>
              </div>
              <div className="usereditpassword"><label for="password"><i
                          className="fa-solid fa-unlock-keyhole"><FaKey/></i></label><input
                      type="password" placeholder="再次輸入新密碼"/>
              </div>

              <div className="passwordeditSave ">
                  <button className="btn-success-m ">更新密碼</button>
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

export default MPassword