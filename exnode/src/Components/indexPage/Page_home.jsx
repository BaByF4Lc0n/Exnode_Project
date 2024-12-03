import React, { useState } from 'react'
import './Page_home.css'
import image_logo from '../assets/Logo_exnode.png';
import image_logo_navigation from '../assets/logo_exnode_No-tect.png';
import login_page from'../loginPage/login.jsx';
import mobile_anaylisePage from '../assets/mobile_img/mobile_analysit.png';
import macbook from '../assets/Laptop_img/macbook_noScreen.png';
import google_play from '../assets/playstore&appStoer/1664287128google-play-store-logo-png.png';
import app_store from '../assets/playstore&appStoer/app-store-google-play-button-png-favpng-FTFfzCVmWnedDG1qp2K2giafF.jpg';
import '../assets/Fonts/fonts.css';
function Page_home(){
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
        <div className='navigation'>
          <div className='container-navigation'>
            <div className='sub-container-navigation'>
              <div className='container-logo-navigation'>
                <img src={image_logo_navigation} alt='logo-inside' id='logo_exnode-navigationbar'></img>
              </div>
              <ul className='menubar'>
                <li className='item-navigation '><a href='#'>หน้าแรก</a></li>
                <li className='item-navigation '><a href='#'>ธุรกรรม</a></li>
                <li className='item-navigation '><a href='#'>วิเคราะห์</a></li>
                <li className='item-navigation '><a href='#'>รายการ</a></li>
                <li className='item-navigation '><a href='#'>ติดต่อ</a></li>
                <li className='item-navigation '><a href='#'>ข่าวสาร</a></li>
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
              <h1 id='heading-insert'className='show'>APPLICATION จัดการภาษี & วิเคราะห์การใช้จ่าย</h1>
            </div>
            <div className='container-inside-insert'>
            <div className='container-sub-heading'>
              <h2 id='sub-heading-insert' className='show'>เพียงปลายนิ้ว</h2>
              <p id='text-detail-insert'>คุณก็จะสามารถจัดการระบบภาษีในชีวิต
ประจำวันและยังสามารถช่วยวิเคราะห์คำนวณการจัดภาษีต่างๆได้โดยเพียงแค่
ปลายนิ้ว</p>
            </div>
            <div className='phoneInsert'>
              <img src={mobile_anaylisePage} alt='phone_insert' id='phone_insert'></img>
            </div>
          </div>
          </div>
        </div>
      </section>
      </div>{/* end-inside */}
      </div>
    </div>
  )
}


export default Page_home;
