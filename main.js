let audioBuy    =   new Audio("sounds/buy.mp3");
let audioCoin   =   new Audio("sounds/coin.mp3");


let user={
    name                    : 'HopperCat',
    clicks                  : 0,
    cps                     : 0,
    coins                   : 0,
    updateCps               : updateCps,
    showPopUpEarnedPoints  : showPopUpEarnedPoints,
};

let body                = document.querySelector('body');
let btnCoin             = document.getElementById("idBtnCoin");
let pTotalCoinsEarned   = document.getElementById("idPTotalCoinsEarned");
let pCoinsCurrency      = document.getElementById("idPCoinsCurrency");
let pCPS                = document.getElementById("idPCPS");


function updateCps(){
    let tmp = 0;

    if (miner.owned                     > 0) tmp = tmp + miner.owned * miner.cps;
    if (computer.owned                  > 0) tmp = tmp + computer.owned * computer.cps;
    if (dataCenter.owned                > 0) tmp = tmp + dataCenter.owned * dataCenter.cps;
    if (superComputer.owned             > 0) tmp = tmp + superComputer.owned * superComputer.cps;
    if (quantumComputer.owned           > 0) tmp = tmp + quantumComputer.owned * quantumComputer.cps;   
    if (ai.owned                        > 0) tmp = tmp + ai.owned * ai.cps;
    if (matrioshkaBrain.owned           > 0) tmp = tmp + matrioshkaBrain.owned * matrioshkaBrain.cps;

    this.cps = tmp;
    pCPS.innerText = this.cps;
    
    return this.cps;
}

function showPopUpEarnedPoints(){  
    let divCoinsEarned = document.createElement('div');
    divCoinsEarned.className = "divCoinsEarned";
    body.appendChild(divCoinsEarned);

    divCoinsEarned.style.top  = event.clientY + 'px';
    divCoinsEarned.style.left = event.clientX + 'px';
    divCoinsEarned.innerText = " + " + Math.max(1, user.cps);

    divCoinsEarned.style.display = 'block';
    let trans = 'translate(' + event.clientX+20 + ',' + event.clientY + ')';//alert(trans);
    divCoinsEarned.style.transform = trans;
    divCoinsEarned.style.transition = 'transform 5s ease-in-out';
    let idTimeOutRemoveChild = setTimeout(()=>{body.removeChild(divCoinsEarned)},800);
    //set time out delete child
    //https://codepen.io/paulirish/pen/LsxyF
}

function changeBackground(imgSrc){
    let divCoins = document.getElementById("idDivCoins");
    divCoins.style.background = 'url(' + imgSrc + ')';
}

