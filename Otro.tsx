import * as React from 'react';
import './style.css';

export default function Otro({ texto }: { texto: string }) {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {}, []);
  return (
    <div className="ventana">
      <div className="progresbar" style={{ width: `${width}%` }} />
      <h1>Hello StackBlitz!</h1>
      {texto}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
