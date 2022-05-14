import React, {useState, useContext} from 'react';
import { Box, Button, Input, Modal } from '@mui/material';
import { UpdateOneLesson } from '../../../http/courseInfoAPI';
import { Context } from '../../../index';


const LessonCertificate = ({course, show, onHide}) => {
    const {user} = useContext(Context)
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
  console.log(user.user.email)
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
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <h2>СЕРТИФИКАТ</h2>
                                </div>
                                <div>
                                    <h2>KUSONAGI</h2>
                                </div>
                            </div>
                            <div style={{display: 'flex', marginTop: '20px', marginBottom: '40px'}}>
                                <div>
                                    <p>Этот сертификат:</p>
                                    <p style={{fontWeight: 'bold'}}>{user.user.email}</p>
                                    <p>успешно завершил</p>
                                    <p style={{fontWeight: 'bold'}}>{course} курс</p>
                                </div>
                                <div style={{alignItems: 'center', textAlign: 'center', margin: 'auto auto', border: '2px solid black', padding: '20px', borderRadius: '50%'}}>
                                    <p>{course}</p>
                                </div>
                            </div>
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