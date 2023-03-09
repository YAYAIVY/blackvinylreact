import React from 'react'


function MEdit() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="memberpage">
            <div className="member-list-group">

              <a href="/MEdit"
                className="memberlistgroupitem list-group-item list-group-item-action  mb-1">會員資料</a>
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
                <li className="list-unstyled h3 me-5"><a href="/MPassword">設定密碼</a></li>
                <li className="list-unstyled h3 me-5"><a href="./member-creadcard.html">信用卡資訊</a></li>
              </ol>

              <div className="memberedit">
                <div className="myCard">
                  <div className="img-warp">
                    <img src="images/vinyl131301.jpg" alt="vinyl131301" />
                  </div>
                  <h3>vinyl1313</h3>
                  <div className="memberlevel">銅牌會員</div>
                </div>
                <div className="container">
                  <div className="info-editgroup">
                    <div className="edittext"><i className="fa-solid fa-pen-to-square"></i>編輯會員資料</div>
                    <table className="useredit d-block">
                      <tbody>
                        <tr>
                          <td><label for="name">姓名</label></td>
                          <td><input type="text" id="name" /></td>
                        </tr>
                        <tr>
                          <td><label for="email">信箱</label></td>
                          <td className="d-flex">
                            <input type="email" id="email" />
                            <button className="btn-success ms-3">發送驗證信</button>
                          </td>
                        </tr>
                        <tr>
                          <td><label for="phone">手機</label></td>
                          <td><input type="tel" id="phone" /></td>
                        </tr>
                        <tr>
                          <td><label for="address">地址</label></td>
                          <td><input type="text" id="address" /></td>
                        </tr>
                        <tr>
                          <td><label for="gender">性別</label></td>
                          <td>
                            <select type="text" name="gender" id="gender">
                              <option value="男">男</option>
                              <option value="女">女</option>
                              <option value="other" selected>不透露</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td><label for="birthday">生日</label></td>
                          <td><input type="text" id="birthday" placeholder="YYYY/MM/DD" /></td>
                        </tr>
                        <tr>
                          <td><label for="sub">訂閱通知</label></td>
                          <td>
                            <input type="checkbox" id="sub" />
                            <span>訂閱電子郵件</span>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="editSave">
                            <button className="btn-success">儲存</button>
                            <button className="btn-comment">取消</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default MEdit