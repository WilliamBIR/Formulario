import {Autocomplete, FormControl,  Grid,  Typography} from "@mui/material"
import TextField from '@mui/material/TextField';


export default function Formulario() {
    const Cliente=[
        "a","b","c"
    ]

  return (
    <div >
      <FormControl>
      <Typography component="h1" variant="h5">
         Información del pago
       </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Autocomplete disablePortal id="ClienteAuto" options={Cliente} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} label="Cliente"/>}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Autocomplete disablePortal id="EmisorAuto" options={Cliente} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} label="Emisor"/>}/>
        </Grid>
    </Grid>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField sx={{width:200}} label="Monto recibido"></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField sx={{width:200}} label="Monto recibido"  disabled={true}></TextField>
        </Grid>      
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Autocomplete disablePortal id="MonedaAuto" options={Cliente} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} label="Moneda"/>}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField sx={{width:200}} label="Tipo de cambio" ></TextField>
        </Grid>
    </Grid>
        
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>    
        <Autocomplete disablePortal id="FormaPAuto" options={Cliente} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} label="Forma Pago"/>}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField type="datetime-local" sx={{width:200}}     InputLabelProps={{shrink: true}}/>
        </Grid>
    </Grid>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>    
        <Autocomplete disablePortal id="StatusAuto" options={Cliente} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} label="Status"/>}/>
    </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>    
        <TextField sx={{width:200}} label="Monto recibido"  disabled={true}></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>    
        <TextField sx={{width:200}} label="Observaciones" ></TextField>
        </Grid>
    </Grid>
      </FormControl>
    </div>
  )
}
