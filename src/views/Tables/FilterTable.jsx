import { useEffect, useState } from "react";
import UserSelect from "../../components/UI/UserSelect";
import { Button } from "antd";
import planAnnexTableAsync from "../../async/planAnnexTable.async";
import workPlanTableAsync from "../../async/workPlanTable.async";

const FilterTable = ({ planNames, state, setState }) => {
  const [mappedPlanName, setMappedPlanNames] = useState([]);
  const [name, setName] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    for (let i = 0; i < planNames.length; i++) {
      if (planNames[i].planName === value) {
        setName(planNames[i]);
      }
    }
    setState({ ...state, planName: value });
  };
  const handleClick = () => {
    planAnnexTableAsync.generateAnnexPlan({ planName: state.planName });
    workPlanTableAsync.generateWorkPlan({ planName: state.planName });
  };

  useEffect(() => {
    let result = planNames.map((item) => ({
      name: item.planName,
      value: item.planName,
    }));
    setMappedPlanNames(result);
  }, [planNames]);
  return (
    <>
      <UserSelect
        name={"planName"}
        value={state.planName}
        defaultValue={planNames.name}
        opt={mappedPlanName}
        handleChange={handleChange}
      />
      {!name.workPlanName && !name.planAnnexName && (
        <>
          <h3>Додаток та робочий план відсутні.</h3>
          <div>
            <h4>Створити?</h4>
            <Button onClick={handleClick}>Створити</Button>
          </div>
        </>
      )}
    </>
  );
};

export default FilterTable;
