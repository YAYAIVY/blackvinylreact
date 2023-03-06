import React from 'react'

function MEdit() {
  return (
<div className="memberEditPage">
      <ol className="memberinfolist">
        <li className="list-unstyled h3 me-5">
          <a href="./member-edit.html">個人資訊</a>
        </li>
        <li className="list-unstyled h3 me-5">
          <a href="./member-password.html">設定密碼</a>
        </li>
        <li className="list-unstyled h3 me-5">
          <a href="./member-creadcard.html">信用卡資訊</a>
        </li>
      </ol>

      <div className="memberedit">
        <div className="myCard">
          <div className="img-warp">
            <img src="./images/vinyl131301.jpg" alt="vinyl131301" />
          </div>
          <h3>vinyl1313</h3>
          <div className="memberlevel">銅牌會員</div>
        </div>
        <div className="container">
          <div className="info-editgroup">
            <div className="edittext">
              <i className="fa-solid fa-pen-to-square"></i>編輯會員資料
            </div>
            <form>
              <div className="useredit">
                <label htmlFor="name">姓名</label>
                <input type="text" />
              </div>
              <div className="useredit">
                <label htmlFor="email">信箱</label>
                <input type="email" />
                <button className="btn-success ms-3">發送驗證信</button>
              </div>
              <div className="useredit">
                <label htmlFor="phone">手機</label>
                <input type="tel" />
              </div>
              <div className="useredit">
                <label htmlFor="address">地址</label>
                <input type="text" />
              </div>
              <div className="useredit">
                <label htmlFor="gender">性別</label>
                <select type="text" name="gender">
                <option value="請選擇">請選擇</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                  <option value="other">不透露</option>
                </select>
              </div>
              <div className="useredit">
                <label htmlFor="birthday">生日</label>
                <input type="text" placeholder="YYYY/MM/DD" />
              </div>
              <div className="useredit">
                <label htmlFor="sub">訂閱通知</label>
                <input type="checkbox" />
                <span>訂閱電子郵件</span>
              </div>
              <div className="editSave ">
                <button className="btn-success ">儲存</button>
                <button className="btn-comment ">取消</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MEdit