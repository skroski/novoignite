import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
export function Comment(){
    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/skroski.png" alt="Daniel Skroski"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Skroski</strong>
                            <time title="11 de setembro de 2022" dateTime="2022-09-09 09:15:34">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito Bom Devon, Parabéns</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}