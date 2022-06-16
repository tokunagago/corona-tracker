import Title from "../components/Title";
import Results from "../components/Results";
import Selecotr from "../components/Selector";

const TopPage = (props) => {
  return (
    <div>
      <Title />
      <Selecotr countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Results />
    </div>
  );
};

export default TopPage;