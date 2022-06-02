import React, {useState, useContext, useEffect} from 'react';
import { Box, Button, Input, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { UpdateOneLesson } from '../../../http/courseInfoAPI';
import { Context } from '../../../index';
import { fetchUsers } from '../../../http/userAPI'



const LessonCertificate = ({show, onHide}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers().then(data => setUsers(data.rows)).finally()
    }, [])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const upd = () => {
    var printText = document.getElementById('paymentForm').innerHTML;
    var windowPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    windowPrint.document.write(printText);
    windowPrint.document.close();
    windowPrint.focus();
    windowPrint.print();
    windowPrint.close();
  }  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Login', width: 130, editable: true },
    { field: 'role', headerName: 'Role', width: 130, editable: true },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    // //   description: 'This column has a value getter and is not sortable.',
    // //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  
  console.log(users)
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
                    aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 850 }}> 
                {/* style={{width:'1754px', height: '1238px'}} */}
                        <div id='paymentForm'>
                        {/* <TableContainer>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                <TableHead> 
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Role</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {users.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.role}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer> */}

                            <DataGrid
                                sx={{height: '400px'}}
                                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                                rows={users}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                
                            />
                        </div>
                        <div>
                            <Button onClick={upd} sx={{margin: '2px'}} >
                                
                            </Button>
                            {/* <Button variant="contained" color='secondary' sx={{margin: '2px'}}>
                                Редактировать
                            </Button>
                            <Button variant="contained" color='error' sx={{margin: '2px'}}>
                                Удалить
                            </Button> */}
                        </div>
                    </Box>                   
            </Modal>
            

        </div>
    )
}


export default LessonCertificate;