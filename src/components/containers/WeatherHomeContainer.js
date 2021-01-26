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
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class WeatherHomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cityChange = this.cityChange.bind(this);
    }

    cityChange = (e, data) => {
        if (data.city)
            this.props.dispatch(loadWeather({ city: data.city }))
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
                                options={cities}
                                // defaultValue={this.props.userCityData.userCityDetails.city}
                                fullWidth={true}
                                disableListWrap
                                disableClearable
                                getOptionLabel={(option) => option.city + ", " + option.admin_name}
                                // style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Search City" variant="outlined"/>}
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