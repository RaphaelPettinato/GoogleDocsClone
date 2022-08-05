import TextEditor from "./TextEditor";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
} from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element= { <Navigate to={`/documents/${uuidV4()}`} /> } />

            <Route path="/documents/:id" element={ <TextEditor/> } />
        </Routes>
    </Router>
    )
}

export default App;
