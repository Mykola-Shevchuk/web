const container = document.getElementById('container');
const loadBtn = document.getElementById('load');

const createLayout = ({ 
  picture, 
  postCode, 
  coordinates: { 
    latitude, 
    longitude, 
  },
  email,
  city,
}) => {
  /* Image */
  const imageNode = new Image(300);
  imageNode.src = picture;
  
  /* Post code */
  const postCodeNode = document.createElement('p');
  const postCodeText = document.createTextNode(`Postcode: ${postCode}`);
  postCodeNode.appendChild(postCodeText);
  
  /* Coordinates */
  const coordinatesNode = document.createElement('p');
  const coordinatesText = document.createTextNode(`Coordinates: latitude ${latitude}, longitude ${longitude}`);
  coordinatesNode.appendChild(coordinatesText);

  /* Email */
  const emailNode = document.createElement('p');
  const emailText = document.createTextNode(`Email: ${email}`);
  emailNode.appendChild(emailText);

  /* City */
  const cityNode = document.createElement('p');
  const cityText = document.createTextNode(`City: ${city}`);
  cityNode.appendChild(cityText);
  
  container.appendChild(imageNode);
  container.appendChild(postCodeNode);
  container.appendChild(coordinatesNode);
  container.appendChild(emailNode);
  container.appendChild(cityNode);
  
}

const initLayout = async () => {
  const request = await fetch('https://randomuser.me/api', {
    headers: {
      'Accept': 'application/json'
    }
  });
  
  const response = await request.json();
  
  const { picture, location, email } = response.results[0];

  createLayout({
    picture: picture.large,
    postCode: location.postcode,
    coordinates: {
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    email,
    city: location.city,
  })
  
}

const handleClick = () => {
  initLayout();
}

loadBtn.addEventListener('click', handleClick);