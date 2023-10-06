import { Route, Routes } from "react-router-dom";
import { dumydata } from "../../Assets/dummydata/setting";
import RowMaterial from "../../Pages/Companies/Scope_3/RowMaterial";

const Innerroutes = () => {
  const routes = Object.values(dumydata);
  const keys = Object.keys(dumydata);
  console.log(routes);

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={`/${route}`}
            element={<RowMaterial title={keys[index]} />}
          />
        ))}
      </Routes>
    </>
  );
};

export default Innerroutes;
