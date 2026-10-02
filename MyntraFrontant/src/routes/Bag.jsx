import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummery from "../components/Bagsummery";
const Bag=()=>{
const item=useSelector(store=> store.items);
const bag=useSelector(bagid=>bagid.Bag);
const finalitem=item.filter(it=>{
  const itemIndex=bag.indexOf(it.id);
  return itemIndex>=0;
})
  return(
    <>
  
    <main>
      <div className="bag-page">
       
        <div className="bag-items-container">
          {finalitem.map(item=>  <BagItem item={item} />)}
        </div>
          <BagSummery/>      

      </div>
    </main>    
    </>
  )
}

export default Bag;