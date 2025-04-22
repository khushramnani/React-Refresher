import React from "react";
import {createBrowserRouter , RouterProvider} from "react-router-dom" 
import Mainlayout from "./layout/Mainlayout";
import FetchOld from "./Components/FetchOld";
import FetchQueryContainer from "./Components/FetchQuery";
import Fetchindv from "./Components/Fetchindv";
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
        },
        {
            path:"/fetchindv/:id",
            element:<Fetchindv/>
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
