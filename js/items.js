
const posts = []

// Weddings, Parties, Graduations, Clubs, HS Dances, Funerals, BBQ's
const images = [
  'https://dr.savee-cdn.com/things/5/e/34180d2e399f09f71a7d90.jpg',
  'https://dr.savee-cdn.com/things/5/b/f2c02e2c302d6a7fc0975d.jpg',
  
  'https://images.squarespace-cdn.com/content/v1/57921c9c37c58183ca17a0dd/1499355189241-X7654WP49SLTGLDGNNJR/Cosmo_03.gif',
  'https://dr.savee-cdn.com/things/6/0/b2aacd6979dbc919e55b38.jpg',

  'https://dr.savee-cdn.com/things/5/9/8194e82cad1d1415b905e3.jpg',
  'https://dr.savee-cdn.com/things/5/b/577b9d76b3bb769ba4fa9e.jpg',
  
  'https://dr.savee-cdn.com/things/6/1/e8b1a8af79aee642999813.jpg',

  'https://dr.savee-cdn.com/things/5/9/7fa5bdbf063f44585cbcbb.jpg',
  'https://dr.savee-cdn.com/things/5/c/733daefdc8611fc5c88d4d.gif'
  
]

let imageIndex = 0;

for(let i = 1; i <= 9; i++) {

  let j = "Weddings";
  if(i == 2) {
      j = "Parties";
    }else if (i == 3 ) {
      j = "Dances";
    } else if (i >= 8 ) {
      j = "Clubs";
    } 
  
  let item = {
    id: i,
    title: `Event ${j}`,
    date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
    image: images[imageIndex]
  }
  posts.push(item);
  imageIndex++;
  if(imageIndex > images.length - 1) imageIndex = 0;

}

console.log(posts);