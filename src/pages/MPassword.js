import React from 'react'
import { FaEdit, FaKey } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function MEdit() {

  return (
    <section className="container-fluid mbg px-5 pb-5">
      <div className="container memberpage">
        <div className="row">
          <div>
            <span className="mlogout"><button className=" mb-3 h4">登出</button></span>
            <div className="memberlistgroup-sm d-lg-none">
                        {/* 手機版上四分類 */}
                            <Link to="/MEdit" className="col memberlistgroupitem h3">個人資料</Link>
                            <Link to="/MCoupon" className="col memberlistgroupitem h3">優惠劵</Link>
                            <Link to="/MHistory" className="col memberlistgroupitem h3">訂單紀錄</Link>
                            <Link to="/MWishlist" className="col memberlistgroupitem h3">我的收藏</Link>
                        </div>
          </div>

          <div className="memberedit  d-flex">
          <div className="list-group d-none d-lg-block">
                    {/* 網頁版左四分類 */}
              <Link to="/MEdit" className="list-group-item list-group-item-action mb-3 h3">個人資料</Link>
              <Link to="/MCoupon" className="list-group-item  list-group-item-action mb-3 h3">優惠劵</Link>
              <Link to="/MHistory" className="list-group-item list-group-item-action mb-3 h3">訂單紀錄</Link>
              <Link to="/MWishlist" className="list-group-item list-group-item-action mb-3 h3">我的收藏</Link>
            </div>
            <div className="container ">
              <div className="row">

                <div className="memberinfolist h3">
                  <Link to="/MEdit" className="me-3 mb-3">編輯資料</Link>
                  <Link to="/MPassword" className="me-3 mb-3 ">設定密碼</Link>
                </div>
                <form className=" minfo-editgroup justify-content-center">
                  <div className='h6'>
                    <FaEdit />編輯密碼
                  </div>
                  <div className="usereditpassword d-flex justify-content-center mb-3 ">
                    <label for="password"><FaKey /></label>
                    <input
                      type="password"
                      placeholder="輸入舊密碼"
                    />
                  </div>

                  <div className="usereditpassword d-flex justify-content-center mb-3">
                    <label for="password"><FaKey /></label>
                    <input
                      type="password"
                      placeholder="新密碼(至少8個字元)"
                    />
                  </div>
                  <div className="usereditpassword justify-content-center d-flex mb-6">
                    <label for="password"><FaKey /></label>
                    <input
                      type="password"
                      placeholder="再次輸入新密碼"
                    />
                  </div>

                  <div className="passwordeditSave d-flex justify-content-center">
                    <button className="btn-success   mb-3">
                      更新密碼
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MEdit