(function createElement() {
  // ------------------------------
  function ParseClasses(classesNames) {
    let classString = classesNames[0];

    for (let i = 1; i < classesNames.length; i += 1) {
      classString = `${classString} ${classesNames[i]}`;
    }

    return classString;
  }
  window.ParseClasses = ParseClasses;

  // ------------------------------
  function CreateObject({ parent = '', type = 'div' }) {
    const obj = document.createElement(type);

    if (parent !== undefined) {
      parent.appendChild(obj);
    }

    return obj;
  }
  window.CreateObject = CreateObject;

  // ------------------------------
  function CreateInput({
    parent = '', type = 'text', placeholder, value, classesNames,
  }) {
    const input = CreateObject({
      parent,
      type: 'input',
    });

    input.type = type;

    if (placeholder !== undefined) {
      input.placeholder = placeholder;
    }

    if (value !== undefined) {
      input.value = value;
    }

    if (classesNames !== undefined) {
      input.className = ParseClasses(classesNames);
    }

    return input;
  }
  window.CreateInput = CreateInput;

  // ------------------------------
  function CreateDiv({ parent = '', id, classesNames }) {
    const div = CreateObject({
      parent,
      type: 'div',
    });

    if (id !== undefined) {
      div.id = id;
    }

    if (classesNames !== undefined) {
      div.className = ParseClasses(classesNames);
    }

    return div;
  }
  window.CreateDiv = CreateDiv;

  // ------------------------------
  function CreateForm({ parent = '', id, classesNames }) {
    const form = CreateObject({
      parent,
      type: 'form',
    });

    if (id !== undefined) {
      form.id = id;
    }

    if (classesNames !== undefined) {
      form.className = ParseClasses(classesNames);
    }

    return form;
  }
  window.CreateForm = CreateForm;

  // ------------------------------
  function CreateA({ parent = '', id, href = '#' }) {
    const a = CreateObject({
      parent,
      type: 'a',
    });

    if (id !== undefined) {
      a.id = id;
    }

    a.href = href;

    return a;
  }
  window.CreateA = CreateA;

  // ------------------------------
  function CreateI({ parent = '', id, classesNames }) {
    const i = CreateObject({
      parent,
      type: 'i',
    });

    if (id !== undefined) {
      i.id = id;
    }

    if (classesNames !== undefined) {
      i.className = ParseClasses(classesNames);
    }

    return i;
  }
  window.CreateI = CreateI;
}()
);
