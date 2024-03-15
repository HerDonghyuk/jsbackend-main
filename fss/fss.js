const getHtml = async () => {
  try {
    return await axios.get(
      "https://lostark.game.onstove.com/Profile/Character/%EB%AA%A8%EC%BD%94%EC%BD%94%EB%B3%BC%EB%94%B0%EA%B5%AC%EB%B9%A0%EB%8A%94%EC%86%8C%EB%A6%AC"
    );
  } catch (error) {
    console.error(error);
  }
};
