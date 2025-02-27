import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
            <img src="../../src/assets/logo/logo_white.png" alt="" width={150}/>
        </div>

        <div className="header__links">
            <a href="">Inicial</a>
            <a href="">Conheça</a>
            <a href="">Contato</a>
        </div>
    </div>
  )
}

export default Header
