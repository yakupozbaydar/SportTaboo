import { Children, createContext, useState } from "react";

type GameContextProps = {
    Score1:number,
    Score2:number,
    setScore1:React.Dispatch<React.SetStateAction<number>>;
    setScore2:React.Dispatch<React.SetStateAction<number>>;
}



export const GameContext = createContext<GameContextProps | null>(null);
export const GameContextProvider = ({ children }) => {
    const [Score1, setScore1] = useState(0)
    const [Score2, setScore2] = useState(0)

    const values = {
        Score1,
        Score2,
        setScore1,
        setScore2,
    }
    return (
        <GameContext.Provider value={values}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider
