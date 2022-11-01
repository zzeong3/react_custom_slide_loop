import Btns from "./Btns";
import GlobalStyle from "./GlobalStyle";
import Panels from "./Panels";
import {useRef} from 'react';


function App() {
	const panel = useRef(null);
	return (
		<>
			<GlobalStyle />
			<Btns panel={panel} />
			<Panels ref ={panel} />
		</>
	);
}

export default App;