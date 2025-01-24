import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModelsPageWrapper from '@/pages/models';

// Test suite for model selection
describe('Model Selection', () => {
  it('renders the model selection page', () => {
    render(<ModelsPageWrapper />);
    expect(screen.getByText('Model Selection')).toBeInTheDocument();
  });

  it('allows users to select a model', () => {
    render(<ModelsPageWrapper />);
    const selectElement = screen.getByLabelText('Choose a model:');
    fireEvent.change(selectElement, { target: { value: 'Claude 2' } });
    expect(screen.getByText('Selected Model: Claude 2')).toBeInTheDocument();
  });
}); 