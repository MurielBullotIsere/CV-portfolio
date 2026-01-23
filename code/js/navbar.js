document.getElementById("navbar").innerHTML = `
      <h2>Portfolio</h2>
      <ul>
      <li><a href="../../code/html/project_allgamers.html">Projet Allgamers</a></li>
      <li><a href="../../index.html">CV en ligne</a></li>
      </ul>
`;

  // Auto active le bon lien dans la navbar
  const page = location.pathname.split("/").pop();                    // récupère le chemin de l’URL actuelle, le coupe en morceau et garde le dernier
  // Si Parcourt tous les liens de la sidebar. 
  // Si la valeur de l’attribut href du lien correspond avec la page actuelle,
  // ajout de class="active" au lien.
  document.querySelectorAll(".sidebar a").forEach(link => {
  if (link.getAttribute("href") === page || link.getAttribute("href").endsWith(page)) {
      link.classList.add("active");
  }
  });
