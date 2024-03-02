import { useState } from 'react';

export default function GeneralInfo() {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('email@email.com');
  const [telephone, setTelephone] = useState('(123) 456-7890');
  const [address, setAddress] = useState('123 Some St, Some Town, SS, 12345');

  // if editing = true, return inputs with state values
  // if editing = false, return html elements with state values

  return (
    <div className="info">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{telephone}</p>
      <p>{address}</p>
    </div>
  );
}
