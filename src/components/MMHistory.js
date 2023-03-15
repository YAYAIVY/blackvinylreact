import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function MMHistory() {
  return (
    <div className="container">
    <div className="row">
        <div className="memberinfolist text-nowrap h3 d-flex">
            <li className="list-unstyled me-1">全部</li>
            <li className="list-unstyled me-1">
                配送中
            </li>
            <li className="list-unstyled me-1">
                已完成/取消
            </li>
        </div>
        <div className="mainh">
        <table className="table orderList justify-content:start; align-middle">
            <thead>
                <tr>
                    <th className="col">訂單編號</th>
                    <th className="col">內容</th>
                    <th className="col">狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ordernamber">
                        <div>
                            <Link to="/MCheckOrderList">#1234567</Link>
                        </div>
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                        <div className="d-none d-lg-block">
                            2022/10/19(共三件商品)
                        </div>

                        <img className="orderimg d-none d-lg-block" alt="product"
                            src="/img/mimg/epikhigh_shoebox.jpg" />

                        <div>
                            <FaDollarSign />
                            3840
                        </div>
                        <button className="btn-success">
                            <Link to="/MCheckOrderList">
                            查看</Link>
                        </button>
                    </td>
                    <td>配送中</td>
                </tr>
            </tbody>
        </table>
        </div>
       
    </div>
</div>
  )
}

export default MMHistory