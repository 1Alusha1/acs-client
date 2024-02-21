export default {
  async getPlanTable() {
    const res = await fetch("http://localhost:3000/api/plan/");
    const { data } = await res.json();
    return data;
  },
  async getPlanTableByName(dto) {
    const res = await fetch("http://localhost:3000/api/plan/get-plan-by-name", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dto),
    });
    const { data } = await res.json();
    return data;
  },
  async createPlanRecord(dto) {
    console.log(dto);
    const res = await fetch(`http://localhost:3000/api/plan/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dto),
    });
    const { data, message } = await res.json();
    return { data, message };
  },
};
