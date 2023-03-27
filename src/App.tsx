
import { useEffect } from "react";
import { city } from "./feature/City/citySlice";
import { useAppDispatch, useAppSelector } from "./hooks";

// import { getDatabase, ref, child, get } from "firebase/database";

function App() {
  const dispatch = useAppDispatch()
  const getState = useAppSelector((state) => state.city)
  useEffect(() => {
      const getCities = async () =>{
        const data =  await dispatch(city());
        console.log(data)
      };
    getCities();
  }, []);

  return (
    <div className="App">
     {getState.cities.map((item) => {
        return(<div key={item.code}>
          <h1>{item.code}</h1>
          <h3>{item.name}</h3>
          <h3>{item.person}</h3>
          <h3>{item.square}</h3>
        </div>)
      })}
    </div>
  );
}

export default App;
