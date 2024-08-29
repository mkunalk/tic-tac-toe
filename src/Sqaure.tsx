
export default function Square({won,value,onSquareClick}:{won: boolean,value:number,onSquareClick:()=>void})
{

    return (
        <button style={won?{backgroundColor:"blue"}:{}} onClick={onSquareClick}>{value}</button>
    )
}