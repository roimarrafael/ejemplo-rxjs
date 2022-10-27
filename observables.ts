import { fromEvent, map, tap } from 'rxjs';

export const obs$ = fromEvent(document, 'scroll').pipe(
  map((event) => {
    return (event.target as Document).documentElement;
  }),
  map((docu) => ({
    scrollTop: docu.scrollTop,
    scrollHeight: docu.scrollHeight,
    clientHeight: docu.clientHeight,
  })),
  map(({ scrollTop, scrollHeight, clientHeight }) => {
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }),
  map((event) => {
    return parseFloat(event.toFixed(2));
  })
);
