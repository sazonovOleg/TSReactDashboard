import React from 'react';
import { getAllUsers } from '../../service/all_users'

interface UsersListProps {}

const UsersList = ({}: UsersListProps): JSX.Element => {
    const [users, setUsers] = React.useState()

    React.useEffect(() => {
        getAllUsers().then(function(usersData: any) {
            setUsers(usersData)
        })
    }, [setUsers])

    if (users) {
        console.log(users)
    }

  return (
      <div>

      </div>
  );
};

export { UsersList };
