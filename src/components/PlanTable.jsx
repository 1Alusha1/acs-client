import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
function PlanTable({ data }) {
  const groupedData = data.reduce((acc, item) => {
    const key = `${item.type}-${item.subType}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <TableContainer>
      <Table className="plan-table iksweb">
        <TableHead>
          <TableRow>
            <TableCell colSpan="34">V. План навчального процесу</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan="6" className="rotateTd">
              <span style={{ TableRowansform: "rotate(0deg)" }}>№</span>
              з/п
            </TableCell>
            <TableCell rowSpan="6" className="rotateTd">
              Шифр за ОПП
            </TableCell>
            <TableCell colSpan="5" rowSpan="6">
              Назва освітньої компоненти
            </TableCell>
            <TableCell colSpan="4" rowSpan="2">
              Розподіл за семестрами
            </TableCell>
            <TableCell rowSpan="6" className="rotateTd">
              Кількість кредитів ECTS
            </TableCell>
            <TableCell colSpan="6">Кількість годин</TableCell>
            <TableCell colSpan="16">
              "Розподіл кредитів ECTS на тиждень за курсами і семестрами"
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan="5" className="rotateTd">
              Загальний обсяг
            </TableCell>
            <TableCell colSpan="4">Аудиторні</TableCell>
            <TableCell rowSpan="5" className="rotateTd">
              Cамостійна робота
            </TableCell>
            <TableCell colSpan="4">1 курс</TableCell>
            <TableCell colSpan="4">2 курс</TableCell>
            <TableCell colSpan="4">3 курс</TableCell>
            <TableCell colSpan="4">4 курс</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan="4" className="rotateTd">
              Екзамени
            </TableCell>
            <TableCell rowSpan="4" className="rotateTd">
              Заліки
            </TableCell>
            <TableCell rowSpan="4" className="rotateTd">
              Курсові роботи
            </TableCell>
            <TableCell rowSpan="4" className="rotateTd">
              Випускна робота
            </TableCell>
            <TableCell rowSpan="4" className="rotateTd">
              Всього
            </TableCell>
            <TableCell colSpan="3">у тому числі:</TableCell>
            <TableCell colSpan="16">семестри</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan="3" className="rotateTd">
              Лекції
            </TableCell>
            <TableCell rowSpan="3" className="rotateTd">
              Практичні заняття
            </TableCell>
            <TableCell rowSpan="3" className="rotateTd">
              Лабораторні заняття
            </TableCell>
            <TableCell colSpan="2">1</TableCell>
            <TableCell colSpan="2">2</TableCell>
            <TableCell colSpan="2">3</TableCell>
            <TableCell colSpan="2">4</TableCell>
            <TableCell colSpan="2">5</TableCell>
            <TableCell colSpan="2">6</TableCell>
            <TableCell colSpan="2">7</TableCell>
            <TableCell colSpan="2">8</TableCell>
          </TableRow>
          <TableCell colSpan="16">Тижні</TableCell>
          <TableRow>
            <TableCell colSpan="2">16</TableCell>
            <TableCell colSpan="2">20</TableCell>
            <TableCell colSpan="2">16</TableCell>
            <TableCell colSpan="2">20</TableCell>
            <TableCell colSpan="2">16</TableCell>
            <TableCell colSpan="2">20</TableCell>
            <TableCell colSpan="2">16</TableCell>
            <TableCell colSpan="2">8</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Отображение данных */}
          {Object.entries(groupedData).map(([key, items], index) => (
            <React.Fragment key={index}>
              <tr>
                <td colSpan="34">{key}</td>
              </tr>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{index + 1}</td>
                  <td>{item.codeTIN}</td>
                  <td colSpan="5">{item.nameEducationalComponent}</td>
                  <td>{item.exams}</td>
                  <td>{item.credits}</td>
                  <td>{item.courses}</td>
                  <td>{item.graduated}</td>
                  <td>{item.countCredits}</td>
                  <td>{item.totalValue}</td>
                  <td>{item.total}</td>
                  <td>{item.lectures}</td>
                  <td>{item.practical}</td>
                  <td>{item.laboratory}</td>
                  <td>{item.independentWork}</td>
                  <td>{item.ff1}</td>
                  <td>{item.ff1__1}</td>
                  <td>{item.ff2}</td>
                  <td>{item.ff2__1}</td>
                  <td>{item.ss1}</td>
                  <td>{item.ss1__1}</td>
                  <td>{item.ss2}</td>
                  <td>{item.ss2__1}</td>
                  <td>{item.tt1}</td>
                  <td>{item.tt1__1}</td>
                  <td>{item.tt2}</td>
                  <td>{item.tt2__1}</td>
                  <td>{item.th1}</td>
                  <td>{item.th1__1}</td>
                  <td>{item.th2}</td>
                  <td>{item.th2__1}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlanTable;
