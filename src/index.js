import fsExtra from "fs-extra";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import path from "./configs/files.js";
import url from "./constants/url.js";
import waitForTimeout from "./utilities/waitForTimeout.js";

const browser = await puppeteerExtra.use(StealthPlugin()).launch();
const page = await browser.newPage();

try {
  await page.goto(url.href);

  await waitForTimeout();

  fsExtra.ensureFileSync(path);

  if (fsExtra.readFileSync(path, "utf-8") === "") {
    fsExtra.writeJSONSync(path, []);
  }

  const jobs = fsExtra.readJSONSync(path);

  for (let index = 1; index <= 10; index++) {
    url.searchParams.set("page", index);

    await page.goto(url.href);

    for (const data of await page.$$eval(".job-primary", (elements) =>
      elements.map((element) => {
        const [city, district, location] = element
          .querySelector(".job-area")
          .innerText.split("·");

        return {
          url: element.querySelector(".job-name a").href,
          name: element.querySelector(".job-name a").innerText,
          city,
          district,
          location,
          salary: element.querySelector(".job-limit .red").innerText,
          experience:
            element.querySelector(".job-limit em").previousSibling.textContent,
          degree:
            element.querySelector(".job-limit em").nextSibling.textContent,
          tags: Array.from(element.querySelectorAll(".tag-item")).map(
            (element) => element.innerText,
          ),
          contact: {
            name: element.querySelector(".info-publis .name img").nextSibling
              .textContent,
            title: element.querySelector(".info-publis .name em").nextSibling
              .textContent,
          },
          company: {
            url: element.querySelector(".company-text .name a").href,
            avatar: element.querySelector(".company-logo").src,
            name: element.querySelector(".company-text .name a").innerText,
            industry: element.querySelector(".company-text p a").innerText,
            scale:
              element.querySelectorAll(".company-text p em").length > 1
                ? element.querySelector(".company-text p em:last-of-type")
                    .nextSibling.textContent
                : element.querySelector(".company-text p em").nextSibling
                    .textContent,
            stage:
              element.querySelectorAll(".company-text p em").length > 1
                ? element.querySelector(".company-text p em").nextSibling
                    .textContent
                : "",
            benefits: element
              .querySelector(".info-desc")
              .innerText?.split("，"),
          },
        };
      }),
    )) {
      if (!jobs.find((job) => job.url === data.url)) {
        jobs.push(data);
      }
    }

    await waitForTimeout();
  }

  fsExtra.writeJSONSync(path, jobs, { spaces: 2 });

  browser.close();
} catch (error) {
  throw error;
}
