import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import "./UsersFromServer.css";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
function UsersFromServer(): JSX.Element {
  const [data, setData] = useState<User[]>();
  useEffect(() => {
    const getUsers = async () => {
      const users = await axios("https://jsonplaceholder.typicode.com/users");
      setData(users.data);
    };
    getUsers();
  }, []);
  console.log(data);
  return (
    <div id="cards">
      {data &&
        data.map((item) => (
          <UserCard
            key={item.id}
            id={item.id}
            userNameAneEmail={{
              name: item.name,
              email: item.email,
            }}
          />
        ))}
    </div>
  );
}
export default UsersFromServer;
