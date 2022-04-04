const BASE_SOAP_URL = 'http://localhost:3000/soaps';
const CUSTOM_SOAPS = `${BASE_SOAP_URL}/custom`;
const PREMADE_SOAPS = `${BASE_SOAP_URL}/premade`;

function create(formData) {
  return _post(`${BASE_SOAP_URL}`, formData);
}

function getAllSoaps(formData) {
  return _get(`${BASE_SOAP_URL}`);
}

function getCustomSoaps(formData) {
    return _get(`${BASE_SOAP_URL}`);
  }

  function getPremadeSoaps(formData) {
    return _get(`${BASE_SOAP_URL}`);
  }