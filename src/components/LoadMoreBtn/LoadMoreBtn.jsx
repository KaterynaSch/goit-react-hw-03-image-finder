import { LoadMoreStyled } from "./LoadMoreBtn.styled"

export const LoadMoreBtn = ({LoadMore}) => {
    return(
        <LoadMoreStyled type="button" onClick={LoadMore} >
            Load more
        </LoadMoreStyled>
    )
}