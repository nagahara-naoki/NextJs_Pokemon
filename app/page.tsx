"use client";

import Header from "./components/Header";
import ImageList from "./components/ImageList";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <ImageList />
      </Provider>
    </div>
  );
}
