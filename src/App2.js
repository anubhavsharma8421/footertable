function App() {
    const apiKey = "b9a8cc94d032441a613b22a42acae234";
    const [data, SetData] = useState({});
    const [inputCity, SetInputCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const getWeatherDetails = (cityNAME) => {
      if (!cityNAME) return;
  
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityNAME}&APPID=${apiKey}`;
  
      setLoading(true);
  
      axios
        .get(apiUrl)
        .then((res) => {
          console.log("response", res.data);
          SetData(res.data);
        })
        .catch((err) => {
          console.log("error", err);
          setError("Error fetching weather data. Please try again.");
        })
        .finally(() => setLoading(false));
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      getWeatherDetails(inputCity);
    };
  
    const handleChangeInput = (e) => {
      console.log("value", e.target.value);
      SetInputCity(e.target.value);
    };
  
    return (
      <div className="col-md-12">
        <div className="weather-bg">
          <h1 className="heading">Weather App</h1>
          <form>
            <div className="d-grid mt-3 gap-3 col-4">
              <input
                type="text"
                className="form-control"
                onChange={handleChangeInput}
                value={inputCity}
                required
                autoFocus
                id="weatherinput"
              />
              <button type="submit" className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </form>
        </div>
  
        {loading && <p>Loading...</p>}
  
        {error && <p className="text-danger">{error}</p>}
  
        {Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center mt-5">
            <div className="shadow rounded weatherResultBox">
              <img
                src="https://cdn-icons-png.freepik.com/128/1163/1163661.png"
                className="weatherIcon"
                alt="weather-icon"
              />
              <h5 className="weatherCity">{data?.name}</h5>
              <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default App;