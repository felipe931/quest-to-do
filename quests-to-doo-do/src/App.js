import AddQuest from "./ADDQuest";

function App() {
  function saveADDQuest(title){console.log(title)}
  return (
    <div className="Flex h-screen w-screen itemss-cventer justify-center">
       <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-md rouded-sm transform ease-out duration-300 items-center  p-10 gap-5">
        <h1 className="text-5x1 font-work font-bold w-fit text-center">
          Quest To do 
        </h1>
        <AddQuest saveADDQuest={saveADDQuest}/>
       </div>
    </div>
  );
}

export default App;
