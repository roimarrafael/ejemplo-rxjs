import * as React from 'react';
import { obs$ } from './observables';
import './style.css';

let texto = '';

for (let i = 0; i <= 10000; i++) {
  texto += 'abcd dcd';
}

export default function App() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    obs$.subscribe((event) => {
      console.log(event);
      setWidth(event);
    });
  }, []);
  return (
    <div>
      <div className="progresbar" style={{ width: `${width}%` }} />
      <h1>Hello StackBlitz!</h1>
      {texto}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
