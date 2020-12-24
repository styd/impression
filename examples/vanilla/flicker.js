const sleep = (m) => {
  return new Promise(r => setTimeout(r, m));
}

const turnOnWithFlicker = async (element) => {
  await sleep(100);
  element.classList.add('light');
  await sleep(100);
  element.classList.remove('light');
  await sleep(100);
  element.classList.add('light');
}
