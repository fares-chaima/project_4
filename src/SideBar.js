import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "./css/SideBAr.css";
import copy from "./images/Copy.svg";
import group from "./images/Group.svg";
import setting from "./images/Setting_line.svg";
import random from "./images/Sort_random.svg";
import useradd from "./images/User_add.svg";
import dashb from "./images/dashb.svg";
import inn from "./images/in.svg";
import profile from "./images/profile.svg";
const SideBar = () => {
    const { collapseSidebar     } = useProSidebar();
    
  const [col, setCol] = useState(false);
  const [did, setDis] = useState("");
 
 
  
    return ( 
   
        
         <div  id="sd" >
          
              <Sidebar id="sidebar" 
              width="310px"
              backgroundColor ="#00837D"
              style={({ height: "110vh" })}
               >
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
         
                    <div className="prfl">
                     <img src={profile} alt="" />
                     <a>Admin</a>
                     </div> 
                   </MenuItem>
                  
                  
                   <MenuItem icon={<img src={dashb} />} href="#" >dashboard</MenuItem>
                  <SubMenu icon={<img src={useradd} />  }  label="gérer les comptes">
                     <MenuItem  href="/AfficherComptes">affficher les comptes</MenuItem>
                     <MenuItem href="/AddCmpt">ajouter un compte</MenuItem>
                    
               </SubMenu>
                   
               <SubMenu icon={<img src={copy} />  }  label="gérer les structures">
                     <MenuItem href="/Structure" >affficher les structures</MenuItem>
                     <MenuItem href="/AddStructure" >ajouter un structure</MenuItem>
                    
               </SubMenu>
                   <MenuItem icon={<img src={random} />}>archivage</MenuItem>
                   <MenuItem icon={ <img src={group}  />} href="/Fournisseurs">les fournisseurs</MenuItem>
                   <SubMenu icon={<img src={setting} />  }  label="paramètres">
                     <MenuItem  >modifier le logo</MenuItem>
                     <MenuItem >modifier le thème</MenuItem>
                     <MenuItem >modifier le nom du site</MenuItem>
               </SubMenu>
                 </Menu>
                
               </Sidebar>
            
             
        </div>
     );
}
 
export default SideBar;