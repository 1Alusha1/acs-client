export default {
  async sendFile(file) {
    const body = new FormData();
    body.append("planFile", file);
    console.log(file, body.get("data"));
    const res = await fetch("http://localhost:3000/api/file/read-CSV", {
      method: "POST",
      body,
    });
    const data = await res.json();
    return data;
  },
};
