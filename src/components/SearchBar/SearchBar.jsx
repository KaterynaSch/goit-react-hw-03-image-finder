import { LabelBtn, SearchBtn, SearchForm, SearchInput, Searchbar } from "./SearchBar.styled"

export const SearchBar = ({onSubmit}) => {
    return (
        <Searchbar >
            <SearchForm onSubmit={onSubmit}>            
                <SearchInput type="text" autoComplete="off" autoFocus placeholder="Search images and photos"/>
                <SearchBtn type="submit" >Search</SearchBtn>
            </SearchForm>
        </Searchbar>
        
    )
}