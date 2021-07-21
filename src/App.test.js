import { render, screen } from '@testing-library/react';
import App from './App';
import ProjectView from './pages/ProjectView';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText("Home");
	expect(linkElement).toBeInTheDocument();
});

test('renders Project View', () => {
	render(<ProjectView />);
	const linkElement = screen.getByText("Beginner");
	expect(linkElement).toBeInTheDocument();
});