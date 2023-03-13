import React from 'react'
import { FaDollarSign } from "react-icons/fa"
import { Link } from 'react-router-dom';

function CheckOrderList() {
    return (
        <section className="container-fluid px-5 pb-5">
            <div className="container">
                <div className="row">
                    <div>
                        <span className="logout"><button><Link to="./MHistory">返回</Link></button></span>
                        <div className="container orderdetaillistpage">
                            <div className="row">
                                <div className="d-flex justify-content-between sm-h4 h2 listTOP">
                                    <div>訂單#123456789明細</div>
                                    <div>已完成</div>
                                </div>

                                <table className="mb-3 col-sm-1 col-lg-6">
                                    <thead className="listcontent3 ">
                                        <th colspan="2">收件人詳細資料</th>
                                    </thead>
                                    <tbody className=" listcontent2">
                                        <tr>
                                            <td>姓名:</td>
                                            <td>田買買</td>
                                        </tr>
                                        <tr>
                                            <td>電話:</td>
                                            <td>09123456789</td>
                                        </tr>
                                        <tr>
                                            <td>送貨地址:</td>
                                            <td>
                                                台北市大安區復興南路一段390號2樓201室
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody className="col-6 listcontent2">
                                        <tr>
                                            <td>訂單編號:</td>
                                            <td>#123456789</td>
                                        </tr>
                                        <tr>
                                            <td>付款方式:</td>
                                            <td>信用卡</td>
                                        </tr>
                                        <tr>
                                            <td>狀態:</td>
                                            <td>已完成</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table mb-3">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="d-none d-lg-block">產品</th>
                                            <th scope="col">名稱</th>
                                            <th scope="col">數量</th>
                                            <th scope="col">金額</th>
                                            <th scope="col">評論</th>
                                        </tr>
                                    </thead>
                                    <tbody className="orderdetaillistPRODUT">
                                        <tr>
                                            <td className="d-none d-lg-block d-md-block">
                                                <img className="orderimg "
                                                    src="./images/epikhigh_shoebox.jpg" alt="" />
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
                                            <td className="align-middle">
                                                <button className="btn-comment" type="button" ><Link to="./MComment">                                評價</Link></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>

                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>小計</td>
                                            <td className="totalprice">
                                                {FaDollarSign}3840
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>優惠劵</td>
                                            <td className="totalprice">
                                                {FaDollarSign}100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>運費</td>
                                            <td className="totalprice">
                                                {FaDollarSign}100
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td>
                                                總金額{FaDollarSign}3840
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CheckOrderList