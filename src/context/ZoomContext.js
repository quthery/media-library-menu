import { createContext, useContext, useState, useCallback } from 'react';

const ZoomContext = createContext();

export function ZoomProvider({ children }) {
  const [zoom, setZoom] = useState(false);
  const triggerZoom = useCallback(() => setZoom(true), []);
  return (
    <ZoomContext.Provider value={{ zoom, triggerZoom }}>
      {children}
    </ZoomContext.Provider>
  );
}

export function useZoomContext() {
  return useContext(ZoomContext);
}
