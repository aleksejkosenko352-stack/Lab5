const fetchPosts = require('../src/api');
const axios = require('axios');

jest.mock('axios');

test('API integration test', async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, title: 'Test post' },
      { id: 2, title: 'Another test post' }
    ]
  });

  const posts = await fetchPosts();

  expect(posts.length).toBe(2);
  expect(posts[0]).toHaveProperty('id');
  expect(posts[1].title).toBe('Another test post');
});
