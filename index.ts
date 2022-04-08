import './style.css';

import { of, map, Observable, interval, filter } from 'rxjs';

const myObservable = interval(3000);

const subscription = myObservable
  .pipe(
    filter((x) => x < 4),
    map((x) => 2 * x)
  )
  .subscribe({
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log('jordiii'),
  });

function subscribe(arg0: {
  next: (value: any) => void;
  error: (error: any) => void;
  complete: () => void;
}) {
  throw new Error('Function not implemented.');
}
