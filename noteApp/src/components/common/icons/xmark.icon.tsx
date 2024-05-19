import { FaXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const XmarkIcon = (props: IconProp) => {
  const { customClassName } = props;
  return (
    <IconContext.Provider
      value={{
        className: { customClassName },
      }}
    >
      <div style={{ marginLeft: -8 }}>
        <FaXmark />
      </div>
    </IconContext.Provider>
  );
};
