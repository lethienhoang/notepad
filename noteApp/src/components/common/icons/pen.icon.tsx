import { FaPen } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const PenIcon = (props: IconProp) => {
  const { customClassName } = props;
  return (
    <IconContext.Provider
      value={{
        className: { customClassName },
      }}
    >
      <div style={{ marginLeft: -8 }}>
        <FaPen />
      </div>
    </IconContext.Provider>
  );
};
