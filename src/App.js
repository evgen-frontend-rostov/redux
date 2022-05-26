import { useDispatch, useSelector } from 'react-redux';
import { addCashAC, getCashAC } from './store/cashReducer';
import { addUserAC, deleteUserAC, fetchUsersThunk } from './store/userReducer';

const App = () => {
  const dispatch = useDispatch();
  const myCash = useSelector(state => state.cash.cash);
  const userList = useSelector(state => state.user.users);

  const addCash = () => {
    dispatch(addCashAC(+prompt()))
  }

  const getCash = () => {
    dispatch(getCashAC(+prompt()))
  }

  const addUser = () => {
    const name = prompt();
    const newUser = {
      name,
      id: Date.now()
    }
    dispatch(addUserAC(newUser))
  }

  const deleteUser = (id) => {
    dispatch(deleteUserAC(id));
  }

  const getUsersFromBase = () => {
    dispatch(fetchUsersThunk());
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', height: '90vh', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '15px', height: '40px', alignItems: 'center', fontSize: '25px' }}>
        <p>{myCash}</p>
        <button onClick={addCash}>Add cash</button>
        <button onClick={getCash}>Get cash</button>
        <button onClick={addUser}>Add user</button>
        <button onClick={getUsersFromBase}>Fetch from base</button>
      </div>
      <div>
        {userList.length ? (
          userList.map(item => (
            <div
              style={{ border: '1px solid #000', padding: '10px', marginBottom: '10px' }}
              onClick={() => deleteUser(item.id)}
            >
              {item.name}
            </div>
          ))
        ) : (
          <div style={{ fontSize: '20px' }}>Список пользователей пуст</div>
        )}
      </div>
    </div>
  );
}

export default App;
