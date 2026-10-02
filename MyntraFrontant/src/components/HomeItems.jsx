import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "./store/BagSlic";
import 'bootstrap/dist/css/bootstrap.min.css';


const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const Bagitem = useSelector(store => store.Bag);
  const elementFound = Bagitem.indexOf(item.id)>=0;
 
  const handleAddtoBag = () => {
    dispatch(bagActions.addToBag(item.id));
  }

  const handleRemoveBag=()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (<button type="button" class="btn btn-danger btn-add-bag" onClick={handleRemoveBag}>Remove From Bag</button>
 )
        :(
           <button type="button" class="btn btn-success btn-add-bag" onClick={handleAddtoBag}>Add To Bag</button>
          )
          }
      </div>
    </>
  )
}

export default HomeItem;