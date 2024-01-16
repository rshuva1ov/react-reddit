import { combineReducers, Reducer } from 'redux';
import { appReducer, RootAppState } from './appReducer';
import {
  commentsLoaderReducer,
  RootCommentsLoaderState,
} from './commentsLoaderReducer';
import { commentsReducer, RootCommentsState } from './commentsReducer';
import { RootTokenState, tokenReducer } from './tokenReducer';
import { RootUserState, userReducer } from './userReducer/userReducer';

export type RootState = {
  commentsReducer: RootCommentsState;
  appReducer: RootAppState;
  commentsLoaderReducer: RootCommentsLoaderState;
  tokenReducer: RootTokenState;
  userReducer: RootUserState;
};

export const rootReducer: Reducer<RootState> = combineReducers({
  commentsReducer,
  appReducer,
  commentsLoaderReducer,
  tokenReducer,
  userReducer,
});
