import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-row">
            <div className="footer-col">
                <label className="footerlogo"><Link to="/index.html"><img src="./img/logo.svg" alt="黑碟" /></Link></label>
              </div>
        <div className="footer-col">
          <h3>關於我們</h3>
          <ul>
          <li><Link to="/">人才招募</Link></li>
          <li><Link to="/">聯絡我們</Link></li>
          <li><Link to="/">服務條款</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>顧客權益</h3>
          <ul>
          <li><Link to="/">隱私權聲明</Link></li>
          <li><Link to="/">防詐騙宣導</Link></li>
          <li><Link to="/">退換貨說明</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>售後服務</h3>
          <ul>
          <li><Link to="/">產品列表</Link></li>
          <li><Link to="/">商品專櫃</Link></li>
          <li><Link to="/">常見Q&A</Link></li>
          </ul>
        </div>
        <div className="footer-col">
            <h3>企業合作</h3>
            <ul>
            <li><Link to="/">媒體連繫</Link></li>
            <li><Link to="/">企業採購</Link></li>
            <li><Link to="/">招商專區</Link></li>
            </ul>
          </div>
        <div className="footer-col">
          <h3>關注我們</h3>
          <ul className="footer-ul">
          <li><Link to="/"><FaFacebook/></Link></li>
          <li><Link to="/"><FaInstagram/></Link></li>
          <li><Link to="/"><FaLine/></Link></li>
          </ul>
        </div>
        </div>
        <div className="footer-col3">
        <p>Copyright ©2023 BLACK RECORD. All Rights Reserved</p>
      </div>
      </div>
      
    </footer>
    )
}

export default Footer;