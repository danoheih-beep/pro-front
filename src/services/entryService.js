const BASE_URL = "http://localhost:3001/entries";

export const entryService = {
  async getAll() {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch entries");
    }
    return response.json();
  },

  async getById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch entry");
    }
    return response.json();
  },

  async create(entry) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });

    if (!response.ok) {
      throw new Error("Failed to create entry");
    }

    return response.json();
  },

  async remove(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete entry");
    }

    return true;
  }
};