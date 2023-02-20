import React, { useState } from 'react'
import "./CaliHousePrice.css";

const Project_02 = () => {
    const [prediction, setPrediction] = useState('');
    const [data, setData] = useState({
        MedInc: 8.5,
        HouseAge: 41.11,
        AveRooms: 6.984126984126984,
        AveBedrms: 1.0238095238095237,
        Population: 2,
        AveOccup: 2.5555555555555554,
        Latitude: 37.88,
        Longitude: -122.23,
    });

    const handleInputChange = (event) => {
        const newData = { ...data, [event.target.id]: Number(event.target.value) }
        setData(newData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/predict_price/', {
            'method': 'POST',
            headers: { 'Content-Type': 'application/json' },
            'body': JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setPrediction(data.result)
                console.log(data)
                console.log(data.result)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='houseprice__container'>
            <h2>Predict House Price </h2>
            <text>Predict california house price using machine learning model. <br /></text>
            <form onSubmit={handleSubmit} className='forms__container' >
                <p><label htmlFor="MedInc">MedInc</label><input onChange={handleInputChange} value={data.MedInc} id='MedInc' type="text" placeholder="Median income in block group" name="MedInc" required="required" /></p>
                <p><label htmlFor="HouseAge">HouseAge</label><input onChange={handleInputChange} value={data.HouseAge} id='HouseAge' type="text" placeholder="Median house age in block group" name="HouseAge" required="required" /></p>
                <p><label htmlFor="AveRooms">AveRooms</label><input onChange={handleInputChange} value={data.AveRooms} id='AveRooms' type="text" placeholder="Average number of rooms per household" name="AveRooms" required="required" /></p>
                <p><label htmlFor="AveBedrms">AveBedrms</label><input onChange={handleInputChange} value={data.AveBedrms} id='AveBedrms' type="text" placeholder="Average number of bedrooms per household" name="AveBedrms" required="required" /></p>
                <p><label htmlFor="Population">Population</label><input onChange={handleInputChange} value={data.Population} id='Population' type="text" placeholder="Block group population" name="Population" required="required" /></p>
                <p><label htmlFor="AveOccup">AveOccup</label><input onChange={handleInputChange} value={data.AveOccup} id='AveOccup' type="text" placeholder="Average number of household members" name="AveOccup" required="required" /></p>
                <p><label htmlFor="Latitude">Latitude</label><input onChange={handleInputChange} value={data.Latitude} id='Latitude' type="text" placeholder="Block group latitude" name="Latitude" required="required" /></p>
                <p><label htmlFor="Longitude">Longitude</label><input onChange={handleInputChange} value={data.Longitude} id='Longitude' type="text" placeholder="Block group longitude" name="Longitude" required="required" /></p>
                <button type="submit" className='btn btn-primary'>Predict</button>
            </form>
            <br />
            {(prediction === '') ?
                (<p>Change the variables for predicting the house value.</p>) :
                (<p>The Predicted value = {prediction} <br />
                NOTE: Results may not be precise or fully correct!</p>)
            }
        </div>
    )
}

export default Project_02