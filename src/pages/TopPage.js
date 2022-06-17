import Title from "../components/Title";
import Results from "../components/Results";
import Selecotor from "../components/Selector";

const TopPage = (props) => {
  return (
    <div className="top-page-container">
      <div>
        <Title />
        <Selecotor countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
        <Results countryData={props.countryData} />
      </div>
    </div>
  );
};

export default TopPage;