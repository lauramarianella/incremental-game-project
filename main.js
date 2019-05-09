let audioBuy    =   new Audio("sounds/buy.mp3");
let audioCoin   =   new Audio("sounds/coin.mp3");

let user={
    name        : 'HopperCat',
    clicks      : 0,
    cps         : 0,
};

let btnCoin         = document.getElementById("idBtnCoin");
let pCoinsQuantity  = document.getElementById("idPCoinsQuantity");
let pCoinsCurrency  = document.getElementById("idPCoinsCurrency");

btnCoin.addEventListener("click", () => {
                                            audioCoin.play();
                                            user.clicks++;
                                            user.cps++;
                                            
                                            if(user.clicks >= miner.cost/2)             miner.showResource();
                                            if(user.clicks >= computer.cost/2)          computer.showResource();
                                            if(user.clicks >= dataCenter.cost/2)        dataCenter.showResource();
                                            if(user.clicks >= superComputer.cost/2)     superComputer.showResource();
                                            if(user.clicks >= quantumComputer.cost/2)   quantumComputer.showResource();
                                            if(user.clicks >= ai.cost/2)                ai.showResource();
                                            if(user.clicks >= matrioshkaBrain.cost/2)   matrioshkaBrain.showResource();
                                            if(user.clicks >= simulation.cost/2)        simulation.showResource();

                                        });


let miner, computer, dataCenter, superComputer, quantumComputer, ai, matrioshkaBrain, simulation;

function Resource(name, owned, cps, cost, img){
    this.name = name;
    this.owned = owned;
    this.cps = cps;
    this.cost = cost;
    this.img  = img;

    // this.addAsset = function addAsset() {
    //     alert(this.cost);
    //     if (user.clicks >= this.cost) {
    //         let imgAsset = document.createElement("img");
    //         imgAsset.src = this.img;
    //         imgAsset.style.width = "50px";
    //         imgAsset.style.height = "100%";
    //         imgAsset.style.top = "0px";
    //         this.divAssets.appendChild(imgAsset);
    //         user.cps = user.cps - this.cost;
    //         audioBuy.play();
    //     }
    // }
}

function showResource(){
    this.btnResources.style.display = 'block';
}

function reset(){
    alert('reseting...');
}

