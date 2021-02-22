import axios from 'axios'
import { baseUrl } from './_env'

export default {

  premovie: () => axios.get(`${baseUrl}/premovie`),
  boxoffice: () => axios.get(`${baseUrl}/boxoffice`),



}