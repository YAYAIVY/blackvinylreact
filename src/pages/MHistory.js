import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function MHistory() {
    return (
        <section className="container-fluid mbg px-5 pb-5">
            <div className="container memberpage">
                <div className="row">
                    <div>
                        <span className="mlogout">
                            <button>登出</button>
                        </span>
                        <div className="memberlistgroup-sm d-lg-none">
                            {/* 手機版上四分類 */}
                            <Link
                                to="/MEdit"
                                className="col memberlistgroupitem h3"
                            >
                                個人資料
                            </Link>
                            <Link
                                to="/MCoupon"
                                className="col memberlistgroupitem h3"
                            >
                                優惠劵
                            </Link>
                            <Link
                                to="/MHistory"
                                className="col memberlistgroupitem h3"
                            >
                                訂單紀錄
                            </Link>
                            <Link
                                to="/MWishlist"
                                className="col memberlistgroupitem h3"
                            >
                                我的收藏
                            </Link>
                        </div>
                    </div>

                    <div className="memberedit d-flex">
                        <div className="list-group d-none d-lg-block">
                            {/* 網頁版左四分類 */}
                            <Link
                                to="/MEdit"
                                className="list-group-item list-group-item-action mb-3 h3"
                            >
                                個人資料
                            </Link>
                            <Link
                                to="/MCoupon"
                                className="list-group-item  list-group-item-action mb-3 h3"
                            >
                                優惠劵
                            </Link>
                            <Link
                                to="/MHistory"
                                className="list-group-item list-group-item-action mb-3 h3"
                            >
                                訂單紀錄
                            </Link>
                            <Link
                                to="/MWishlist"
                                className="list-group-item list-group-item-action mb-3 h3"
                            >
                                我的收藏
                            </Link>
                        </div>
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

                                <table className="table minfo-editgroup orderList align-middle">
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

                                                <img
                                                    className="orderimg d-none d-lg-block"
                                                    alt="product"
                                                    src="public/img/mimg/epikhigh_shoebox.jpg"
                                                />

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
                </div>
            </div>
        </section>
    );
}

export default MHistory;
