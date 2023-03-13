import React from "react";
import { FaKey, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function MPassword() {
  return (
    <section className="container-fluid px-5 pb-5">
      <div className="container">
        <div className="row">
          <div>
            <span className="logout">
              <button>登出</button>
            </span>

            <div className="memberlistgroup-sm d-lg-none">
              <Link
                to="/MEdit"
                className="col memberlistgroupitem"
              >
                個人資料
              </Link>
              <Link
                to="/MCoupon"
                className="col memberlistgroupitem lh-sm"
              >
                優惠劵
              </Link>
              <Link
                to="/MHistory"
                className="col memberlistgroupitem"
              >
                訂單紀錄
              </Link>
              <Link
                to="/MWishlist"
                className="col memberlistgroupitem"
              >
                我的收藏
              </Link>
            </div>
            <div className="memberinfolist">
              <Link to="/MEdit">編輯資料</Link>
              <Link to="/MPassword">設定密碼</Link>
            </div>
          </div>

          <div className="memberedit d-flex">
            <div className="list-group d-none d-lg-block">
              <Link
                to="/MEdit"
                className="list-group-item list-group-item-action mb-3"
              >
                個人資料
              </Link>
              <Link
                to="/MCoupon"
                className="list-group-item list-group-item-action mb-3"
              >
                優惠劵
              </Link>
              <Link
                to="/MHistory"
                className="list-group-item list-group-item-action mb-3"
              >
                訂單紀錄
              </Link>
              <Link
                to="/MWishlist"
                className="list-group-item list-group-item-action mb-3"
              >
                我的收藏
              </Link>
            </div>
            <div className="container">
              <div className="row">
                <form className="d-lg-flex info-editgroup justify-content-center">
                  <div>
                    <p>{FaEdit}編輯密碼</p>
                  </div>
                  <div className="usereditpassword d-flex mb-3 ">
                    <label for="password">{FaKey}</label>
                    <input
                      type="password"
                      placeholder="輸入舊密碼"
                    />
                  </div>

                  <div className="usereditpassword d-flex mb-3">
                    <label for="password">{FaKey}</label>
                    <input
                      type="password"
                      placeholder="新密碼(至少8個字元)"
                    />
                  </div>
                  <div className="usereditpassword d-flex mb-6">
                    <label for="password">{FaKey}</label>
                    <input
                      type="password"
                      placeholder="再次輸入新密碼"
                    />
                  </div>

                  <div className="passwordeditSave ">
                    <button className="btn-success mb-3">
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
  );
}

export default MPassword;
