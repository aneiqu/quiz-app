import { Navigate, useLocation } from "react-router-dom";
import Result from "./index.tsx";

export default function ProtectedResult() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <Navigate to={"/"} replace />;
  }

  return <Result />;
}
