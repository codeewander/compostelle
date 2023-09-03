import { ButtonType, ButtonSize } from "../../styles/theme.js";

const Button = ({ size, type, children }) => {
  const classNames = `${ButtonType[type]} ${ButtonSize[size]}`;
  return <button className={classNames}>{children}</button>;
  
};

// <Button size="sm" type="basic" ></Button>
export default Button;