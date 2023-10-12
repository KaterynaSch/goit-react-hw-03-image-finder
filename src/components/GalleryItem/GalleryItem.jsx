import { ImageGalleryItem, ItemImg } from "./GalleryItem.styled"

export const GalleryItem = ({id, webformatURL}) => {
   return(
        <ImageGalleryItem key = {id}>
            <ItemImg src={webformatURL} alt='' />
        </ImageGalleryItem>
    
   )
}



// return(
//     <ListItem key={id}>
//         <span>{contact.name}: {contact.number}</span>             
//         <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
//             Delete
//         </DeleteBtn>
//     </ListItem>
// )