import User from "./components/UI/User";
import {User as UserModel} from "./components/model/User";
import {useEffect, useState} from 'react';

const App = () => {

  let [user, setUser] = useState(null); 
  
  useEffect(() => {
    UserModel.get().then(userObject => {
      setUser(userObject) 
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
