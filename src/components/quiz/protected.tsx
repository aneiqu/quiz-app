import { Navigate, useLocation } from "react-router-dom";
import Quiz from "./index.tsx";

export default function ProtectedQuiz() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <Navigate to={"/"} replace />;
  }

  return <Quiz />;
}
