import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App.tsx';
import { indexTemplate } from './indexTemplate.js';
import compression from 'compression';
import helmet from 'helmet';

const app = express();

app.use('/static', express.static('./dist/client'));
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false,
}));

app.get('*', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App)));
});
app.listen(3000, () => {
  console.log('server started on http://localhost:3000/');
});
