export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_TEAM":
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload ? { ...emp, isInTeam: true } : emp
        ),
        team: [
          ...state.team,
          state.employees.find((emp) => emp.id === action.payload),
        ],
      };
    case "REMOVE_FROM_TEAM":
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload ? { ...emp, isInTeam: false } : emp
        ),
        team: state.team.filter((member) => member.id !== action.payload),
      };
    case "SORT_BY_AGE":
      return {
        ...state,
        team: [...state.team].sort((a, b) => a.age - b.age),
      };
    default:
      return state;
  }
};

export const initialState = {
  employees: [
    {
      id: 1,
      name: "Jaymee Imm",
      email: "jimm0@craigslist.org",
      gender: "Female",
      age: 80,
    },
    {
      id: 2,
      name: "Jody Them",
      email: "jthemann1@skyrock.com",
      gender: "Female",
      age: 29,
    },
    {
      id: 3,
      name: "Cecelet",
      email: "ccarlet2@jalbum.net",
      gender: "Male",
      age: 69,
    },
    {
      id: 4,
      name: "Elton son",
      email: "eallinson3@jugem.jp",
      gender: "Male",
      age: 31,
    },
    {
      id: 5,
      name: "Garvy",
      email: "gshaddick4@rediff.com",
      gender: "Male",
      age: 32,
    },
    {
      id: 6,
      name: "Fin Realy",
      email: "frealy5@unc.edu",
      gender: "Male",
      age: 26,
    },
    {
      id: 7,
      name: "Minnamiee",
      email: "mfransseni6@aboutads.info",
      gender: "Female",
      age: 52,
    },
    {
      id: 8,
      name: "Fernando",
      email: "fpagon7@blogs.com",
      gender: "Male",
      age: 40,
    },
    {
      id: 9,
      name: "John ",
      email: "tfenny8@sakura.ne.jp",
      gender: "Female",
      age: 52,
    },
    {
      id: 10,
      name: "Nerti Try",
      email: "ntry9@shareasale.com",
      gender: "Female",
      age: 43,
    },
    {
      id: 11,
      name: "Abagael dell",
      email: "abeadella@unc.edu",
      gender: "Female",
      age: 76,
    },
    {
      id: 12,
      name: "Morten mee",
      email: "mmcnameeb@sun.com",
      gender: "Male",
      age: 38,
    },
    {
      id: 13,
      name: "Domenico man",
      email: "dshearmanc@seesaa.net",
      gender: "Male",
      age: 66,
    },
    {
      id: 14,
      name: "Rodolphe stone",
      email: "rbittlestoned@51.la",
      gender: "Male",
      age: 33,
    },
    {
      id: 15,
      name: "Merv son",
      email: "mwattersone@storify.com",
      gender: "Male",
      age: 37,
    },
  ],
  team: [],
};
