import { ViteVisualEditor } from '@adminide-stack/vite-visualeditor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

const AppContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ViteVisualEditor
      defaultEnabled={false}
      onSave={(changes) => {
        console.log('Changes to save:', changes);
      }}
    >
      <AppContent />
    </ViteVisualEditor>
  );
}

export default App;