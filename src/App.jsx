import { Route, Routes } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import MainLayout from "./layouts/Main.layout";
import Tables from "./views/Tables";
import FromPlan from "./views/FormPlan/FormPlan";
import UploadPlan from "./views/UploadTable";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/tables" element={<Tables />} />
        <Route path="/create-new-plan" element={<FromPlan />} />
        <Route path="/upload-plan" element={<UploadPlan />} />
      </Route>
    </Routes>
  );
};

export default App;
