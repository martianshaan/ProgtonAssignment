/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';
import {

  Button, Modal, Box, Typography, Stack, IconButton,
} from '@mui/material';

import { CloseRounded } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// eslint-disable-next-line import/no-unresolved
import Progton from './Progton.jpg';
import './Style.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DownloadIcon from '@mui/icons-material/Download';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e4e9ff',
      darker: '#053e85',
    },
    secondary: {
      main: '#8999e0',
    },
  },
});
const modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 3,
};

function ModalTab() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modaltab">
      <ThemeProvider theme={theme}>
        <Typography sx={{ color: '#b4b4b4', mb: '5px' }}>Enter amount to send</Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          color="primary"
          sx={{
            '&:hover': {
              backgroundColor: '#fff',
              color: '#3c52b2',
            },
          }}
        >
          <Stack direction="row" spacing={10}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="left"
              alignItems="center"
              sx={{ mr: '150px' }}
            >
              <Typography variant="body1" sx={{ color: '#b4b4b4' }}>$ </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '20px', mr: '280px' }}> 5600</Typography>
            </Stack>
            <ArrowForwardIcon />
          </Stack>
        </Button>
        <Modal onClose={handleClose} open={open}>
          <Box sx={modalstyle}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: '-0.3em',
                right: '-0.3em',
                p: '0.3em',
                cursor: 'pointer',
                fontSize: '30px',
                backgroundColor: '#e4e9ff',
                borderRadius: '50%',
                zIndex: '10',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#3c52b2',
                },

              }}
            >
              <CloseRounded/>
            </IconButton >
            <Box sx={{
              bgcolor: '#8999e0',
              p: 1,
              color: 'white',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
            >
              <Stack
                direction="row"
                spacing={1}
                justifyContent="left"
                alignItems="center"
                sx={{ ml: '29px' }}
              >
                <CheckCircleRoundedIcon sx={{
                  color: '#00d45a', bgcolor: 'white', borderRadius: '80%', border: '0px',
                }}
                />
                <span> MONEY SENT </span>
              </Stack>
              <Stack
                direction="row"
                spacing={26}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: '10px' }}
              >
                <span className="price" >
                  <strong> $ 5600 </strong>
                </span>
                <span className="debited">
                  {' '}
                  <strong> Debited  </strong>
                  {' '}
                </span>
              </Stack>
              <Stack
                direction="row"
                spacing={20}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: '0px' }}
              >
                <p>
                  ID: #345223234
                </p>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ mt: '0px' }}
                >
                  <DownloadIcon/>
                  <p>Download file</p>
                </Stack>
              </Stack>
            </Box>
            <Box
              className="company"
              sx={{
                display: 'flex', p: 2, mt: 2,
              }}
            >
              <div className="circle"><img src={Progton} alt="progton" /></div>
              <div>
                <span className="grey">FROM</span>
                {' '}
                <br />
                <span className="bankname" ><strong>Progton Software Pvt.Ltd.</strong></span>
                {' '}
                <br />
                <span className="grey">Sent on: June 22 at approx. 5:02 am</span>
              </div>
            </Box>
            <Box sx={{ display: 'flex', p: 2 }}>
              <div className="circle"><PersonIcon /></div>
              <div>
                <span className="grey">To</span>
                {' '}
                <br />
                <span className="bankname" ><strong>Yes Bank - Hexone </strong></span>
                {' '}
                <br />
                <span className="acnumber"><strong>***********785412 </strong></span>
                {' '}
                <br />
                <span className="grey">Sent on: June 22 at approx. 5:02 am</span>
                {' '}
                <br />
              </div>
            </Box>
            <Box sx={{ p: 2 }}>
              <span className="grey">REMARKS/NOTES</span>
              {' '}
              <br />
              <input className="textfield" type="text" />
              {' '}
              <br />
              <br />
              <span className="bank">BANK NAME</span>
              {' '}
              <br />
              {' '}
              <span className="add"><strong>Yes Bank, Nehru Nagar Branch </strong></span>
            </Box>
            <span className="message">Transactions are protected by Bifinance One Auth</span>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default ModalTab;
