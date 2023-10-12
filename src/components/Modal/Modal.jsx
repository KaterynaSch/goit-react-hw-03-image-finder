import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');  

export const GalleryModal = ({isOpen, onRequestClose, image}) => {
    return (
        < Modal 
            isOpen = { isOpen } 
            // onAfterOpen = { afterOpenModal } 
            onRequestClose = { onRequestClose } 
            style = { customStyles }             
            >
            {/* <div class="overlay">
                <div class="modal"> */}
                    <img src={image.largeImageURL} alt="" width="640"/>
                {/* </div>
            </div>    */}
        </Modal> 
    )
};


  /*
 * Стили компонента Modal
 */

// .Overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.8);
//     z-index: 1200;
//   }
  
//   .Modal {
//     max-width: calc(100vw - 48px);
//     max-height: calc(100vh - 24px);
//   }
  