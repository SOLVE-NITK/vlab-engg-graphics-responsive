const experiments = [
  {
    title: "Projection of Points",
    path: "exp-projections-of-points-nitk",
    number: 1,
  },
  {
    title: "Projection of Planes",
    path: "exp-projections-of-planes-nitk",
    number: 2,
  },
  {
    title: "Projection of Solids",
    path: "exp-projections-of-solids-nitk",
    number: 3,
  },
];
const row = document.querySelector(".row");
const search = document.querySelector(".search");
search.addEventListener("input", (e) => seachExperiments(e));

function seachExperiments(e) {
  e.preventDefault();
  const searchedExperiments = experiments.filter((exp) =>
    exp.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  displayExperiments(searchedExperiments);
}

function displayExperiments(expts = experiments) {
  row.innerHTML = "";
  expts.map((experiment, index) => {
    row.innerHTML += `
     <a href=${experiment.path} class="col" target="_blank"
            >${experiment.title}
            <span class='number'>${experiment.number}</span></a
          >
    `;
  });
}

displayExperiments();
