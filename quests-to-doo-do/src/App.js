
import AddQuest from "./ADDQuest";
import { useState } from "./ADDQuest";
import Questlist from "./Quest.lits";

const localStorageQuests = JSON.parse(window.localStorage.getItem("quests")) || [];
const [quests, setQuests] = useState(localStorageQuests);

function App() {
  const [quests, setQuests] = useState({});
  function saveADDQuest(title){let auQuests= perguntas;
    let id = 0
    if (Object.length){id = auxQuests[auxQuests.length - 1].id} id++;

    const createdQuest = {
      id:id,
      title:title,
      status:"aberto",
      created_at:new Date(Date.now()).toUTCString(),
    } }
   auQuests.push(createdQuest);
    localStorage.setItem("quests", JSON.stringify(auQuests));
    getQuests();
  
    function getQuests() {
      setQuests(JSON.parse(window.localStorage.getItem("quests")));
    }
  
  return (
    <div className="Flex h-screen w-screen itemss-cventer justify-center">
       <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-md rouded-sm transform ease-out duration-300 items-center  p-10 gap-5">
        <h1 className="text-5x1 font-work font-bold w-fit text-center">
          Quest To do 
        </h1>
        <AddQuest saveADDQuest={saveADDQuest}/>
        <questlist queests={quest}/>
       </div>
    </div>
  );
}

export default App;
