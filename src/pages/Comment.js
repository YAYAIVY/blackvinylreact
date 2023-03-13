import React from 'react'
import {FaDollarSign,FaRegStar,FaStar} from "react-icons/fa"

function Comment() {
  return (
    <section className="container-fluid px-5 pb-5">
    <div className="container">
      <div className="row">
        <div>
          <span className="logout"><button>返回</button></span>
          <div className="container orderdetaillistpage">
            <div className="row">
              <div className="d-flex justify-content-between sm-h4 h2 listTOP">
                <div>訂單#123456789明細</div>
                <div>已完成</div>
              </div>

              <table className="table mb-3">
                <thead>
                  <tr>
                    <th scope="col" className="d-none d-lg-block">產品</th>
                    <th scope="col">名稱</th>
                    <th scope="col">數量</th>
                    <th scope="col">金額</th>
                  </tr>
                </thead>
                <tbody className="orderdetaillistPRODUT">
                  <tr>
                    <td className="d-none d-lg-block d-md-block">
                      <img className="orderimg " src="./images/epikhigh_shoebox.jpg" alt="" />
                    </td>
                    <td className="align-middle">
                      <p className="d-block text-truncate" style="max-width: 50px;">
                        EPIK HIGH
                        SleeplessIn___________(whitevinyl)EPIK
                        HIGH Sleepless
                        In___________(white
                        vinyl)
                      </p>
                    </td>
                    <td className="align-middle">
                      1
                    </td>
                    <td className="align-middle">
                    {FaDollarSign}3840
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
              {/* 評論五星 */}
              <div className="start justify-content-center">
                {FaStar}
                {FaStar}
                {FaStar}
                {FaRegStar}
                {FaRegStar}
              </div>
              <div className="writecomment d-flex align-items-center">
                <textarea name="comment" className="comment me-3 mb-3" id="comment" placeholder="留下您的評論" cols="65"
                  rows="5"></textarea>
            
                  <button className="btn-success ">
                    評價
                  </button>
               
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Comment