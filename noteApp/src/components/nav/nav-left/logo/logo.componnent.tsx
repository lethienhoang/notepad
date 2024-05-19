import { XmarkIcon } from "../../../common/icons/xmark.icon";
import NotepadLogo from "../../../../assets/NotepadLogo.png";

export const LogoLayout = () => {
  return (
    <>
      <div className="wrapper wrapper-1">
        <div className="wapper-logo">
          <img src={NotepadLogo} alt="" className="header logo-1" />
          <h3 className="logo-1 text-title">Note app</h3>
        </div>

        <button
          className="menu-btn btn-icon large"
          aria-label="Close menu"
          data-sidebar-toggler
        >
          <XmarkIcon customClassName="menu-btn material-symbols-rounded" />
          <div className="state-layer"></div>
        </button>
      </div>
    </>
  );
};
