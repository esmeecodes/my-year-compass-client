import React from "react";

const CompassContext = React.createContext();

const CompassProvider = ({ children }) => {
  const [compassId, setCompassId] = useState(null);

  return (
    <CompassContext.Provider value={{ compassId, setCompassId }}>
      {children}
    </CompassContext.Provider>
  );
};

export default { CompassProvider, CompassContext };
