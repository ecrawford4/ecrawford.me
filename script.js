document.addEventListener('DOMContentLoaded', () => {
  // Show current session time
  const dateTimeString = new Date().toLocaleString();
  const [datePart, timePart] = dateTimeString.split(', ');
  document.getElementById('current-session').innerHTML = `Current Session:<br>${datePart}<br>${timePart}`;

  // Real-time clock
  setInterval(() => {
    const dateTimeString = new Date().toLocaleString();
    const [datePart, timePart] = dateTimeString.split(', ');
    document.getElementById('real-time-clock').innerHTML = `Current Time:<br>${datePart}<br>${timePart}`;
  }, 1000);

  const data = {
    "socials": [
      {
        "socialLink": "https://www.linkedin.com/in/ethan-crawford-791038331/",
        "imgSrc": "https://icongr.am/simple/linkedin.svg?size=35&color=381e1e&colored=false",
        "altText": "LinkedIn",
        "width": "20",
        "height": "20"
      },
      {
        "socialLink": "https://github.com/ecrawford4",
        "imgSrc": "https://icongr.am/simple/github.svg?size=35&color=381e1e&colored=false",
        "altText": "GitHub",
        "width": "20",
        "height": "20"
      },
      // {
      //   "socialLink": "https://x.com/ecrawfordme",
      //   "imgSrc": "assets/x-logo/logo.svg",
      //   "altText": "X",
      //   "width": "20",
      //   "height": "20"
      // },
      // {
      //   "socialLink": "https://mastodon.social/@ecrawfordme",
      //   "imgSrc": "https://icongr.am/simple/mastodon.svg?size=35&color=381e1e&colored=false",
      //   "altText": "Mastodon",
      //   "width": "20",
      //   "height": "20"
      // },
      // {
      //   "socialLink": "https://bsky.app/profile/ecrawfordme.bsky.social",
      //   "imgSrc": "assets/bsky-logo/bluesky_logo_381e1e.svg",
      //   "altText": "bsky",
      //   "width": "20",
      //   "height": "20"
      // },
      {
        "socialLink": "https://ecrawford4.substack.com/",
        "imgSrc": "assets/substack-logo/substack_icon_381e1e.svg",
        "altText": "substack",
        "width": "18",
        "height": "20"
      },
      {
        "socialLink": "https://www.keybr.com/profile/r59aauz",
        "imgSrc": "https://icongr.am/clarity/keyboard.svg?size=20&color=381e1e&colored=false",
        "altText": "keybr",
        "width": "auto",
        "height": "auto"
      }
    ],
    "pinnedProjects": [
      {
        "title": "Bloom Buddy",
        "link": "https://github.com/cscd488tGroup3/home"
      },
      { 
        "title": "ecrawford.me", 
        "link": "https://github.com/ecrawford4/ecrawford.me" 
      },
      { 
        "title": "seed-generator", 
        "link": "https://github.com/ecrawford4/seed-generator" 
      },
      { 
        "title": "magic-mirror", 
        "link": "https://github.com/ecrawford4/magic-mirror" 
      },
      { 
        "title": "sitemap-generator", 
        "link": "https://github.com/ecrawford4/sitemap-generator" 
      },
      { 
        "title": "tex-template-report", 
        "link": "https://github.com/ecrawford4/tex-template-report" 
      },
      { 
        "title": "tex-template-notes", 
        "link": "https://github.com/ecrawford4/tex-template-notes" 
      },
      { 
        "title": "landing.ecrawford.me", 
        "link": "https://landing.ecrawford.me" 
      },
      { 
        "title": "blog.ecrawford.me", 
        "link": "https://blog.ecrawford.me" 
      }
    ]
  };

  // Populate pinned projects
  const projectContainer = document.querySelector("figure.pinned-project-grid-container");
  if (!projectContainer) {
    console.error('Project container not found');
    return;
  }
  data.pinnedProjects.forEach(project => {
    const projectTemplate = `<a class="grid-item" target="_blank" href="${project.link}">${project.title}</a>`;
    projectContainer.insertAdjacentHTML('beforeend', projectTemplate);
  });

  // Populate social badges
  const contactContainer = document.querySelector("div.contact");
  if (!contactContainer) {
    console.error('Contact container not found');
    return;
  }
  data.socials.forEach(social => {
    const socialTemplate = `
      <a class="social-badge" target="_blank" href="${social.socialLink}">
        <img class="social-badge" src="${social.imgSrc}" alt="${social.altText}" width="${social.width}" height="${social.height}">
      </a>
    `;
    contactContainer.insertAdjacentHTML('beforeend', socialTemplate);
  });
});
