export default {
  async getWorkPlanTable() {
    const res = await fetch("http://localhost:3000/api/workPlan/");
    const { data } = await res.json();
    return data;
  },
  async getPlanTableByName(dto) {
    const res = await fetch("http://localhost:3000/api/workPlan/get-plan-by-name", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dto),
    });
    const { data } = await res.json();
    return data;
  },
  async generateWorkPlan(dto) {
    const res = await fetch(
      "http://localhost:3000/api/workPlan/generateTable",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dto),
      }
    );
    const { data } = await res.json();
    return data;
  },
};
