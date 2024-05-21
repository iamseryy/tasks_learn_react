import {Button, TextField} from "@mui/material";


export const TemperatureConverter = () => {
    return (
        <div>
            <h2>Температура</h2>
            <TextField id="standard-basic" label="Градус Цельсия (°C)" variant="standard" />
            <TextField id="standard-basic" label="Градус Фаренгейта (°F)" variant="standard" />
            <Button variant="outlined">Outlined</Button>
        </div>
    )
}