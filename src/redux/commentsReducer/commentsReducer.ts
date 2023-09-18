import { Reducer } from 'redux';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export type RootCommentsState = {
  comments: Array<{
    commentText: string;
    id: string;
  }>;
};

const initialState: RootCommentsState = {
  comments: [
    {
      commentText: '',
      id: '1',
    },
  ],
};

export const commentsReducer: Reducer<RootCommentsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === action.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        { commentText: action.commentText, id: action.id },
        ...comments.slice(itemIndex + 1),
      ];
      return { ...state, comments: nextComments };

    default:
      return state;
  }
};
