import { Input } from "antd";
import { useEffect, useState } from "react";

const UserFilterInput = ({ subject, state, setState }) => {
  let [showList, setShowList] = useState(false);
  const [filtredSubject, setFilteredSubject] = useState([]);

  const filter = (e) => {
    setFilteredSubject(
      subject.filter((f) => f.value.toLowerCase().includes(e.target.value))
    );
  };
  const setActive = (e, value) => {
    e.stopPropagation();
    setState({ ...state, nameEducationalComponent: value });
  };

  return (
    <div className="searched-input" onClick={() => setShowList(!showList)} onBlur={() => setShowList(false)}>
      <Input type="text" onChange={filter} />
      {showList && (
        <div
          className="searched-input__result"
          
        >
          {showList && !filtredSubject.length
            ? subject.map((item) => (
                <>
                  <div
                    className="searched-input__result-item"
                    data-value={item.value}
                    onClick={(e) => setActive(e, item.value)}
                  >
                    {item.value}
                  </div>
                </>
              ))
            : filtredSubject.map((item) => (
                <>
                  <div
                    className="searched-input__result-item"
                    data-value={item.value}
                    onClick={(e) => setActive(e, item.value)}
                  >
                    {item.value}
                  </div>
                </>
              ))}
        </div>
      )}
    </div>
  );
};

export default UserFilterInput;
