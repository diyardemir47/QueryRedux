import React from 'react';
import { useFetchUsersQuery, useAddUserMutation } from '../store';
import { Skeleton } from '@mui/material';
import UserListItem from './UserListItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function UserList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation(); // Move this to the top-level

  const handleUserAdd = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant='rectangular' sx={{ width: '100%', height: '600px' }} />
    );
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className='topArrangement'>
        <h1>KİŞİLER</h1>
        <Button variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? <CircularProgress size={20} /> : <span>KİŞİ EKLE</span>}
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UserList;
