import React, { useState, useEffect } from 'react';

import Item1 from './item1/Item1';
import Item2 from './item2/Item2';
import Item3 from './item3/Item3';
import styles from './quiz.module.scss';
import Form from './form/Form';

const Quiz = () => {
  const [page, setPage] = useState(1);
  const answers = [];

  const setAnswers = (obj) => {};

  const changePage = () => {
    setPage((prev) => page - 1);
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <div className={styles.quiz}>
      <h3 className={styles.quizTitle}>Подберите компрессор за 1 минуту!</h3>
      <div className={styles.quizText}>
        Ответьте на 4 вопроса и мы отправим Вам бесплатный расчет и индивидуальное предложение
      </div>
      {page === 5 ? '' : <div className={styles.quizLine} style={{ width: page * 25 + '%' }}></div>}
      <div className={styles.quizBody}>
        {page === 1 ? (
          <Item1 setPage={setPage} answers={answers} setAnswers={setAnswers} />
        ) : page === 2 ? (
          <Item2 setPage={setPage} answers={answers} setAnswers={setAnswers} />
        ) : page === 3 ? (
          <Item3 setPage={setPage} answers={answers} />
        ) : (
          <Form />
        )}
      </div>
      {page === 2 ? (
        <button onClick={changePage}>Назад</button>
      ) : page === 3 ? (
        <button onClick={changePage}>Назад</button>
      ) : page === 4 ? (
        <button onClick={changePage}>Назад</button>
      ) : page === 5 ? (
        <button onClick={changePage}>Назад</button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Quiz;
