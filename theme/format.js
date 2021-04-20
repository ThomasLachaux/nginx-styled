const pathElement = document.querySelector("#listing h1");
pathElement.className = "listing";

const pathName = pathElement.innerHTML.replace("Index of ", "");
pathElement.innerHTML = pathName;

let fileCount = 0;
let dirCount = 0;
const dirStatElem = document.getElementById("dir-stats");
const fileStatElem = document.getElementById("file-stats");
const allLinks = document.getElementsByTagName("a");

for (let item of allLinks) {
  if (item.innerHTML != "../") {
    if (item.href.endsWith("/")) {
      dirCount += 1;
    } else {
      fileCount += 1;
    }
  }

  console.log(item);

  item.className = "link-icon";
}

const parentFolderElement = document.querySelector("a[href='../']");
parentFolderElement.className = "folderup";
parentFolderElement.innerHTML = "&#8682; Up";

if (dirCount == 1) {
  dirStatElem.innerHTML = dirCount + " directory";
} else {
  dirStatElem.innerHTML = dirCount + " directories";
}

if (fileCount == 1) {
  fileStatElem.innerHTML = fileCount + " file";
} else {
  fileStatElem.innerHTML = fileCount + " files";
}
