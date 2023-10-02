import { Route, Routes } from "react-router-dom";

import { RouteWithLayout } from "./components/RouteWithLayout";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";

import "./App.sass";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/projects-under-control" element={<RouteWithLayout />}>
                    <Route index element={<Projects />} />
                    <Route path="/projects-under-control/:id" element={<Project />} />
                </Route>
            </Routes>
        </div>
    );
};
