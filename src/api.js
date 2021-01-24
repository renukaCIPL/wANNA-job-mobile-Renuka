const axios = require('axios');

export async function fetchData() {
  try {
    const response = await axios.get(
      'https://github.com/Anna-works/wANNA-job-mobile/blob/master/dummyData/applications.json',
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
