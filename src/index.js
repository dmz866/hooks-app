import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterWithCustomHookApp } from './01-useState/CounterWithCustomHookApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CounterWithCustomHookApp />
	</React.StrictMode>
);

