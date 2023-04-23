import { useState } from 'react';
import styles from '../quiz.module.scss';

const Item2 = ({ setPage, setAnswers, answers }) => {
  const [items, setItems] = useState([
    { text: '6-8 бар', isActive: false },
    { text: '9-10 бар', isActive: false },
    { text: '11-12 бар', isActive: false },
    { text: 'Более 12 бар', isActive: false },
  ]);

  const choiceItem = (item) => {
    setPage((prev) => prev + 1);
    setAnswers((item) => answers[1] === item);
    setItems((prev) => {
      return prev.map((i) => {
        if (i.text === item.text) {
          return {
            ...i,
            isActive: true,
          };
        } else {
          return {
            ...i,
            isActive: false,
          };
        }
      });
    });
  };

  return (
    <>
      <h3 className={styles.quizBottomTitle}>Выберите рабочее давление</h3>
      <div className={styles.quizItems}>
        {items.map((item) => (
          <div onClick={() => choiceItem(item.text)} className={styles.quizItem} key={item.text}>
            {item.text}{' '}
          </div>
        ))}
      </div>
    </>
  );
};

export default Item2;
