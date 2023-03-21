import { Link, Outlet } from "react-router-dom";

const EmployeeSingle = () => {
  return (
    <>
      <h1>EmployeeSingle Page</h1>;
      <ul>
        <li>
          <Link to={"/employees/1/info"}>Info</Link>
        </li>
        <li>
          <Link to={"/employees/1/vacation"}>vacation</Link>
        </li>
        <li>
          <Link to={"/employees/1/courses"}>Courses</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default EmployeeSingle;