btnCoin.addEventListener("click", () => {   
                                            audioCoin.play();
                                            user.clicks++;

                                            showResources();

                                            user.updateCps();                                         
                                            user.coins = user.coins + Math.max(1, user.cps);//counting the clicks
                                            user.showPopUpEarnedPoints();
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
    this.addAssets = addAssets;

    // this.addAsset = function () {
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

function showResources(){
    if(user.coins >= miner.cost/2 && user.coins < miner.cost){
        miner.showResourceDisabled();
    }else if(user.coins >= miner.cost){
        miner.showResourceAble();
    }

    if(user.coins >= computer.cost/2 && user.coins < computer.cost) {
        computer.showResourceDisabled();
    }else if(user.coins >= computer.cost){
        computer.showResourceAble();
    }

    if(user.coins >= dataCenter.cost/2 && user.coins < dataCenter.cost){
        dataCenter.showResourceDisabled();
    }else if(user.coins >= dataCenter.cost){
        dataCenter.showResourceAble();
    }
    
    if(user.coins >= superComputer.cost/2 && user.coins < superComputer.cost){
        superComputer.showResourceDisabled();
    }else if(user.coins >= superComputer.cost){
        superComputer.showResourceAble();
    }
    
    if(user.coins >= quantumComputer.cost/2 && user.coins < quantumComputer.cost) {
        quantumComputer.showResourceDisabled();                                            
    }else if(user.coins >= quantumComputer.cost){
        quantumComputer.showResourceAble();
    }
    
    if(user.coins >= ai.cost/2 && user.coins < ai.cost){
        ai.showResourceDisabled();
    }else if(user.coins >= ai.cost){
        ai.showResourceAble();
    }
    
    if(user.coins >= matrioshkaBrain.cost/2 && user.coins < matrioshkaBrain.cost)  {
        matrioshkaBrain.showResourceDisabled();
    }else if(user.coins >= matrioshkaBrain.cost){
        matrioshkaBrain.showResourceAble();
    }
    
    if(user.coins >= simulation.cost/2 && user.coins < simulation.cost){
        simulation.showResourceDisabled();
    }else if(user.coins >= simulation.cost){
        simulation.showResourceAble();
    }
}

function showResourceDisabled(){
    this.divResource.style.visibility = 'visible';
    this.divResource.style.opacity = "0.5";
    this.divResource.style.pointerEvents = 'all';
}
function showResourceAble(){
    this.divResource.style.visibility = 'visible';
    this.divResource.style.opacity = "1";
}


function reset(){
    alert('reseting...');
}

function createResources(){
    miner                           = new Resource("miner", 0, 1, 50, "imgs/miner.jpeg");
    miner.divAssets                 = document.getElementById("idDivAssetsMiner"), 
    miner.divResource               = document.getElementById("idDivResourceMiner");    
    miner.btnResource               = document.getElementById("idBtnMiner");
    miner.divCost                   = document.getElementById("idPCostMiner");
    miner.divCost.innerText         = miner.cost;    
    miner.divQuantity               = document.getElementById("idDivQuantityMiner");
    miner.showResourceDisabled      = showResourceDisabled;
    miner.showResourceAble          = showResourceAble;
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
                                                        }else{
                                                            miner.showResourceDisabled();
                                                        }
                                                      }
                                         );
    

    computer                        = new Resource("computer", 0, 10, 500, "imgs/computer.png");    
    computer.divAssets              = document.getElementById("idDivAssetsComputer"),
    computer.divResource            = document.getElementById("idDivResourceComputer"); 
    computer.btnResource            = document.getElementById("idBtnComputer");
    computer.divCost                = document.getElementById("idPCostComputer");
    computer.divCost.innerText      = computer.cost;    
    computer.divQuantity            = document.getElementById("idDivQuantityComputer");
    computer.showResourceDisabled   = showResourceDisabled;
    computer.showResourceAble       = showResourceAble;
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
                                                            }else{
                                                                computer.showResourceDisabled();
                                                            }
                                                        }
                                            );
    

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
                                                                }else{
                                                                    dataCenter.showResourceDisabled();
                                                                }
                                                            }
                                            );
    dataCenter.showResourceDisabled     = showResourceDisabled;
    dataCenter.showResourceAble         = showResourceAble;

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
                                                                }else{
                                                                    superComputer.showResourceDisabled();
                                                                }
                                                            }
                                                );
    superComputer.showResourceDisabled  = showResourceDisabled;
    superComputer.showResourceAble      = showResourceAble;

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
                                                                    }else{
                                                                        quantumComputer.showResourceDisabled();
                                                                    }
                                                                }
                                                 );
    quantumComputer.showResourceDisabled    = showResourceDisabled;
    quantumComputer.showResourceAble        = showResourceAble;

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
                                                        }else{
                                                            ai.showResourceDisabled();
                                                        }
                                                    }
                                    );
    ai.showResourceDisabled      = showResourceDisabled;
    ai.showResourceAble          = showResourceAble;

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
                                                                    }else{
                                                                        matrioshkaBrain.showResourceDisabled();
                                                                    }
                                                                }
                                                  );
    matrioshkaBrain.showResourceDisabled    = showResourceDisabled;
    matrioshkaBrain.showResourceAble        = showResourceAble;

    simulation                          = new Resource("simulation", 0, 0, 1000000000, "imgs/simulation.jpg");    
    simulation.divAssets                = document.getElementById("idDivAssetsSimulation"),
    simulation.divResource              = document.getElementById("idDivResourceSimulation");
    simulation.btnResource              = document.getElementById("idBtnSimulation");
    simulation.divCost                  = document.getElementById("idPCostSimulation");
    simulation.divCost.innerText        = simulation.cost;   
    simulation.divQuantity              = document.getElementById("idDivQuantitySimulation");    
    simulation.btnResource.addEventListener('click', ()=> {clearAll();localStorage.clear();document.location.reload();});
    simulation.showResourceDisabled     = showResourceDisabled;
    simulation.showResourceAble         = showResourceAble;
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
                                    /* this.divUserAchievement.style.visibility = 'visible';the animation does not work with visibility: visible; because the animation was already executed */
                                    this.divUserAchievement.style.display = 'block';
                                    this.divUserAchievement.style.animation = 'slideIt 2s ease-in-out;';
                                }
                              }

    fromRagToRiches     = new Achievement('FromRagToRiches','From rags to riches',false, 1000);
    fromRagToRiches.isComplete = function (){
                                    if(this.seen) return;
                                    if(user.coins >= this.numAssets){//>=1000
                                        this.seen = true;
                                        this.pUserAchivement.innerText = this.message;
                                        /* this.divUserAchievement.style.visibility = 'visible';the animation does not work with visibility: visible; because the animation was already executed */
                                        this.divUserAchievement.style.display = 'block';
                                        this.divUserAchievement.style.animation = 'slideIt 2s ease-in-out;';
                                    }
                                }

    clickMadness        = new Achievement('ClickMadness','Click Madness',false, 100);
    clickMadness.isComplete = function (){
                                    if(this.seen) return;
                                    if(user.clicks >= this.numAssets){//total clicks>=100
                                        this.seen = true;
                                        this.pUserAchivement.innerText = this.message;
                                        /* this.divUserAchievement.style.visibility = 'visible';the animation does not work with visibility: visible; because the animation was already executed */
                                        this.divUserAchievement.style.display = 'block';
                                        this.divUserAchievement.style.animation = 'slideIt 2s ease-in-out;';
                                    }
                                }


    moneyRocket         = new Achievement('MoneyRocket','Money rocket',false, 10000);
    moneyRocket.isComplete = function (){
                                if(this.seen) return;
                                if(user.cps >= this.numAssets){//total coins per second >= 10000
                                    this.seen = true;
                                    this.pUserAchivement.innerText = this.message;
                                    /* this.divUserAchievement.style.visibility = 'visible';the animation does not work with visibility: visible; because the animation was already executed */
                                    this.divUserAchievement.style.display = 'block';
                                    this.divUserAchievement.style.animation = 'slideIt 2s ease-in-out;';
                                }
                            }

    singularity         = new Achievement('Singularity','Singularity',false, 1);
    singularity.isComplete = function (){
                                    if(this.seen) return;
                                    if(ai.owned >= 1){// AI owned >= 1
                                        this.seen = true;
                                        this.pUserAchivement.innerText = this.message;
                                        /* this.divUserAchievement.style.visibility = 'visible';the animation does not work with visibility: visible; because the animation was already executed */
                                        this.divUserAchievement.style.display = 'block';
                                        this.divUserAchievement.style.animation = 'slideIt 2s ease-in-out;';
                                    }
                                }

    readyForSimulation  = new Achievement('ReadyForSimulation','Ready for simulation',false, 1000000000);
    readyForSimulation.isComplete = function (){
                                        if(this.seen) return;
                                        if(user.coins >= simulation.cost){// max coins >= simulation cost
                                            this.seen = true;
                                            this.pUserAchivement.innerText = this.message;
                                            /* this.divUserAchievement.style.visibility = 'visible';the animation does not work with visibility: visible; because the animation was already executed */
                                            this.divUserAchievement.style.display = 'block';
                                            this.divUserAchievement.style.animation = 'slideIt 2s ease-in-out;';
                                        }
                                    }
}

