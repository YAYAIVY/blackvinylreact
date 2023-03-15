import React from 'react'
import { FaTrashAlt, FaShoppingBag, FaDollarSign } from "react-icons/fa";

function MMWhisList() {
  return (
    <div className="container">
    <div className="row">
        <div className="memberinfolist d-flex h3">
            <li className="list-unstyled me-1">
                一鍵加入
            </li>
        </div>
        <div className='mainh'>

        <table className="table orderList align-middle">
            <thead>
                <tr className="">
                    <th className="col">加入時間</th>
                    <th className="col">商品明細</th>
                    <th className="col">購物車</th>
                    <th className="col">刪除</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ordernamber">
                        <div>
                            <a href="#/">2022/10/19</a>
                        </div>
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                        <img className="orderimg " alt="product"
                            src="/img/mimg/epikhigh_shoebox.jpg" />
                        <div className="productdetail d-none d-lg-block">
                        EPIK HIGH
                                    SleeplessIn___________(whitevinyl)
                        </div>
                        <div className="productdetailprice ">
                            <FaDollarSign />
                            3840
                        </div>
                    </td>
                    <td>
                        <div className="wishicon">
                            <FaShoppingBag />
                        </div>

                    </td>
                    <td className="wishicon">
                        <FaTrashAlt />
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</div>
  )
}

export default MMWhisList