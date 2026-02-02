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
import moment from 'moment';


export default function MainContent() {
  {/* State */ }

  const [timings, setTimings] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: ""
  });

  const [selectedCity, setSelectedCity] = useState("Casablanca");

  const [today, setToday] = useState("");

  const [nextPrayer, setNextPrayer] = useState("");
  // temps restant
  const [timeRemaining, setTimeRemaining] = useState("");

  const getTimings = async () => {
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=Morocco&method=2`);
    setTimings(response.data.data.timings);
  };

  const calculateNextPrayer = () => {
    const now = moment();
    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    for (let prayer of prayerNames) {
      if (timings[prayer]) {
        const prayerTime = moment(timings[prayer], "HH:mm");

        if (prayerTime.isAfter(now)) {
          const diff = moment.duration(prayerTime.diff(now));
          const hours = Math.floor(diff.asHours());
          const minutes = diff.minutes();
          const seconds = diff.seconds();

          setNextPrayer(prayer);
          setTimeRemaining(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          return;
        }
      }
    }

    if (timings.Fajr) {
      const fajrTomorrow = moment(timings.Fajr, "HH:mm").add(1, 'day');
      const diff = moment.duration(fajrTomorrow.diff(now));
      const hours = Math.floor(diff.asHours());
      const minutes = diff.minutes();
      const seconds = diff.seconds();

      setNextPrayer('Fajr');
      setTimeRemaining(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }
  };

  useEffect(() => {
    getTimings();
  }, [selectedCity]);

  useEffect(() => {
    const interval = setInterval(() => {
      const t = moment().format("MMM Do YYYY | HH:mm:ss");
      setToday(t);
      calculateNextPrayer();
    }, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (<>

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "20px", padding: "0 20px" }}>
      {/* Gauche: Compte à rebours */}
      <div style={{ textAlign: "left" }}>
        <h3 style={{ margin: 0, fontSize: "18px", opacity: 0.8 }}>Prochaine prière: {nextPrayer}</h3>
        <h1 style={{ fontSize: "50px", margin: "10px 0 0 0", fontWeight: "bold" }}>{timeRemaining || "00:00:00"}</h1>
      </div>

      {/* Droite: Date et Ville */}
      <div style={{ textAlign: "right" }}>
        <h3 style={{ margin: 0, fontSize: "18px", opacity: 0.8 }}>{today}</h3>
        <h1 style={{ fontSize: "50px", margin: "10px 0 0 0", fontWeight: "bold" }}>{selectedCity}</h1>
      </div>
    </div>

    <Divider style={{ borderColor: "white", opacity: "0.2" }} />
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
