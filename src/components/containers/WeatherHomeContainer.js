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


class WeatherHomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cityChange = this.cityChange.bind(this);
    }

    cityChange = (e) => {
        // if (e !== undefined)
        // console.log(e.target.value)
        if (e.data.select != "")
            this.props.dispatch(loadWeather({ city: e.data.select }))
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
                <center><Form form={form} className="myForm" onChange={this.cityChange} /></center>


                {/* <div >
                    <i className="pin-icon"></i>
                    <input list="cityDropdown" name="cities" id="cities" onChange={this.cityChange} className="search-bar" autocomplete="on"/>
                    <i className="search-icon"></i>
                </div>

                <datalist id="cityDropdown">
                    {cities.map((cityList, index) => (
                        <option value={cityList.city}></option>
                    ))}
                </datalist> */}

                {this.props.weatherData.loading ? <Loader /> : <WeatherHomeLayout forecastDetails={this.props.weatherData.weather} />}
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