class YBCard {

    constructor(id, title, description, image) {
      this.idCard = id
      this.titre = title
      this.description = description
      this.image = image
    }
  
    initCard() {
      this.updateDom();
      this.activateListeners();
    }
  
    updateDom() {
      var cardDom = document.getElementById(this.idCard)
      if(cardDom.hasChildNodes()){
        var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
        cardDomImage.src = this.image;
  
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        cardDomTitle.innerHTML = this.titre;
  
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        cardDomDesc.innerHTML = this.description;
      }
    }
  
    activateListeners() {
      var cardDom = document.getElementById(this.idCard)
      cardDom.addEventListener("mouseover", function( event ) {
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
        cardDomMiddle.style.height = cardMiddleHeight + 15 + "px";
      }, false);
  
      cardDom.addEventListener("mouseout", function( event ) {
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        cardDomMiddle.style.height = 50 + "px";
      }, false);
    }
  }
  
 
  
  var card1 = new YBCard("card1", "", "<h3>Portifolio name</h3><br><div class='text-center'><i class='fa fa-search text-white rounded-circle bg-success m-1 p-2 fa-2x'></i><i class='fa fa-file text-white rounded-circle bg-success m-1 p-2 fa-2x'></i></div><br><br>");
  card1.initCard();
  var card2 = new YBCard("card2", "", "<h3>Portifolio name</h3><br><div class='text-center'><i class='fa fa-search text-white rounded-circle bg-success m-1 p-2 fa-2x'></i><i class='fa fa-file text-white rounded-circle bg-success m-1 p-2 fa-2x'></i></div><br><br>");
  card2.initCard();
  var card3 = new YBCard("card3", "", "<h3>Portifolio name</h3><br><div class='text-center'><i class='fa fa-search text-white rounded-circle bg-success m-1 p-2 fa-2x'></i><i class='fa fa-file text-white rounded-circle bg-success m-1 p-2 fa-2x'></i></div><br><br>");
  card3.initCard();
  var card4 = new YBCard("card4", "", "<h3>Portifolio name</h3><br><div class='text-center'><i class='fa fa-search text-white rounded-circle bg-success m-1 p-2 fa-2x'></i><i class='fa fa-file text-white rounded-circle bg-success m-1 p-2 fa-2x'></i></div><br><br>");
  card4.initCard();
  

  