function updateCounter() {
    
    if(user.coins<1000){
        pTotalCoinsEarned.innerText = user.coins;
    }else{
        if(user.coins>=1000 && user.coins< 100000){
            pTotalCoinsEarned.innerText = user.coins;
        }else if(user.coins>=100000 && user.coins< 1000000){
            pTotalCoinsEarned.innerText = user.coins;
        }else if(user.coins>=1000000 && user.coins<1000000000){//Over 1 million coins, coins should read 1.XX million
            let coins = user.coins/1000000;
            let coinsFormatted = toFixed_norounding(coins,2);//let coinsFormatted = Number.parseFloat(Math.floor(coins)).toFixed(2);            
            pTotalCoinsEarned.innerText = coinsFormatted + ' million';
        }else if(user.coins>=1000000000){//Over 1 billion coins, coins should read 1.XX billion
            let coins = user.coins/1000000000;
            let coinsFormatted = toFixed_norounding(coins,2);//let coinsFormatted = Number.parseFloat(coins).toFixed(2);
            pTotalCoinsEarned.innerText = coinsFormatted + ' billion';
        }               
    }

    if(user.cps>=1000 && user.cps< 100000){
        changeBackground('imgs/fallingcoins0.gif');
    }else if(user.cps>=100000 && user.cps< 1000000){
        changeBackground('imgs/fallingcoins1.gif');
    }else if(user.cps>=1000000){
        changeBackground('imgs/fallingcoins2.gif');
    }               

}

