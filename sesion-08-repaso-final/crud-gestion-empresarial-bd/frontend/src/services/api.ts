

// [companies]

const export companiesAPI = {
  async getAll():Promise <{companies: any[],total: number}> {
    // lógica para obtener todas las empresas
  },
  async getById() {

  }
  async create() {
    const response = await fetch ("http://localhost:3001/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  async update() {

  }
}
