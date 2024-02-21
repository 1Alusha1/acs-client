export default {
  async getAllNames() {
    const res = await fetch("http://localhost:3000/api/planName/allNames");
    const data = await res.json();
    return data;
  },
};
