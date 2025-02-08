const lanyardJS = window.lanyard;
const discordId = "513752527989374976";

function setupTheme() {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    $('blocks > div:last-child span').text('light_mode');
  }
  else {
    if (theme == 'light') document.body.classList.add('light');
    else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      $('blocks > div:last-child span').text('light_mode');
    };
  };
};

function changeTheme() {
  const theme = localStorage.getItem('theme');
  if (theme == 'light') {
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    $('blocks > div:last-child span').text('light_mode');
  } else {
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    $('blocks > div:last-child span').text('dark_mode');
  };
};

let currentInterval;
setupTheme();
twemoji.parse(document.body);

const properties = {
  api: {
    baseURL: 'https://api.lanyard.rest/v1'
  },
  github_api: {
    baseURL: 'https://api.github.com'
  },
  languages: {
    "JavaScript": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#EFD81D"><path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path></svg>`,
    "CSS": `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/><path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"/><path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/></svg>`,
    "TypeScript": `<svg width="512" height="512" fill="none" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"> <rect width="512" height="512" rx="50" fill="#3178c6"/><path d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd" style="fill:#fff"/></svg>`,
    "Elixir": `<svg style="color: rgb(110, 74, 126);" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Elixir</title><path d="M19.793 16.575c0 3.752-2.927 7.426-7.743 7.426-5.249 0-7.843-3.71-7.843-8.29 0-5.21 3.892-12.952 8-15.647a.397.397 0 0 1 .61.371 9.716 9.716 0 0 0 1.694 6.518c.522.795 1.092 1.478 1.763 2.352.94 1.227 1.637 1.906 2.644 3.842l.015.028a7.107 7.107 0 0 1 .86 3.4z" fill="#6e4a7e"></path></svg>`,
    "Python": `<img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" alt="Python" width="16" height="20">`,
  }
}

setInterval(async () => {
  const data = await lanyardJS({ userId: discordId });
  reloadUser(data)
}, 5000);


const getActivityData = async (userData) => {
  if (userData.listening_to_spotify === true) {
    let activityData

    let currentSeconds = Math.floor(Date.now() - userData.spotify.timestamps.start)
    let currentDateSecs = Math.floor((currentSeconds / 1000) % 60) < 10 ? '0' + Math.floor((currentSeconds / 1000) % 60) : Math.floor((currentSeconds / 1000) % 60)
    let currentDate = `${Math.floor((currentSeconds / (1000 * 60)) % 60)}:${currentDateSecs}`

    let endDateSecs = Math.floor(((userData.spotify.timestamps.end - userData.spotify.timestamps.start) / 1000) % 60) < 10 ? '0' + (Math.floor(((userData.spotify.timestamps.end - userData.spotify.timestamps.start) / 1000) % 60)) : Math.floor(((userData.spotify.timestamps.end - userData.spotify.timestamps.start) / 1000) % 60)
    activityData = await {
      current: currentDate,
      end: `${Math.floor(((userData.spotify.timestamps.end - userData.spotify.timestamps.start) / (1000 * 60)) % 60)}:${endDateSecs}`
    }

    return activityData;
  }
  else return
}

const getUser = async () => {
  const res = await lanyardJS({ userId: discordId });
  return res;
};

const parseStatus = data => {
  return {
    text: data.discord_status.replace('online', 'Çevrimiçi').replace('idle', 'Boşta').replace('dnd', 'Rahatsız etmeyin').replace('offline', 'Çevrimdışı'),
    color: data.discord_status.replace('online', 'rgb(69 189 69)').replace('idle', '#ffa500').replace('dnd', 'rgb(202, 71, 71)').replace('offline', 'var(--secondary-color)')
  };
};

const parseActivity = (data, activityData) => {
  return activityData !== undefined ? `"${data.spotify.song}" Dinliyor <a class="spotify-time">${activityData.current} ─ ${activityData.end}</a>` : 'Şu an bir şey dinlemiyor.';
};

const reloadUser = async (data) => {
  clearInterval(currentInterval);
  //`url(https://cdn.discordapp.com/avatars/${discordId}/${data.discord_user.avatar}.gif?size=512)`
  $('div-img.avatar').css('background-image', `url(https://avatars.githubusercontent.com/u/73614466?v=4)`).removeAttr('loading');
  $('status > p').text(parseStatus(data).text).removeAttr('loading').css('width', 'max-content');
  $('status > span').css('background-color', parseStatus(data).color);
  $('status').attr('tippy-interactive', 'true').attr('tippy', `
  <svg width="71" height="55" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="71" height="55" fill="currentColor"/>
  </clipPath>
  </defs>
  </svg>
  <a class="discord" href="https://discord.gg/MEdUDMSTMx" target="_blank">Discord</a>`);

  if (data.listening_to_spotify === true) {
    $('spotify').attr('tippy', `<svg xmlns="http://www.w3.org/2000/svg" height="168px" width="168px" version="1.1" viewBox="0 0 168 168">
    <path d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
  </svg>
  ${data.spotify.artist.replace(/;/g, ',')} tarafından`);
    activityTimer(data);
  } else {
    $('spotify > logo').html(`<svg loading xmlns="http://www.w3.org/2000/svg" height="168px" width="168px" version="1.1" viewBox="0 0 168 168">
  <path fill="green" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
 </svg>`).css('background-image', 'unset');
    $('spotify').removeAttr('tippy');
    document.querySelector('spotify')._tippy?.destroy();
  };

  let activityData = await getActivityData(data)

  $('spotify > p').html(parseActivity(data, activityData)).removeAttr('loading').css('width', 'max-content');
  $('spotify > logo > svg').removeAttr('loading');
  reloadTippys();
  return data;
};

