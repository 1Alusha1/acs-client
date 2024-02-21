import { useEffect, useState } from "react";

const WorkPlanTable = ({ data, c }) => {
  let [courses, setCourses] = useState("");
  //   let [course, setCourse] = useState(1);
  function groupByCourses(data) {
    const courses = {};

    // Проход по каждому обьекту в массиве
    data.forEach((obj) => {
      const semester = obj.semestr;
      const course = Math.ceil(semester / 2); // Определение номера курса

      // Если курс еще не существует, создаем его
      if (!courses[course]) {
        courses[course] = [];
      }

      // Добавляем обьект в массив курса
      courses[course].push(obj);
    });

    return courses;
  }

  return (
    <table class="iksweb">
      <tbody>
        <tr>
          <td rowspan="2">№ з/п</td>
          <td rowspan="2">Назви освітніх компонент</td>
          <td rowspan="2" className="rotateTd">
            Кількість кредитів ECTS
          </td>
          <td colspan="4">кількість годин </td>
          <td rowspan="2">Всього годин</td>
          <td colspan="6">І семестр - 16 тижнів </td>
          <td colspan="2">"форма контролю" </td>
          <td rowspan="2" className="rotateTd">
            Всього годин
          </td>
          <td colspan="6">ІІ семестр - 20 тижнів </td>
          <td colspan="2">"форма контролю" </td>
          <td rowspan="2">Кафедра</td>
          <td rowspan="2">Статус дисципліни</td>
        </tr>
        <tr>
          <td className="rotateTd">фактично виділено</td>
          <td className="rotateTd">за навчальним планом</td>
          <td className="rotateTd">прочитано в мин. періоді</td>
          <td className="rotateTd">на навчальний рік</td>
          <td className="rotateTd">Всього аудиторних</td>
          <td className="rotateTd">Лекції</td>
          <td className="rotateTd">Практичні заняття</td>
          <td className="rotateTd">Лабораторні заняття</td>
          <td className="rotateTd">Самостійна робота студентів</td>
          <td className="rotateTd">Курсова робота (Випускова робота)</td>
          <td className="rotateTd">екзамен</td>
          <td className="rotateTd">залік</td>

          <td className="rotateTd">Всього аудиторних</td>
          <td className="rotateTd">Лекції</td>
          <td className="rotateTd">Практичні заняття</td>
          <td className="rotateTd">Лабораторні заняття</td>
          <td className="rotateTd">Самостійна робота студентів</td>
          <td className="rotateTd">Курсова робота (Випускова робота)</td>
          <td className="rotateTd">екзамен</td>
          <td className="rotateTd">залік</td>
        </tr>
        {data.length
          ? data.map((item) => (
              <tr>
                <td>{item.count}</td>
                <td>{item.nameEducationalComponent}</td>
                <td>{item.countCredits}</td>
                <td>{item.totalValue}</td>
                <td>{item.behindCurriculum}</td>
                <td>{}</td>
                <td>{item.forSchoolYear}</td>
                {item.firstHalf ? (
                  <>
                    <td>
                      {item.firstHalf.totalHours +
                        item.firstHalf.independentWork}
                    </td>
                    <td>{item.firstHalf.totalHours}</td>
                    <td>{item.firstHalf.lectures}</td>
                    <td>{item.firstHalf.practical}</td>
                    <td>{item.firstHalf.laboratory}</td>
                    <td>{item.firstHalf.independentWork}</td>
                    <td>{item.firstHalf.graduateWork}</td>
                    <td>{item.firstHalf.controlForm.exam}</td>
                    <td>{item.firstHalf.controlForm.credit}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
                {item.secondHalf ? (
                  <>
                    <td>
                      {item.secondHalf.totalHours +
                        item.secondHalf.independentWork}
                    </td>
                    <td>{item.secondHalf.totalHours}</td>
                    <td>{item.secondHalf.lectures}</td>
                    <td>{item.secondHalf.practical}</td>
                    <td>{item.secondHalf.laboratory}</td>
                    <td>{item.secondHalf.independentWork}</td>
                    <td>{item.secondHalf.graduateWork}</td>
                    <td>{item.secondHalf.controlForm.exam}</td>
                    <td>{item.secondHalf.controlForm.credit}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
            ))
          : "Пусто"}
      </tbody>
    </table>
  );
};

export default WorkPlanTable;
