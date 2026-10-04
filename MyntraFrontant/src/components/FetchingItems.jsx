import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "./store/Itemslice";
import { FectchAction } from "./store/fectchining";

const FetchinItems = () => {
  const Fetching = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Fetching.fetchdone) {
      return;
    }

    const controller = new AbortController();

    const signal = controller.signal;

    dispatch(FectchAction.markFetchigStarted());

    fetch("https://myntraclone-oz3a.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FectchAction.markFetchdone());
        dispatch(FectchAction.markFetchingFinshided());
        dispatch(itemActions.addinitialItems(items));

        console.log("Data Fetch", items);
      });

    return () => {
      controller.abort();
    };
  }, [Fetching.fetchdone, dispatch]);

  return (
    <>
      <div>
        <p>Fetching items: {Fetching.fetchdone}</p>

        <p>
          Fetching Currently value: {Fetching.currentlyFetching}
        </p>
      </div>
    </>
  );
};

export default FetchinItems;