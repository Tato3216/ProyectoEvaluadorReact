import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Habits from '../pages/Habits';

test('should render habit details correctly when editing', () => {
  const mockHabit = { id: '1', name: 'Leer', frequency: 'Diaria', progress: [] };

  render(
    <Router>
      <Habits id="1" />
    </Router>
  );
  
  // Verificar que el formulario está siendo mostrado con los valores correctos
  expect(screen.getByLabelText(/nombre del hábito/i)).toHaveValue(mockHabit.name);
  expect(screen.getByLabelText(/frecuencia/i)).toHaveValue(mockHabit.frequency);
});

test('should navigate back to home when "Regresar a Inicio" is clicked', () => {
  const { container } = render(
    <Router>
      <Habits id="1" />
    </Router>
  );
  
  const button = screen.getByRole('button', { name: /regresar a inicio/i });
  fireEvent.click(button);
  
  // Verificar que se haya navegado correctamente (esto podría ser más avanzado con mocks de navegación)
  expect(container.innerHTML).toContain('Página de Inicio'); // Cambia según el contenido de tu página principal
});
