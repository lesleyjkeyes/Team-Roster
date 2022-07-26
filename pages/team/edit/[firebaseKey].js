import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TeamForm from '../../../components/Forms/TeamForm';
import { getSingleTeam } from '../../../.husky/api/teamData';

export default function EditTeam() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<TeamForm obj={editItem} />);
}
