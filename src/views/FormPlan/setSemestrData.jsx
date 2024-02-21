import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import SetOneSemestr from "./setOneSemestr";

const SetSemestrData = ({ state, setState, week }) => {
  const [creditsCount, setCredits] = useState("");
  const [coefficient, setCoefficient] = useState("");
  const [courseCoef, setCourseCoef] = useState({
    ff1: "",
    ff1__1: "",
    ff2: "",
    ff2__1: "",
    ss1: "",
    ss1__1: "",
    ss2: "",
    ss2__1: "",
    tt1: "",
    tt1__1: "",
    tt2: "",
    tt2__1: "",
    th1: "",
    th1__1: "",
    th2: "",
    th2__1: "",
  });
  let [show, setShow] = useState(0);

  let creditsArr = {
    ff1: "ff1",
    ff2: "ff2",
    ss1: "ss1",
    ss2: "ss2",
    tt1: "tt1",
    tt2: "tt2",
    th1: "th1",
    th2: "th2",
  };
  let coefficientArr = {
    ff1__1: "ff1__1",
    ff2__1: "ff2__1",
    ss1__1: "ss1__1",
    ss2__1: "ss2__1",
    tt1__1: "tt1__1",
    tt2__1: "tt2__1",
    th1__1: "th1__1",
    th2__1: "th2__1",
  };

  const loseFocus = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      if (name === creditsArr[name]) {
        let r = Number(value);
        setCredits((prevCredits) => Number(prevCredits) + r);
      } else if (name === coefficientArr[name]) {
        let r = Number(value);
        setCoefficient(
          (prevCoefficient) => Number(prevCoefficient) + r * week[name]
        );
      }
    }
    setState((prevFormData) => ({
      ...prevFormData,
      ...courseCoef,
      countCredits: creditsCount,
      totalValue: creditsCount * 30,
      independentWork: creditsCount * 30 - coefficient,
    }));
  };

  useEffect(() => {
    setState((prevFormData) => ({
      ...prevFormData,
      ...courseCoef,
      countCredits: creditsCount,
      totalValue: creditsCount * 30,
      total: coefficient,
      independentWork: creditsCount * 30 - coefficient,
      lectures: coefficient / 2,
      practical: coefficient / 2,
    }));
  }, [creditsCount, coefficient, courseCoef]);

  const handleCourse = (e) => {
    const { name, value } = e.target;

    setCourseCoef((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const next = () => {
    setShow(() => show++);
  };
  const prev = () => {
    setShow(() => show--);
  };
  return (
    <>
      <div className="semestrs-wrap">
        {show === 0 && (
          <SetOneSemestr
            course={1}
            names={["ff1", "ff1__1", "ff2", "ff2__1"]}
            state={courseCoef}
            handleChange={handleCourse}
            handleBlur={loseFocus}
          />
        )}
        {show === 1 && (
          <SetOneSemestr
            course={2}
            names={["ss1", "ss1__1", "ss2", "ss2__1"]}
            state={courseCoef}
            handleChange={handleCourse}
            handleBlur={loseFocus}
          />
        )}
        {show === 2 && (
          <SetOneSemestr
            course={2}
            names={["tt1", "tt1__1", "tt2", "tt2__1"]}
            state={courseCoef}
            handleChange={handleCourse}
            handleBlur={loseFocus}
          />
        )}
        {show === 3 && (
          <SetOneSemestr
            course={2}
            names={["th1", "th1__1", "th2", "tht2__1"]}
            state={courseCoef}
            handleChange={handleCourse}
            handleBlur={loseFocus}
          />
        )}
      </div>
      <div className="semestr-button">
        <Button disabled={show <= 0} onClick={prev}>
          Назад
        </Button>
        <Button disabled={show >= 3} onClick={next}>
          Далі
        </Button>
      </div>
    </>
  );
};

export default SetSemestrData;
