import { useState } from "react";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => setOpenModal(true)}
        className="show_modal App-header"
        aria-controls="Modal"
        aria-expanded={openModal}
      >
        Show Modal
      </button>

      {openModal && (
        <div className="modal" aria-label="Modal">
          <button onClick={() => setOpenModal(false)} className="close_modal">
            X
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            aperiam culpa id? Et culpa animi eaque similique rem nisi dolores,
            nulla voluptate? Ipsum laboriosam est quo, minima eligendi dolores
            assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem hic ducimus expedita non eligendi? Excepturi ratione, ad
            quisquam similique corporis porro quidem odio accusantium, earum ab,
            ut dolores optio repellendus.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
