import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {Link} from'react-router-dom'


function MEdit() {

  const genderoption =[
    { value: '男性', label: '男性' },
    { value: '女性', label: '女性' },
    { value: '不透露', label: '不透露' }
  ];


  return (
    <section className="container-fluid px-5 pb-5">
    <div className="container memberpage">
        <div className="row">
            <div>
                <span className="logout"><button>登出</button></span>

                <div className="memberlistgroup-sm d-lg-none">
                    <Link to="/MEdit" className="col memberlistgroupitem">個人資料</Link>
                    <Link to="/MCoupon" className="col memberlistgroupitem lh-sm">優惠劵</Link>
                    <Link to="/MHistory" className="col memberlistgroupitem">訂單紀錄</Link>
                    <Link to="/MWishlist" className="col memberlistgroupitem">我的收藏</Link>
                </div>
                <div className="memberinfolist">
                    <Link to="/MEdit">編輯資料</Link>
                    <Link to="/MPassword">設定密碼</Link>
                </div>
            </div>

            <div className="memberedit d-flex">
                <div className="list-group d-none d-lg-block">
                    <Link to="/MEdit" className="list-group-item list-group-item-action mb-3">個人資料</Link>
                    <Link to="/MCoupon" className="list-group-item list-group-item-action mb-3">優惠劵</Link>
                    <Link to="/MHistory" className="list-group-item list-group-item-action mb-3">訂單紀錄</Link>
                    <Link to="/MWishlist" className="list-group-item list-group-item-action mb-3">我的收藏</Link>
                </div>
                <div className="container ">
                    <div className="row">
                        <form className="d-lg-flex info-editgroup justify-content-center">
                            <div className="px-4  myCard">
                                <div className="img-warp">
                                    <img src="./images/vinyl131301.jpg" alt="" className="" />
                                </div>
                                <div className="justify-content-sm-start">
                                    <h5>會員名稱</h5>
                                    <span className="memberlevel">會員等級</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>{FaEdit}編輯會員資料</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">姓名</label>
                                    <input type="name" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">信箱</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">手機</label>
                                    <input type="tel" className="form-control" id="tel" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">地址</label>
                                    <input type="tel" className="form-control" id="tel" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">性別</label>
                                    <select option={genderoption} id="gender" name="gender">
                                        <option value="男">男</option>
                                        <option value="女">女</option>
                                        <option value="other" selected>不透露</option>
                                    </select>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="day" className="form-label">生日</label>
                                    <input type="day" className="form-control" id="day" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">訂閱通知</label>
                                </div>
                                <button type="submit" className="btn-success">
                                    送出
                                </button>
                                <button type="" className="btn-comment mb-3">
                                    取消
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