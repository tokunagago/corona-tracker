import Header from "../components/Header";
import Title from "../components/Title";
import Results from "../components/Results";
import Selecotor from "../components/Selector";

const TopPage = ({countriesJson, setCountry, countryData, loading}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selecotor countriesJson={countriesJson} setCountry={setCountry} />
        <Results countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;