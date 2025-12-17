import StudentDataGrid from "./StudentDataGrid";
import AddStudent from "./AddStudent";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<StudentDataGrid />} />
      <Route path="/add-student" element={<AddStudent />} />
    </Routes>
  );
}

export default App;
