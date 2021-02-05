import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { loadUserCity } from '../../shared/state/userCity/actions'
import { loadWeather } from '../../shared/state/weather/actions'
import WeatherHomeLayout from '../layouts/WeatherHomeLayout'
import Loader from '../../shared/components/loader'
import SearchBar from 'material-ui-search-bar';
import { Form } from 'react-formio';
import { form } from '../../assets/form'
import { cities } from '../../assets/indianCities'
import FormioUtils from 'formiojs/utils';
import pin from '../../assets/img/pin.png'
import search from '../../assets/img/search.png'
import { TextField, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from "@material-ui/core/IconButton";

class WeatherHomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cityChange = this.cityChange.bind(this);
    }

    cityChange = (e, data) => {
        if (data.name)
            this.props.dispatch(loadWeather({ city: data.name }))
    }

    componentDidMount() {
        this.props.dispatch(loadUserCity())
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userCityData.userCityDetails.city !== this.props.userCityData.userCityDetails.city) {
            this.props.dispatch(loadWeather({ city: nextProps.userCityData.userCityDetails.city }))
        }
    }

    render() {
        return (
            <>
                {/* <Form form={form} className="myForm" onChange={this.cityChange} /> */}
                {this.props.weatherData.loading ? <Loader /> :
                    <div>
                        

                        <div className="search center">
                            <Autocomplete
                                onChange={this.cityChange}
                                id="combo-box-demo"
                                options={cities.sort((a, b) => (a.name > b.name) ? 1 : -1)}
                                // defaultValue={this.props.userCityData.userCityDetails.city}
                                fullWidth={true}
                                disableListWrap
                                disableClearable
                                forcePopupIcon={false}
                                getOptionLabel={(option) => option.name + ", " + option.subcountry}
                                // style={{ width: 300 }}
                                renderInput={(params) =>
                                    <TextField {...params} placeholder="Search City" variant="outlined"
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <RoomIcon />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />}
                            />
                        </div>
                        <br />
                        <WeatherHomeLayout forecastDetails={this.props.weatherData.weather} />
                    </div>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            userCityData: state && state.userCity,
            weatherData: state && state.weather
        }
    )
}

const withConnect = connect(mapStateToProps, (dispatch) => ({ loadUserCity, loadWeather, dispatch }))

export default compose(withConnect)(WeatherHomeContainer);