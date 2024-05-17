import Home from "../pages/Home";
import Coursesrouter from "../pages/coursesrouter";

export const root = [
    {
        "path": "/",
        "element": <Coursesrouter />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]