import { useState } from 'react';
import { Modal, Button, TextField, Typography, Stack, FormControl, InputLabel, Select, MenuItem, Divider}  from '@mui/material';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from "formik";
import * as yup from "yup";
import ModalConfirmNewTask from './ModalConfirmNewTask';

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

const ModalNewTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [dataTask, setDataTask] = useState({
    "task": '',
    "priority": '',
    "date": ''
  });

  const formik = useFormik({
    initialValues: {
      task: "",
      priority: "",
      date: "",
    },
    validationSchema: yup.object({
      task: yup
        .string()
        .required("O campo é obrigatório."),
      priority: yup
        .string()
        .required("O campo é obrigatório."),
      date: yup
        .string()
        .required("O campo é obrigatório."),
    }),
    onSubmit: async (values) => {
      if (values.task && values.priority && values.date) {
        setDataTask({"task": values.task, "priority": values.priority, "date": values.date})
      }
    },
  });

  return (
    <Stack>
      <Button onClick={handleOpen}>Criar nova tarefa</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Stack gap={2} sx={{ ...style, width: 400 }}>
          <Typography id="parent-modal-title">Nova tarefa</Typography>
          <Divider />
          <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
          <TextField label="Tarefa" variant="standard" value={formik.values.task} onChange={formik.handleChange}/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DateField value={formik.values.date} onChange={formik.handleChange}/>
           </LocalizationProvider>
           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <InputLabel id="demo-simple-select-standard-label">Prioridade</InputLabel>
           <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={formik.values.priority}
            onChange={formik.handleChange}
            label="Prioridade"
           >
            <MenuItem value={10}>Alta</MenuItem>
            <MenuItem value={20}>Média</MenuItem>
            <MenuItem value={30}>Baixa</MenuItem>
          </Select>
          </FormControl>
          </form>
          <ModalConfirmNewTask dataTask={dataTask} />
        </Stack>
      </Modal>
    </Stack>
  );
}

export default ModalNewTask;