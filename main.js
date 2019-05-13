let audioBuy    =   new Audio("sounds/buy.mp3");
let audioCoin   =   new Audio("sounds/coin.mp3");


let user={
    name                    : 'HopperCat',
    clicks                  : 0,
    cps                     : 1,
    coins                   : 0,
    updateCps               : updateCps,
    showPopPupEarnedPoints  : showPopPupEarnedPoints,
};

let body                = document.querySelector('body');
let btnCoin             = document.getElementById("idBtnCoin");
let pTotalCoinsEarned   = document.getElementById("idPTotalCoinsEarned");
let pCoinsCurrency      = document.getElementById("idPCoinsCurrency");

function updateCps(){
    let tmp = 0;

    if (miner.owned                     > 0) tmp = tmp + miner.owned * miner.cps;
    if (computer.owned                  > 0) tmp = tmp + computer.owned * computer.cps;
    if (dataCenter.owned                > 0) tmp = tmp + dataCenter.owned * dataCenter.cps;
    if (superComputer.owned             > 0) tmp = tmp + superComputer.owned * superComputer.cps;
    if (quantumComputer.owned           > 0) tmp = tmp + quantumComputer.owned * quantumComputer.cps;   
    if (ai.owned                        > 0) tmp = tmp + ai.owned * ai.cps;
    if (matrioshkaBrain.owned           > 0) tmp = tmp + matrioshkaBrain.owned * matrioshkaBrain.cps;

    if(tmp > 0) this.cps = tmp;
    else        this.cps = 1;
    return this.cps;
}

function showPopPupEarnedPoints(){  
    let divCoinsEarned = document.createElement('div');
    divCoinsEarned.className = "divCoinsEarned";
    body.appendChild(divCoinsEarned);

    divCoinsEarned.style.top  = event.clientY + 'px';
    divCoinsEarned.style.left = event.clientX + 'px';
    divCoinsEarned.innerText = " + " + user.cps;//alert(" + " + user.cps);
    divCoinsEarned.style.display = 'block';
    let trans = 'translate(' + event.clientX+20 + ',' + event.clientY + ')';//alert(trans);
    divCoinsEarned.style.transform = trans;
    divCoinsEarned.style.transition = 'transform 5s ease-in-out';

    //create new element
    //apply key frame move opacity
    //set time out delete child
}

function changeBackground(imgSrc){
    let divCoins = document.getElementById("idDivCoins");
    divCoins.style.background = 'url(' + imgSrc + ')';
}

