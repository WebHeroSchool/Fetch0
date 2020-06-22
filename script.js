const url = window.location.toString();
const nickFromUrl = (url) => {
  let urlSplit = url.split('=');
  let userName = urlSplit[1];
  if (userName == undefined) {
    userName = '6thSence';
  }
  return userName;
}

const nick = nickFromUrl(url);
const body = document.body;

fetch(`https://api.github.com/users/${nick}`)
  .then(res => res.json())
  .then(json => {
    if (json.login != undefined) {
      const avatarAdd = () => {
        const img = document.createElement('img');
        img.src = json.avatar_url;
        body.append(img);
      }

      const nameAdd = () => {
        const h1 = document.createElement('h1');
        if (name === null) {
          const nickName = json.login;
          h1.innerHTML = nickName;
          body.append(h1);
        } else {
          const name = json.name;
          h1.innerHTML = name;
          body.append(h1);
        }
      }

      const  bioAdd = () => {
        const p = document.createElement('p');
        p.innerHTML = json.bio;
        body.append(p);
      }

      const linkAdd = () => {
        const link = document.createElement('a');
        link.href = json.html_url;
        link.innerHTML = 'Link';
        body.append(link);
      }

      nameAdd();
      avatarAdd();
      bioAdd();
      linkAdd();
    } else {
      alert("Информация о пользователе не доступнаs");
    }
  })
  .catch(err => console.log(err));