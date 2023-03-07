import React from 'react'

function CheckOrderList() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-6">
            <div className="orderdetaillistpage">
                <div className="listTOP">
                    <div>訂單#123456789明細</div>
                    <div>已完成</div>
                </div>
                <div className="boxcenter">
                    <div className="orderdetaillistInfo">
                        <div className="listtop">
                            收件人詳細資料
                        </div>
                        <div className="listContent">
                            <table className="listcontent2">
                                <tbody>
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
                                <tbody>
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
                        </div>
                    </div>

                    <div className="orderdetaillistPRODUT">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">產品</th>
                                    <th scope="col">名稱</th>
                                    <th scope="col">數量</th>
                                    <th scope="col">金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            className="orderdetaillistPRODUTimg"
                                            src="images/epikhigh_shoebox.jpg" alt='epikhigh_shoebox'
                                         />
                                    </td>
                                    <td className="align-middle">
                                        <p>
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
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        3840
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <img  className="orderdetaillistPRODUTimg" src="images/epikhigh_shoebox.jpg" alt='epikhigh_shoebox'/>
                                    </td>
                                    <td className="align-middle">
                                        <p>
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
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        3840
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <img  className="orderdetaillistPRODUTimg" src="images/epikhigh_shoebox.jpg" alt='epikhigh_shoebox'/>
                                    </td>
                                    <td className="align-middle">
                                        <p>
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
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        3840
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>

                    <div className="totalPRICE">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>小計</td>
                                    <td className="totalprice">
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        3840
                                    </td>
                                </tr>
                                <tr>
                                    <td>優惠劵</td>
                                    <td className="totalprice">
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        100
                                    </td>
                                </tr>
                                <tr>
                                    <td>運費</td>
                                    <td className="totalprice">
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        100
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td>
                                        總金額<i className="fa-solid fa-dollar-sign"></i>
                                        3840
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* <!-- 評論區 --> */}
                    <div className="comments">
                        <div className="listTOP">
                            <div>留下評論</div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">產品</th>
                                    <th scope="col">名稱</th>
                                    <th scope="col">數量</th>
                                    <th scope="col">金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    <img  className="orderdetaillistPRODUTimg" src="images/epikhigh_shoebox.jpg" alt='epikhigh_shoebox'/>
                                    </td>
                                    <td className="align-middle">
                                        <p>
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
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        3840
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* <!-- 評論五星 --> */}
                        <div className="start">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="leavecomment">
                            <textarea
                                name="comment"
                                className="comment"
                                id="comment"
                                placeholder="留下您的評論"
                                cols="70"
                                rows="5"
                            ></textarea>
                            <div>
                                <button className="btn-success">
                                    評價
                                </button>
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

export default CheckOrderList