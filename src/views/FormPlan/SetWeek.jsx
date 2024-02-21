import UserSelect from "../../components/UI/UserSelect";

const SetWeek = ({ state, setState }) => {
  const handleSetWeek = (e) => {
    const { name, value } = e.target;
    if (value === "16/20/8") {
      setState({
        ...state,
        ff1__1: 16,
        ff2__1: 20,
        ss1__1: 16,
        ss2__1: 20,
        tt1__1: 16,
        tt2__1: 20,
        th1__1: 16,
        th2__1: 8,
      });
    } else if (value === "18/22/10") {
      setState({
        ...state,
        ff1__1: 18,
        ff2__1: 22,
        ss1__1: 18,
        ss2__1: 22,
        tt1__1: 18,
        tt2__1: 22,
        th1__1: 18,
        th2__1: 10,
      });
    }
  };
  return (
    <>
      <label className="count-week w100p">
        <p>Кількість тижнів в семестрі:</p>
        <UserSelect
          className="w100p"
          handleChange={handleSetWeek}
          opt={[
            {
              name: "16/20/8",
              value: "16/20/8",
            },
            {
              name: "18/22/10",
              value: "18/22/10",
            },
          ]}
        />
      </label>
    </>
  );
};

export default SetWeek;
