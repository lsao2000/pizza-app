import React from 'react'
import {Menulist} from '../helpers/MenuList'
import {MenuItem} from '../components/MenuItem'

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menutitle'> Our Menu</h1>
      <div className='menulist'>
        {
          Menulist.map((menuitem, key) => {
            return <MenuItem image={menuitem.imgProduct} name={menuitem.name} price={menuitem.price} />
            
          })
        }
      </div>
    </div>
  )
}

export default Menu