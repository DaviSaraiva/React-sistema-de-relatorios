import React from 'react'
import * as AiIcons from "react-icons/ai";

// import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/go";

export const SidebarData=[
    // {
    //     title:'Home',
    //     path:  '/',//caminho no caso
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Pedidos Feitos',
        path:  '/pedidosfeitos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Créditos vendidos',
        path:  '/recargas',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },

    {
        title:'Cartões vendidos',
        path:  '/cartao',//caminho no caso
        icon:<AiIcons.AiFillIdcard />,
        cName:'nav-text'
    },
    
    {
        title:'Boletos não pagos',
        path:  '/boletosnaopagos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Boletos pagos',
        path:  '/boletospagos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Pagemanetos com Cartão',
        path:  '/pagamentoscartao',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Relatório de créditos liberados',
        path:  '/credliberados',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Relatório Finaceiro Recarga',
        path:  '/finrecargas',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Relatório Finaceiro de Cartões',
        path:  '/finecartoes',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    }
    
]