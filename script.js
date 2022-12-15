const companies = {
  id: "companies",
  logo: "Annual Reports",
  button: "Visit",
  cards: [
    {
      title: "Apple",
      sub: "AAPL",
      text: "$ 2.690 T",
    },
    {
      title: "Microsoft",
      sub: "MSFT",
      text: "$ 2.228 T",
    },
    {
      title: "Saudi Aramco",
      sub: "2222.SR",
      text: "$ 2.205 T",
    },
    {
      title: "Alphabet (Google)",
      sub: "GOOG",
      text: "$ 1.778 T",
    },
    {
      title: "Amazon",
      sub: "AMZN",
      text: "$ 1.565 T",
    },
    {
      title: "Tesla",
      sub: "TSLA",
      text: "$ 837.00 B",
    },
    {
      title: "Nvidia",
      sub: "NVDA",
      text: "$ 601.99 B",
    },
  ],
};

//in main container
const container = document.getElementById("container");
for (let i = 0; i < companies.cards.length; i++) {
  container.innerHTML += `
  <section class="card">
    <div class="sub">${companies.cards[i].sub}</div>
    <div class="title">${companies.cards[i].title}</div>
    <div class="text">${companies.cards[i].text}</div>
    <button>Visit <a><span class="material-icons">arrow_forward</span></a></button>
  </section>
  `;
}


