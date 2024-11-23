import React from 'react'
import './Page_home.css'
import image_logo from '../assets/Logo_exnode.png';
import image_logo_navigation from '../assets/logo_exnode_No-tect.png';
import login_page from'../loginPage/login.jsx';
import phone_image from '';
function Page_home(){
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
                <li className='item-navigation '><a href={login_page}>หน้าแรก</a></li>
                <li className='item-navigation '><a href={login_page}>ธุรกรรม</a></li>
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
            <div  className='container-heading-exnode'>
                <h1>APP จัดการธุรกรรมเกี่ยวกับภาษี</h1>
                <p>แอป EXNODE คำนวณภาษีเงินได้บุคคลธรรมดา วิเคราะห์ค่าใช้จ่ายได้เงินคืนภาษีสูงสุด</p>
            </div>
            <div className='image_banner_icon'>
              <div className='phone'>
                <img src={image_logo} alt='logo-inside' id='logo_exnode-navigationbar'></img>
              </div>
            </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}


export default Page_home;
