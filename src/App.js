import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';

function App() {
  const [role, setRole] = useState('NULL');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jen",
      role: "Developer",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 2,
      name: "Marissa",
      role: "API Engineer",
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg"
    },
    {
      id: 3,
      name: "Corbo",
      role: "Designer",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg"
    },
    {
      id: 4,
      name: "Caleb",
      role: "Designer",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg"
    },
    {
      id: 5,
      name: "Anna",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
    },
    {
      id: 6,
      name: "Jackson",
      role: "Operations",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg"
    },
    {
      id: 7,
      name: "Bradley",
      role: "Developer",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg"
    }
  ]);

  function updateEmployee(id, newName, newRole, newImg) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole, img: newImg };
      }

      return employee
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees.</p>
      )}
    </div>
  );
}

export default App;