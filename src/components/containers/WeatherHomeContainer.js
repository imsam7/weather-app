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
        const json = {
            "display": "form",
            "settings": {
                "pdf": {
                    "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
                    "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
                }
            },
            "components": [
                {
                    "label": "Select",
                    "tableView": true,
                    "data": {
                        "values": [
                            {
                                "label": "",
                                "value": ""
                            }
                        ]
                    },
                    "selectThreshold": 0.3,
                    "validate": {
                        "onlyAvailableItems": false
                    },
                    "key": "select",
                    "type": "select",
                    "indexeddb": {
                        "filter": {}
                    },
                    "input": true
                },
                {
                    "type": "button",
                    "label": "Submit",
                    "key": "submit",
                    "disableOnInvalid": true,
                    "input": true,
                    "tableView": false
                }
            ]
        }
        // e.preventDefault()
        // const { username } = this.props.match.params
        // this.props.dispatch(loadUserCity({ userName: 'imsam7' }))
        // this.props.dispatch(loadWeather({ city: 'Bhopal' }))
        // console.log(this.props.followersData)
    }

    render() {
        // if (this.props.followersData.loading)
        //     return <Loader />
        // return <h1>Hello</h1>
        // return <Form src="json" onSubmit={console.log} />
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