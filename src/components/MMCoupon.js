import {FaDollarSign} from "react-icons/fa"

function MMCoupon({rows}) {
  return (
    <div className="container">
    <div className="row">
    <div className="memberinfolist d-flex h3">
    <li className="list-unstyled  me-1">全部</li>
    <li className="list-unstyled  me-1">可使用</li>
    <li className="list-unstyled  me-1">已失效</li>
    <li className="list-unstyled  me-1">未領取</li>
</div>
<div className='mainh'>
        <table className="table  orderList align-middle">
            <thead>
                <tr>
                    <th className="col">優惠</th>
                    <th className="col">內容</th>
                    <th className="col">狀態</th>
                </tr>
            </thead>
            <tbody>
            {rows.map((r)=>{
                  return(
                    <tr key={r.sid}>
                    <td className="ordernamber coupon h2">
                    NT<i className="fa-solid fa-dollar-sign"></i>{r.discount_amount}
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <div className=" d-none d-lg-block">
                        <div className="couponclear">{r.coupon_name_SID}</div>
                      {/* <div>滿<FaDollarSign/>3000可使用</div> */}
                      <div>有效期限2023-03-29</div>
                      </div>
                      <div>
                        <div className="couponclear h2">Member95</div>
                        <div>複製優惠碼</div>
                      </div>
                    </td>
                    <td>立即使用</td>
                </tr>
                  )
                })} 
                
            </tbody>
        </table>
    </div>
    </div>
</div>
  )
}

export default MMCoupon