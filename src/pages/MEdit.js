import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MEdit() {

    return (
        <section className="container-fluid mbg px-5 pb-5 ">
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
                        <div className="container text-nowrap ">
                            <div className="row">

                            <div className="memberinfolist h3">
                  <Link to="/MEdit" className="me-3 mb-3 ">編輯資料</Link>
                  <Link to="/MPassword" className="me-3 mb-3 ">設定密碼</Link>
                </div>

                                <form className="d-lg-flex minfo-editgroup justify-content-evenly" >
                                    <div className="px-4 mmyCard">
                                        <div className="mimg-warp ">
                                            <img src='./public/img/mimg/vinyl1313' alt="" />
                                        </div>
                                        <div className=" justify-sm-start ">
                                            <h3>田買買</h3>
                                            <span className="h6 memberlevel">會員等級</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='h6'>
                                            <FaEdit />編輯會員資料
                                        </div>
                                        <div className="mb-3 d-lg-flex">
                                            <label htmlFor="name" className="form-label">姓名</label>
                                            <input type="name" className="form-control" id="name" />
                                        </div>
                                        <div className="mb-3 d-lg-flex">
                                            <label htmlFor="exampleInputEmail1" className="form-label">信箱</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 d-lg-flex">
                                            <label htmlFor="tel" className="form-label">手機</label>
                                            <input type="tel" className="form-control" id="tel" />
                                        </div>
                                        <div className="mb-3 d-lg-flex">
                                            <label htmlFor="tel" className="form-label">地址</label>
                                            <input type="tel" className="form-control" id="tel" />
                                        </div>
                                        <div className="mb-3 d-lg-flex">
                                            <label htmlFor="tel" className="form-label">性別</label>
                                            <select id="gender" name="gender">
                                                <option value="男">男</option>
                                                <option value="女">女</option>
                                                <option value="other" selected>不透露</option>
                                            </select>

                                        </div>
                                        <div className="mb-3 d-lg-flex">
                                            <label htmlFor="day" className="form-label">生日</label>
                                            <input type="day" className="form-control" id="day" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <label className="form-check-label" htmlFor="exampleCheck1">訂閱通知</label>
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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