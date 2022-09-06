import axios from "axios";
import React from "react";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  let apiKey = `ed4ea8d6dd98526c6f3244e041c8fd16`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="yellow"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
