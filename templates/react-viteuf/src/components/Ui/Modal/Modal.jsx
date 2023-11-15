import React, { useEffect, useRef } from 'react';
import './Modal.module.scss';
import modalsData from '../../../data/global/modals.json';
import ReactDOM from 'react-dom';


// const Modal = ({ content }) => {
//   const modalRef = useRef(null);




const Modal = (props) => {
  useEffect(() => {
    const title = modalsData.modals.find((modal) => modal.id === title);
    const content = modalsData.modals.find((modal) => modal.id === content);
    if (!title || !content) {
      console.error('Modal id not found!');
      return;
    }
  }, [content]);

  useEffect(() => {
    const content = modalsData.modals.find((modal) => modal.id === content);
    if (!content) {
      console.error('Modal Content not found!');
      return;
    }
   }, [content]);
   


//     modalRef.current.innerHTML =
//       `<h2>${modal.title}</h2>` +
//       '<button type="button" class="close-button">Close</button>' +
//       `<p>${modal.content}</p>`;

//     modalRef.current.querySelector('.close-button').addEventListener('click', () => {
//       modalRef.current.style.display = 'none';
//     });
//   }, [content]);

//   return <div className="modal" ref={modalRef} />;
// };

// export default Modal;


  if (!props.show) {
    return null;
  }
  return  ReactDOM.createPortal(
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
};
export default Modal;
