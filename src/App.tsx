import './main.global.css';

import { hot } from 'react-hot-loader/root';

import { useToken } from './hooks/useToken';
import CardsList from './shared/CardsList/CardsList';
import Content from './shared/Content/Content';
import Header from './shared/Header/Header';
import Layout from './shared/Layout/Layout';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { useState } from 'react';
import { commentContext } from './shared/context/commentContext';

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');

  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue
    }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  )
}

export const App = hot(() => <AppComponent />);
