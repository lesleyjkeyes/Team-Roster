import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PlayerForm from '../../../components/Forms/PlayerForm';
import { getSinglePlayer } from '../../../.husky/api/playerData';

export default function EditPlayer() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<PlayerForm obj={editItem} />);
}
