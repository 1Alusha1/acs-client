import { useEffect, useState } from "react";
import planTableAsync from "../async/planTable.async";
import planAnnexTableAsync from "../async/planAnnexTable.async";
import PlanTable from "../components/PlanTable";
import SemesterTable from "../components/SemestrTable";
import WorkPlanTable from "../components/WorkPlanTable";
import workPlanTableAsync from "../async/workPlanTable.async";
import UserSelect from "../components/UI/UserSelect";
import planNameAsync from "../async/planName.async";
import { Button } from "antd";
import FilterTable from "./Tables/FilterTable";
const Tables = () => {
  const [table, setTable] = useState([]);
  const [planAnnex, setPlanAnnex] = useState([]);
  const [workPlan, setWorkPlan] = useState([]);
  const [planNames, setPlanNames] = useState([]);
  const [filter, setFilter] = useState({
    planName: "",
    course: "",
  });
  useEffect(() => {
    // planTableAsync.getPlanTable().then((data) => setTable(data));
    planNameAsync.getAllNames().then(({ data }) => {
      setPlanNames(data);
    });
    planTableAsync
      .getPlanTableByName({ planName: filter.planName })
      .then((data) => {
        setTable(data);
      });
    workPlanTableAsync
      .getPlanTableByName({ planName: `робочий план ${filter.planName}` })
      .then((data) => {
        setWorkPlan(data);
      });
  }, [filter.planName]);


  return (
    <>
      <FilterTable state={filter} planNames={planNames} setState={setFilter} />

      {table && <PlanTable data={table} />}
      <h1>Робочий план</h1>
      {workPlan && <WorkPlanTable data={workPlan} c={1} />}
      <h1>Додаток до плану</h1>
      {filter.planName && <SemesterTable planName={filter.planName} />}
    </>
  );
};

export default Tables;
