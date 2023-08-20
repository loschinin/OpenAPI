import { createRoot } from 'react-dom/client';

import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// if (module.hot) {
//   module.hot.accept();
// }

root.render(<App />);
