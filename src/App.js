import styles from './app.module.scss';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div className={styles.app}>
      <Quiz />
    </div>
  );
}

export default App;
