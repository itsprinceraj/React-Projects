import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemAction } from "../Store/itemSlice";
import { fetchAction } from "../Store/fetchStatusSlice";

export const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();
  // console.log(fetchStatus);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // if (fetchStatus.fetchDone) return;

    dispatch(fetchAction.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // console.log(items);
        dispatch(fetchAction.markFetchDone());
        dispatch(fetchAction.markFetchFinished());

        dispatch(itemAction.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};
