import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { loadUserCity } from '../../shared/state/userCity/actions'
import { loadWeather } from '../../shared/state/weather/actions'
import WeatherHomeLayout from '../layouts/WeatherHomeLayout'
import Loader from '../../shared/components/loader'
import SearchBar from 'material-ui-search-bar';
import {Form} from 'react-formio';

class WeatherHomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(e) {
        // e.preventDefault()
        // const { username } = this.props.match.params
        // this.props.dispatch(loadUserCity({ userName: 'imsam7' }))
        // this.props.dispatch(loadWeather({ city: 'Bhopal' }))
        // console.log(this.props.followersData)
    }

    render() {
        // if (this.props.followersData.loading)
        //     return <Loader />
        return <Form src="https://example.form.io/example" onSubmit={console.log} />
        return <SearchBar id="autocomplete" placeholder="Search City" hintText="Search City"
            style={{
                margin: '0 auto',
                maxWidth: 800,
            }}
        />
        return <WeatherHomeLayout userCityData={this.props.userCityData} />
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