import React from "react";
import { Card, Input } from "antd";

function FormCard({ formData, handleChange }) {
  const columns = [
    {
      title: "Тип предмету",
      dataIndex: "type",
    },
    {
      title: "Підтип предмету",
      dataIndex: "subType",
    },
    {
      title: "Назва навчальної компоненти",
      dataIndex: "nameEducationalComponent",
    },
    {
      title: "Екзамени",
      dataIndex: "exams",
    },
    {
      title: "Заліки",
      dataIndex: "credits",
    },
    {
      title: "Кількість кредитів",
      dataIndex: "countCredits",
    },
    {
      title: "Загальний обсяг",
      dataIndex: "totalValue",
      render: (_, record) => (
        <Input
          type="number"
          name="totalValue"
          onChange={handleChange}
          value={record.practical}
        />
      ),
    },
    {
      title: "Загальна кількість годин",
      dataIndex: "total",
      render: (_, record) => (
        <Input
          type="number"
          name="total"
          onChange={handleChange}
          value={record.practical}
        />
      ),
    },
    {
      title: "Лекції",
      dataIndex: "lectures",
      render: (_, record) => (
        <Input
          type="number"
          name="lectures"
          onChange={handleChange}
          value={record.lectures}
        />
      ),
    },
    {
      title: "Практичні",
      dataIndex: "practical",
      render: (_, record) => (
        <Input
          type="number"
          name="practical"
          onChange={handleChange}
          value={record.practical}
        />
      ),
    },
    {
      title: "Самостійні роботи",
      dataIndex: "independentWork",
      render: (_, record) => (
        <Input
          type="number"
          name="independentWork"
          onChange={handleChange}
          value={record.independentWork}
        />
      ),
    },
  ];
  return (
    <Card title="Form Data" style={{ width: "100%" }}>
      <div className="form-data">
        {columns.map((column) => (
          <div key={column.dataIndex} className="data-row">
            <h4>{column.title}</h4>
            {column.render ? (
              <Input
                type="number"
                name={column.dataIndex}
                onChange={handleChange}
                value={formData[column.dataIndex]}
              />
            ) : (
              <p>{formData[column.dataIndex]}</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default FormCard;
