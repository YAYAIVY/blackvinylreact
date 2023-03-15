import React from "react";
import { FaDollarSign, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function MComment() {
    return (
        <section className="container-fluid mbg px-5 pb-5">
            <div className="container orderdetaillistpage">
                <div className=" d-flex justify-content-between  listTOP">
                    <div>訂單#123456789評價</div>
                    <div>已完成</div>
                </div>
                <div className="row">
                    <span className="mlogout">
                        <button className="btn-info h4 mb-5">
                            <Link to="./MHistory">返回</Link>
                        </button>
                    </span>
                </div>
                <div className="container">
                <div className="row">
                  <div className="col">
                  {/* <table className="table mb-3 h3">
                    <thead>
                        <tr>
                            <th className="col d-none d-md-block d-lg-block">
                                產品
                            </th>
                            <th className="col">名稱</th>
                            <th className="col">數量</th>
                            <th className="col">金額</th>
                        </tr>
                    </thead>
                    <tbody className="orderdetaillistPRODUT">
                        <tr>
                            <td className="d-none d-md-block d-lg-block ">
                            <img className="orderimg "
                                    src="/public/img/mimg/member2.jpg" alt="產品圖" />
                            </td>
                            <td className="">
                                <h5
                                    className="d-block text-truncate"
                                    style={{ maxwidth: "50px" }}
                                >
                                    EPIK HIGH
                                    SleeplessIn___________(whitevinyl)
                                </h5>
                            </td>
                            <td className="">1</td>
                            <td className="">
                                <FaDollarSign />
                                3840
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table> */}
                {/* 評論五星 */}
                <div className="start justify-content-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>
                <div className="writecomment d-lg-flex align-items-center">
                    <textarea
                        name="comment"
                        className="comment me-3 mb-3"
                        id="comment"
                        placeholder="留下您的評論"
     
                    ></textarea>
                    <div><button className="btn-success ">評價</button></div>
                    
                </div>
                  </div>
                </div>
                </div>

            </div>
        </section>
    );
}

export default MComment;
