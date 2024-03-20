import { useLoaderData } from "react-router-dom";
import User from "../SingleUser/User";
import "./Users.css"

const Users = () => {
      const users = useLoaderData()
      console.log(users);
      return (
            <div>
                  <h3>User list Header : {users.length}</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla magni obcaecati sint libero, rem placeat modi dolor reprehenderit illum id assumenda natus iusto voluptatibus delectus ullam vel neque nam omnis.</p>
                  <div className="users">
                  {
                        users.map(user => <User key={user.id} user = {user}/>)
                  }
                  </div>
            </div>
      );
};

export default Users;