import { FaRegPenToSquare } from "react-icons/fa6";
import { IconContext } from "react-icons";
export const RegPenIcon = (props: IconProp) => {
  const { customClassName } = props;
  return (
    <IconContext.Provider
      value={{
        className: { customClassName },
      }}
    >
      <div style={{ marginLeft: -8 }}>
        <FaRegPenToSquare />
      </div>
    </IconContext.Provider>
  );
};
