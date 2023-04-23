import { useState } from 'react';
import cn from 'classnames';

import styles from '../quiz.module.scss';

const Item1 = ({ setPage, setAnswers, answers }) => {
  const [items, setItems] = useState([
    { text: 'Электрический винтовой', isActive: false, id: 1 },
    { text: 'Электрический поршневой', isActive: false, id: 2 },
    { text: 'Дизельный', isActive: false, id: 3 },
    { text: 'Водяной', isActive: false, id: 4 },
  ]);

  const choiceItem = (id) => {
    setItems((prev) => {
      return prev.map((i) => {
        if (i.id === id) {
          return { ...i, isActive: true };
        } else {
          return {
            ...i,
            isActive: false,
          };
        }
      });
    });
    // setAnswers((item) => answers[0] === item);
    // setPage((prev) => prev + 1);
    // console.log(items);
  };

  return (
    <>
      <h3 className={styles.quizBottomTitle}>Выберите тип компрессора</h3>
      <div className={styles.quizItems}>
        {items.map((item) => (
          <div
            onClick={() => choiceItem(item.id)}
            className={cn(styles.quizItem, {
              [styles.quizActive]: item.isActive,
            })}
            key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default Item1;
