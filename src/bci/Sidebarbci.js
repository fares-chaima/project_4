import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "../css/SideBAr.css";
import logo from "../images/Logo.svg";
import articles from "../images/article.svg";
import cbe from "../images/cbe.svg";
import chap from "../images/chapitre.svg";
import dashb from "../images/dashb.svg";
import inn from "../images/in.svg";
import produits from "../images/produits.svg";
import "../css/Sidebnr.css";
import { RiFileList2Fill } from "react-icons/ri";
import { SiStatista } from "react-icons/si";


const Sidebarbci = () => {
    const { collapseSidebar   } = useProSidebar();
    
    const [col, setCol] = useState(false);
    return ( 
        <div  id="sd" >
          
        <Sidebar id="sidebar" 
        width="310px"
        backgroundColor="#041F5A"
        
        style={({ height: "110vh" })} >
           <Menu>
           <MenuItem
           id="ln"
               icon={col ?  <MenuOutlinedIcon />:<img src={inn}className="inn" />  }
               onClick={() => {
                   setCol(prev => !prev);
                 collapseSidebar();
                 
               }}
               style={({ textAlign: "center" })}
             >
   
              <div className="prfl" >
               <img src={logo} alt="" />
               <a className="titremagazinier" href="/Magazinier">MAGAZINIER</a>
               </div> 
             </MenuItem>
            
            
            
         
             
         <SubMenu className=' sidebci'icon={<RiFileList2Fill size="2rem" />  }  label="BCI">
               <MenuItem   className='white' href="/Bci"  >Liste de BCI</MenuItem>
               <MenuItem  className='white' href="/Creerbci" >Etablir un BCI</MenuItem>
              
         </SubMenu>
          
          
         <MenuItem className=' sidebci' icon={<SiStatista size="1.5rem"  />
} href="#" >dashboard</MenuItem>
           </Menu>
          
         </Sidebar>
      
       
  </div>

     );
}
 
export default Sidebarbci;