import React, {useState, useContext, useEffect} from 'react';
import { Box, Button, Input, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
    return (
        
        <div>
            <Modal onClose={onHide} open={show} 
                    aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: 400 }}> 
                {/* style={{width:'1754px', height: '1238px'}} */}
                        <div id='paymentForm'>
                        <TableContainer>
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
                            </TableContainer>
                        </div>
                    <Button variant="contained" onClick={upd} >
                        Распечатать
                    </Button>
                    </Box>
                    
            </Modal>
        </div>
    )
}


export default LessonCertificate;