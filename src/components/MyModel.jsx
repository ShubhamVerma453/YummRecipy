import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function MyModal({ title, recipy, image, source }) {
  const [show, setShow] = useState(false);
  const onHide = () => setShow(false);

  return (
    <>
      <button onClick={() => setShow(true)} className="btn">check</button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className='model-img'>
          <img src={image} alt="" />
        </div>
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {recipy}
          </p>
          <div className='model-btn'>
            <a href={source} target="_blank" rel="noreferrer" className='btn me-5'>Source</a>
            <button className="btn" onClick={onHide}>Close</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;