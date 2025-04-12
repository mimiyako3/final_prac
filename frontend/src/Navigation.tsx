import { FC } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  const navigate = useNavigate();
  return (
    <div id ="menu">
    <nav id={id} aria-hidden={!open} className="navigation">
      
      <ul>
        <li><a href="#"  type = "button" onClick ={() => navigate('Record')}>記録</a></li>
        <li><a href="#">ランキング</a></li>
        <li><a href="#">設定</a></li>
      </ul>
      
    </nav>
    </div>
  );
};
export default Navigation;
