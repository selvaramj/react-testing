import React, { useEffect, useState } from 'react';

type UserApiResponse = {
  id: number;
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: UserApiResponse[]) =>
        setUsers(() => data.map((user) => user.name)),
      )
      .catch((error) =>
        setError((error as Error) ? error.message : 'An unknow error occurred'),
      )
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Users:</h1>
      {isLoading ? (
        <p>Data fetching</p>
      ) : (
        <>
          <p>API response: {error ? error : 'Success'}</p>
          <ul>{users?.map((user, index) => <li key={index}>{user}</li>)}</ul>
        </>
      )}
    </div>
  );
};

export default Users;
