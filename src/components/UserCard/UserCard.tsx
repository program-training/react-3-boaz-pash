import "./UserCard.css";
import TodoList from "../ToDoList/TodoList";
import { useState } from "react";
interface Props {
  userNameAneEmail: {
    name: string;
    email: string;
  };
  id: number;
}

function UserCard(props: Props): JSX.Element {
  const [clicked, setClicked] = useState<boolean>(false);
  const callToDoComponent = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div id="user-card" onClick={callToDoComponent}>
      <ul>
        <li> {props.userNameAneEmail.name}</li>
        <li> Email: {props.userNameAneEmail.email}</li>
        {clicked && <TodoList id={props.id} />}
      </ul>
    </div>
  );
}
export default UserCard;
