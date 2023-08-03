import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
// import User from './user/User';

const userId = 1;

function App() {
  const { isLoading, data } = useGetRecipesQuery(undefined, {
    skip: !userId,
  });

  return (
    <section>
      <Header />
      <CreateRecipe />
      {/* <User /> для createAsyncThunk */}
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not FOUND</div>
        )}
      </div>
    </section>
  );
}

export default App;
