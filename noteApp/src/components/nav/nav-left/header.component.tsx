import "./header.component.css";
import { RegPenIcon } from "../../common/icons/regpen.icon";
import { Fragment } from "react/jsx-runtime";
import { LogoLayout } from "./logo/logo.componnent";
import { MyNotes } from "./notes/my-notes/my-note.component";

export const Header = () => {
  return (
    <>
      <header className="sidebar" data-sidebar>
        <Fragment>
          <LogoLayout />
        </Fragment>

        <button className="fab" data-note-create-btn>
          <RegPenIcon customClassName="menu-btn material-symbols-rounded" />
          <span className="text text-label-large">New note</span>
          <div className="state-layer"></div>
        </button>
        <div className="wrapper wrapper-2">
          <h2 className="text-title-small">NOTEBOOKs</h2>
          <button className="btn-icon large" data-tooltip="Create new notebook">
            <RegPenIcon customClassName="menu-btn material-symbols-rounded" />
            <div className="state-layer"></div>
          </button>
        </div>
        <nav className="nav custom-scrollbar" data-sidebar-list>
          <Fragment>
            <MyNotes />
          </Fragment>
        </nav>
      </header>
    </>
  );
};
