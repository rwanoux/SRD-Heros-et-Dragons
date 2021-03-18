export async function redirectInIFrame(html) {
  // for links directly displayed
  let links = html.find("a");
  for (let a of links) {
    if ((a.href.indexOf("https://5e-drs.fr") !== -1)|| (a.href && a.href.indexOf("https://heros-et-dragons.fr") !== -1)) {
      changeHref(a);
    }
  }

  //for links in items description created after the sheet is rendered
  let itemLine = html.find("div.item-name");
  let itemNames = itemLine.find("h4");
  for (let it of itemNames) {
    it.addEventListener("click", function () {
      let children = it.closest("li.item").children;
      for (let child of children) {
        if (child.classList.contains("item-summary")) {
          for (let subchild of child.children) {
            for (let a of subchild.children)
              if ((a.href && a.href.indexOf("https://5e-drs.fr") !== -1 )|| (a.href && a.href.indexOf("https://heros-et-dragons.fr") !== -1)) {
                changeHref(a);
              }
          }
        }
      }
    });
  }
}

function changeHref(el) {
  let frame = new FrameViewer(el.href, {
    title: el.href,
    resizable: true,
    width: 420,
    height: 500,
    top: 0,
    left: 0,
  });
  el.removeAttribute("href");
  el.style.borderBottom = "1px solid red";
  el.addEventListener("click", function () {
    frame.render(true);
  });
}
