import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./modal";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalhandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>

                {modalIsOpen && (
                    <Modal onCancel={closeModalhandler} onConfirm={closeModalhandler} />
                )}
                {modalIsOpen && <Backdrop onCancel={closeModalhandler} />}
            </div>
        </div>
    );
}

export default Todo;
