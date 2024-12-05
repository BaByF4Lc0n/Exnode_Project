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
// Import  pages
import login_page from'../loginPage/login.jsx';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Analysis from './pages/Analysis';
import List from './pages/Listings';
import Contact from './pages/Contact';
import News from './pages/News';
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
        <Router>
        <div className='navigation'>
          <div className='container-navigation'>
            <div className='sub-container-navigation'>
              <div className='container-logo-navigation'>
                <img src={image_logo_navigation} alt='logo-inside' id='logo_exnode-navigationbar'></img>
              </div>
              <ul className='menubar'>
              <li className="item-navigation">
                <Link to="/">หน้าแรก</Link>
              </li>
              <li className="item-navigation">
                <Link to="/transactions">ธุรกรรม</Link>
              </li>
              <li className="item-navigation">
                <Link to="/analysis">วิเคราะห์</Link>
              </li>
              <li className="item-navigation">
                <Link to="/listings">รายการ</Link>
              </li>
              <li className="item-navigation">
                <Link to="/contact">ติดต่อ</Link>
              </li>
              <li className="item-navigation">
                <Link to="/news">ข่าวสาร</Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
        </Router>
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
                      <a href='#'><div className='buttonDownload' alt='playstore'><img src={google_play} className='imageDownload'></img></div></a>
                      <span className='space'></span>
                      {/* AppStoreDownload */}
                      <a href='#'><div className='buttonDownload' alt='playstore'><img src={app_store} className='imageDownload'></img></div></a>
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
              <img src={mobile_anaylisePage} alt='phone_insert' id='phone_insert' className='hidden'></img>
            </div>
            <div className='container_applicationIcon'>
              <img src={IconApplication} alt='IconApplication' id='IconApplication' className='hidden'></img>
            </div>
          </div>
          </div>
        </div>
      </section>
      </div>
      {/* end-inside */}
      </div>
    </div>
  )
}


export default Page_home;
