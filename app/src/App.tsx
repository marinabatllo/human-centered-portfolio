import { ThemeProvider } from '@/contexts/ThemeContext';
import { RouterProvider, Routes, Route } from '@/lib/router';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { About } from '@/pages/About';
import { CV } from '@/pages/CV';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
