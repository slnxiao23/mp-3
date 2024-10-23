import AboutPage from './components/about-page';
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/header';
import Education from './components/education';
import Hobby from './components/hobby';
import Skill from './components/skill';
import Project from './components/project';
import WorkExperience from './components/work-experience';
import Navigation from './components/nav';
import Footer from './components/footer';
import { RootWrapper, LayoutContainer } from './components/style';
import CreditPage from './components/credit-page';


const Root = () => {
  return (
    <RootWrapper>
      <Header /> 
      <LayoutContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/credit-page" element={<CreditPage />} />
        </Routes>
      </LayoutContainer>
  
      <Footer />
    </RootWrapper>
  );
}

const router = createBrowserRouter(
  [{ path: "*", element: <Root /> }]
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
