const data= [
  {
    "name": "Employee 1",
    "id": 1,
    "designation": "CEO",
    parent: null
  },
  {
    "name": "Employee 2",
    "id": 2,
    "designation": "Head of Product",
    parent: 1
  },
  {
    "name": "Employee 4",
    "id": 4,
    "designation": "Head of Engg.",
    parent: 1
  },
  {
    "name": "Employee 8",
    "id": 8,
    "designation": "Head of Talent",
    parent: 1
  },
  {
    "name": "Employee 9",
    "id": 9,
    "designation": "Head of Sales",
    parent: 1
  },
  {
    "name": "Employee 12",
    "id": 12,
    "designation": "Head of Marketing",
    parent: 1
  },
  {
    "name": "Employee 3",
    "id": 3,
    "designation": "Senior Designer",
    parent: 2
  },
  {
    "name": "Employee 5",
    "id": 5,
    "designation": "TL",
    parent: 4
  },
  {
    "name": "Employee 10",
    "id": 10,
    "designation": "Senior HR",
    parent: 8
  },
  {
    "name": "Employee 13",
    "id": 13,
    "designation": "Intern.",
    parent: 9
  },
  {
    "name": "Employee 6",
    "id": 6,
    "designation": "Backend Dev.",
    parent: 5
  },
  {
    "name": "Employee 7",
    "id": 7,
    "designation": "Frontend Dev",
    parent: 5
  },
]

module.exports = { data }