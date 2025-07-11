

import { useState, useRef, useEffect } from 'react';
import MediaMenu from './components/MediaMenu';
import './App.css';


function App() {
  const [isFlying, setIsFlying] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        setIsFlying(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`page-container${isFlying ? ' fly-to-light' : ''}`}
      style={{ minHeight: '100vh', width: '100vw' }}
    >
      <MediaMenu />
      {/* Здесь основной контент */}
    </div>
  );
}
export default App
