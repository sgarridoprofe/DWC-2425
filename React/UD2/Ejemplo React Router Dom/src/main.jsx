import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router";
import './index.css'
import Myapp from './Myapp';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Myapp></Myapp>
  </BrowserRouter>,
)
