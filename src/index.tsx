import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  const rootEl = document.getElementById('root');
console.log('rootEl:', rootEl);
  root.render(
        <App />
  );