import { FaRegTrashCan } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const TrashIcon = (props: IconProp) => {
    const { customClassName } = props;
  return (
    <IconContext.Provider
      value={{
        className: {customClassName},
      }}
    >
      <div style={{ marginLeft: -8 }}>
        <FaRegTrashCan />
      </div>
    </IconContext.Provider>
  );
};
