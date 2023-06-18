import { UseGloblaContext } from "../context"
import Modal from 'react-bootstrap/Modal';

function MyModal() {
  const { show, setShow, selectedMeal } = UseGloblaContext();
  const { strMeal: title, strMealThumb: image, strInstructions: recipy, strSource: source } = selectedMeal;

  const onHide = () => setShow(false);

  return (
    <>
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