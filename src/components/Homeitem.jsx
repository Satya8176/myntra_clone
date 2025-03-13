import { useSelector,useDispatch } from "react-redux";
import { bagAction } from "../store/bagSlice";

function Homeitem({item}) {
  const bagitems=useSelector(state=>state.bag);
  const found=bagitems.indexOf(item.id) >=0 ; 
  const handleRemoveBag=()=>{
    dispatch(bagAction.removeFromBag(item.id))
  }
  const dispatch=useDispatch()
  const addToBag=()=>{
    // console.log("Hello bhai");
    dispatch(bagAction.addToBag(item.id))
  }
  return (
    <>
      <div className="item-container"> 
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ |{item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        {!found ? <button type="button" className="btn-add-bag btn btn-success" onClick={addToBag}>Add to Bag</button>
        :
        <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemoveBag}>Remove</button>}

      </div>
      `
    </>
  );
}
export default Homeitem;
