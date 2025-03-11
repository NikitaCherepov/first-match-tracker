import axios from 'axios'

class MatchesService {
    BASE_URL = 'https://app.ftoyd.com/fronttemp-service/fronttemp';
    async getMatches() {
      try {
          const response = await axios.get(`${this.BASE_URL}`, {
              headers: {
                  'Accept': 'application/json',
              },
          });

          if (!response.data.ok) {
            throw new Error('Не удалось загрузить информацию');
          }
          // console.log('Ответ от сервера:', response.data);
          return response.data;
      } catch (error) {
            // console.error('Ответ ошибки:', error);
            throw error;
      }
    }
}

const matchesService = new MatchesService();
export default matchesService;
