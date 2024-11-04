import React from 'react'
import './main.css';
const main = () => {
  return (
    <div className='container-outside'>
        <div className='outside-exnode'>
          <div>
            <h1>Exnode</h1>
            <img src='https://cdn-icons-png.flaticon.com/512/0/747.png'></img>
          </div>
            <div className='container-navigation'>
              <div className='navigation'>
                <div className='sub-navigation'>
                  <ul className='menubar'>
                    <li className='item-navigation'><a href='#'>หน้าแรก</a></li>
                    <li className='item-navigation'><a href='#'>ธุรกรรม</a></li>
                    <li className='item-navigation'><a href='#'>วิเคราะห์</a></li>
                    <li className='item-navigation'><a href='#'>รายการ</a></li>
                    <li className='item-navigation'><a href='#'>ติดต่อ</a></li>
                    <li className='item-navigation'><a href='#'>ข่าวสาร</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default main
