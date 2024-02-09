import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";

type DataTaskProp = {
    dataTask: {
     task: string,
     priority: string,
     date: string,
    }
}

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

const ModalConfirmNewTask = ({dataTask}: DataTaskProp) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
      <Grid container>
        <Grid item xs={6}>
        <Button onClick={handleOpen}>Confirmar</Button>
        </Grid>
        <Grid item xs={6}>
        <Button onClick={handleOpen}>Cancelar</Button>
        </Grid>
      </Grid>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ ...style, width: 200 }}>
            <Typography>Resumo da tarefa</Typography>
            {dataTask ? (
            <Stack>
             <Typography>Task: {dataTask.task}</Typography>
             <Typography>Prioridade: {dataTask.priority}</Typography>
             <Typography>Data: {dataTask.date}</Typography>
            </Stack>
            ) : null}
            <Grid>
            <Button>Confirmar</Button>    
            <Button onClick={handleClose}>Cancelar</Button>
            </Grid>
          </Box>
        </Modal>
      </>
    );
  }

  export default ModalConfirmNewTask;