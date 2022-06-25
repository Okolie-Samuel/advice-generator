let getAdvice = async () => {
  try {
    const raw_response = await fetch("https://api.adviceslip.com/advice");
    if (!raw_response.ok) {
      // check for the 404 errors
      throw new Error(raw_response.status);
    }
    const json_data = await raw_response.json();
    const id = json_data.slip.id;
    const advices = json_data.slip.advice;
    document.getElementById("adviceNumber").innerHTML = id;
    document.getElementById("adviceQuotes").innerHTML = advices;
  } catch (error) {
    // catch block for network errors
    console.log(error);
  }
};
