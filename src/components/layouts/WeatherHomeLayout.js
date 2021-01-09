import SearchBar from 'material-ui-search-bar';

function WeatherHomeLayout({ userCityData }) {
    return (
        <div className="cUWXFh ">

            <div>
                <h1 className="">Followers</h1>
            </div>

            <form class="form " role="search">
                <div class="input-group">
                    <input class="form-control" placeholder="Enter City" name="srch-term" id="srch-term" type="text" />
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </form>

            

            {/* <div className="">
                {followersData.map((follower) => (
                    <div className="card">
                        <img src={follower.avatar_url} alt="Avatar" style={{ width: '20%' }} />
                        <div className="container">
                            <h4><b>{follower.login}</b></h4>
                            <a href={follower.html_url}>Visit Profile on Github</a>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default WeatherHomeLayout;