import { useState } from "react";

interface Board {
  id: number;  
  type: string;
}

function Board() {
  const [board, setBoard] = useState<Board[]>([
    { id: 1, type: "" },
    { id: 2, type: "" },
    { id: 3, type: "" },
    { id: 4, type: "" },
    { id: 5, type: "" },
    { id: 6, type: "" },
    { id: 7, type: "" },
    { id: 8, type: "" },
    { id: 9, type: "" },
  ]);

  const [turn, setTurn] = useState<string>("X");
  const [winner, setWinner] = useState<boolean>(false);

  const asignamentType = (id: number) => {
    if (!winner) {
      board.filter((e) => e.id == id).map((element) => (element.type = turn));

      const editBord = board;

      setBoard(editBord);

      validWinner();

      if (!winner) setTurn((e) => (e == "X" ? "O" : "X"));
    }
  };

  const resertBord = () => {
    const resetBoard = board.map((e) => ({ ...e, type: "" }));

    setTurn("X");
    setWinner(false);
    setBoard(resetBoard);
  };

  const validWinner = () => {

    const selectedX = board.filter((e) => e.type == "X").map((a) => a.id);

    const selectedO = board.filter((e) => e.type == "O").map((a) => a.id);

    const winConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    winConditions.forEach((condition) => {
      if (turn === "X") {
        const isWinningCondition = condition.every((id) =>    selectedX.includes(id)  );

        if (isWinningCondition) {
          setWinner(true);
          console.log(`El ganador es ${turn}`);
        }

      } else if (turn === "O") {

        const isWinningCondition = condition.every((id) => selectedO.includes(id));

        if (isWinningCondition) {
          setWinner(true);
          console.log(`El ganador es ${turn}`);
        }

      }

      console.log(winner);

      if (winner) {
        console.log(`El ganador es ${turn}`);
        return;
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold py-2">Tres en linea </h1>

      <div className="flex flex-row items-center justify-center py-4">
        <button
          onClick={resertBord}
          className="py-2 px-2 bg-yellow-500 rounded shadow"
        >
          Reiniciar
        </button>
      </div>

      <div className="grid grid-cols-3   ">
        {board.map((cell) => {
          return (
            <div
              onClick={() => {
                asignamentType(cell.id);
              }}
              key={cell.id}
              className="border-white  text-center p-20 border-[7px]"
            >
              <p className="text-6xl font-bold">{cell.type}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center py-4">
        <h1 className="text-2xl font-bold">{winner? "Ganador" : "Turno de " + turn}</h1>
      </div>
      
    </div>
  );
}

export default Board;
