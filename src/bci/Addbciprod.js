import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom';
import './Addbciprod.css';
function Addbciprod({ onSelectRow }) {
  const handleSelectClick = (id) => {
    const selectedRow = rows.find(row => row.id === id);
    onSelectRow(selectedRow);
  };

const [rows, setRows] = useState([
    { id: 1, produit: 'Produit A', quantiteDemandee: 10, selection: false },
    { id: 2, produit: 'Produit B', quantiteDemandee: 20, selection: true },
    { id: 3, produit: 'Produit C', quantiteDemandee: 15, selection: false },
    { id: 4, produit: 'Produit D', quantiteDemandee: 30, selection: true },
    { id: 5, produit: 'Produit E', quantiteDemandee: 25, selection: false },
  ]);

  const history = useHistory();

 

 

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'produit', headerName: 'Produit', flex: 1 },
    { field: 'quantiteDemandee', headerName: 'Quantité demandée', flex: 1, editable: true },
    { 
      field: 'selection', 
      headerName: 'Sélection', 
      flex: 1, align: 'center',
      
      renderCell: (params) => (
        <button className="selectbtn" onClick={() => handleSelectClick(params.row.id)}  style={{ 
           color:'white',
          fontSize:'15px',
         height:'38px',
          width:'120px',
          marginRight: '70px',
          

        }}>Sélectionner  </button> // Remplacez par le code de votre bouton
    ),
       

    },
   
  ];


  return (
    <div className='contaddpro'>
        <div className='ajouterproduit'>
            <h3 >Ajouter un produit</h3>

        </div>

        <div>

        <div className="cmpt">
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid
                sx={{
                  '.MuiDataGrid-columnSeparator': { display: 'none' },
                  '&.MuiDataGrid-root': { border: 'none' },
                }}
                slots={{ toolbar: GridToolbar }}
                className='grid '
                style={{height: "66vh"}}
                rows={rows}
                columns={columns}
                rowHeight={70}
                autoPageSize
              />
            </div>
          </div>

          
            
        </div>

        <div className='btngroup'>
    
    <button className='annuler'>annuler</button>
    <button className='confirmer'>confirmer</button>
        
        </div>














      
    </div>
  )
}

export default Addbciprod
