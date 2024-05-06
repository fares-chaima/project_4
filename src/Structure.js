import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";
import dlt from "./images/delete.svg";
import mdf from "./images/modf.svg";

const Structure = () => {
  const history = useHistory();

    const columns = [
    
        {
          field: 'nom',
          headerName: 'nom',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'responsable',
          headerName: 'le responsable',
          headerClassName: 'hdr',
          flex: 1,
        },
      
        
        {
          field: "gérer",
          headerName: 'gérer',
          headerClassName: 'hdr',
          flex: 1,
          renderCell: (cellValues) => {
            return (
              <>
              <div className="change">
              <img src={dlt} alt="dlt" />
              <img src={mdf} alt="mdf" />
              </div>
              </>
            );
              }
        },
      ];
      const rows = [
         { id: 1, nom: 'Souha', responsable: 'Hocini'},
         { id: 2, nom: 'Souha', responsable: 'Hocini'},
         { id: 3, nom: 'Souha', responsable: 'Hocini'},
         { id: 4, nom: 'Souha', responsable: 'Hocini'},
         { id: 5, nom: 'Souha', responsable: 'Hocini'},
       
        ];
    return ( 
        <div className="comptes">    
          <SideBar />
        <div className="cmpt">           
            <button onClick={()=> history.push("/AddStructure")} >ajouter une structure</button>        
            <div style={{ height: 300, width: '100%' }}>
     
      <DataGrid
      sx={{
        '.MuiDataGrid-columnSeparator': {
          display: 'none',
          
        },
        '&.MuiDataGrid-root': {
          border: 'none',
        },
        
       
        
      }}
            slots={{ toolbar: GridToolbar }}

      className='grid'
      style={{height: "66vh"}}
        rows={rows}
        columns={columns}    
        rowHeight={70}
        autoPageSize
        disableRowSelectionOnClick
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }
     
      />
   
    </div>
                </div>
            
        </div>
        
     );
}
 
export default Structure;