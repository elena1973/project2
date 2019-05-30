function createModal() {
    let modal = document.createElement("div");
    modal.id = "modal";
    document.body.style.overflow = "hidden";
    document.body.prepend(modal);
    modal.innerHTML = `
    <button class="btn btn-lg btn-warning" id="backbtn2" onclick="removeCoverAbout()">Back</button>`;
}

function removeCover() {
    let source = event.target;
    let parent = source.parentElement;
    document.body.style.overflow = "auto";
    parent.parentElement.lastChild.style.visibility = "visible";
    parent.remove();

    stopIt();
}


function modalPopUp(clicked) {
    createModal();
    internalcount = 5;
    document.getElementById("backbtn2").style.display = "none";
    let modal = document.getElementById("modal");
    let innerDiv = document.createElement("div");
    innerDiv.id = "innerDiv";
    modal.appendChild(innerDiv);
    innerDiv.innerHTML += `<h3>Please deselect the coin/s you wish to replace<h3> <hr>`;
    let arrayOfChosen = $('div[selected="selected"]');

    for (let i = 0; i < 5; i++) {
        var nameOfCoin = arrayOfChosen[i].className;
        innerDiv.innerHTML += `<div id="${nameOfCoin}" selectedagain="selected"> ${nameOfCoin}
        <label class="switch"><input type="checkbox" checked="true"><span class="slider round" onclick="picker()"></span></label>
            <hr>
            </div>
            `;
    }
    innerDiv.innerHTML += `
        <button class="btn btn-lg btn-danger" onclick="removeCoverTwo(clicked)">Cancel</button>
        <button type="button" class="btn btn-lg btn-info" onclick="approved()">Approve</button>
        `;
}

function picker(e) {
    var e = event.target;
    if (e.parentElement.parentElement.hasAttribute("selectedagain")) {
        e.parentElement.parentElement.removeAttribute("selectedagain");
        e.parentElement.parentElement.setAttribute("notselected", "notselected");
        internalcount--;
    }
    else if (e.parentElement.parentElement.hasAttribute("notselected")) {
        e.parentElement.parentElement.removeAttribute("notselected");
        e.parentElement.parentElement.setAttribute("selectedagain", "selected");
        internalcount++;

    }
}

function approved() {
    if (internalcount === 5) {
        alert("You did not select any coins to remove!");
        return;
    }

    let array = [];
    var identifier = [];
    array = $('div[notselected="notselected"]');
    for (let i = 0; i < array.length; i++) {
        identifier[i] = array[i].id;
        document.getElementsByClassName(identifier[i]).removeAttribute("selected");
        let chosentoremove = document.getElementsByClassName(identifier[i]).coinCard;
        chosentoremove.removeAttribute("selected");
        chosentoremove.lastChild.firstChild.click();
        coincounter--;
    }
    let source = event.target;
    let parent = source.parentElement.parentElement;
    document.body.style.overflow = "auto";
    parent.remove();

}


function removeCoverTwo(clicked) {
    let source = event.target;
    let parent = source.parentElement.parentElement;
    document.body.style.overflow = "auto";
    parent.remove();
    clicked.parentElement.parentElement.removeAttribute("selected");
    coincounter--;
    clicked.parentElement.click();
}


function removeCoverAbout() {
    let source = event.target;
    let parent = source.parentElement;
    document.body.style.overflow = "auto";
    parent.remove();
}














