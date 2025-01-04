import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Typography } from '@mui/material';
import PopupCard from './Popup'; // Import the PopupCard
import './AboutSection.css'

const AboutSection = () => {
  const [formData, setFormData] = useState({
    location: '',
    latitude: '',
    longitude: '',
    dateRange: '',
  });

  const [popupOpen, setPopupOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupOpen(true); // Open the popup after form submission
  };

  const fakeData = {
    message: " High Probability of Forest Fire ",
    confidence: 85,
    recommendation: "Travel to safe area and call for Fire Brigad.",
  };

  return (
    <section className="input-section" id="api">
      <Box className="input-container">
        <Typography variant="h4" className="input-title">
          Disaster Safety Check
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <TextField
            select
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            required
          >
            {/* Dropdown options */}
            <MenuItem value="Dolakha">Dolakha</MenuItem>
            <MenuItem value="Kathmandu">Kathmandu</MenuItem>
            <MenuItem value="Pokhara">Pokhara</MenuItem>
            {/* Add more districts here */}
          </TextField>
          <TextField
            label="Temperature"
            name="Temperature"
            value={formData.latitude}
            onChange={handleChange}
            fullWidth
            placeholder="e.g., 27.8 C"
          />
          <TextField
            label="Oxygen Level"
            name="Oxygen Level"
            value={formData.longitude}
            onChange={handleChange}
            fullWidth
            placeholder="e.g., 86.3"
          />
          <TextField
            label="Date and Time Range (Optional)"
            name="dateRange"
            value={formData.dateRange}
            onChange={handleChange}
            fullWidth
            placeholder="e.g., 2023-12-01 to 2023-12-07"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Check Safety
          </Button>
        </form>
      </Box>

      {/* Popup card that shows when the form is submitted */}
      <PopupCard open={popupOpen} data={fakeData} onClose={() => setPopupOpen(false)} />
    </section>
  );
};

export default AboutSection;
