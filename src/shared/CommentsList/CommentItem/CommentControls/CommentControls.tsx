import React from 'react';


import { CommentUserType } from '../CommentUser';
import styles from './commentcontrols.css';
import Icon from '../../../../Icons/Icon';


interface ICommentControls {
    user: CommentUserType,
    handleReply: (userName: string) => void
}

export function CommentControls({ user, handleReply }: ICommentControls) {
    return (
        <div className={styles.controls}>
            <button onClick={() => {
                handleReply(user.name)
            }}>
                <Icon
                    name='comments'
                    size={15}
                />
                <div className={styles.buttonText}>Ответить</div>
            </button>
            <button>
                <Icon
                    name='share'
                    size={12}
                    size2={14}
                />
                <div className={styles.buttonText}>Поделиться</div>
            </button>
            <button>
                <Icon
                    name='complain'
                    size={16}
                    size2={14}
                />
                <div className={styles.buttonText}>Пожаловаться</div>
            </button>
        </div>
    );
}
