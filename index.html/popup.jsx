import React from 'react';
import './popup.css';

function Popup({ isOpen, closePopup, children }) {
    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={closePopup} className="close-btn">Close</button>
                {children}
            </div>
        </div>
    );
}

export default Popup;
