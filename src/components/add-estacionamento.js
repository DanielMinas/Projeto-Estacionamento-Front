import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EstacionamentoService from '../services/api'
import {useHistory, useParams} from 'react-router-dom'

const theme = createTheme();



export default function SignUp() {
 
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const history = useHistory();
  const {id} = useParams();

  const saveOrUpdateCarro = (e) => {
    e.preventDefault();
    const carro = { placa, modelo }
    
    if(id){
EstacionamentoService.updateEstacionamento(id,carro)
.then((response) => {
history.push('/estacionamento')
}).catch(error =>{
  console.log(error)
})
    }else{
      EstacionamentoService.postEstacionamento(carro)
      .then((response) => {
        console.log(response.data)
        history.push('/estacionamento')
      }).catch(error =>{
        console.log(error)
      })
  
    }
  

  }

  useEffect (()=>{
EstacionamentoService.getEstacionamentoId(id)
.then((response)=> {
setPlaca(response.data.placa)
setModelo(response.data.modelo)

}).catch(error => {
  console.log(error)
}
)},[]);

  const title = () =>{
if(id){
  return  <Typography component="h1" variant="h6"> Atualização de Veículo</Typography>
}else{
  return <Typography component="h1" variant="h6"> Cadastro de Veículo</Typography>
}
}  

const button = () =>{
  if(id){
    return  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
   onClick={saveOrUpdateCarro}
  >
     Atualizar Veículo
  </Button>
  }else{
    return <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
   onClick={saveOrUpdateCarro}
  >
    Cadastrar Veículo
  </Button>
  }
  }  

return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
     {
     title()
     
     }
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
            component="form"
          >

          </Box>
          <Box component="form" sx={{ mt: 3 }}>
            <Typography component="h1" variant="h6">
              Placa
            </Typography>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="placa"
                  name="placa"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}

                />
              </Grid>

              <Grid item xs={12}>
                <Typography component="h1" variant="h6" >
                  Modelo
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="modelo"
                  id="modelo"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}

                />
              </Grid>

            </Grid>
          {
            button()
          }

          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}