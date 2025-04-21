import React from "react";
import {createBrowserRouter , RouterProvider} from "react-router-dom" 
import Mainlayout from "./layout/Mainlayout";
import FetchOld from "./Components/FetchOld";
import FetchQueryContainer from "./Components/FetchQuery";

const routes = createBrowserRouter([{
    path:"/",
    element: <Mainlayout/>,
    children:[
        {
            path:"/fetchOld",
            element:<FetchOld/>
        },
        {
            path:"/fetchwith-tq",
            element:<FetchQueryContainer/>
        }
]
}])

const App = () => {
    return (
       <>
<RouterProvider router={routes}>
        
</RouterProvider>
       
       </>
    );
};

export default App
