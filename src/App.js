import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import countriesJson from '../src/countries.json';
import TopPage from './pages/TopPage';
import WorldPage from './pages/WorldPage';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState('japan');
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: ''
  });

  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch(`https://api.covid19api.com/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered
        });
        setLoading(false);
      })
      .catch((error) => alert('エラーが発生しました。'));
    };
    getCountryData();
  }, [country]);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
    .then((res) => res.json())
    .then((data) => setAllCountriesData(data.Countries))
    .catch((error) => alert('エラーが発生しました。'));
  }, []);
  const [allCountriesData, setAllCountriesData] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />}></Route>
          <Route path="/world" element={ <WorldPage allCountriesData={allCountriesData} /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
