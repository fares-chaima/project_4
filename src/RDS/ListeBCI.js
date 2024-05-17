import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "../css/AfficherCmpt.css";
import SideBarRds from "./SideBarRds";

const ListeBCI = () => {
  const [rows, setRows] = useState([]);
    const history = useHistory();
    useEffect(() => {
      // Fetch data from the API endpoint to get directeurs
      fetch('http://localhost:3001/api/directeur')
          .then(response => response.json())
          .then(data => {
              // Update the rows state with fetched data
              setRows(data);
          })
          .catch(error => console.error('Error fetching directeurs:', error));
  }, []);
  const handleIconClick = async (id) => {
    try {
      const response = await fetch('http://localhost:3001/api/bci/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('BCI info stored:', data);
    } catch (error) {
      console.error('Error storing BCI info:', error);
    }
  };

    const columns = [
        // Définition des colonnes
        {
            field: 'id',
            headerName: 'N° de BCI',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: 'date_insertion',
            headerName: 'Date',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: 'etat',
            headerName: 'Etat',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: ({ row: { etat } }) => {
                return (
                    <Box
                        width="75%"
                        p="5px"
                        marginLeft="-10px"
                        marginTop="5%"
                        backgroundColor={etat === "prêt" ? "#7CD992" : "#EB6060CC"}
                        borderRadius="24px"
                    >
                        <Typography color="#222020" id="etat">
                            {etat}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "action",
            headerName: 'Action',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: (cellValues) => {
                return (
                    <div className="change">
                        <EditIcon className='icon' sx={{ fontSize: 30 }} />
                        <PrintIcon className='icon1' sx={{ fontSize: 30 }} />
                    </div>
                );
            }
        },
        {
            field: "envoyer",
            headerName: 'Envoyer',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="env">
                        <SendIcon className='icon' sx={{ fontSize: 30 }}onClick={() => handleIconClick(params.row.id)}/>
                    </div>
                );
            }
        },
    ];

    return (
        <div className="comptes">
            <SideBarRds />
            <div className="cmpt">
                <div className="fx1">
                    <span>Liste des BCI</span>
                </div>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        sx={{
                            '.MuiDataGrid-columnSeparator': { display: 'none' },
                            '&.MuiDataGrid-root': { border: 'none' },
                        }}
                        slots={{ toolbar: GridToolbar }}
                        className='grid'
                        style={{ height: "66vh" }}
                        rows={rows}
                        columns={columns}
                        rowHeight={70}
                        autoPageSize
                        disableRowSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
}

export default ListeBCI;
