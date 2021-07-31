// import React, { Component } from 'react';
// import Modal from './components/Modal';
// // import Button from './components/Button';


// class App extends Component {
//     state = {
//         // contacts: [],
//         // filter: '',
//         showModal: false,
//     }

//     toggleModal = () => {
//         this.setState(({showModal}) => ({
//             showModal: !showModal, 
//         }))
//     }

//     render() {
//         const { showModal } = this.state;
        
//         return (
//             <>
//                 <button type="button" onClick={this.toggleModal}>
//                     Открыть модалку
//                 </button>
//                 {showModal && (
//                     <Modal onClose={this.toggleModal}>
//                         <h1>Привет это контент модалки как children</h1>
//                         <p>
//                             at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis
//                         </p>
//                         <button type="button" onClick={this.toggleModal}>
//                             Закрыть модалку
//                         </button>

//                     </Modal>)}
//                 {/* <Button onClick={this.toggleModal} aria-label="добавить todo"></Button> */}
//             </>
//         )
//     }
// }

// export default App;

import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar'
import ImageGalleryItem from './components/ImageGalleryItem'

export default class App extends Component {
   
    state = {
        pokemonName: ''
    }
    handleSearchSubmit = pokemonName => {
        this.setState({pokemonName});
    }

    render() {
        const { pokemonName } = this.state;
        return (
            <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
                <ImageGalleryItem pokemonName={pokemonName}/>
                <Searchbar onHandleSearchSubmit={this.handleSearchSubmit} />
            </div>
        )
    }
}
