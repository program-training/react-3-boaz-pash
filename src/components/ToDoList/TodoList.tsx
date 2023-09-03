import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  id: number;
}
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoList(props: Props): JSX.Element {
  const [toDo, setToDo] = useState<ToDo[] | null>(null);

  useEffect(() => {
    const handelToDoList = async () => {
      const data = await axios(
        `https://jsonplaceholder.typicode.com/users/${props.id}/todos`
      );
      setToDo(data.data);
    };
    handelToDoList();
    console.log(toDo);
  }, []);
  console.log(toDo);

  return (
    <>
      {""}
      {toDo && (
        <ul>
          <li>{toDo[0].title}</li>
          <li>{toDo[1].title}</li>
          <li>{toDo[2].title}</li>
          <li>{toDo[3].title}</li>
          <li>{toDo[4].title}</li>
        </ul>
      )}
    </>
  );
}
export default TodoList;
