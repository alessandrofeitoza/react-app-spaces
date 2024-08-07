import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';
import './styles.scss';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    const bookingData = {
      customer: formData.name,
      email: formData.email,
      phone: formData.phone,
      begin_data: formData.date,
      end_date: formData.date,
      status: 'reservado',
    };

    fetch('http://localhost:3000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Reserva criada com sucesso:', data);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao criar reserva:', error);
      });
  };

  return (
    <Container className="reservation-container">
      <Typography variant="h4" gutterBottom>
        Reserve seu horário
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant='outlined'
              required
              aria-label="Nome"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              variant='outlined'
              required
              aria-label="Email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant='outlined'
              required
              aria-label="Telefone"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data e Hora da Entrada"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="datetime-local"
              fullWidth
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              required
              aria-label="Data e Hora"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              label="Data e Hora da Saída"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="datetime-local"
              fullWidth
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              required
              aria-label="Data e Hora"
            />
          </Grid>
        </Grid>
        <Button
          sizeLarge
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className="button"
          style={{ marginTop: '20px', width: '100%' }}
          aria-label="Reservar"
        >
          Reservar
        </Button>
      </form>
    </Container>
  );
}
