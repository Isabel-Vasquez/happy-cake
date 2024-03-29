/* App.jsx */
import { Route, Routes } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import HomePage from './views/HomePage';
import ContactoPage from './views/ContactoPage';
import NotFound from './views/NotFound';
const App = () => {
	return (
		<div>
			<Navegacion />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contacto" element={<ContactoPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};
export default App;
