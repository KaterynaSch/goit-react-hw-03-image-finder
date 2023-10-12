import { useState } from "react"
import { GalleryModal } from "components/Modal/Modal"
import { ImageGalleryItem, ItemImg } from "./GalleryItem.styled"


export const GalleryItem = ({image}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

   return(
        <ImageGalleryItem >
            <ItemImg src={image.webformatURL} alt='' onClick={openModal} />
            <GalleryModal image={image}
                isOpen={isModalOpen}
                onRequestClose={closeModal}/>                           
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