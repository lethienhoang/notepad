import { TrashIcon } from "../../common/icons/trash.icon";
import "./main.component.css"

export const Main = () => {
  return (
    <>
      <main className="main">
        <div className="header">
          <div className="wrapper">
            <p className="title text-title-small">My notebook</p>
          </div>
        </div>
        <div className="note-list">
          <div className="card">
            <h3 className="cart-title text-medium">Note title</h3>
            <p className="card-text text-body-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="wrapper">
              <span className="card-time text-label-larg">20 min ago</span>
              <button
                className="btn-icon large"
                aria-label="Delete notebook"
                data-tooltip="Delete notebook"
                data-delete-btn
              >
                <TrashIcon customClassName="menu-btn material-symbols-rounded" />
                <div className="state-layer"></div>
              </button>
            </div>
            <div className="state-layer"></div>
          </div>
        </div>
      </main>
    </>
  );
};
