import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHero from "./components/RQSuperHero.page";
import ParallelqueriesPage from "./components/ParallelQueries.page";
import DynamicparallelqueriesPage from "./components/DynamicParallelQueries.page";
import DepentqueriespagePage from "./components/DepentQueriesPage.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route path="/rq-infinite">
              <InfiniteQueriesPage />
            </Route>
            <Route path="/rq-parallel" exact>
              <ParallelqueriesPage />
            </Route>
            <Route path="/rq-dynamic-parallel" exact>
              <DynamicparallelqueriesPage heroIds={[1, 3]} />
            </Route>
            <Route path="/rq-depent" exact>
              <DepentqueriespagePage email="vishwas@example.com" />
            </Route>
            <Route path="/rq-super-heroes" exact>
              <RQSuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes/:heroId" exact>
              <RQSuperHero />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
