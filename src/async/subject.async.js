export default {
  async getSubjects(){
    const res = await fetch('http://localhost:3000/api/subject/');
    const data = await res.json();
    return data
  }
}