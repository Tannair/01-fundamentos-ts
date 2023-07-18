import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;

}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {

        // NO REACT O VALOR DENTRO DA FUNÇÃO VAI TER O MESMO ESTADO ANTERIOR INDEPENDENTE DE SER ALTERADO,
        // OU SEJA POSSO CHAMAR DIVERSAS VEZES A FUNÇÃO DIRETO QUE SEMPRE VAI SUBIR DE UM EM UM POIS A SEGUNDA CHAMADA ESTARÁ COM O VALOR ANTIGO
        //setLikeCount(likeCount + 1);

        // PARA FAZER ALTERAÇÕES EM VALORES QUE DEPENDAM DELE MESMO É SEMPRE IMPORTANTE FAZER COM FUNÇÕES PARA QUE PEGUEM O ESTADO ATUAL
        setLikeCount((state) => {
            return state + 1;
        })

    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/Tannair.png" 
                alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tana Dev</strong>
                            <time title="14 de Julho às 16:30h" dateTime="2023-07-14 16:30:30">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>            

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