function toFixed_norounding(n,p)
{
    var result = n.toFixed(p);
    return result <= n ? result: (result - Math.pow(0.1,p)).toFixed(p);
}

function clearAll(){
    user.coins = 0;
    user.clicks = 0;
    user.cps = 0;

    miner.owned = 0;
    computer.owned = 0;
    dataCenter.owned= 0;
    superComputer.owned = 0;
    quantumComputer.owned= 0;
    ai.owned = 0;
    matrioshkaBrain.owned = 0;
    simulation.owned = 0;
}

function saveLastState(){
    localStorage.setItem('user.coins', user.coins);
    localStorage.setItem('user.clicks', user.clicks);
    localStorage.setItem('user.cps', user.cps);

    //resources
    localStorage.setItem('miner.owned', miner.owned);
    localStorage.setItem('computer.owned', computer.owned);
    localStorage.setItem('dataCenter.owned', dataCenter.owned);
    localStorage.setItem('superComputer.owned', superComputer.owned);
    localStorage.setItem('quantumComputer.owned', quantumComputer.owned);
    localStorage.setItem('ai.owned', ai.owned);
    localStorage.setItem('matrioshkaBrain.owned', matrioshkaBrain.owned);
    localStorage.setItem('simulation.owned', simulation.owned);
}
function getLastState(){
    if(localStorage.getItem('user.coins') != null){
        user.coins  = Number(localStorage.getItem('user.coins'));
        user.clicks = Number(localStorage.getItem('user.clicks'));
        user.cps    = Number(localStorage.getItem('user.cps'));

        miner.owned = Number(localStorage.getItem('miner.owned'));
        miner.addAssets();

        computer.owned          = Number(localStorage.getItem('computer.owned'));
        computer.addAssets();

        dataCenter.owned        = Number(localStorage.getItem('dataCenter.owned'));
        dataCenter.addAssets();

        superComputer.owned     = Number(localStorage.getItem('superComputer.owned'));
        superComputer.addAssets();

        quantumComputer.owned   = Number(localStorage.getItem('quantumComputer.owned'));
        quantumComputer.addAssets();

        ai.owned                = Number(localStorage.getItem('ai.owned'));
        ai.addAssets();

        matrioshkaBrain.owned   = Number(localStorage.getItem('matrioshkaBrain.owned'));
        matrioshkaBrain.addAssets();

        simulation.owned        = Number(localStorage.getItem('simulation.owned'));
    }
}

function addAssets(){
    let max = Math.min(this.owned,20)//let max = (this.owned<20) ? this.owned:20;
        for(let i=0; i<max; i++){
            let imgAsset = document.createElement("img");
            imgAsset.src = this.img;
            imgAsset.style.width = "50px";
            imgAsset.style.height = "80px";
            imgAsset.style.top = "0px";                                                                
            this.divAssets.appendChild(imgAsset);
        }
        this.divQuantity.innerText = this.owned;
}

