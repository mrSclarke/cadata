function newRoster() {
  var navAction = CardService.newAction().setFunctionName("navResponse");
  var otherAction = CardService.newAction().setFunctionName("insertImage");
  var icon = CardService.newIconImage();

  var classroomButton = CardService.newDecoratedText().setText("Use Google Classroom")
  .setStartIcon(icon.setIconUrl(images("lineIcon")))
  .setOnClickAction(navAction.setParameters(parameters().classroom));

  var formsButton = CardService.newDecoratedText().setText("Use a Google Form")
  .setStartIcon(icon.setIconUrl(images("graphIcon")))
  .setOnClickAction(otherAction);//navAction.setParameters(parameters().assessment));

  var navSection = CardService.newCardSection()
  .addWidget(classroomButton)
  .addWidget(formsButton);

  var info = CardService.newCardSection()
  .addWidget(CardService.newTextParagraph()
  .setText("Add student names and other information to your roster"));
  

  var card = baseCard().addSection(navSection).addSection(info);
  return card.build(); 
}
