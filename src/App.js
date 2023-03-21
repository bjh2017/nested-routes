import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Employees from "./employees";
import EmployeeVacation from "./employeeVacation";
import EmployeeInfo from "./employeeInfo";
import EmployeeCourses from "./employeeCourses";
import About from "./about";
import Home from "./home";
import EmployeeSingle from "./employeeSingle";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/employees"}>Employees</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/employees/1"}>one employee</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeeSingle />}>
          <Route path="vacation" element={<EmployeeVacation />} />
          <Route path="" element={<EmployeeInfo />} />
          <Route path="info" element={<EmployeeInfo />} />
          <Route path="courses" element={<EmployeeCourses />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
