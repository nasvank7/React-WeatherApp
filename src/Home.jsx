import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
const Home = () => {
    const [name,setName]=useState('')
    const [data,setData]=useState({
        celcius:10,
        name:'london'
        ,
        humidity:10,
        speed:2
    })
   

    const handleClick=(e)=>{
          if(name!==""){
            const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fa51ce68f32ffc832482162ebd098736&&units=metric`
            axios.get(apiUrl)
            .then((res)=>{
            setData({...data,celcius:res.data.main.temp,name:res.data.name,humidity:res.data.main.humidity,speed:res.data.wind.speed})
            })
            .catch((err)=>{
             console.log(err);
            })
          }
    }

  return (
    <div className='container'>
        <div className="weather">
            <div className="search">
                <input type="text" placeholder='Enter city Name' onChange={e=>setName(e.target.value)} />
                <button onClick={handleClick}>
                    <img src="" alt="" />
                </button>
            </div>
            <div className="winfo">
                <img src="" alt="" />
                <h1>{data.celcius}°c</h1>
                <h2>{data.name}</h2>
                <div className="details">
                    <div className="col">
                        <img src="" alt="" />
                        <div className='humidity'>
                            <p>
                           {data.humidity}%
                            </p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src="" alt="" />
                        <div className='wind'>
                            <p>
                            {data.speed}km/hr
                            </p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Home
