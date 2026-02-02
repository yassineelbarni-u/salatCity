import React from 'react'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Players from './prayers';
import img1 from '../assets/images/img1.png';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function MainContent() {
  {/* State */ }

  const [timings, setTimings] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: ""
  });

  const [selectedCity, setSelectedCity] = useState("casablanca");

  const getTimings = async () => {
    const response = await axios.get("https://api.aladhan.com/v1/timingsByCity?city=tanger&country=Morocco&method=2");
    setTimings(response.data.data.timings);
  };

  useEffect(() => {
    getTimings();
  }, []);




  const handleCityChange = (event) => {
    console.log("the new city is ", event.target.value);
    setSelectedCity(event.target.value);
  };

  return (<>

    <Grid container >

      <Grid xs={6}>
        <h2>12/01/2026</h2>
        <p>{selectedCity}</p>


      </Grid>
      <Grid xs={6}>
        <h2>motabaqi hata salat al fajr</h2>
        <p>04:00</p>

      </Grid>
    </Grid>

    <Divider style={{ borderColor: "red" }} />
    {/* cards prayers */}
    <Stack direction="row" spacing={2} justifyContent="space-around" alignItems="center" style={{ marginTop: "20px" }}>
      <Players name="fajr" duree={timings.Fajr} image={img1} />
      <Players name="dhuhr" duree={timings.Dhuhr} image={img1} />
      <Players name="asr" duree={timings.Asr} image={img1} />
      <Players name="maghrib" duree={timings.Maghrib} image={img1} />
      <Players name="isha" duree={timings.Isha} image={img1} />

    </Stack>

    {/* cards select */}
    <Stack direction="row" justifyContent="center" style={{ marginTop: "40px" }} >
      <FormControl style={{ width: "20%" }}>
        <InputLabel id="demo-simple-select-label">ville</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="ville"
          onChange={handleCityChange}
        >
          <MenuItem value={"Tanger"}>TANGER</MenuItem>
          <MenuItem value={"Marrakech"}>MARRAKECH</MenuItem>
          <MenuItem value={"Casablanca"}>CASABLANCA</MenuItem>

          <MenuItem value={"Fes"}>FES</MenuItem>
          <MenuItem value={"Rabat"}>RABAT</MenuItem>
          <MenuItem value={"Oulad Tayeb"}>OULAD TAYEB</MenuItem>

        </Select>
      </FormControl>
    </Stack>


  </>
  )
}
