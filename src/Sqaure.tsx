
export default function Square({value,onSquareClick}:{value:number,onSquareClick:()=>void})
{

    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}