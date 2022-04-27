import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
const FormModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.header}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p>
                        {props.text}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Fermer</Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
}
export default FormModal;