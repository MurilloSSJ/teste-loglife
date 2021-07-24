import React from 'react'
import { navMenu } from './Components/nav-menu'
import { rodape } from './Components/rodape'
import Routes from './routes'

//Importando as páginas
export default function App(){
    const menu = React.createElement(navMenu)
    const rodapePage = React.createElement(rodape)
    return(
        <>
        {menu}
        <main>
            <Routes></Routes>
        </main>
        {rodapePage}
        </>
    )
}