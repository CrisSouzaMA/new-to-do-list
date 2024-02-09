import { TextField, Grid, Box, Button } from '@mui/material';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: yup.object({
          email: yup
            .string()
            .email("E-mail inválido.")
            .required("O campo é obrigatório."),
          password: yup
            .string()
            .required("O campo é obrigatório.")
        }),
        onSubmit: async (values) => {
          if (values.email === 'cris.souzamoreiraealmeida@gmail.com' && values.password === "1234") {
            navigate("/tasks");
          }
        },
      });

  return (
      <Grid container>
        <Grid item xs={6} marginTop="150px">
        <img width="900px" alt="Imagem de lista de tarefas" src="./src/assets/todo.jpg" />
        </Grid>
        <Grid item xs={6} marginTop="250px">
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password ? (
               <div>{formik.errors.password}</div>
            ) : null}
            <Button
            type="submit"
            fullWidth
            variant="contained">
             Entrar
            </Button>
            </Box>
           </Box>
        </form>
        </Grid>
      </Grid>
  );
}

export default Login;