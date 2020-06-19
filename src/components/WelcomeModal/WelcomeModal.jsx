import React, { useState } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const WelcomeModal = () => {

  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">{"Welcome to JLBeacon!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            My name is Josh Blumberg. I built this app to impress Beacon, a company I'd love to work for. <br /><br />
            Unfortunately, the API which I used to collect the freight-route data isn't free, and my free trial has ended. So, this site no longer does the cool things it used to do. <br /><br />
            You can still view the source code, and see a demo of how it used to work, by clicking on the GitHub link at the bottom of the page. <br /><br />

            Click outside of this dialogue box to close it.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )

}

export default WelcomeModal;