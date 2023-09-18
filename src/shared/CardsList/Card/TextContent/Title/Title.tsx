import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';
import { Link, Route, Routes } from 'react-router-dom';

interface ITitle {
  postId: string;
  title: string;
  userName: string;
  postPermaLink: string;
  previewLink: string;
}

export function Title({
  postId,
  title,
  postPermaLink,
  userName,
  previewLink,
}: ITitle) {
  const URL_PERMA_LINK_PREFIX = 'https://www.reddit.com/';
  // console.log(
  //   'postId',
  //   postId,
  //   'title',
  //   title,
  //   'postPermaLink',
  //   postPermaLink,
  //   'userName',
  //   userName,
  //   'previewLink',
  //   previewLink
  // );
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postId}`} className={styles.postLink}>
        {title}
      </Link>
      {/* <button
        // target="_blank"
        // href={URL_PERMA_LINK_PREFIX + postPermaLink}
        className={styles.postLink}
        onClick={() => {
          setIsModalOpen(!isModalOpen);

          isModalOpen
            ? (document.body.style.overflow = 'initial')
            : (document.body.style.overflow = 'hidden');
        }}
      > */}
      {/* </button> */}
    </h2>
  );
}
