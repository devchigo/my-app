import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./modal";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalhandler() {
        setModalIsOpen(False);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>

                {modalIsOpen && <Modal />}
                {modalIsOpen && <Backdrop onClick={closeModalhandler} />}
            </div>
        </div>
    );
}

export default Todo;
