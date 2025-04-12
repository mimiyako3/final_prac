import { FC } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

type Props = {
  open: boolean;
  id: string;
};

export const PopUp: FC<Props> = ({ open, id }) => {
  const navigate = useNavigate();
  return (
    <div id ="menu">
    <nav id={id} aria-hidden={!open} className="navigation">
      
      <h1>新しいボタンを作成します。</h1> 
      <a>名前：</a>     
      <text/>
    </nav>
    </div>
  );
};
export default PopUp;
