import * as React from 'react';
import { obs$ } from './observables';
import Otro from './Otro';
import './style.css';

let texto = '';

for (let i = 0; i <= 10000; i++) {
  texto += 'abcd dcd';
}

export default function App() {
  const [width, setWidth] = React.useState(0);
  const [show, setShow] = React.useState(false);
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
      {show && <Otro texto={texto} />}
      <button onClick={() => setShow((e) => !e)}>ver ?</button>
      <br />
      {texto}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
