import { useSelector } from "react-redux";
import BagItem from "../components/BagItem"
import BagSummary from "../components/BagSummary"


function Bag(){
  const items=useSelector(store=>store.items);
  const bagItems=useSelector(store=>store.bag);
  const finalItems=items.filter(item=>{
    const foundIndex=bagItems.indexOf(item.id);
    return foundIndex>=0;
  })

    return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {
            finalItems.map(item=>{
              return <BagItem key={item.id} item={item}/>
            })
          }
          
        </div>
        <BagSummary/>
      </div>
    </main>
    )
}

export default Bag