// comando para pruebas npx jest src/scenes/usersList/test/filterUsers.test.js
const filterUsers = (users, filterOption, searchTerm, orderBy) => {
  let filteredList = users;

  if (filterOption === 'active') {
    filteredList = filteredList.filter(user => user.state !== 'Inactive');
  } else if (filterOption === 'inactive') {
    filteredList = filteredList.filter(user => user.state === 'Inactive');
  }

  filteredList = filteredList.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (orderBy === 'asc') {
    filteredList = filteredList.sort((a, b) => a.username.localeCompare(b.username));
  } else if (orderBy === 'desc') {
    filteredList = filteredList.sort((a, b) => b.username.localeCompare(a.username));
  }

  return filteredList;
};

test('filtra usuarios activos', () => {
  const users = [
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' },
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' },
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' }
  ];

  const result = filterUsers(users, 'active', '', 'asc');
  expect(result).toEqual([
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' },
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' }
  ]);
});

test('filtra usuarios inactivos', () => {
  const users = [
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' },
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' },
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' }
  ];

  const result = filterUsers(users, 'inactive', '', 'asc');
  expect(result).toEqual([
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' }
  ]);
});

test('busca usuarios por nombre de usuario', () => {
  const users = [
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' },
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' },
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' }
  ];

  const result = filterUsers(users, 'all', 'john', 'asc');
  expect(result).toEqual([
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' }
  ]);
});

test('busca usuarios por nombre', () => {
  const users = [
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' },
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' },
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' }
  ];

  const result = filterUsers(users, 'all', 'alice', 'asc');
  expect(result).toEqual([
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' }
  ]);
});

test('ordena usuarios por nombre de usuario descendente', () => {
  const users = [
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' },
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' },
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' }
  ];

  const result = filterUsers(users, 'all', '', 'desc');
  expect(result).toEqual([
    { username: 'john_doe', name: 'John', lastname: 'Doe', email: 'john@example.com', state: 'Active' },
    { username: 'jane_doe', name: 'Jane', lastname: 'Doe', email: 'jane@example.com', state: 'Inactive' },
    { username: 'bob', name: 'Bob', lastname: 'Brown', email: 'bob@example.com', state: 'Inactive' },
    { username: 'alice', name: 'Alice', lastname: 'Smith', email: 'alice@example.com', state: 'Active' }
  ]);
});