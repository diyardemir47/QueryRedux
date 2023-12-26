import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'
import { MdDelete } from "react-icons/md";
import { useRemoveUserMutation } from '../store';
import CircularProgress from '@mui/material/CircularProgress';

function UserListItem({user}) {


const [removeUser,results] =useRemoveUserMutation();

  const handleClick= () => {
removeUser(user);
  }

const header = (

  <>
  
  <button style={{marginRight:'30px',border:'none',cursor:'pointer'}} 
   onClick={handleClick}> {results.isLoading ? (
<CircularProgress style={{width:'20px',height:'20px'}}/>
   ): ( <MdDelete />)} 
  </button>
  {user.name}

  </>
)

  return (
    <div>

<ExpandablePanel header={header}>
  <AlbumList user={user}/>
</ExpandablePanel>

    </div>
  )
}

export default UserListItem