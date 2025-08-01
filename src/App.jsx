




import MediaMenu from './components/MediaMenu';
import { useZoom } from './hooks/useZoom';
import './App.css';




function App() {
  const [zoom] = useZoom();
  return (
    <div className="app-root">
      <MediaMenu />
      {/* Здесь основной контент */}
    </div>
  );
}


export default App;
