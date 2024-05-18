import {useState} from "react";
import styles from './comments.module.scss'


export const Comments = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (e) => {
        setComments(comments.filter(comment => comment.id !== Number(e.target.closest('li').id)))
    }

    return (
        <div>
            <ul >
                {comments.map((comment) => (
                    <li className={styles.comment} key={comment.id} id={comment.id}>
                        <p>{comment.text}</p>
                        <button onClick={deleteComment}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}