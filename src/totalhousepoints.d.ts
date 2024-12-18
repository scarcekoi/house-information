declare module './charts/totalhousepoints.jsx' {
  import React from 'react';

  interface Counters {
    Baldwin: number;
    Sotomayor: number;
    Mandela: number;
    Truth: number;
  }

  const TotalHousePoints: React.FC<{ counters: Counters }>;

  export default TotalHousePoints;
}
