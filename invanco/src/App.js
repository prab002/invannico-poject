import { Route, Routes } from "react-router-dom";
import GetUser from "./components/getuser/GetUser";
import Adduser from "./components/adduser/adduser";
import Update from "./components/adduser/update/Update";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetUser />} />
        <Route path="add" element={<Adduser />} />
        <Route path="edit/:id" element={<Update />} />
        <Route path="update" element={"update"} />
        <Route path="*" element={"wrong location"} />
      </Routes>
    </div>
  );
}

export default App;