getUser().then(reloadUser);

function reloadTippys() {
  document.querySelectorAll('[tippy]').forEach(element => {
    if (element._tippy) element._tippy.destroy();
    tippy(element, {
      content: element.getAttribute('tippy'),
      allowHTML: true,
      theme: 'default',
      animation: 'default',
      inertia: true,
      duration: [100, 100],
      interactive: element.getAttribute('tippy-interactive') === 'true',
    });
  });
};

const changeBlock = id => {
  const block = document.querySelector(`[id="${id}"]`);
  if (block.classList.contains('active')) return;
  document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
  block.classList.add('active');
  document.querySelector('block-content').innerHTML = block.querySelector('extent').innerHTML;

  if (id == '1') showGithubRepos();
  reloadTippys();
};

function showGithubRepos() {
  const getGitHubData = async () => {
    const response = await fetch(properties.github_api.baseURL + '/users/ErenBaygun/repos');
    return await response.json();
  };

  $('github').html('&thinsp;');
  getGitHubData().then(data => {
    data.forEach((repository, index) => {
      if (index == 0) $('github').html('');
      if (!repository.description || !repository.language) return;
      const repositoryElement = document.createElement('repo');
      repositoryElement.onclick = () => window.open(repository.html_url, '_blank');
      repositoryElement.innerHTML = `<repo-title>${repository.full_name}</repo-title>
    <description>${repository.description || ''}</description>
    <p style="margin-top: auto;">
    <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 24 24" fill="none" class="sc-bkkeKt cNnlrr"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></g></svg>
    <a>${repository.stargazers_count}</a>
    </p>
    <p>
    <a>${properties.languages[`${repository.language}`] || repository.language}</a> <a class="lang">${repository.language}</a>
    </p>`;
      $('github').append(repositoryElement);
    });
    $('github').removeAttr('loading');
    twemoji.parse(document.body);
  });
};

const materialIconsElement = document.createElement('link');
materialIconsElement.rel = 'stylesheet';
materialIconsElement.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(materialIconsElement);
materialIconsElement.onload = loadIcons;

function loadIcons() {

  $('location').removeAttr('loading');
  $('location > a').text('İstanbul, Türkiye');
  $('location > span').text('location_on').css('color', '#ca4747');

  $('counting').removeAttr('loading')
  $('counting > span').text('favorite').css('color', '#ca4747')

  const socials = [
    {
      svg: `
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          style="fill:#a9a9a9"
          d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/>
        <path
          style="fill:#a9a9a9"
          d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/>
        <circle
          style="fill:#a9a9a9"
          cx="390.476" cy="121.524" r="30.23"/>
      </svg>`,
      href: 'https://instagram.com/eren.byg',
      tippy: 'Instagram'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2"
        fill="none" stroke="#a9a9a9" stroke-miterlimit="10" stroke-width="6" d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4"
        stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" stroke="#a9a9a9" stroke-miterlimit="10"
        stroke-width="6" d="M2 12h60v40H2z" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg>`,
      href: 'mailto:eren@baygun.net',
      tippy: 'E-Mail'
    },
    {
      svg: `<svg width="71" height="55" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path fill="#a9a9a9", d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="71" height="55" fill="currentColor"/>
      </clipPath>
      </defs>
      </svg>`,
      href: `https://discord.gg/MEdUDMSTMx`,
      tippy: 'Discord'
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#a9a9a9" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      href: 'https://github.com/ErenBaygun',
      tippy: 'GitHub'
    }
  ];

  $('links').removeAttr('loading');
  $('links > a').html(socials.map(social => `<a href="${social.href}" target="_blank" rel="noopener noreferrer"><span tippy="${social.tippy}">${social.svg}</span>`));
  reloadTippys();
};

const countDownDate = new Date("May 5, 2023 17:00:00").getTime();

function reloadTimer() {
  let now = new Date().getTime();

  let distance = now - countDownDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let timer = `${days}:${hours}:${minutes}:${seconds}`

  $('counting > a').text(`${timer}`);
}

let x = setInterval(function () {
  reloadTimer()
}, 1000);

$('counting').removeAttr('loading');
reloadTimer();


function activityTimer(data) {
  let activityData

  var interval = setInterval(async () => {
    activityData = await getActivityData(data)

    if (Math.floor(Date.now() / 1000) === Math.floor(data.spotify.timestamps.end / 1000)) {
      const newData = reloadUser(data)
      if (!newData?.listening_to_spotify) $('spotify > logo').html(`<svg xmlns="http://www.w3.org/2000/svg" height="168px" width="168px" version="1.1" viewBox="0 0 168 168">
      <path fill="green" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
     </svg>`);
    } else document.querySelector('spotify > p').innerHTML = await parseActivity(data, activityData);
  }, 1000);

  currentInterval = interval;
};

document.body.onload = () => {
  document.querySelector('block-content').innerHTML = document.querySelector('blocks > div.active').querySelector('extent').innerHTML;
  if (document.querySelector('blocks > div.active').getAttribute('id') == '1') showGithubRepos();
};