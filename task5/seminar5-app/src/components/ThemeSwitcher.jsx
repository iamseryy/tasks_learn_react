import {FormControlLabel, Switch} from "@mui/material";
import {switchToDark, switchToLight} from "../redux/actions";
import {connect} from "react-redux";
import "./ThemeSwitcher.css"

export const ThemeSwitcher = (props) => {
    return (
        <div className="main" data-theme={props.theme ==='dark'  ? "dark" : "light"}>
            <FormControlLabel className="label"
                control={
                    <Switch
                        checked={props.theme ==='light'  ? false : true}
                        onChange={props.theme ==='light'  ?  props.onSwitchToDark : props.onSwitchToLight}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Dark mode"
                labelPlacement="end"
            />
        </div>
    )
}

function mapStateToProps(state) {
    const { themeSwitcherReducer } = state
    return {
        theme: themeSwitcherReducer.theme
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSwitchToLight: () => dispatch(switchToLight()),
        onSwitchToDark: () => dispatch(switchToDark())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)