btnCoin.addEventListener("click", () => {   
                                            audioCoin.play();
                                            user.clicks++;
                                            //btnCoin.style.transform = 'scale(1.5)';                                                                         
                                            if(user.clicks >= miner.cost/2 && user.clicks < miner.cost){
                                                miner.showResourceDisabled();
                                            }else{// if(user.clicks >= miner.cost){
                                                miner.showResource();
                                            }

                                            if(user.clicks >= computer.cost/2 && user.clicks < computer.cost) {
                                                computer.showResourceDisabled();
                                            }else{
                                                computer.showResource();
                                            }

                                            if(user.clicks >= dataCenter.cost/2 && user.clicks < dataCenter.cost){
                                                dataCenter.showResourceDisabled();
                                            }else{
                                                dataCenter.showResource();
                                            }
                                            
                                            if(user.clicks >= superComputer.cost/2 && user.clicks < superComputer.cost){
                                                superComputer.showResourceDisabled();
                                            }else{
                                                superComputer.showResource();
                                            }
                                            
                                            if(user.clicks >= quantumComputer.cost/2 && user.clicks < quantumComputer.cost) {
                                                quantumComputer.showResourceDisabled();                                            
                                            }else{
                                                quantumComputer.showResource();
                                            }
                                            
                                            if(user.clicks >= ai.cost/2 && user.clicks < ai.cost){
                                                ai.showResourceDisabled();
                                            }else{
                                                ai.showResource();
                                            }
                                            
                                            if(user.clicks >= matrioshkaBrain.cost/2 && user.clicks < matrioshkaBrain.cost)  {
                                                matrioshkaBrain.showResourceDisabled();
                                            }else{
                                                matrioshkaBrain.showResource();
                                            }
                                            
                                            if(user.clicks >= simulation.cost/2 && user.clicks < simulation.cost){
                                                simulation.showResourceDisabled();
                                            }else{
                                                simulation.showResource();
                                            }

                                            user.updateCps();                                         
                                            user.coins = user.coins + user.cps;
                                        //user.showPopPupEarnedPoints();
                                            //btnCoin.style.transform = 'scale(1)';

                                            //entrepreneur.isComplete();
                                            fromRagToRiches.isComplete();
                                            clickMadness.isComplete();
                                            moneyRocket.isComplete();
                                            //singularity.isComplete();
                                            readyForSimulation.isComplete();
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

function showResourceDisabled(){
    this.divResource.style.visibility = 'visible';
    this.divResource.style.opacity = "0.5";
}
function showResource(){
    this.divResource.style.opacity = "1";
    // this.divResource.style.pointerEvents = 'all';
}


function reset(){
    alert('reseting...');
}

function createResources(){
    miner                           = new Resource("miner", 0, 1, 10, "imgs/miner.jpeg");
    miner.divAssets                 = document.getElementById("idDivAssetsMiner"), 
    miner.divResource               = document.getElementById("idDivResourceMiner");    
    miner.btnResource               = document.getElementById("idBtnMiner");
    miner.divCost                   = document.getElementById("idPCostMiner");
    miner.divCost.innerText         = miner.cost;    
    miner.divQuantity               = document.getElementById("idDivQuantityMiner");
    miner.btnResource.addEventListener('click', ()=>{
                                                        if ((user.coins - miner.cost)>=0) {
                                                            if(miner.owned < 20){//max 20 images in DOM
                                                                let imgAsset = document.createElement("img");
                                                                imgAsset.src = miner.img;
                                                                imgAsset.style.width = "50px";
                                                                imgAsset.style.height = "80px";
                                                                imgAsset.style.top = "0px";                                                                
                                                                miner.divAssets.appendChild(imgAsset);
                                                            }
                                                            user.coins = user.coins - miner.cost;
                                                            audioBuy.play();

                                                            miner.owned++;
                                                            miner.divQuantity.innerText = miner.owned;
                                                            entrepreneur.isComplete();                                                                                                         
                                                        }
                                                      }
                                         );
    miner.showResourceDisabled      = showResourceDisabled;
    miner.showResource              = showResource;

    computer                        = new Resource("computer", 0, 10, 12, "imgs/computer.png");    
    computer.divAssets              = document.getElementById("idDivAssetsComputer"),
    computer.divResource            = document.getElementById("idDivResourceComputer"); 
    computer.btnResource            = document.getElementById("idBtnComputer");
    computer.divCost                = document.getElementById("idPCostComputer");
    computer.divCost.innerText      = computer.cost;    
    computer.divQuantity            = document.getElementById("idDivQuantityComputer");
    computer.btnResource.addEventListener('click', ()=>{
                                                            if ((user.coins - computer.cost)>=0) {
                                                                if(computer.owned < 20){//max 20 images in DOM
                                                                    let imgAsset = document.createElement("img");
                                                                    imgAsset.src = computer.img;
                                                                    imgAsset.style.width = "50px";
                                                                    imgAsset.style.height = "80px";
                                                                    imgAsset.style.top = "0px";
                                                                    computer.divAssets.appendChild(imgAsset);
                                                                }
                                                                user.coins = user.coins - computer.cost;
                                                                audioBuy.play();

                                                                computer.owned++;
                                                                computer.divQuantity.innerText = computer.owned;
                                                                
                                                            }
                                                        }
                                            );
    computer.showResourceDisabled   = showResourceDisabled;
    computer.showResource           = showResource;

    dataCenter                      = new Resource("dataCenter", 0, 100, 2000, "imgs/datacenter.png");    
    dataCenter.divAssets            = document.getElementById("idDivAssetsDataCenter"),
    dataCenter.divResource          = document.getElementById("idDivResourceDataCenter"); 
    dataCenter.btnResource          = document.getElementById("idBtnDataCenter");
    dataCenter.divCost              = document.getElementById("idPCostDataCenter");
    dataCenter.divCost.innerText    = dataCenter.cost;   
    dataCenter.divQuantity          = document.getElementById("idDivQuantityDataCenter");
    dataCenter.btnResource.addEventListener('click', ()=>{
                                                                if ((user.coins - dataCenter.cost)>=0) {
                                                                    if(dataCenter.owned < 20){//max 20 images in DOM
                                                                        let imgAsset = document.createElement("img");
                                                                        imgAsset.src = dataCenter.img;
                                                                        imgAsset.style.width = "50px";
                                                                        imgAsset.style.height = "80px";
                                                                        imgAsset.style.top = "0px";
                                                                        dataCenter.divAssets.appendChild(imgAsset);
                                                                    }
                                                                    user.coins = user.coins - dataCenter.cost;
                                                                    audioBuy.play();

                                                                    dataCenter.owned++;
                                                                    dataCenter.divQuantity.innerText = dataCenter.owned;
                                                                }
                                                            }
                                            );
    dataCenter.showResourceDisabled     = showResourceDisabled;
    dataCenter.showResource             = showResource;

    superComputer                   = new Resource("superComputer", 0, 1000, 500000, "imgs/superComputer.jpg");    
    superComputer.divAssets         = document.getElementById("idDivAssetsSuperComputer"),
    superComputer.divResource       = document.getElementById("idDivResourceSuperComputer"); 
    superComputer.btnResource       = document.getElementById("idBtnSuperComputer");
    superComputer.divCost           = document.getElementById("idPCostSuperComputer");
    superComputer.divCost.innerText = superComputer.cost;   
    superComputer.divQuantity       = document.getElementById("idDivQuantitySuperComputer");
    superComputer.btnResource.addEventListener('click', ()=>{
                                                                if ((user.coins - superComputer.cost)>=0) {
                                                                    if(superComputer.owned < 20){//max 20 images in DOM
                                                                        let imgAsset = document.createElement("img");
                                                                        imgAsset.src = superComputer.img;
                                                                        imgAsset.style.width = "50px";
                                                                        imgAsset.style.height = "80px";
                                                                        imgAsset.style.top = "0px";
                                                                        superComputer.divAssets.appendChild(imgAsset);
                                                                    }
                                                                    user.coins = user.coins - superComputer.cost;
                                                                    audioBuy.play();

                                                                    superComputer.owned++;
                                                                    superComputer.divQuantity.innerText = superComputer.owned;
                                                                }
                                                            }
                                                );
    superComputer.showResourceDisabled  = showResourceDisabled;
    superComputer.showResource          = showResource;

    quantumComputer                 = new Resource("quantumComputer", 0, 10000, 200000, "imgs/quantumComputer.jpg");    
    quantumComputer.divAssets       = document.getElementById("idDivAssetsQuantumComputer"),
    quantumComputer.divResource     = document.getElementById("idDivResourceQuantumComputer"); 
    quantumComputer.btnResource     = document.getElementById("idBtnQuantumComputer");
    quantumComputer.divCost         = document.getElementById("idPCostQuantumComputer");
    quantumComputer.divCost.innerText = quantumComputer.cost;    
    quantumComputer.divQuantity     = document.getElementById("idDivQuantityQuantumComputer");
    quantumComputer.btnResource.addEventListener('click', ()=>{
                                                                    if ((user.coins - quantumComputer.cost)>=0) {
                                                                        if(quantumComputer.owned < 20){//max 20 images in DOM
                                                                            let imgAsset = document.createElement("img");
                                                                            imgAsset.src = quantumComputer.img;
                                                                            imgAsset.style.width = "50px";
                                                                            imgAsset.style.height = "80px";
                                                                            imgAsset.style.top = "0px";
                                                                            quantumComputer.divAssets.appendChild(imgAsset);
                                                                        }
                                                                        user.coins = user.coins - quantumComputer.cost;
                                                                        audioBuy.play();

                                                                        quantumComputer.owned++;
                                                                        quantumComputer.divQuantity.innerText = quantumComputer.owned;
                                                                    }
                                                                }
                                                 );
    quantumComputer.showResourceDisabled    = showResourceDisabled;
    quantumComputer.showResource            = showResource;

    ai                              = new Resource("AI", 0, 100000, 5000000, "imgs/AI.png");    
    ai.divAssets                    = document.getElementById("idDivAssetsAI"),
    ai.divResource                  = document.getElementById("idDivResourceAI"); 
    ai.btnResource                  = document.getElementById("idBtnAI");
    ai.divCost                      = document.getElementById("idPCostAI");
    ai.divCost.innerText            = ai.cost;    
    ai.divQuantity                  = document.getElementById("idDivQuantityAI");
    ai.btnResource.addEventListener('click', ()=>{
                                                        if ((user.coins - ai.cost)>=0) {
                                                            if(ai.owned < 20){//max 20 images in DOM
                                                                let imgAsset = document.createElement("img");
                                                                imgAsset.src = ai.img;
                                                                imgAsset.style.width = "50px";
                                                                imgAsset.style.height = "80px";
                                                                imgAsset.style.top = "0px";
                                                                ai.divAssets.appendChild(imgAsset);
                                                            }
                                                            user.coins = user.coins - ai.cost;
                                                            audioBuy.play();

                                                            ai.owned++;
                                                            ai.divQuantity.innerText = ai.owned;
                                                            singularity.isComplete();
                                                        }
                                                    }
                                    );
    ai.showResourceDisabled      = showResourceDisabled;
    ai.showResource              = showResource;

    matrioshkaBrain                 = new Resource("matrioshkaBrain", 0, 1000000, 20000000, "imgs/matrioshka.jpg");    
    matrioshkaBrain.divAssets       = document.getElementById("idDivAssetsMatrioshkaBrain"),
    matrioshkaBrain.divResource     = document.getElementById("idDivResourceMatrioshkaBrain");
    matrioshkaBrain.btnResource     = document.getElementById("idBtnMatrioshkaBrain");
    matrioshkaBrain.divCost         = document.getElementById("idPCostMatrioshkaBrain");
    matrioshkaBrain.divCost.innerText = matrioshkaBrain.cost;    
    matrioshkaBrain.divQuantity     = document.getElementById("idDivQuantityMatrioshkaBrain");
    matrioshkaBrain.btnResource.addEventListener('click', ()=>{
                                                                    if ((user.coins - matrioshkaBrain.cost)>=0) {
                                                                        if(matrioshkaBrain.owned < 20){//max 20 images in DOM
                                                                            let imgAsset = document.createElement("img");
                                                                            imgAsset.src = matrioshkaBrain.img;
                                                                            imgAsset.style.width = "50px";
                                                                            imgAsset.style.height = "80px";
                                                                            imgAsset.style.top = "0px";
                                                                            matrioshkaBrain.divAssets.appendChild(imgAsset);
                                                                        }
                                                                        user.coins = user.coins - matrioshkaBrain.cost;
                                                                        audioBuy.play();

                                                                        matrioshkaBrain.owned++;
                                                                        matrioshkaBrain.divQuantity.innerText = matrioshkaBrain.owned;
                                                                    }
                                                                }
                                                  );
    matrioshkaBrain.showResourceDisabled    = showResourceDisabled;
    matrioshkaBrain.showResource            = showResource;

    simulation                          = new Resource("simulation", 0, 0, 1000000000, "imgs/simulation.jpg");    
    simulation.divAssets                = document.getElementById("idDivAssetsSimulation"),
    simulation.divResource              = document.getElementById("idDivResourceSimulation");
    simulation.btnResource              = document.getElementById("idBtnSimulation");
    simulation.divCost                  = document.getElementById("idPCostSimulation");
    simulation.divCost.innerText        = simulation.cost;   
    simulation.divQuantity              = document.getElementById("idDivQuantitySimulation");    
    simulation.btnResource.addEventListener('click', ()=> alert('reseting...'));
    simulation.showResourceDisabled     = showResourceDisabled;
    simulation.showResource             = showResource;
}

let entrepreneur, clickMadness, moneyRocket, singularity, readyForSimulation;
function Achievement(name, message, seen = false, numAssets=0){
    this.name       = name;
    this.message    = message;    
    this.isComplete;
    this.seen       = seen;
    this.numAssets  = numAssets;
    this.pUserAchivement= document.getElementById("pUserAchievement");
    this.divUserAchievement = document.getElementById("idDivUserAchievement");
}
function createAchievements(){
    entrepreneur        = new Achievement('Entrepreneur','Entrepreneur',false, 5);
    entrepreneur.isComplete = function (){
                                if(this.seen) return;
                                if(miner.owned >= this.numAssets){//>=5 miners
                                    this.seen = true;
                                    this.pUserAchivement.innerText = this.message;
                                    this.divUserAchievement.style.display = 'block';
                                }
                              }

    fromRagToRiches     = new Achievement('FromRagToRiches','From rags to riches',false, 1000);
    fromRagToRiches.isComplete = function (){
                                    if(this.seen) return;
                                    if(user.coins >= this.numAssets){//>=1000
                                        this.seen = true;
                                        this.pUserAchivement.innerText = this.message;
                                        this.divUserAchievement.style.display = 'block';
                                    }
                                }

    clickMadness        = new Achievement('ClickMadness','Click Madness',false, 100);
    clickMadness.isComplete = function (){
                                    if(this.seen) return;
                                    if(user.clicks >= this.numAssets){//total clicks>=100
                                        this.seen = true;
                                        this.pUserAchivement.innerText = this.message;
                                        this.divUserAchievement.style.display = 'block';
                                    }
                                }


    moneyRocket         = new Achievement('MoneyRocket','Money rocket',false, 10000);
    moneyRocket.isComplete = function (){
                                if(this.seen) return;
                                if(user.cps >= this.numAssets){//total coins per second >= 10000
                                    this.seen = true;
                                    this.pUserAchivement.innerText = this.message;
                                    this.divUserAchievement.style.display = 'block';
                                }
                            }

    singularity         = new Achievement('Singularity','Singularity',false, 1);
    singularity.isComplete = function (){
                                    if(this.seen) return;
                                    if(ai.owned >= 1){// AI owned >= 1
                                        this.seen = true;
                                        this.pUserAchivement.innerText = this.message;
                                        this.divUserAchievement.style.display = 'block';
                                    }
                                }

    readyForSimulation  = new Achievement('ReadyForSimulation','Ready for simulation',false, 1000000000);
    readyForSimulation.isComplete = function (){
                                        if(this.seen) return;
                                        if(user.coins >= simulation.cost){// max coins >= simulation cost
                                            this.seen = true;
                                            this.pUserAchivement.innerText = this.message;
                                            this.divUserAchievement.style.display = 'block';
                                        }
                                    }
}

function run() {
  createResources();
  createAchievements();
  //setAssets();
  let idInterval = setInterval(updateCounter, 10);
}

function updateCounter() {
    if(user.coins<1000){
        pTotalCoinsEarned.innerText = user.coins;
    }else{
        if(user.coins>=1000 && user.coins< 100000){
            pTotalCoinsEarned.innerText = user.coins;
            changeBackground('imgs/fallingcoins0.gif');
        }else if(user.coins>=100000 && user.coins< 1000000){
            pTotalCoinsEarned.innerText = user.coins;
            changeBackground('imgs/fallingcoins1.gif');
        }else if(user.coins>=1000000){
            pTotalCoinsEarned.innerText = user.coins;
            changeBackground('imgs/fallingcoins2.gif');
        }            
    }
}

run();