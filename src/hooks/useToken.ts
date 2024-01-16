import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { tokenRequestAsync } from '../redux/tokenReducer';

export function useToken() {
  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenRequestAsync());
  }, []);

  return [token];
}
