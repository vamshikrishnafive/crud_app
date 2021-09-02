import { Grid,  Typography } from '@material-ui/core';
import { useState } from 'react';


import userList from './data';
import UserTable from './userTable';
import EditUserForm from './updateform';
import AddUserForm from './adduser';

function App() {
  const [Users, setUsers] = useState(userList)
  const addUser = (user) => {
    user.id = Users.length + 1;
    setUsers([...Users, user])
  }

  const deleteUser = (id) => setUsers(Users.filter(user => user.id !== id));

  const initialUser = { id: null, firstName: "", middleName: "", lastName: "" };
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }
  const updateUser = (newUser) => {
    setUsers(Users.map(user => (user.id === currentUser.id ? newUser : user)));
    setCurrentUser(initialUser);
    setEditing(false);
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <div >
        <Typography variant="h1" ç> Crud App </Typography>
        <div>
          <div>
            {editing ? (
              <div>
                <Typography variant="h4" gutterBottom> Edit User </Typography>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <Typography variant="h4" gutterBottom> Add User </Typography>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div>
          <Typography variant="h4" gutterBottom> View User </Typography>
            <UserTable users={Users} deleteUser={deleteUser} editUser={editUser} />
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default App;
