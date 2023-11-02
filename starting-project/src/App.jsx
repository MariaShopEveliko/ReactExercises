/*
  You can't add inline styles like this: <div styles="text-align: center;">. It should always be <div styles={{textAlign: 'center'}}> (inside of {{}} and camel case).
  Class should be added as className="" not as class=""
*/

import { useState } from "react";

import PostsList from "./components/PostsList/PostsList";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isModalVisible={modalIsVisible} onHideModal={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
