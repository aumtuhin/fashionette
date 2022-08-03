import Movies from '../../components/movies/movies';
import './home.styles.scss';

const Home = () => {
  return (
    <div>
      <Movies  data-testid='app-movies' />
    </div>
  )
}

export default Home;
