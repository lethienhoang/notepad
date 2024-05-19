import { PenIcon } from "../../../../common/icons/pen.icon";
import { TrashIcon } from "../../../../common/icons/trash.icon";

export const MyNotes = () => {
  return (
    <>
      <div className="nav-item">
        <span className="text textlabel-large" data-notebook-field>
          My Notebook
        </span>
        <button
          className="btn-icon large"
          aria-label="Edit notebook"
          data-tooltip="Edit notebook"
          dta-edit-btn
        >
          <PenIcon customClassName="menu-btn material-symbols-rounded" />
          <div className="state-layer"></div>
        </button>

        <button
          className="btn-icon large"
          aria-label="Delete notebook"
          data-tooltip="Delete notebook"
          data-delete-btn
        >
          <TrashIcon customClassName="menu-btn material-symbols-rounded" />
          <div className="state-layer"></div>
        </button>
        <div className="state-layer"></div>
      </div>

      <div className="nav-item">
        <span className="text textlabel-large" data-notebook-field>
          My Notebook 1
        </span>
        <button
          className="btn-icon large"
          aria-label="Edit notebook"
          data-tooltip="Edit notebook"
          dta-edit-btn
        >
          <PenIcon customClassName="menu-btn material-symbols-rounded" />
          <div className="state-layer"></div>
        </button>

        <button
          className="btn-icon large"
          aria-label="Delete notebook"
          data-tooltip="Delete notebook"
          data-delete-btn
        >
          <TrashIcon customClassName="menu-btn material-symbols-rounded" />
          <div className="state-layer"></div>
        </button>
        <div className="state-layer"></div>
      </div>
    </>
  );
};
