import "./App.sass";
import { Route, Routes } from "react-router-dom";
import { RouteWithLayout } from "./components/RouteWithLayout";
import { Projects } from "./components/Projects";
import { Tasks } from "./components/Tasks";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RouteWithLayout />}>
                    <Route index element={<Projects />} />
                    <Route path="/:id" element={<Tasks />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
