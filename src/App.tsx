import "./App.sass";
import { Route, Routes } from "react-router-dom";
import { RouteWithLayout } from "./components/RouteWithLayout";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RouteWithLayout />}>
                    <Route index element={<Projects />} />
                    <Route path="/:id" element={<Project />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
