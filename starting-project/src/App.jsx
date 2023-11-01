/*
  You can't add inline styles like this: <div styles="text-align: center;">. It should always be <div styles={{textAlign: 'center'}}> (inside of {{}} and camel case).
  Class should be added as className="" not as class=""
*/

import PostsList from "./components/PostsList";

function App() {
  return (
    // it's required to have a wrapper el-t, but if we don't want to use any, we can add an empty element <>...</> which is called "React Fragment" (or use <React.Fragment>)
    <main>
      <PostsList />
    </main>
  );
}

export default App;
