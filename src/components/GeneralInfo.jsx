import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ editing }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');

  if (!editing) {
    return (
      <div className="info">
        <h1 className="name">{name}</h1>
        <h2>Contact Info</h2>
        <ul>
          {email && <li>Email: {email}</li>}
          {telephone && <li className="telephone">Telephone: {telephone}</li>}
          {address && <li>Address: {address}</li>}
        </ul>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="info">
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <h2>Contact Info</h2>
          <span>
            Email:{' '}
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </span>
          <span>
            Phone Number:{' '}
            <input
              type="tel"
              placeholder="(123) 456-7890"
              className="telephone"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
          </span>
          <span>
            Address:{' '}
            <input
              type="text"
              placeholder="123 Example St., Town, State, Zip Code"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </span>
        </form>
      </div>
    );
  }
}
