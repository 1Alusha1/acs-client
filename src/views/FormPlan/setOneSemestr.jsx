import { Input } from "antd";

const SetOneSemestr = ({ names, handleChange, handleBlur, state, course }) => {
  return (
    <>
      <p>{course} Курс</p>
      <div className="course">
        <div>
          <p>1 Семестр</p>
          <label>
            <p>Кредити:</p>
            <Input
              type="text"
              name={names[0]}
              value={state[names[0]]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <label>
            <p>Коефіцієнт:</p>
            <Input
              type="text"
              name={names[1]}
              value={state[names[1]]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        </div>
        <div>
          <p>2 Семестр</p>
          <label>
            <p>Кредити:</p>
            <Input
              type="text"
              name={names[2]}
              value={state[names[2]]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <label>
            <p>Коефіцієнт:</p>
            <Input
              type="text"
              name={names[3]}
              value={state[names[3]]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default SetOneSemestr;
