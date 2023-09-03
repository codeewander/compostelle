import { useRoutes } from "react-router-dom";



import HowToPrepare from "./pages/HowToPrepare";
import HowToGetInfo from "./pages/HowToGetInfo";
import QA from "./pages/QA";

const Router = () => {
  let elements = useRoutes([
    {
      path:'/',
      element: <Home />,
      children : [
        { path:'walking-map', element: <WalkingMap /> },
        { path:'via-routes', element: <ViaRoutes /> },
        { path:'pre-trip', 
          element: <PreTrip />,
          children : [
            { path:'how-to-plan', element: <HowToPlan /> },
            { path:'how-to-prepare', element: <HowToPrepare /> },
            { path:'how-to-get-info', element: <HowToGetInfo /> },
          ] },
        { path:'qa', element: <QA /> },
      ]
    }
  ])
  return elements;
}

export default Router;