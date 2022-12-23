import SearchButton from 'components/SearchButton';
import './styles.css';

const SearchArea = () => {
    return (
        <div className="area">
            <div className="internalArea">
                <p>Digite sua busca</p>
            <SearchButton />
            </div>
        </div>
    )
}

export default SearchArea;