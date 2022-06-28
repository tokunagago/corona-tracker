import Header from "../components/Header";
import Title from "../components/Title";
import Results from "../components/Results";
import Selecotor from "../components/Selector";

type TopPageType = {
  countriesJson: {
    Country: string,
    Slug: string
  }[],
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number
  },
  loading: boolean
};

const TopPage = ({countriesJson, setCountry, countryData, loading}: TopPageType) => {
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