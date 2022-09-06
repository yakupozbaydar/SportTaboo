import { Children, createContext, useState } from "react";

type GameContextProps = {
    GameCount:number,
    PlayCount:number,
    Score:number,
    setGameCount:React.Dispatch<React.SetStateAction<number>>;
    setPlayCount:React.Dispatch<React.SetStateAction<number>>;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}



export const GameContext = createContext<GameContextProps | null>(null);
export const GameContextProvider = ({ children }) => {
    const [GameCount, setGameCount] = useState(0)
    const [PlayCount, setPlayCount] = useState(0)
    const [Score, setScore] = useState(0)

    const values = {
        GameCount,
        setGameCount,
        PlayCount,
        setPlayCount,
        Score,
        setScore,
    }
    return (
        <GameContext.Provider value={values}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider
