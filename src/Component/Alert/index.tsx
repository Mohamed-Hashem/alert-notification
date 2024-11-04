import { CircleX } from "lucide-react";
import { IPropsAlert } from "../../Interface";
import "./index.scss";

const Alert = ({ title, description, type, icon, children }: IPropsAlert) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h2>{title}</h2>
        </div>
        <CircleX className="close" size={20} />
      </div>
      {children || <p>{description}</p>}
    </div>
  );
};

export default Alert;
