const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/exercise");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addWorkout(data) {
   const id = location.search.split("=")[1];

    const res = await fetch("/api/exercise/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/exercise", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/exercise/range`);
    const json = await res.json();

    return json;
  },
};


