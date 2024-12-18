import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "./Word";

function Day(props) {
    // const day = 3;

    // url에 포함된 day값을 가져오기 위해서 useParams() 을 사용한다.
    const day = useParams().day;
    const wordList = dummy.words.filter(k => (k.day) === Number(day))

    return (
        <table>
            <tbody>
                {/* {dummy.words.map(k => { */}
                {wordList.map(k => {
                    return <Word key={k.id} word={k}/>
                })}
            </tbody>
        </table>
    );
}

export default Day;