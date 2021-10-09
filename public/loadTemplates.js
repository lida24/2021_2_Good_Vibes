/* global Handlebars */

const checkFileExtention = ({ url, fileExtention }) => new Promise((resolve, reject) => {
  const regexp = new RegExp(`.(${fileExtention})$`);
  if (regexp.test(url)) {
    resolve(url);
  }
  reject(new Error('wrong file extention'));
});

const loadTemplate = ({ url }) => fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.text();
  });

const generateHTML = ({ templateHTML, context }) => {
  const compiledTemplate = Handlebars.compile(templateHTML);
  const result = compiledTemplate(context);
  return result;
};

// ----------------------------------------
const loadHTML = ({ url }) => checkFileExtention({
  fileExtention: 'html',
  url
})
  .then(() => loadTemplate({ url }));

// ----------------------------------------
const loadHbsTemplate = ({ url }) => checkFileExtention({
  fileExtention: 'handlebars',
  url
})
  .then(() => loadTemplate({ url }));

// ----------------------------------------
export default function generateContentHTML({ context, url }) {
  return loadHbsTemplate({ url })
    .then((templateHTML) => generateHTML({
      templateHTML,
      context
    }));
}
