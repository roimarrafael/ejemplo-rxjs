import * as React from 'react';
import { fromEvent, map, tap } from 'rxjs';
import './style.css';

const observe = {
  next: (e) => console.log('hijo', e),
  complete: () => console.log('termino'),
};

export default function Otro({ texto }: { texto: string }) {
  const [width, setWidth] = React.useState(10);
  const inputEl = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const obs$ = fromEvent(inputEl.current, 'scroll').pipe(
      map((event) => {
        return event.target;
      }),
      map((docu: any) => ({
        scrollTop: docu.scrollTop,
        scrollHeight: docu.scrollHeight,
        clientHeight: docu.clientHeight,
      })),
      map(({ scrollTop, scrollHeight, clientHeight }) => {
        return (scrollTop / (scrollHeight - clientHeight)) * 100;
      }),
      map((event) => {
        return parseFloat(event.toFixed(2));
      }),
      tap(observe)
    );
    const end = obs$.subscribe((e) => setWidth(e));
    return () => {
      end.unsubscribe();
    };
  }, []);
  return (
    <div ref={inputEl} className="ventana">
      <div className="progresbar" style={{ width: `${width}%` }} />
      <h1>Hello StackBlitz!</h1>
      {texto}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
