import React, { useState } from 'react';
import styles from './commentslist.css';
import { CommentItem } from "./CommentItem";

export function CommentsList() {
    const [replyToUser, setReplyToUser] = useState('');

    function onReply(userName: string) {
        setReplyToUser(userName);
    }

    return (
        <>
            <div className={styles.commentsList}>
                <CommentItem handleReply={onReply} comment={{
                    user: {
                        avatar: '',
                        name: 'Михаил Рогов',
                        lastLogin: '1 день назад',
                        groupName: 'Лига юристов'
                    },
                    text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.',
                }}>
                    <CommentItem handleReply={onReply} comment={{
                        user: {
                            avatar: '',
                            name: 'Сергей Рогов',
                            lastLogin: '1 день назад',
                            groupName: 'Лига юристов'
                        },
                        text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                    }}>
                        <CommentItem handleReply={onReply} comment={{
                            user: {
                                avatar: '',
                                name: 'Андрей Рогов',
                                lastLogin: '1 день назад',
                                groupName: 'Лига юристов'
                            },
                            text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                        }} />
                    </CommentItem>
                    <CommentItem handleReply={onReply} comment={{
                        user: {
                            avatar: '',
                            name: 'Михаил Рогов',
                            lastLogin: '1 день назад',
                            groupName: 'Лига юристов'
                        },
                        text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                    }} />
                </CommentItem>
                <CommentItem handleReply={onReply} comment={{
                    user: {
                        avatar: '',
                        name: 'Михаил Рогов',
                        lastLogin: '1 день назад',
                        groupName: 'Лига юристов'
                    },
                    text: 'Mauris feugiat faucibus leo ac scelerisque. Curabitur interdum turpis dolor, non placerat lacus ultricies vitae. Nam nisl nunc, luctus sed magna sed, interdum commodo metus. Sed sit amet odio vel arcu feugiat convallis. Vestibulum quis convallis ligula.'
                }} />
            </div>
        </>
    );
}
