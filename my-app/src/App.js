import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const year = new Date().getFullYear();
const $imgHeader = createElement('img', { class: 'App-logo', alt: 'logo', src: logo });
const $pHeader = createElement(
	'p',
	null,
	'Edit',
	createElement('code', null, 'src/App.js'),
	'and save to reload',
);
const $aHeader = createElement(
	'a',
	{
		class: 'App-link',
		href: 'https://reactjs.org',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	'Learn React',
);
const $pYear = createElement('p', null, year);
const $header = createElement(
	'header',
	{ class: 'App-header' },
	$imgHeader,
	$pHeader,
	$aHeader,
	$pYear,
);
const $blockApp = createElement('div', { class: 'App' }, $header);

export function App() {
	return $blockApp;
}
