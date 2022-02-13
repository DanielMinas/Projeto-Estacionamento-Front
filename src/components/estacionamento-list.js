import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import EstacionamentoService from '../services/api'




export default function EstacionamentoList() {

  const theme = createTheme();


  const handleChange = (event) => {
    setSelect(event.target.checked);
  };
  const handleChange1 = (event) => {
    setSelect1(event.target.checked);
  };
  const [select, setSelect] = React.useState(false)
  const [select1, setSelect1] = React.useState(false)



  const [estacionamento, setEstacionamento] = useState([]);

  useEffect(() => {
    EstacionamentoService.getAllEstacionamento()
      .then((response) => {
        setEstacionamento(response.data)
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Estacionamento
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <FormControl fullWidth>

              <InputLabel id="demo-simple-select-label">Classificados</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={select}
                    onChange={handleChange} />} label="Label" />
                  <FormControlLabel control={<Checkbox checked={select1}
                    onChange={handleChange1} />} label="Web" />
                </FormGroup>
              </Select>
            </FormControl>
            <IconButton size="large" color="inherit" href="/add-estacionamento">

              <AddIcon />

            </IconButton>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              href="/add-estacionamento"
            >
              <AddIcon />
            </IconButton>
          </Box>

        </Toolbar>

      </AppBar>
      <main>
        {/* Hero unit */}

        <Container sx={{ py: 9 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {estacionamento.filter((carro) => {
              if (select === true) {
                return carro.modelo === "FIT"
              } else {
                return carro
              }
            })
              .filter((carro) => {
                if (select1 === true) {
                  return carro.modelo === "aoba"
                } else {
                  return carro
                }
              })
              .map(carro => (
                <Grid item key={carro.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Modelo: {carro.modelo}
                      </Typography>
                      <Typography>
                        Placa: {carro.placa}
                      </Typography>
                      <Typography>
                        Data Entrada {carro.data_entrada}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={`/edit-estacionamento/${carro.id}`} >Editar</Button>
                      <Button size="small">Saída</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}

      {/* End footer */}
    </ThemeProvider>
  );
}