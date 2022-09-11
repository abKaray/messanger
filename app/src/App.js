import { Route, Switch } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { auth } from './api/auth';

// import logo from './logo.svg';
// import './App.css';
import { GuestPage } from './pages/GuestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MessagePage } from './pages/MessagePage';

// import { PrivateRoute } from './route/PrivateRoute';
import { PublicRoute } from './route/PublicRoute';
import { PrivateRoute } from './route/PrivateRoute';

// const defaultQueryFn = async ({ queryKey }) => {
//   const { data } = await axios.get(`https://jsonplaceholder.typicode.com${queryKey[0]}`);

//   return data;
// };

function App(props) {
  console.log('props :>> ', props);
  // const handleClick = async () => {
  //   console.log('CLIICK');
  //   const test = await auth({
  //     method: 'GET',
  //     url: 'numbers',
  //   })
  // }
  // const queryClient = new QueryClient();

  return (
    <Switch>
      <PublicRoute exact path="/" component={GuestPage} />
      <PrivateRoute exact path="/home" component={MessagePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
