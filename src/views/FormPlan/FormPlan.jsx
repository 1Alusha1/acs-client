import React, { useEffect, useState } from "react";
import UserSelect from "../../components/UI/UserSelect";
import subjectAsync from "../../async/subject.async";
import { Form, Input } from "antd";
import FormCard from "./FromCard";
import planTableAsync from "../../async/planTable.async";
import UserFilterInput from "../../components/UI/UserFilterInput";
import SetWeek from "./SetWeek";
import SetSemestrData from "./setSemestrData";
function FromPlan() {
  const [subject, setSubject] = useState([]);
  const [week, setWeek] = useState({
    ff1__1: 0,
    ff2__1: 0,
    ss1__1: 0,
    ss2__1: 0,
    tt1__1: 0,
    tt2__1: 0,
    th1__1: 0,
    th2__1: 0,
  });

  useEffect(() => {
    subjectAsync.getSubjects().then(({ data }) => {
      let mapedData = data.map((item) => ({
        name: `${item.subject}`,
        value: `${item.subject}`,
        codeTIN: item.codeTIN,
      }));
      setSubject([...[], ...mapedData]);
    });
  }, []);

  const [formData, setFormData] = useState({
    type: "",
    planName: "",
    subType: "",
    codeTIN: "",
    specialty: "",
    nameEducationalComponent: "",
    exams: "",
    credits: "",
    courses: "",
    graduated: "",
    countCredits: "",
    totalValue: "",
    total: "",
    lectures: "",
    practical: "",
    laboratory: "",
    independentWork: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    let codeTIN = "";
    if (name === "nameEducationalComponent") {
      codeTIN = subject.find((item) => item.value === value).codeTIN;
      setFormData((prevFormData) => ({
        ...prevFormData,
        codeTIN: codeTIN,
      }));
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await planTableAsync.createPlanRecord(formData);
    setFormData({
      exams: "",
      credits: "",
      courses: "",
      graduated: "",
      countCredits: "",
      totalValue: "",
      total: "",
      lectures: "",
      practical: "",
      laboratory: "",
      independentWork: "",
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
  };
  const clear = () => {
    setFormData({
      type: "",
      subType: "",
      codeTIN: "",
      nameEducationalComponent: "",
      exams: "",
      credits: "",
      courses: "",
      graduated: "",
      countCredits: "",
      totalValue: "",
      total: "",
      lectures: "",
      practical: "",
      laboratory: "",
      independentWork: "",
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
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="form-plan">
        <div className="form-wrap">
          <div className="form-select">
            <div className="form-select__data">
              <label>
                <p>Назва таблиці</p>
                <Input
                  name="planName"
                  value={formData.planName}
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Тип предмету:</p>
                <UserSelect
                  defaultValue={"Оберіть тип"}
                  handleChange={handleChange}
                  name={"type"}
                  opt={[
                    {
                      name: "general competencies",
                      value: "general competencies",
                    },
                    {
                      name: "practice",
                      value: "practice",
                    },
                    {
                      name: "selectiveEducationalComponents",
                      value: "selectiveEducationalComponents",
                    },
                    {
                      name: "finalCertification",
                      value: "finalCertification",
                    },
                    {
                      name: "optionalClasses",
                      value: "optionalClasses",
                    },
                    {
                      name: "subjectAndProfileMiddleEducation",
                      value: "Предмети профільної середньої освіти",
                    },
                  ]}
                />
              </label>
              <label>
                <p>Підтип предмету:</p>
                <UserSelect
                  defaultValue={"Оберіть підтип"}
                  handleChange={handleChange}
                  name={"subType"}
                  opt={[
                    {
                      name: "CycleOfDisciplinesOfGeneralCompetencies",
                      value: "CycleOfDisciplinesOfGeneralCompetencies",
                    },
                    {
                      name: "CycleOfDisciplinesOfGeneralCompetenciesTwo",
                      value: "CycleOfDisciplinesOfGeneralCompetenciesTwo",
                    },
                    {
                      name: "basicSubjects",
                      value: "Базові предмети",
                    },
                    {
                      name: "electiveAndMandatorySubjects",
                      value: "Вибірково-обовязкові предмети",
                    },
                    {
                      name: "electiveAndMandatorySubjects",
                      value: "Вибірково-обовязкові предмети",
                    },
                    {
                      name: "professionalSubjectsSpecialCourses",
                      value: "Профільні предмети (спеціальні курси)",
                    },
                    {
                      name: "individualLessonsOptionalCourses)",
                      value: "Індивідуальні заняття (факультативні курси)",
                    },
                  ]}
                />
              </label>
              <label>
                <p>Предмет:</p>
                <UserFilterInput
                  subject={subject}
                  state={formData}
                  setState={setFormData}
                />
              </label>
            </div>
            <div className="form-select__data">
              <label>
                <p>Екзамени:</p>
                <Input
                  type="text"
                  name="exams"
                  value={formData.exams}
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Заліки:</p>
                <Input
                  type="text"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Курсові роботи:</p>
                <Input
                  type="text"
                  name="courses"
                  value={formData.courses}
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Випускні роботи:</p>
                <Input
                  type="text"
                  name="graduated"
                  value={formData.graduated}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="semestrs">
            <SetWeek state={week} setState={setWeek} />
            <SetSemestrData
              setState={setFormData}
              state={formData}
              week={week}
            />
          </div>
        </div>

        <div className="form-submit">
          <Input type="submit" value={"Додати запис"} />
        </div>
      </Form>
      <FormCard formData={formData} handleChange={handleChange} />
    </>
  );
}

export default FromPlan;
