import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItems";
const HomeDisplay = () => {
  const itemvalue = useSelector((store => store.items));

  return (
    <>
      <main>
        <div className="items-container">
          {itemvalue.map((val) => (
            <HomeItem item={val} />
          ))}
        </div>
      </main>

    </>
  )
}

export default HomeDisplay;
