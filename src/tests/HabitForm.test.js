import { render, screen, fireEvent } from '@testing-library/react';
import HabitForm from '../components/HabitForm';

test('should render HabitForm correctly', () => {
  render(<HabitForm onSubmit={jest.fn()} />);
  
  // Verificar que los elementos del formulario estén presentes
  expect(screen.getByLabelText(/nombre del hábito/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/frecuencia/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /guardar/i })).toBeInTheDocument();
});

test('should show an error if the input is invalid and not call onSubmit', () => {
  const mockOnSubmit = jest.fn();
  render(<HabitForm onSubmit={mockOnSubmit} />);

  const button = screen.getByRole('button', { name: /guardar/i });
  fireEvent.click(button);
  
  // Aquí verificarías si aparece un mensaje de error
  expect(screen.getByText(/el nombre del hábito es obligatorio/i)).toBeInTheDocument();
  expect(mockOnSubmit).not.toHaveBeenCalled();
});

test('should call onSubmit with valid input', () => {
  const mockOnSubmit = jest.fn();
  render(<HabitForm onSubmit={mockOnSubmit} />);
  
  // Rellenar los campos
  fireEvent.change(screen.getByLabelText(/nombre del hábito/i), { target: { value: 'Leer' } });
  fireEvent.change(screen.getByLabelText(/frecuencia/i), { target: { value: 'Diaria' } });
  
  // Enviar el formulario
  const button = screen.getByRole('button', { name: /guardar/i });
  fireEvent.click(button);
  
  // Verificar que onSubmit fue llamado con los datos correctos
  expect(mockOnSubmit).toHaveBeenCalledWith({
    name: 'Leer',
    frequency: 'Diaria'
  });
});
