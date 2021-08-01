import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import '../../style.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                console.log('Нажали Esc, нужно закрить модалку');
                this.props.onClose();
            }
        }

    handleBackdropClick = e => {
        // console.log('Кликнули в бекдроп');
        // console.log('currentTarget:', e.currentTarget);
        // console.log('target:', e.target)

        if (e.currentTarget === e.target) {
            this.props.onClose();
        }

    }
    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
            <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

