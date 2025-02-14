
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  
  // Use this to navigate immediately when component mounts
  useEffect(() => {
    navigate("/address/list");
  }, [navigate]);

  return null;
};

export default Main;
