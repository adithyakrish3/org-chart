const data= [
  {
    "name": "Rahul Menon",
    "id": 1,
    "designation": "CEO",
    team: "All",
    parent: null
  },
  {
    "name": "Vidya Menon",
    "id": 2,
    "designation": "Head of Product",
    team: "Design",
    parent: 1
  },
  {
    "name": "Sharath Toni",
    "id": 4,
    "designation": "Head of Engg.",
    team: "Tech",
    parent: 1
  },
  {
    "name": "Arjun Kalker",
    "id": 8,
    "designation": "Head of Talent",
    team: "HR",
    parent: 1
  },
  {
    "name": "Priya Bhatt",
    "id": 9,
    "designation": "Head of Sales",
    team: "Sales",
    parent: 1
  },
  {
    "name": "Vidya Singh",
    "id": 12,
    "designation": "Head of Marketing",
    team: "Marketing",
    parent: 1
  },
  {
    "name": "Arvind Kumar",
    "id": 3,
    "designation": "Senior Designer",
    team: "Design",
    parent: 2
  },
  {
    "name": "Xhao Paoh",
    "id": 5,
    "designation": "TL",
    team: "Tech",
    parent: 4
  },
  {
    "name": "Kabir Singh",
    "id": 10,
    "designation": "Senior HR",
    team: "HR",
    parent: 8
  },
  {
    "name": "Lex Luthor",
    "id": 13,
    "designation": "Intern.",
    team: "Sales",
    parent: 9
  },
  {
    "name": "Sourav Pandya",
    "id": 6,
    "designation": "Backend Dev.",
    team: "Tech",
    parent: 5
  },
  {
    "name": "Raj Kiran",
    "id": 7,
    "designation": "Frontend Dev",
    team: "Tech",
    parent: 5
  },
]

module.exports = { data }