let data = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 1,
        created_at: Date.now(),
        budget: 4500
    },
    {
        id: 2,
        name: "SubWay",
        "daily-hours": 3,
        "total-hours": 40,
        created_at: Date.now(),
        budget: 4500
    },
    {
        id: 3,
        name: "Restaurante Martins",
        "daily-hours": 1,
        "total-hours": 10,
        created_at: Date.now(),
        budget: 4500
    }
];

module.exports = {
    get() {
        return data;
    },

    update(newData) {
        data = newData;
    },

    delete(id) {
        data = data.filter(job => Number(job.id) !== Number(id));
    }
}