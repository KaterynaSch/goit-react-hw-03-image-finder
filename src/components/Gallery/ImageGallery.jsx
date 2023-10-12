
import { ImageGalleryList } from "./ImageGallery.styled"
import { GalleryItem } from "components/GalleryItem/GalleryItem"


export const ImageGallery = ({images}) => {
    return(
        <ImageGalleryList >
            {images.map(item => 
                <GalleryItem key={item.id} image={item} />
                
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