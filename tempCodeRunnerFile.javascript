async function aa() {
    await bb();
    console.log(123);
}

function bb() {
    return new Promise((resolve) => {
        setTimeout(resolve,4000);
      });
}

async function cc() {
    await aa()
    console.log(222);
}
cc()