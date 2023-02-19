import ReactDOM from 'react-dom/client';
import App from './App';
import data from './data.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App data={data} />);
