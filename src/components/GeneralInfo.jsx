import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ editing }) {
  const [name, setName] = useState('My Name');
  const [email, setEmail] = useState('myemail@example.com');
  const [telephone, setTelephone] = useState('(123) 456-7890');
  const [address, setAddress] = useState('My Address');

  if (editing) {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          className="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email (example@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="tel"
          placeholder="Telephone Number ( (123) 456-7890 )"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        <input
          type="text"
          placeholder="Address (123 Example St., Town, State, Zip Code)"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </form>
    );
  }

  return (
    <div className="info">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{telephone}</p>
      <p>{address}</p>
    </div>
  );
}
