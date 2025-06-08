import { URL } from "url";
import {
  city,
  degree,
  experience,
  query,
  salary,
  scale,
  stage,
} from "../configs/queries.js";
import cities from "./cities.js";
import degrees from "./degrees.js";
import experiences from "./experiences.js";
import salaries from "./salaries.js";
import scales from "./scales.js";
import stages from "./stages.js";

const url = (function () {
  const url = new URL("https://www.zhipin.com/job_detail/");

  Object.entries({
    city,
    degree,
    experience,
    query,
    salary,
    scale,
    stage,
  })
    .filter(([_, value]) => value)
    .forEach(([key, value]) => {
      if (key === "query") {
        url.searchParams.set(key, value);
      } else {
        const sources = {
          city: cities,
          degree: degrees,
          experience: experiences,
          salary: salaries,
          scale: scales,
          stage: stages,
        };
        const data = sources[key].find((data) => data.name === value);

        if (data) {
          url.searchParams.set(key, data.value);
        }
      }
    });

  return url;
})();

export default url;
