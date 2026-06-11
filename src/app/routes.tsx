import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { CaseStudy } from "./pages/CaseStudy";
import { Hobbies } from "./pages/Hobbies";
import { HobbyDetail } from "./pages/HobbyDetail";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: CaseStudy },
      { path: "hobbies", Component: Hobbies },
      { path: "hobbies/:id", Component: HobbyDetail },
      { path: "contact", Component: Contact },
      { path: "resume", Component: Resume },
    ],
  },
]);