function createResources(){
    miner                           = new Resource("miner", 0, 1, 6, "imgs/miner.jpeg");
    miner.btnResources              = document.getElementById("idBtnMiner"),
    miner.divAssets                 = document.getElementById("idDivAssetsMiner"),
    miner.btnResources.addEventListener('click', ()=>{
                                                        if (user.clicks >= miner.cost) {
                                                            let imgAsset = document.createElement("img");
                                                            imgAsset.src = miner.img;
                                                            imgAsset.style.width = "50px";
                                                            imgAsset.style.height = "100%";
                                                            imgAsset.style.top = "0px";
                                                            miner.divAssets.appendChild(imgAsset);
                                                            user.cps = user.cps - miner.cost;
                                                            audioBuy.play();
                                                            miner.owned++;
                                                        }
                                                      }
                                         );
    miner.showResource              = showResource;

    computer                        = new Resource("computer", 0, 2, 8, "imgs/computer.png");
    computer.btnResources           = document.getElementById("idBtnComputer"),
    computer.divAssets              = document.getElementById("idDivAssetsComputer"),
    computer.btnResources.addEventListener('click', ()=>{
                                                            if (user.clicks >= computer.cost) {
                                                                let imgAsset = document.createElement("img");
                                                                imgAsset.src = computer.img;
                                                                imgAsset.style.width = "50px";
                                                                imgAsset.style.height = "100%";
                                                                imgAsset.style.top = "0px";
                                                                computer.divAssets.appendChild(imgAsset);
                                                                user.cps = user.cps - computer.cost;
                                                                audioBuy.play();
                                                                computer.owned++;
                                                            }
                                                        }
                                            );
    computer.showResource           = showResource;

    dataCenter                      = new Resource("dataCenter", 0, 1, 10, "imgs/datacenter.png");
    dataCenter.btnResources         = document.getElementById("idBtnDataCenter"),
    dataCenter.divAssets            = document.getElementById("idDivAssetsDataCenter"),
    dataCenter.btnResources.addEventListener('click', ()=>{
                                                                if (user.clicks >= dataCenter.cost) {
                                                                    let imgAsset = document.createElement("img");
                                                                    imgAsset.src = dataCenter.img;
                                                                    imgAsset.style.width = "50px";
                                                                    imgAsset.style.height = "100%";
                                                                    imgAsset.style.top = "0px";
                                                                    dataCenter.divAssets.appendChild(imgAsset);
                                                                    user.cps = user.cps - dataCenter.cost;
                                                                    audioBuy.play();
                                                                    dataCenter.owned++;
                                                                }
                                                            }
                                            );
    dataCenter.showResource         = showResource;

    superComputer                   = new Resource("superComputer", 0, 1, 12, "imgs/superComputer.jpg");
    superComputer.btnResources      = document.getElementById("idBtnSuperComputer"),
    superComputer.divAssets         = document.getElementById("idDivAssetsSuperComputer"),
    superComputer.btnResources.addEventListener('click', ()=>{
                                                                if (user.clicks >= superComputer.cost) {
                                                                    let imgAsset = document.createElement("img");
                                                                    imgAsset.src = superComputer.img;
                                                                    imgAsset.style.width = "50px";
                                                                    imgAsset.style.height = "100%";
                                                                    imgAsset.style.top = "0px";
                                                                    superComputer.divAssets.appendChild(imgAsset);
                                                                    user.cps = user.cps - superComputer.cost;
                                                                    audioBuy.play();
                                                                    superComputer.owned++;
                                                                }
                                                            }
                                                );
    superComputer.showResource      = showResource;

    quantumComputer                 = new Resource("quantumComputer", 0, 1, 14, "imgs/quantumComputer.jpg");
    quantumComputer.btnResources    = document.getElementById("idBtnQuantumComputer"),
    quantumComputer.divAssets       = document.getElementById("idDivAssetsQuantumComputer"),
    quantumComputer.btnResources.addEventListener('click', ()=>{
                                                                    if (user.clicks >= quantumComputer.cost) {
                                                                        let imgAsset = document.createElement("img");
                                                                        imgAsset.src = quantumComputer.img;
                                                                        imgAsset.style.width = "50px";
                                                                        imgAsset.style.height = "100%";
                                                                        imgAsset.style.top = "0px";
                                                                        quantumComputer.divAssets.appendChild(imgAsset);
                                                                        user.cps = user.cps - quantumComputer.cost;
                                                                        audioBuy.play();
                                                                        quantumComputer.owned++;
                                                                    }
                                                                }
                                                 );
    quantumComputer.showResource    = showResource;

    ai                              = new Resource("AI", 0, 1, 16, "imgs/AI.png");
    ai.btnResources                 = document.getElementById("idBtnAI"),
    ai.divAssets                    = document.getElementById("idDivAssetsAI"),
    ai.btnResources.addEventListener('click', ()=>{
                                                        if (user.clicks >= ai.cost) {
                                                            let imgAsset = document.createElement("img");
                                                            imgAsset.src = ai.img;
                                                            imgAsset.style.width = "50px";
                                                            imgAsset.style.height = "100%";
                                                            imgAsset.style.top = "0px";
                                                            ai.divAssets.appendChild(imgAsset);
                                                            user.cps = user.cps - ai.cost;
                                                            audioBuy.play();
                                                            ai.owned++;
                                                        }
                                                    }
                                    );
    ai.showResource                 = showResource;

    matrioshkaBrain                 = new Resource("matrioshkaBrain", 0, 1, 18, "imgs/matrioshka.jpg");
    matrioshkaBrain.btnResources    = document.getElementById("idBtnMatrioshkaBrain"),
    matrioshkaBrain.divAssets       = document.getElementById("idDivAssetsMatrioshkaBrain"),
    matrioshkaBrain.btnResources.addEventListener('click', ()=>{
                                                                    if (user.clicks >= matrioshkaBrain.cost) {
                                                                        let imgAsset = document.createElement("img");
                                                                        imgAsset.src = matrioshkaBrain.img;
                                                                        imgAsset.style.width = "50px";
                                                                        imgAsset.style.height = "100%";
                                                                        imgAsset.style.top = "0px";
                                                                        matrioshkaBrain.divAssets.appendChild(imgAsset);
                                                                        user.cps = user.cps - matrioshkaBrain.cost;
                                                                        audioBuy.play();
                                                                        matrioshkaBrain.owned++;
                                                                    }
                                                                }
                                                  );
    matrioshkaBrain.showResource    = showResource;

    simulation                      = new Resource("simulation", 0, 10, 20, "imgs/simulation.jpg");
    simulation.btnResources         = document.getElementById("idBtnSimulation"),
    simulation.divAssets            = document.getElementById("idDivAssetsSimulation"),
    simulation.btnResources.addEventListener('click', ()=> alert('reseting...'));
    simulation.showResource         = showResource;
}


function run() {
  createResources();
  //setAssets();
  let idInterval = setInterval(updateCounter, 10);
}

function updateCounter() {
    pCoinsQuantity.innerText = user.cps;
}

run();