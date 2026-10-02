import { useSelector } from "react-redux";

const BagSummery = () => {
  const CONVENIENCE_FEE = 99;

  const Bagitem = useSelector((store) => store.Bag);
  const items = useSelector((store) => store.items);

  let totalMRP = 0;
  let totalDiscount = 0;

  Bagitem.forEach((itemId) => {
    const item = items.find((item) => item.id === itemId);

    if (item) {
      totalMRP += item.original_price;
      totalDiscount += item.original_price - item.current_price;
    }
  });

  const finalPayment =
    totalMRP - totalDiscount + CONVENIENCE_FEE;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">

        <div className="price-header">
          PRICE DETAILS ({Bagitem.length} Items)
        </div>

        <div className="price-item">
          <span className="price-item-tag">
            Total MRP
          </span>

          <span className="price-item-value">
            ₹{totalMRP}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">
            Discount on MRP
          </span>

          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">
            Convenience Fee
          </span>

          <span className="price-item-value">
            ₹{CONVENIENCE_FEE}
          </span>
        </div>

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">
            Total Amount
          </span>

          <span className="price-item-value">
            ₹{finalPayment}
          </span>
        </div>

      </div>

      <button className="btn-place-order">
        <div className="css-xjhrni">
          PLACE ORDER
        </div>
      </button>
    </div>
  );
};

export default BagSummery;