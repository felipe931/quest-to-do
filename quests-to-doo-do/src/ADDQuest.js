import { useState } from "react";

function AddQuest(props) {

    return (
        <div className="flex gap-4 w-full justify-center items-center">
            <input placeholder="quest" className="rouded-full bg-segundary
             pl-2 input-sm flex w-[70%] focus:outline-none"
                onChange={(e) => setiTitle(e.tanget.valure)}>
            <button className="flex items-center text-center rouded-full
             bg-primary h-fit px-2 text-lg transform ease-out durante-300"
              onClick={() => props.saveADDQuest(title)}>+</button>
            </input>
        </div>
    )
}

export default AddQuest;