
import { ImageGalleryItem } from "components/GalleryItem/GalleryItem.styled"
import { ImageGalleryList } from "./ImageGallery.styled"


export const ImageGallery = ({images}) => {
    return(
        <ImageGalleryList >
            {images.map(item => 
                <ImageGalleryItem key={item.id} />
            )} 
        </ImageGalleryList>
    )
}
// export const ContactList = ( {contacts, onDelete }) => {
//     return (
//         <List>
//             {contacts.map(item =>         
//                 <ContactListItem key = {item.id } contact={item} onDelete={onDelete}/>
//              ) }               
//         </List>        
//     )
// } 

// const item = arr.map(item => 
//     `<div class="photo-card">
//         <a href="${item.largeImageURL}">
//             <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
//         </a>
//       <div class="info">