export default {
  async getPlanAnnexTable() {
    const res = await fetch("http://localhost:3000/api/planAnnex");
    const { data } = await res.json();
    return data;
  },
  async getPlanTableByName(dto) {
    const res = await fetch("http://localhost:3000/api/planAnnex/get-plan-by-name", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dto),
    });
    const { data } = await res.json();
    return data;
  },
  async generateAnnexPlan(dto) {
    const res = await fetch(
      "http://localhost:3000/api/planAnnex/generateTable",
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
