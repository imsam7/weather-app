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
import FormioUtils from 'formiojs/utils';

class WeatherHomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cityChange = this.cityChange.bind(this);
    }

    cityChange = (e) => {
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