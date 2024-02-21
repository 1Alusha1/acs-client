import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import planAnnexTableAsync from "../async/planAnnexTable.async";

function SemesterTable({ planName }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    planAnnexTableAsync
      .getPlanTableByName({ planName: `додаток до плану ${planName}` })
      .then((data) => {
        function groupBySemester(data) {
          return data.reduce((acc, curr) => {
            const semester = curr.semestr;
            const existingSemester = acc.find(
              (item) => item.semestr === semester
            );
            const newObj = { ...curr, parentId: curr.parentId }; // створюємо новий об'єкт з parentId, як parentId в оригінальному об'єкті
            if (existingSemester) {
              existingSemester.array.push(newObj);
            } else {
              acc.push({ semestr: semester, array: [newObj] });
            }
            return acc;
          }, []);
        }
        setData(groupBySemester(data));
      });
  }, []);
  console.log(data);
  return (
    <Table className="iksweb">
      <TableHead>
        <TableRow>
          <TableCell rowSpan="2">Шифр за ОПП</TableCell>
          <TableCell rowSpan="2">НАЗВА ОСВІТНЬОЇ КОМПОНЕНТИ</TableCell>
          <TableCell colSpan="6">
            Розподіл кредитів та кількості аудиторних годин за семестрами
          </TableCell>
          <TableCell colSpan="2">форма контролю</TableCell>
          <TableCell rowSpan="2">
            За навчальним планом ( год. загальні )
          </TableCell>
          <TableCell rowSpan="2">Прочитано у минулому періоді (год.)</TableCell>
          <TableCell rowSpan="2">Компетентності</TableCell>
          <TableCell rowSpan="2">Програмні результати</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Кількість кредитів</TableCell>
          <TableCell>Загальний обсяг годин</TableCell>
          <TableCell>Всього аудиторних</TableCell>
          <TableCell>Лекції</TableCell>
          <TableCell>Практичні заняття</TableCell>
          <TableCell>Лабораторні заняття</TableCell>
          <TableCell>екзамен</TableCell>
          <TableCell>залік</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.length
          ? data.map((semester, semesterIndex) => (
              <React.Fragment key={semesterIndex}>
                <TableRow>
                  <TableCell colSpan="16">Семестр {semester.semestr}</TableCell>
                </TableRow>
                {semester.array.map((subject, subjectIndex) => (
                  <TableRow key={subjectIndex}>
                    <TableCell>{subject.codeTIN}</TableCell>
                    <TableCell>{subject.nameEducationalComponent}</TableCell>
                    <TableCell>{subject.countCredits}</TableCell>
                    <TableCell>{subject.totalValue}</TableCell>
                    <TableCell>{subject.classroom}</TableCell>
                    <TableCell>{subject.lectures}</TableCell>
                    <TableCell>{subject.practical}</TableCell>
                    <TableCell>{subject.laboratory}</TableCell>
                    <TableCell>
                      {subject.controlForm.exam ? subject.controlForm.exam : ""}
                    </TableCell>
                    <TableCell>
                      {subject.controlForm.credit
                        ? subject.controlForm.credit
                        : ""}
                    </TableCell>
                    <TableCell>{subject.totalHours}</TableCell>
                    <TableCell>{subject.readInPrevious}</TableCell>
                    <TableCell>{subject.competencies}</TableCell>
                    <TableCell>{subject.programResults}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))
          : "пусто"}
      </TableBody>
    </Table>
  );
}

export default SemesterTable;
