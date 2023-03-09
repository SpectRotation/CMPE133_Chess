function pieceClicked(element){
  setBoard();
  element.parentElement.style.background="#FF0000";
  console.log(element.id+"_"+element.parentElement.id); //element.parentElement
}

function setBoard(){
  newPosition = "R7/PP4PP/8/8/R5R1/8/8/RPR5";
  newBoard = new Array(8);
  const position = newPosition.split("/");

  for (let column = 0; column < 8; column++){
    newBoard[column] = new Array(8);
    let line = position[column];
    for (let row = 0; row < 8;row++){

      for (let charRead = 0; charRead<line.length; charRead++) {
          let nextChar = line.slice(charRead, charRead+1);
          if (!(nextChar >= '0' && nextChar <= '9')) {
              newBoard[column][row] = nextChar;
              row++;
          }  else {
          for (var i = 0; i < nextChar; i++) {
            newBoard[column][row] = " ";
            row++;
          }
        }
      }
    }
  }
  console.log(newBoard);
}

//model doesn't work yet.
class Model {

  currentPosition = "";
  //for now or w/e the position is only the pieces without other details to keep it simple
  //if we'll want to change it - it will be on the later stages
  //rnbqkbnr/pppp1ppp/8/4p3/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq - 0 2 -> rnbqkbnr/pppp1ppp/8/4p3/4P3/3P4/PPP2PPP/RNBQKBNR


  gameID = 0;
  function getLegalMoves(pieceType, x, y){
      switch(pieceType):
        case "rook":

          break;

        case "pawn":

          break;
        }
  }

  function movePiece(oldX, oldY, newX, newY){

  }



  function readNextChar(string, currentCharNumber){
    return string.slice(currentCharNumber, currentCharNumber+1);
  }


}
