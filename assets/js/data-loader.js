/*==================== LOAD CV DATA ====================*/
function loadCVData() {
  try {
    // Los datos ahora vienen del archivo cv-data.js
    const data = cvData;

    // Cargar datos personales
    loadPersonalInfo(data.personal);

    // Cargar navegación
    loadNavigation(data.navigation);

    // Cargar perfil
    loadProfile(data.profile);

    // Cargar educación
    loadEducation(data.education);

    // Cargar habilidades
    loadSkills(data.skills);

    // Cargar experiencia
    loadExperience(data.experience);

    // Cargar certificados
    loadCertificates(data.certificates);

    // Cargar intereses
    loadInterests(data.interests);

    // Inicializar la navegación después de cargar los datos
    if (typeof initNavigation === "function") {
      initNavigation();
    }
  } catch (error) {
    console.error("Error al cargar los datos del CV:", error);
  }
}

/*==================== LOAD PERSONAL INFO ====================*/
function loadPersonalInfo(personal) {
  // Título de la página
  document.title = `CV Resume - ${personal.name}`;

  // Logo/nombre en navegación
  const navLogo = document.querySelector(".nav__logo");
  if (navLogo) navLogo.textContent = personal.name;

  // Nombre en home
  const homeTitle = document.querySelector(".home__title");
  if (homeTitle) homeTitle.textContent = personal.name;

  // Profesión
  const homeProfession = document.querySelector(".home__profession");
  if (homeProfession) homeProfession.textContent = personal.profession;

  // Dirección, email y teléfono
  const addressElements = document.querySelectorAll(".home__information");
  if (addressElements.length >= 3) {
    addressElements[0].innerHTML = `<i class='bx bx-map home__icon'></i> ${personal.address}`;
    addressElements[1].innerHTML = `<i class='bx bx-envelope home__icon'></i> ${personal.email}`;
    addressElements[2].innerHTML = `<i class='bx bx-phone home__icon'></i> ${personal.phone}`;
  }
}

/*==================== LOAD NAVIGATION ====================*/
function loadNavigation(navigation) {
  const navList = document.querySelector(".nav__list");
  if (!navList) return;

  navList.innerHTML = "";

  navigation.forEach((item) => {
    const li = document.createElement("li");
    li.className = "nav__item";
    li.innerHTML = `
      <a href="${item.href}" class="nav__link">
        <i class='${item.icon} nav__icon'></i>
        <p>${item.name}</p>
      </a>
    `;
    navList.appendChild(li);
  });
}

/*==================== LOAD PROFILE ====================*/
function loadProfile(profile) {
  const sectionTitle = document.querySelector("#profile .section-title");
  if (sectionTitle) sectionTitle.textContent = profile.title;

  const profileDescription = document.querySelector(".profile__description");
  if (profileDescription) profileDescription.textContent = profile.description;
}

/*==================== LOAD EDUCATION ====================*/
function loadEducation(education) {
  const educationContainer = document.querySelector(".education__container");
  if (!educationContainer) return;

  educationContainer.innerHTML = "";

  education.forEach((item) => {
    const div = document.createElement("div");
    div.className = "education__content";
    div.innerHTML = `
      <div class="education__time">
        <span class="education__rounder"></span>
        <span class="education__line"></span>
      </div>
      <div class="education__data bd-grid">
        <h3 class="education__title">${item.title}</h3>
        <span class="education__studies">${item.degree}</span>
        <span class="education__year">${item.period}</span>
      </div>
    `;
    educationContainer.appendChild(div);
  });
}

/*==================== LOAD SKILLS ====================*/
function loadSkills(skills) {
  const skillsContent = document.querySelector(".skills__content");
  if (!skillsContent) return;

  skillsContent.innerHTML = "";

  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "skills__name";
    div.innerHTML = `<span class="skills__circle"></span> ${skill}`;
    skillsContent.appendChild(div);
  });
}

/*==================== LOAD EXPERIENCE ====================*/
function loadExperience(experience) {
  const experienceContainer = document.querySelector(".experience__container");
  if (!experienceContainer) return;

  experienceContainer.innerHTML = "";

  experience.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "experience__content";

    const responsibilitiesList = item.responsibilities
      .map(
        (resp) =>
          `<li class="experience__description">
        <span class="experience__circle"></span>
        <div>${resp}</div>
      </li>`
      )
      .join("");

    div.innerHTML = `
      <div class="experience__time">
        <span class="experience__rounder"></span>
        ${
          index < experience.length - 1
            ? '<span class="experience__line"></span>'
            : ""
        }
      </div>
      <div class="experience__data bd-grid">
        <h3 class="experience__title">${item.title}</h3>
        <span class="experience__company">${item.company} | ${
      item.period
    }</span>
        <ul>
          <li>
            <ul class="experience__list">
              ${responsibilitiesList}
            </ul>
          </li>
        </ul>
      </div>
    `;
    experienceContainer.appendChild(div);
  });
}

/*==================== LOAD CERTIFICATES ====================*/
function loadCertificates(certificates) {
  const certificateContainer = document.querySelector(
    ".certificate__container"
  );
  if (!certificateContainer) return;

  certificateContainer.innerHTML = "";

  certificates.forEach((cert) => {
    const div = document.createElement("div");
    div.className = "certificate__content bd-grid";
    div.innerHTML = `
      <h3 class="certificate__title">${cert.title}</h3>
      <span class="certificate__company">${cert.date} | ${cert.issuer}</span>
    `;
    certificateContainer.appendChild(div);
  });
}

/*==================== LOAD INTERESTS ====================*/
function loadInterests(interests) {
  const interestsContainer = document.querySelector(".interests__container");
  if (!interestsContainer) return;

  interestsContainer.innerHTML = "";

  interests.forEach((interest) => {
    const div = document.createElement("div");
    div.className = "interests__content";
    div.innerHTML = `
      <i class="${interest.icon} interests__icon"></i>
      <span class="interests__name">${interest.name}</span>
    `;
    interestsContainer.appendChild(div);
  });
}

/*==================== INITIALIZE ====================*/
// Cargar datos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", loadCVData);
