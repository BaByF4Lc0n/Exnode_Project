import React, { useState } from 'react'
import './Page_home.css'
import image_logo from '../assets/Logo_exnode.png';
import image_logo_navigation from '../assets/logo_exnode_No-tect.png';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
import '../assets/Fonts/fonts.css';
import IconApplication from '../assets/LogoApplicationIcon.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import mobile_pageMain from '../assets/mobile_img/mobiile_pageMain_1.png';
import graph_img_1 from '../assets/graph_img_1.png';
import graph_img_2 from '../assets/graph_img_2.png';
import mobile_transaction from '../assets/mobile_img/mobile_transaction_.png';
// navigationbar
import navigationbar from '../NavigationBar/navbar.jsx';
// Import  pages
import login_page from'../loginPage/login.jsx';
import Home from '../indexPage/Page_home.jsx';
import Transactions from '../TransactionPage/Trabnsaction.jsx';
import Analysis from '../AnalystPage/analyst.jsx';
import Schedule from '../SchedulePage/Schedule.jsx';
import Contact from '../ContactPage/Contact.jsx';
import News from '../NewsPage/News.jsx';
function  Page_home(){
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
        <div className='container-banner'>
        <div className='banner'>
          <div className='container-heading'>
            <div  className='container-heading-exnode'>
                <h1 id='heading-exnode'>APP จัดการธุรกรรมเกี่ยวกับภาษี</h1>
                <p id='paragraph-exnode'>แอป EXNODE คำนวณภาษีเงินได้บุคคลธรรมดา วิเคราะห์ค่าใช้จ่ายได้เงินคืนภาษีสูงสุด</p>
                <div className='container-downloadSection'>
                    <h2 id='heading-freedownload'>ดาวน์โหลดฟรี</h2>
                    <div className='container-buttonDownload'>
                      {/* playStoreDownload */}
                      <a href='https://play.google.com/store/apps?hl=th' target='_blank'><div className='buttonDownload' alt='playstore'><img src={google_play} className='imageDownload'></img></div></a>
                      <span className='space'></span>
                      {/* AppStoreDownload */}
                      <a href='https://apps.apple.com/th/app/apple-store/id375380948?l=th' target='_blank'><div className='buttonDownload' alt='playstore'><img src={app_store} className='imageDownload'></img></div></a>
                    </div>
                </div>
            </div>
          </div>
            <div className='image_banner_icon'>
              <div className='phone'>
                <img src={mobile_anaylisePage} alt='Mobile_image' id='phone_imageBanner'></img>
                <img src={macbook} alt='MacbookImgae' id='Macbook_image'></img>
              </div>
            </div>
        </div>
      </div>
      <section id='insertToProduct'>
        <div className='container-insert'>
          <div className='sub-container-insert'>
            <div className='large-heading'>
              <h1 id='heading-insert'className='hidden'>APPLICATION จัดการภาษี & วิเคราะห์การใช้จ่าย</h1>
            </div>
            <div className='container-inside-insert'>
            <div className='container-sub-heading'>
              <h2 id='sub-heading-insert' className='hidden'>เพียงปลายนิ้ว</h2>
              <p id='text-detail-insert' className='hidden'>คุณก็จะสามารถจัดการระบบภาษีในชีวิต
ประจำวันและยังสามารถช่วยวิเคราะห์คำนวณการจัดภาษีต่างๆได้โดยเพียงแค่
ปลายนิ้ว</p>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_pageMain} alt='phone_insert' id='phone_insert' className='hidden'></img>
            </div>
            <div className='container_applicationIcon'>
              <img src={IconApplication} alt='IconApplication' id='IconApplication' className='hidden'></img>
            </div>
          </div>
          </div>
        </div>
        {/* section_2 */}
        <div className='container-insert_2'>
          <div className='conatainer-sub-insert_2'>
          <div className='sub-container-insert'>
            <div className='container-inside-insert'>
            <div className='container-graph_image_section_2'>
              <img src={graph_img_1} alt='graph_image_2' id='graph_image_1' className='hidden imageGraph graphImage_1'></img>
              <br></br>
              <img src={graph_img_2} alt='graph_image_2' id='graph_image_2' className='hidden imageGraph graphImage_2'></img>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_anaylisePage} alt='phone_insert' id='phone_insert' className='hidden'></img>
            </div>
            <div className='container_applicationIcon hidden'>
              <p id='text-detail-insert_2' className='show'>สามารถแสดงกราฟออกมาเป็น
              กิจกรรม รายวัน รายสัปดาห์ รายเดือน รายปี</p>
            </div>
          </div>
          </div>
          </div>
        </div>
        {/* section_3 */}
        <div className='container-insert_3'>
          <div className='conatainer-sub-insert_2'>
          <div className='sub-container-insert'>
            <div className='container-inside-insert'>
            <div className='container-detail_section_3'>
              <h1 id='heading_section_3' className='hidden'>รายรับรายจ่ายรายวัน</h1>
              <br></br>
              <p id='text-detail-insert_3' className='hidden'>แสดงผลการรายรับรายจ่าย พร้อมการคำนวณค่าภาษีที่ต้องจ่าย</p>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_transaction} alt='phone_insert' id='phone_insert' className='show'></img>
            </div>
            <div className='container_applicationIcon show'>
              {/* nothing is space side */}
            </div>
          </div>
          </div>
          </div>
        </div>
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


export default Page_home;
