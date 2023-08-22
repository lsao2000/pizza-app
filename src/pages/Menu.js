import React from 'react'
import {Menulist} from '../helpers/MenuList'
import MenuItem  from '../components/MenuItem'
import '../styles/Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'> Our Menu</h1>
      <div className='menuList'>
        { 
          Menulist.map((menuitem, key) => {
            return <MenuItem key={key} name={menuitem.nameProduct} image={menuitem.imgProduct} price={menuitem.priceProduct} />
          })
        }
      </div>
    </div>
  ) 
}

export default Menu