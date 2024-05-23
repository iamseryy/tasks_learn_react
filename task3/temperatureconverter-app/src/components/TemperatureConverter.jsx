import {TextField} from "@mui/material";
import {useState} from "react";
import styles from './temperature_converter.module.css'


export const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const onChangeCelsius = (e) => {
        setCelsius(e.target.value)
        setFahrenheit('')

        if(!isNaN(e.target.value) && e.target.value) setFahrenheit((e.target.value * 9/5) + 32)
    }

    const onChangeFahrenheit = (e) => {
        setFahrenheit(e.target.value)
        setCelsius('')

        if(!isNaN(e.target.value) && e.target.value) setCelsius((e.target.value - 32) * 5/9)
    }


    return (
        <div>
            <h2>Температура</h2>
            <div  className={styles.converter}>
                <TextField
                    label="Градус Цельсия (°C)"
                    variant="standard"
                    onChange={onChangeCelsius}
                    value={celsius}
                />
                <TextField
                    label="Градус Фаренгейта (°F)"
                    variant="standard"
                    onChange={onChangeFahrenheit}
                    value={fahrenheit}
                />
            </div>
        </div>
    )
}