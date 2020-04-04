import React from 'react';
import './modal.css';

export default ({ component: Component, close }) => {
    return (
        <>
            <div className="modal-background" onClick={close}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <Component />
                </div>
            </div>
        </>
    )
}