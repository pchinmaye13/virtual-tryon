import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
      🔙 Go Back
    </button>
  );
};

export default BackButton;
