import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MMEdit() {
  return (
    <div className="container text-nowrap ">
    <div className="row">

 <div className="memberinfolist d-flex h3">
    <li className="list-unstyled  me-1">編輯資料</li>
    <li className="list-unstyled  me-1">設定密碼</li>
 </div>

        <form className="d-lg-flex minfo-editgroup justify-content-evenly" >
            <div className="px-4 mmyCard">
                <div className="mimg-warp ">
                    <img src='/img/mimg/vinyl131301.jpg' alt="" />
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
  )
}

export default MMEdit