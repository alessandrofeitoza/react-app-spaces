import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <Container className="reservation-container">
      <Typography variant="h4" gutterBottom>
        Reserve seu horário
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="textField"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="textField"
          required
        />
        <TextField
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="textField"
          required
        />
        <TextField
          label="Data"
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          label="Hora"
          name="time"
          value={formData.time}
          onChange={handleChange}
          type="time"
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
        >
          Reservar
        </Button>
      </form>
    </Container>
  );
}
