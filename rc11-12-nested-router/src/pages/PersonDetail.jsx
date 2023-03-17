import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import NotFound from './NotFound'

const PersonDetail = () => {
    // const {state}=useLocation()
    // const navigate=useNavigate()
    const [error, setError] = useState(false)  
    const {id}=useParams()
    console.log(id);
    const [person, setPerson]=useState({})
    const navigate=useNavigate()
    const [loading, setLoading]=useState(true);

    const getPerson = () => {
        fetch(`https://reqres.in/api/users/${id}`)
          .then((res) => {
            if(!res.ok){
                setError(true)
                setLoading(false)
               throw new Error("kullanıcı bulunamadı")
            }
            return res.json()
        })
          .then((data) => {
            setLoading(false) 
            setPerson(data.data)})
          .catch((err) => console.log(err));
      };
      useEffect(() => {
        getPerson();
      }, []);
      console.log(loading);

      if(error){
        return(
            <div className='text-center'>
                <NotFound></NotFound>
                <h1 className='text-center text-danger'> Üzgünüm, 
                Bireyler ters gitti</h1>
            </div>
        )
      }
      else if(loading){
       return <h1 className='text-center'>User Loading...</h1>
      }
      else{
        return (
            <div className="container text-center">
            <h3>
              {person?.first_name} {person?.last_name}
            </h3>
            <img className="rounded" src={person?.avatar} alt="" />
            <p>{person?.email}</p>
            <div>
              <button
                onClick={() => navigate("/")}
                className="btn btn-success me-2"
              >
                Go Home
              </button>
              <button onClick={() => navigate(-1)} className="btn btn-warning">
                Go Back
              </button>
            </div>
          </div>
          )
      }

 
}

export default PersonDetail