import React,{useState} from 'react';
import api from '../../services/api';


export default function Login({history}){
    const [email,setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    console.log('Email digitado ->',email);

    const response =await api.post('/users',{email});
    const {_id} = response.data;

    localStorage.setItem('user',_id);

    console.log('Salvo ->',_id);

    history.push('/dashboard');
  }
    return (
        <>
            <p>
                <strong></strong>

                <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Seu melhor email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <button type="submit" className="btn">
                    Entrar
                </button>
                </form>
            </p>
          </>
    )
}