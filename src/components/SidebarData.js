import React from 'react'
import * as AiIcons from "react-icons/ai";

// import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/go";

export const SidebarData=[
    {
        title:'Home',
        path:  '/',//caminho no caso
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Pedidos Feitos',
        path:  '/pedidosfeitos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Créditos Vendidos',
        path:  '/recargas',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },

    {
        title:'Cartões Vendidos',
        path:  '/cartao',//caminho no caso
        icon:<AiIcons.AiFillIdcard />,
        cName:'nav-text'
    },
    
    {
        title:'Boletos Não Pagos',
        path:  '/boletosnaopagos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Boletos Pagos',
        path:  '/boletospagos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Pagamentos com Cartão',
        path:  '/pagamentoscartao',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Relatório de Créditos Pagos',
        path:  '/credpagos',//caminho no caso
        icon:<AiIcons.AiFillProfile />,
        cName:'nav-text'
    },
    {
        title:'Relatório de Créditos Liberados',
        path:  '/credLiberados',//caminho no caso
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