function getRandom(min,max){
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

function generateBonusCoins(){
    // Every 40s, starts a timeout to create a bonus coin. A bonus coin is created after a random timeout between 0 and 60s.
    // A bonus coin can appear anywhere on the screen, lasts for 10s before disappearing.
    // If the user clicks the coin before the timeout is over, user receives between 2 to 10 times (random range) the total coins per second.
    // Example: 2 miners -> 2cps -> bonus can give 2*2 = 4 up to 2*10 = 20 coins

    let idTimeOutBonusCoin = setTimeout(showBonusCoin,getRandom(0,60) * 1000);

    function showBonusCoin(){
        let imgBonusCoin = document.querySelector(".imgBonusCoin");
        imgBonusCoin.src = "imgs/coin.png";
        imgBonusCoin.style.position = "absolute"; 
        imgBonusCoin.style.top = "200px";//getRandom(0, window.innerHeight) + "px";
        imgBonusCoin.style.left = "300px";//getRandom(0, window.innerWidth) + "px";  
        imgBonusCoin.style.display = 'block';             
        imgBonusCoin.addEventListener('click', ()=>{
                                                        let numTimes = getRandom(2,10);

                                                        let tmp = 0;
                                                        if (miner.owned                     > 0) tmp = tmp + miner.owned * miner.cps;
                                                        if (computer.owned                  > 0) tmp = tmp + computer.owned * computer.cps;
                                                        if (dataCenter.owned                > 0) tmp = tmp + dataCenter.owned * dataCenter.cps;
                                                        if (superComputer.owned             > 0) tmp = tmp + superComputer.owned * superComputer.cps;
                                                        if (quantumComputer.owned           > 0) tmp = tmp + quantumComputer.owned * quantumComputer.cps;   
                                                        if (ai.owned                        > 0) tmp = tmp + ai.owned * ai.cps;
                                                        if (matrioshkaBrain.owned           > 0) tmp = tmp + matrioshkaBrain.owned * matrioshkaBrain.cps;

                                                        if(tmp >= 1) {//means he/she has assets --> generate assets automaticaly
                                                            let bonusCoinsEarned = numTimes * tmp;
                                                            user.coins= user.coins + bonusCoinsEarned;

                                                            let divCoinsEarned2 = document.createElement('div');
                                                            divCoinsEarned2.className = "divCoinsEarned";
                                                            body.appendChild(divCoinsEarned2);
                                                        
                                                            divCoinsEarned2.style.top  = event.clientY + 'px';
                                                            divCoinsEarned2.style.left = event.clientX + 'px';
                                                            divCoinsEarned2.innerHTML = " + " + bonusCoinsEarned;
                                                            divCoinsEarned2.style.display = 'block';
                                                            let trans = 'translate(' + event.clientX+20 + ',' + event.clientY + ')';
                                                            divCoinsEarned2.style.transform = trans;
                                                            divCoinsEarned2.style.transition = 'transform 3s ease-in-out';
                                                            let idTimeOutRemoveChild = setTimeout(()=>{body.removeChild(divCoinsEarned2)},500);
                                                            //set time out delete child
                                                            //https://codepen.io/paulirish/pen/LsxyF
                                                            
                                                        }                                                        
                                                        imgBonusCoin.style.display = 'none';
                                                    }
                                     );
    }
}

let date = Date.now();

function run() {
  createResources();
  createAchievements();
  

  getLastState();

  showResources();
  let idIntervalIncrementalGain = setInterval( () =>{user.updateCps(); user.coins = user.coins + user.cps}, 1000);
  let idIntervalUpdateCounter   = setInterval(updateCounter, 10);//Coins counter updates automatically (every 10ms)
  let idIntervalSave            = setInterval(saveLastState, 10000);//Save the game state every 10 seconds. Cleared when simulation is bought.
  let idIntervalBonus           = setInterval(generateBonusCoins,40000);//Every 40s, starts a timeout to create a bonus coin
}

run();