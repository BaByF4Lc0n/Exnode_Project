import React, { useState } from 'react';
import image_logo from '../assets/Logo_exnode.png';
import image_logo_navigation from '../assets/logo_exnode_No-tect.png';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
import '../assets/Fonts/fonts.css';
import '../TransactionPage/transactionPage.css';
import riseUp from '..//assets/riseUp.png';
import ToDown from '..//assets/ToDown.png';
import IconApplication from '../assets/LogoApplicationIcon.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import mobile_pageMain from '../assets/mobile_img/mobiile_pageMain_1.png';
import graph_img_1 from '../assets/graph_img_1.png';
import graph_img_2 from '../assets/graph_img_2.png';
import mobile_transaction from '../assets/mobile_img/mobile_transaction_.png';
function Trabnsaction() {
  {/* scripts Animation */}
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  return (
   // outside
   <div className='container-outside'>
   <div className='container'>
    <div className='container-logo-outside'>
      <h1 id='heading_name-outside'>EXNODE</h1>
      <div className='con-logo'>
        <img src={image_logo} alt='logo-outside' id='logo_exnode-outside'></img>
      </div>
    </div>
    {/* inside */}
    <div className='body-section-layer2'>
      {/* navigationbar-section */}
      {/* แก้navbarให้สามารถใช้ได้ */}
      <div className='navigation'>
        <div className='container-navigation'>
          <div className='sub-container-navigation'>
            <div className='container-logo-navigation'>
              <img src={image_logo_navigation} alt='logo-inside' id='logo_exnode-navigationbar'></img>
            </div>
            <ul className='menubar'>
            <li className="item-navigation">
              <a href='/indexPage/Page_home.jsx'>หน้าแรก</a>
            </li>
            <li className="item-navigation">
              <a href='/TransactionPage/Trabnsaction.jsx'>ธุรกรรม</a>
            </li>
            <li className="item-navigation">
              <a href='../AnalystPage/analyst.jsx'>วิเคราะห์</a>
            </li>
            <li className="item-navigation">
              <a href='../SchedulePage/Schedule.jsx'>รายการ</a>
            </li>
            <li className="item-navigation">
              <a href='../ContactPage/Contact.jsx'>ติดต่อ</a>
            </li>
            <li className="item-navigation">
              <a href='../NewsPage/News.jsx'>ข่าวสาร</a>
            </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end-navigation-section */}
      {/* section_2 */}
      <section id='section_2'>
        <center>
        <div className='container-section_2'>
          <div className='main-container-section_2'>
            <div className='layout_section_2'>
            <center>
            <div className='container-heading-section_2'>
              <div className='heading-section_2_sub_1'>
                <div className='container-totalBalance'>
                  <img src={riseUp} className='icon-totalBalance'></img>
                  <h3 className='text-totalBalance'>Total Balance</h3>
                </div>
                <div className='count-totalBalance'>
                  <strong>0 THB</strong>
                </div>
              </div> 
              <div className='spacer'>
              </div> 
              <div className='heading-section_2_sub_1'>
                <div className='container-totalBalance'>
                  <img src={ToDown} className='icon-totalBalance'></img>
                  <h3 className='text-totalBalance'>Total Balance</h3>
                </div>
                <div className='count-totalBalance'>
                  <strong>0 THB</strong>
                </div>
              </div>  
            </div>  
            <div className='container_buttonCalculate'>
              <a href="#"><div className='buttonCalculate'>
                <p id='text-buttonCalculate'>เริ่มคำนวณ</p>
              </div>
              </a>
            </div>
            </center>
            </div>
          </div>
        </div>
        <h1 id='heading_name-outside' className='button_list_transaction'>EXNODE</h1>
        </center>
      </section>
     {/* footer */}
     <footer>
      <div className='container-footer'>
        <div className='sub-container-footer'>
          <div className='layOut_footer'>
            <div className='container-logo-footer F_padding'>
              <div className='sub-container_logo_footer'>
                <img src={image_logo_navigation} className='image-logo-footer'></img>
              </div>
              <div className='container-text-footer'>
                <p id='text-footer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quo quam laborum accusamus omnis fuga esse praesentium </p>
              </div>
            </div>
            <div className='List-exnode F_padding'>
              <div childrenName='container-title-exnode'>
                <h2 id='title-footer'>EXNODE</h2>
              </div>
              <div childrenName='container-list-exnode'>
                <ul className='Menu_list'>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>หน้าแรก</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>ธุรกรรม</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>วิเคราะห์</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>รายการ</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>ติดต่อ</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>ข่าวสาร</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='container_company F_padding'>
              <div childrenName='container-title-exnode'>
                <h2 id='title-footer'>บริษัท</h2>
              </div>
              <ul className='Menu_list'>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>บัญชี</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>ผู้พัฒนา</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>เกี่ยวกับบริษัทเรา</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>นโยบาย</a>
                  </li>
                </ul>
              </div>     
              <div className='container_media F_padding'>
              <div childrenName='container-title-exnode'>
                <h2 id='title-footer'>บทความ</h2>
              </div>
              <ul className='Menu_list'>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>ความรู้ภาษี</a>
                  </li>
                  <li>
                    <a href='/TransactionPage/Trabnsaction.jsx'>ข่าวสาร</a>
                  </li>
                </ul>
              </div>                   
          </div>
        </div>
      </div>
    </footer>
    </div>
    {/* end-inside */}
    </div>
  </div>
  )
}
export default Trabnsaction
