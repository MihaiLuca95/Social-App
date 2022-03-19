import User from "./components/UI/User";
import APIService from "./components/services/APIService";
import {useEffect, useState} from 'react';

const App = () => {

  let [user, setUser] = useState(null); 
  
  useEffect(() => {
    APIService.getData({method: "GET", route: "/api/user"}).then(user => {
      setUser(user) 
      console.log(user);
    })
  }, [])

  return (
    <div className="App">
        <User 
          userObject = {user} 
          viewMode = "compact"
        />
        {/* <Carousel 
          usersImg = {[
            "/images/avatar_1.png",
            "/images/avatar_2.png",
            "/images/avatar_3.png",
            "/images/avatar_4.png",
            "/images/avatar_5.png",
            "/images/avatar_6.png",
            "/images/avatar_7.png"
          ]}
        /> */}
    </div>
  );
}

export default App;
